import * as fs from 'fs';
import * as path from 'path';
import { transformIframeHtml } from './transform-iframe-html';
import { generateIframeScriptCode } from './codegen-iframe-script';
import { generateModernIframeScriptCode } from './codegen-modern-iframe-script';
import { generateImportFnScriptCode } from './codegen-importfn-script';
import { generateVirtualStoryEntryCode, generatePreviewEntryCode } from './codegen-entries';
import { generateAddonSetupCode } from './codegen-set-addon-channel';

import type { Plugin } from 'vite';
import type { ExtendedOptions } from './types';

import { virtualAddonSetupFile, virtualFileId, virtualPreviewFile, virtualStoriesFile } from './virtual-file-names';

export function codeGeneratorPlugin(options: ExtendedOptions): Plugin {
  const iframePath = path.resolve(__dirname, '..', 'input', 'iframe.html');
  let iframeId: string;
  let projRoot: string;

  // noinspection JSUnusedGlobalSymbols
  return {
    name: 'storybook-vite-code-generator-plugin',
    enforce: 'pre',
    configureServer(server) {
      // invalidate the whole vite-app.js script on every file change.
      // (this might be a little too aggressive?)
      server.watcher.on('change', () => {
        const appModule = server.moduleGraph.getModuleById(virtualFileId);
        if (appModule) {
          server.moduleGraph.invalidateModule(appModule);
        }
        const storiesModule = server.moduleGraph.getModuleById(virtualStoriesFile);
        if (storiesModule) {
          server.moduleGraph.invalidateModule(storiesModule);
        }
      });

      // Adding new story files is not covered by the change event above. So we need to detect this and trigger
      // HMR to update the importFn.
      server.watcher.on('add', (path) => {
        // TODO maybe use the stories declaration in main
        if (/\.stories\.([tj])sx?$/.test(path) || /\.(story|stories).mdx$/.test(path)) {
          // We need to emit a change event to trigger HMR
          server.watcher.emit('change', virtualStoriesFile);
        }
      });
    },
    config(config, { command }) {
      // If we are building the static distribution, add iframe.html as an entry.
      // In development mode, it's not an entry - instead, we use an express middleware
      // to serve iframe.html. The reason is that Vite's dev server (at the time of writing)
      // does not support virtual files as entry points.
      if (command === 'build') {
        if (!config.build) {
          config.build = {};
        }
        config.build.rollupOptions = {
          ...config.build.rollupOptions,
          input: iframePath,
        };
      }
    },
    configResolved(config) {
      projRoot = config.root;
      iframeId = `${config.root}/iframe.html`;
    },
    resolveId(source) {
      if (source === virtualFileId) {
        return virtualFileId;
      } else if (source === iframePath) {
        return iframeId;
      } else if (source === virtualStoriesFile) {
        return virtualStoriesFile;
      } else if (source === virtualPreviewFile) {
        return virtualPreviewFile;
      } else if (source === virtualAddonSetupFile) {
        return virtualAddonSetupFile;
        // Avoid error in react < 18 projects
      } else if (source === 'react-dom/client') {
        try {
          return require.resolve('react-dom/client', { paths: [projRoot] });
        } catch (e) {
          // This is not a react 18 project, need to stub out to avoid error
          return path.resolve(__dirname, '..', 'input', 'react-dom-client-placeholder.js');
        }
      }
    },
    async load(id) {
      const storyStoreV7 = options.features?.storyStoreV7;
      if (id === virtualStoriesFile) {
        if (storyStoreV7) {
          return generateImportFnScriptCode(options);
        } else {
          return generateVirtualStoryEntryCode(options);
        }
      }

      if (id === virtualAddonSetupFile) {
        return generateAddonSetupCode();
      }

      if (id === virtualPreviewFile && !storyStoreV7) {
        return generatePreviewEntryCode(options);
      }

      if (id === virtualFileId) {
        if (storyStoreV7) {
          return generateModernIframeScriptCode(options);
        } else {
          return generateIframeScriptCode(options);
        }
      }

      if (id === iframeId) {
        return fs.readFileSync(path.resolve(__dirname, '..', 'input', 'iframe.html'), 'utf-8');
      }
    },
    async transformIndexHtml(html, ctx) {
      if (ctx.path !== '/iframe.html') {
        return;
      }
      return transformIframeHtml(html, options);
    },
  };
}
