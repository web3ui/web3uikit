const { loadFileStructureFromOptions } = require('./lib/helpers');
const { validate, retrieveFileOptions } = require('./lib/options');
const SvelteVersionDetector = require('./lib/detector');
const { SVELTE_VERSION_2, SVELTE_VERSION_3 } = require('./lib/detector');

/**
 * @typedef {import("./typings").SvelteParserOptions} SvelteParserOptions
 */

function buildSvelte2Parser(options) {
    const Parser = require('./lib/parser');

    // Convert structure object to old version source options
    const { scripts, styles, template } = options.structure;

    const hasScript = !!scripts && scripts.length > 0;
    const hasStyle = !!styles && styles.length > 0;

    options.source = {
        template: template,
        script: hasScript ? scripts[0].content : '',
        scriptOffset: hasScript ? scripts[0].offset : 0,
        style: hasStyle ? styles[0].content : '',
        styleOffset: hasStyle ? styles[0].offset : 0,
    };

    return new Parser(options);
}

function buildSvelte3Parser(options) {
    const Parser = require('./lib/v3/parser');

    return new Parser(options);
}

function buildSvelteParser(options, version) {
    if (version === SvelteVersionDetector.SVELTE_VERSION_3) {
        return buildSvelte3Parser(options);
    }

    if (version === SvelteVersionDetector.SVELTE_VERSION_2) {
        return buildSvelte2Parser(options);
    }

    if (version) {
        throw new Error(`Svelte V${version} is not supported`);
    }

    throw new Error('Undefined Svelte version is not supported, you should specify default version in options');
}

function getEventName(feature) {
    return feature.endsWith('s')
        ? feature.substring(0, feature.length - 1)
        : feature;
}

function convertVisibilityToLevel(visibility) {
    switch (visibility) {
        case 'public':
            return 3;
        case 'protected':
            return 2;
        case 'private':
            return 1;
    }

    return 0;
}

function mergeItems(itemType, currentItem, newItem, ignoreLocations) {
    if (convertVisibilityToLevel(currentItem.visibility) < convertVisibilityToLevel(newItem.visibility)) {
        currentItem.visibility = newItem.visibility;
    }

    if (!currentItem.description && newItem.description) {
        currentItem.description = newItem.description;
    }

    if (!currentItem.defaultValue && typeof newItem.defaultValue !== 'undefined') {
        currentItem.defaultValue = newItem.defaultValue;
    }

    if (!currentItem.type || currentItem.type.type === 'any') {
        if (newItem.type && newItem.type.type !== 'any') {
            currentItem.type = newItem.type;
        }
    }

    if ((!currentItem.keywords || currentItem.keywords.length === 0) && newItem.keywords) {
        currentItem.keywords = newItem.keywords;
    }

    if (!ignoreLocations) {
        if (newItem.locations && newItem.locations.length > 0) {
            if (currentItem.locations) {
                currentItem.locations.push(...newItem.locations);
            } else {
                currentItem.locations = [...newItem.locations];
            }
        }
    }

    if (itemType === 'data') {
        if (newItem.bind && newItem.bind.length > 0) {
            if (currentItem.bind) {
                currentItem.bind.push(...newItem.bind);
            } else {
                currentItem.bind = [...newItem.bind];
            }
        }
    }

    return currentItem;
}

function subscribeOnParserEvents(parser, ignoredVisibilities, version, resolve, reject) {
    const component = {
        version: version
    };

    parser.features.forEach((feature) => {
        switch (feature) {
            case 'name':
            case 'description':
                component[feature] = null;
                parser.on(feature, (value) => (component[feature] = value));
                break;

            case 'keywords':
                component[feature] = [];
                parser.on(feature, (value) => (component[feature] = value));
                break;

            default: {
                component[feature] = [];

                const eventName = getEventName(feature);

                parser.on(eventName, (value) => {
                    const itemIndex = component[feature].findIndex(item => item.name === value.name);

                    if (value.localName) {
                        const localItem = component[feature].find(item => item.name === value.localName);

                        if (localItem) {
                            value = mergeItems(feature, value, localItem, true);
                        }
                    }

                    if (itemIndex < 0) {
                        component[feature].push(value);
                    } else {
                        const currentItem = component[feature][itemIndex];

                        component[feature][itemIndex] = mergeItems(feature, currentItem, value);
                    }
                });
            }
        }
    });

    parser.on('end', () => {
        parser.features.forEach((feature) => {
            if (component[feature] instanceof Array) {
                component[feature] = component[feature].filter((item) => {
                    return !ignoredVisibilities.includes(item.visibility);
                });
            }
        });

        resolve(component);
    });

    parser.on('failure', (error) => {
        reject(error);
    });
}

/**
 * Main parse function.
 * @param {SvelteParserOptions} options
 * @return {Promise<import('./typings').SvelteComponentDoc>}
 * @example
 * const { parse } = require('sveltedoc-parser');
 * // basic usage only requires 'filename' to be set.
 * const doc = await parse({
 *     filename: 'main.svelte',
 *     encoding: 'ascii',
 *     features: ['data', 'computed', 'methods'],
 *     ignoredVisibilities: ['private'],
 *     includeSourceLocations: true,
 *     version: 3
 * });
 */
module.exports.parse = (options) => new Promise((resolve, reject) => {
    try {
        validate(options);

        const fileOptions = retrieveFileOptions(options);

        options.structure = loadFileStructureFromOptions(fileOptions);

        const version = options.version || SvelteVersionDetector.detectVersionFromStructure(options.structure, options.defaultVersion);

        const parser = buildSvelteParser(options, version);

        subscribeOnParserEvents(parser, options.ignoredVisibilities, version, resolve, reject);

        parser.walk();
    } catch (error) {
        reject(error);
    }
});

/**
 * @param {SvelteParserOptions} options
 */
module.exports.detectVersion = (options) => {
    validate(options);

    return SvelteVersionDetector.detectVersionFromOptions(options);
};

module.exports.SVELTE_VERSION_2 = SVELTE_VERSION_2;
module.exports.SVELTE_VERSION_3 = SVELTE_VERSION_3;
