import type { Plugin } from 'vite';
import sourceLoaderTransform from '@storybook/source-loader';
import type { ExtendedOptions } from './types';

const storyPattern = /\.stories\.[jt]sx?$/;
const storySourcePattern = /var __STORY__ = "(.*)"/;
const storySourceReplacement = '--STORY_SOURCE_REPLACEMENT--';

const mockClassLoader = (id: string) => ({ emitWarning: (message: string) => console.warn(message), resourcePath: id });

// HACK: Until we can support only node 15+ and use string.prototype.replaceAll
const replaceAll = (str: string, search: string, replacement: string) => {
  return str.split(search).join(replacement);
};

export function sourceLoaderPlugin(config: ExtendedOptions): Plugin | Plugin[] {
  if (config.configType === 'DEVELOPMENT') {
    return {
      name: 'storybook-vite-source-loader-plugin',
      enforce: 'pre',
      async transform(src: string, id: string) {
        if (id.match(storyPattern)) {
          const code: string = await sourceLoaderTransform.call(mockClassLoader(id), src);

          return {
            code,
            map: { mappings: '' },
          };
        }
      },
    };
  }

  // In production, we need to be fancier, to avoid vite:define plugin from replacing values inside the `__STORY__` string
  const storySources = new WeakMap<ExtendedOptions, Map<string, string>>();

  return [
    {
      name: 'storybook-vite-source-loader-plugin',
      enforce: 'pre',
      buildStart() {
        storySources.set(config, new Map());
      },
      async transform(src: string, id: string) {
        if (id.match(storyPattern)) {
          let code: string = await sourceLoaderTransform.call(mockClassLoader(id), src);
          const [_, sourceString] = code.match(storySourcePattern) ?? [null, null];
          if (sourceString) {
            const map = storySources.get(config);
            map?.set(id, sourceString);

            // Remove story source so that it is not processed by vite:define plugin
            code = replaceAll(code, sourceString, storySourceReplacement);
          }

          return {
            code,
            map: { mappings: '' },
          };
        }
      },
    },
    {
      name: 'storybook-vite-source-loader-plugin-post',
      enforce: 'post',
      buildStart() {
        storySources.set(config, new Map());
      },
      async transform(src: string, id: string) {
        if (id.match(storyPattern)) {
          let code;
          const map = storySources.get(config);
          const storySourceStatement = map?.get(id);
          // Put the previously-extracted source back in
          if (storySourceStatement) {
            code = replaceAll(src, storySourceReplacement, storySourceStatement);
          } else {
            code = src;
          }

          return {
            code,
            map: { mappings: '' },
          };
        }
      },
    },
  ];
}
