const { loadFileStructureFromOptions: loadFileContentFromOptions } = require('./helpers');

const SVELTE_VERSION_2 = 2;
const SVELTE_VERSION_3 = 3;

function isElseIfWithoutSpaceInTemplate(template) {
    return /\{:elseif\s/gi.test(template);
}

function isElseIfWithSpaceInTemplate(template) {
    return /\{:else\s+if\s/gi.test(template);
}

function isRefsIsUsedInTemplate(template) {
    return /\sref:[^\s]+\s/gi.test(template);
}

function isLetUsedForSlotInTemplate(template) {
    return /\slet:[^=]+=/gi.test(template);
}

function isContextUsedForScriptBlock(scriptBlock) {
    return /\scontext=/gi.test(scriptBlock.attributes);
}

function isExportDefaultUsedInBlock(scriptBlock) {
    return /\bexport\s+default\s+\{/gi.test(scriptBlock.content);
}

function detectVersionFromOptions(options) {
    const structure = loadFileContentFromOptions(options);

    return detectVersionFromStructure(structure, options.defaultVersion);
}

function detectVersionFromStructure(structure, defaultVersion) {
    if (structure.template) {
        // The `ref:` attribute is valid for Svelte 2 only
        if (isRefsIsUsedInTemplate(structure.template)) {
            return SVELTE_VERSION_2;
        }

        // The `{:elseif ...}` statement is possible only in Svelte 2
        if (isElseIfWithoutSpaceInTemplate(structure.template)) {
            return SVELTE_VERSION_2;
        }

        // The `{:else if ...}` statement is valid for Svelte 3
        if (isElseIfWithSpaceInTemplate(structure.template)) {
            return SVELTE_VERSION_3;
        }

        // The `let:item=...` syntax is valid for Svelte 3
        if (isLetUsedForSlotInTemplate(structure.template)) {
            return SVELTE_VERSION_3;
        }
    }

    if (structure.scripts) {
        // In Svelte 3 is possible to use more than one script blocks
        if (structure.scripts.length > 1) {
            return SVELTE_VERSION_3;
        }

        // In Svelte 3 is possible to define context attribute for script blocks
        if (structure.scripts.some(scriptBlock => isContextUsedForScriptBlock(scriptBlock))) {
            return SVELTE_VERSION_3;
        }

        // Export default statement can be used only in Svelte 2
        if (structure.scripts.some(scriptBlock => isExportDefaultUsedInBlock(scriptBlock))) {
            return SVELTE_VERSION_2;
        }
    }

    // Return the default version if provided
    if (defaultVersion) {
        return defaultVersion;
    }

    // If can't recognize version, return undefined
    return undefined;
}

module.exports = {
    SVELTE_VERSION_2,
    SVELTE_VERSION_3,
    detectVersionFromOptions,
    detectVersionFromStructure
};
