"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformIframeHtml = void 0;
const core_common_1 = require("@storybook/core-common");
async function transformIframeHtml(html, options) {
    const { configType, features, framework, presets, serverChannelUrl, title } = options;
    const headHtmlSnippet = await presets.apply('previewHead');
    const bodyHtmlSnippet = await presets.apply('previewBody');
    const logLevel = await presets.apply('logLevel', undefined);
    const frameworkOptions = await presets.apply(`${framework}Options`, {});
    const coreOptions = await presets.apply('core');
    const stories = (0, core_common_1.normalizeStories)(await options.presets.apply('stories', [], options), {
        configDir: options.configDir,
        workingDir: process.cwd(),
    }).map((specifier) => ({
        ...specifier,
        importPathMatcher: specifier.importPathMatcher.source,
    }));
    return html
        .replace('<!-- [TITLE HERE] -->', title || 'Storybook')
        .replace('[CONFIG_TYPE HERE]', configType || '')
        .replace('[LOGLEVEL HERE]', logLevel || '')
        .replace(`'[FRAMEWORK_OPTIONS HERE]'`, JSON.stringify(frameworkOptions || {}))
        .replace(`'[CHANNEL_OPTIONS HERE]'`, JSON.stringify(coreOptions && coreOptions.channelOptions ? coreOptions.channelOptions : {}))
        .replace(`'[FEATURES HERE]'`, JSON.stringify(features || {}))
        .replace(`'[STORIES HERE]'`, JSON.stringify(stories || {}))
        .replace(`'[SERVER_CHANNEL_URL HERE]'`, JSON.stringify(serverChannelUrl))
        .replace('<!-- [HEAD HTML SNIPPET HERE] -->', headHtmlSnippet || '')
        .replace('<!-- [BODY HTML SNIPPET HERE] -->', bodyHtmlSnippet || '');
}
exports.transformIframeHtml = transformIframeHtml;
//# sourceMappingURL=transform-iframe-html.js.map