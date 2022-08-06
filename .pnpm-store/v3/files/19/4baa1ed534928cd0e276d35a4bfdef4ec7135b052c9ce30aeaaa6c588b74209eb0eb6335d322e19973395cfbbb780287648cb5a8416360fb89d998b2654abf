const { isString, stringifyArray, isVisibilitySupported, VISIBILITIES } = require('./utils');

/**
 * @typedef {import("../typings").SvelteParserOptions} SvelteParserOptions
 * @typedef {import("../typings").JSVisibilityScope} JSVisibilityScope
 */

/** @type {BufferEncoding[]} */
const ENCODINGS = [
    'ascii',
    'utf8',
    'utf-8',
    'utf16le',
    'ucs2',
    'ucs-2',
    'base64',
    'latin1',
    'binary',
    'hex'
];

const ERROR_ENCODING_FORMAT = 'Expected options.encoding to be a string. ';
const ERROR_VISIBILITIES_FORMAT = 'Expected options.ignoredVisibilities to be an array of strings. ';
const INFO_ENCODING_SUPPORTED = `Supported encodings: ${stringifyArray(ENCODINGS)}.`;
const INFO_VISIBILITIES_SUPPORTED = `Supported visibilities: ${stringifyArray(VISIBILITIES)}.`;

function getUnsupportedEncodingString(enc) {
    return `encoding ${stringifyArray([enc])} not supported. ` +
        INFO_ENCODING_SUPPORTED;
}

function getUnsupportedVisibilitiesString(arr) {
    return `Visibilities [${stringifyArray(arr)}] in ` +
        'options.ignoredVisibilities are not supported. ' +
        INFO_VISIBILITIES_SUPPORTED;
}

const OptionsError = Object.freeze({
    OptionsRequired: 'An options object is required.',
    InputRequired: 'One of options.filename or options.fileContent is required.',
    EncodingMissing: 'Internal Error: options.encoding is not set.',
    EncodingFormat: ERROR_ENCODING_FORMAT + INFO_ENCODING_SUPPORTED,
    EncodingNotSupported: (enc) => getUnsupportedEncodingString(enc),
    IgnoredVisibilitiesMissing: 'Internal Error: options.ignoredVisibilities is not set.',
    IgnoredVisibilitiesFormat: ERROR_VISIBILITIES_FORMAT + INFO_VISIBILITIES_SUPPORTED,
    IgnoredVisibilitiesNotSupported: (arr) => getUnsupportedVisibilitiesString(arr),
    IncludeSourceLocationsMissing: 'Internal Error: options.includeSourceLocationsMissing is not set.',
    IncludeSourceLocationsFormat: 'Expected options.includeSourceLocations to be a boolean.',
});

/** @type {BufferEncoding} */
const DEFAULT_ENCODING = 'utf8';

/** @type {JSVisibilityScope[]} */
const DEFAULT_IGNORED_VISIBILITIES = ['protected', 'private'];

/** @returns {SvelteParserOptions} */
function getDefaultOptions() {
    return {
        encoding: DEFAULT_ENCODING,
        ignoredVisibilities: [...DEFAULT_IGNORED_VISIBILITIES],
        includeSourceLocations: false,
    };
}

function retrieveFileOptions(options) {
    return {
        structure: options.structure,
        fileContent: options.fileContent,
        filename: options.filename,
        encoding: options.encoding,
    };
}

/**
 * Applies default values to options.
 * @param {SvelteParserOptions} options object to normalize (mutated)
 * @param {SvelteParserOptions} defaults default values to normalize 'options'
 */
function normalize(options, defaults) {
    Object.keys(defaults).forEach((optionKey) => {
        /**
         * If the key was not set by the user, apply default value.
         * This is better than checking for falsy values because it catches
         * use cases were a user tried to do something not intended with
         * an option (e.g. putting a value of 'false' or an empty string)
         */
        if (!(optionKey in options)) {
            options[optionKey] = defaults[optionKey];
        }
    });
}

/**
 * @param {SvelteParserOptions} options
 * @throws an error if any options are invalid
 */
function validate(options) {
    if (!options) {
        throw new Error(OptionsError.OptionsRequired);
    }

    normalize(options, getDefaultOptions());

    const hasFilename =
        ('filename' in options) &&
        isString(options.filename) &&
        options.filename.length > 0;

    // Don't check length for fileContent because it could be an empty file.
    const hasFileContent =
        ('fileContent' in options) &&
        isString(options.fileContent);

    if (!hasFilename && !hasFileContent) {
        throw new Error(OptionsError.InputRequired);
    }

    if ('encoding' in options) {
        if (!isString(options.encoding)) {
            throw new Error(OptionsError.EncodingFormat);
        }

        if (!ENCODINGS.includes(options.encoding)) {
            throw new Error(OptionsError.EncodingNotSupported(options.encoding));
        }
    } else {
        // Sanity check. At this point, 'encoding' must be set.
        throw new Error(OptionsError.EncodingMissing);
    }

    if ('ignoredVisibilities' in options) {
        if (!Array.isArray(options.ignoredVisibilities)) {
            throw new Error(OptionsError.IgnoredVisibilitiesFormat);
        }

        if (!options.ignoredVisibilities.every(isVisibilitySupported)) {
            const notSupported = options.ignoredVisibilities.filter(
                (iv) => !isVisibilitySupported(iv)
            );

            throw new Error(OptionsError.IgnoredVisibilitiesNotSupported(notSupported));
        }
    } else {
        // Sanity check. At this point, 'ignoredVisibilities' must be set.
        throw new Error(OptionsError.IgnoredVisibilitiesMissing);
    }

    if ('includeSourceLocations' in options) {
        if (typeof options.includeSourceLocations !== 'boolean') {
            throw new TypeError(OptionsError.IncludeSourceLocationsFormat);
        }
    } else {
        // Sanity check. At this point, 'includeSourceLocations' must be set.
        throw new Error(OptionsError.IncludeSourceLocationsMissing);
    }
}

const getSupportedFeaturesString = (supported) => `Supported features: ${stringifyArray(supported)}`;

const getFeaturesEmptyString = (supported) => {
    return 'options.features must contain at least one feature. ' +
        getSupportedFeaturesString(supported);
};

/**
 * @param {string[]} notSupported
 * @param {string[]} supported
 */
const getFeaturesNotSupportedString = (notSupported, supported) => {
    return `Features [${stringifyArray(notSupported)}] in ` +
        'options.features are not supported by this Parser. ' +
        getSupportedFeaturesString(supported);
};

const ParserError = {
    FeaturesMissing: 'Internal Error: options.features is not set.',
    FeaturesFormat: 'options.features must be an array',
    FeaturesEmpty: getFeaturesEmptyString,
    FeaturesNotSupported: getFeaturesNotSupportedString,
};

/**
 *
 * @param {SvelteParserOptions} options
 * @param {string[]} supported
 * @throws if any validation fails for options.features
 */
function validateFeatures(options, supported) {
    if ('features' in options) {
        if (!Array.isArray(options.features)) {
            throw new TypeError(ParserError.FeaturesFormat);
        }

        if (options.features.length === 0) {
            throw new Error(ParserError.FeaturesEmpty(supported));
        }

        const notSupported = options.features.filter((iv) => !supported.includes(iv));

        if (notSupported.length > 0) {
            throw new Error(ParserError.FeaturesNotSupported(notSupported, supported));
        }
    } else {
        throw new Error(ParserError.FeaturesMissing);
    }
}

/**
 * @link https://github.com/eslint/espree#options
 */
function getAstDefaultOptions() {
    return {
        /** attach range information to each node */
        range: true,

        /** attach line/column location information to each node */
        loc: true,

        /** create a top-level comments array containing all comments */
        comment: true,

        /** create a top-level tokens array containing all tokens */
        tokens: true,

        /**
         * Set to 3, 5 (default), 6, 7, 8, 9, 10, 11, or 12 to specify
         * the version of ECMAScript syntax you want to use.
         *
         * You can also set to 2015 (same as 6), 2016 (same as 7),
         * 2017 (same as 8), 2018 (same as 9), 2019 (same as 10),
         * 2020 (same as 11), or 2021 (same as 12) to use the year-based naming.
         */
        ecmaVersion: 9,

        /** specify which type of script you're parsing ("script" or "module") */
        sourceType: 'module',

        /** specify additional language features */
        ecmaFeatures: {}
    };
}

module.exports = {
    OptionsError,
    ParserError,
    normalize,
    validate,
    validateFeatures,
    retrieveFileOptions,
    getAstDefaultOptions,
};
