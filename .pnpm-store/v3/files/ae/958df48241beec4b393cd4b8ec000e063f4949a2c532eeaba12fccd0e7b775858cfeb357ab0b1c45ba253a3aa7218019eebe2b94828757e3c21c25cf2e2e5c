import { loadPreviewOrConfigFile } from '@storybook/core-common';
import { virtualStoriesFile, virtualAddonSetupFile } from './virtual-file-names';
import { transformAbsPath } from './utils/transform-abs-path';
import type { ExtendedOptions } from './types';

export async function generateModernIframeScriptCode(options: ExtendedOptions) {
  const { presets, configDir, framework } = options;

  const previewOrConfigFile = loadPreviewOrConfigFile({ configDir });
  const presetEntries = await presets.apply('config', [], options);
  const configEntries = [...presetEntries, previewOrConfigFile]
    .filter(Boolean)
    .map((configEntry) => transformAbsPath(configEntry));

  const generateHMRHandler = (framework: string): string => {
    // Web components are not compatible with HMR, so disable HMR, reload page instead.
    if (framework === 'web-components') {
      return `
      if (import.meta.hot) {
        import.meta.hot.decline();
      }`.trim();
    }

    return `
    if (import.meta.hot) {
      import.meta.hot.accept('${virtualStoriesFile}', (newModule) => {
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
    import '${virtualAddonSetupFile}';
    import { importFn } from '${virtualStoriesFile}';

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
