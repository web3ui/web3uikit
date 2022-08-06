"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateModernIframeScriptCode = void 0;
const core_common_1 = require("@storybook/core-common");
const virtual_file_names_1 = require("./virtual-file-names");
const transform_abs_path_1 = require("./utils/transform-abs-path");
async function generateModernIframeScriptCode(options) {
    const { presets, configDir, framework } = options;
    const previewOrConfigFile = (0, core_common_1.loadPreviewOrConfigFile)({ configDir });
    const presetEntries = await presets.apply('config', [], options);
    const configEntries = [...presetEntries, previewOrConfigFile]
        .filter(Boolean)
        .map((configEntry) => (0, transform_abs_path_1.transformAbsPath)(configEntry));
    const generateHMRHandler = (framework) => {
        // Web components are not compatible with HMR, so disable HMR, reload page instead.
        if (framework === 'web-components') {
            return `
      if (import.meta.hot) {
        import.meta.hot.decline();
      }`.trim();
        }
        return `
    if (import.meta.hot) {
      import.meta.hot.accept('${virtual_file_names_1.virtualStoriesFile}', (newModule) => {
      // importFn has changed so we need to patch the new one in
      preview.onStoriesChanged({ importFn: newModule.importFn });
      });

    import.meta.hot.accept(${JSON.stringify(configEntries)}, ([...newConfigEntries]) => {
      const newGetProjectAnnotations =  () => composeConfigs(newConfigEntries);

      // getProjectAnnotations has changed so we need to patch the new one in
      preview.onGetProjectAnnotationsChanged({ getProjectAnnotations: newGetProjectAnnotations });
    });
  }`.trim();
    };
    /**
     * This code is largely taken from https://github.com/storybookjs/storybook/blob/d1195cbd0c61687f1720fefdb772e2f490a46584/lib/builder-webpack4/src/preview/virtualModuleModernEntry.js.handlebars
     * Some small tweaks were made to `getProjectAnnotations` (since `import()` needs to be resolved asynchronously)
     * and the HMR implementation has been tweaked to work with Vite.
     * @todo Inline variable and remove `noinspection`
     */
    const code = `
    import { composeConfigs, PreviewWeb } from '@storybook/preview-web';
    import { ClientApi } from '@storybook/client-api';
    import '${virtual_file_names_1.virtualAddonSetupFile}';
    import { importFn } from '${virtual_file_names_1.virtualStoriesFile}';

    const getProjectAnnotations = async () =>
      composeConfigs(await Promise.all([${configEntries
        .map((configEntry) => `import('${configEntry}')`)
        .join(',\n')}]));

    const preview = new PreviewWeb();

    window.__STORYBOOK_PREVIEW__ = preview;
    window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
    window.__STORYBOOK_CLIENT_API__ = new ClientApi({ storyStore: preview.storyStore });

    preview.initialize({ importFn, getProjectAnnotations });
    
    ${generateHMRHandler(framework)};
    `.trim();
    return code;
}
exports.generateModernIframeScriptCode = generateModernIframeScriptCode;
//# sourceMappingURL=codegen-modern-iframe-script.js.map