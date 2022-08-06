import * as path from 'path';
import { normalizePath, resolveConfig, UserConfig } from 'vite';
import { listStories } from './list-stories';

import type { ExtendedOptions } from './types';

const INCLUDE_CANDIDATES = [
  '@base2/pretty-print-object',
  '@emotion/core',
  '@emotion/is-prop-valid',
  '@emotion/styled',
  '@mdx-js/react',
  '@storybook/addon-docs > acorn-jsx',
  '@storybook/addon-docs',
  '@storybook/addons',
  '@storybook/channel-postmessage',
  '@storybook/channel-websocket',
  '@storybook/client-api',
  '@storybook/client-logger',
  '@storybook/core/client',
  '@storybook/csf',
  '@storybook/preview-web',
  '@storybook/react > acorn-jsx',
  '@storybook/react',
  '@storybook/svelte',
  '@storybook/vue3',
  'acorn-jsx',
  'acorn-walk',
  'acorn',
  'airbnb-js-shims',
  'ansi-to-html',
  'axe-core',
  'color-convert',
  'deep-object-diff',
  'doctrine',
  'emotion-theming',
  'escodegen',
  'estraverse',
  'fast-deep-equal',
  'global',
  'html-tags',
  'isobject',
  'jest-mock',
  'loader-utils',
  'lodash/cloneDeep',
  'lodash/isFunction',
  'lodash/isPlainObject',
  'lodash/isString',
  'lodash/mapKeys',
  'lodash/mapValues',
  'lodash/pick',
  'lodash/pickBy',
  'lodash/startCase',
  'lodash/throttle',
  'lodash/uniq',
  'markdown-to-jsx',
  'memoizerific',
  'overlayscrollbars',
  'polished',
  'prettier/parser-babel',
  'prettier/parser-flow',
  'prettier/parser-typescript',
  'prop-types',
  'qs',
  'react-dom',
  'react-dom/client',
  'react-fast-compare',
  'react-is',
  'react-textarea-autosize',
  'react',
  'refractor/core',
  'refractor/lang/bash.js',
  'refractor/lang/css.js',
  'refractor/lang/graphql.js',
  'refractor/lang/js-extras.js',
  'refractor/lang/json.js',
  'refractor/lang/jsx.js',
  'refractor/lang/markdown.js',
  'refractor/lang/markup.js',
  'refractor/lang/tsx.js',
  'refractor/lang/typescript.js',
  'refractor/lang/yaml.js',
  'regenerator-runtime/runtime.js',
  'slash',
  'stable',
  'store2',
  'synchronous-promise',
  'telejson',
  'ts-dedent',
  'unfetch',
  'util-deprecate',
  'uuid-browser/v4',
  'vue',
  'warning',
];

/**
 * Helper function which allows us to `filter` with an async predicate.  Uses Promise.all for performance.
 */
const asyncFilter = async (arr: string[], predicate: (val: string) => Promise<boolean>) =>
  Promise.all(arr.map(predicate)).then((results) => arr.filter((_v, index) => results[index]));

export async function getOptimizeDeps(
  config: UserConfig & { configFile: false; root: string },
  options: ExtendedOptions
) {
  const { root } = config;
  const absoluteStories = await listStories(options);
  const stories = absoluteStories.map((storyPath) => normalizePath(path.relative(root, storyPath)));
  const resolvedConfig = await resolveConfig(config, 'serve', 'development');

  const exclude = [];
  // This is necessary to support react < 18 with new versions of @storybook/react that support react 18.
  // TODO: narrow this down to just framework === 'react'.  But causes a vue dev start problem in this monorepo.
  try {
    require.resolve('react-dom/client', { paths: [config.root] });
  } catch (e) {
    if (isNodeError(e) && e.code === 'MODULE_NOT_FOUND') {
      exclude.push('react-dom/client');
    }
  }

  // This function converts ids which might include ` > ` to a real path, if it exists on disk.
  // See https://github.com/vitejs/vite/blob/67d164392e8e9081dc3f0338c4b4b8eea6c5f7da/packages/vite/src/node/optimizer/index.ts#L182-L199
  const resolve = resolvedConfig.createResolver({ asSrc: false });
  const include = await asyncFilter(INCLUDE_CANDIDATES, async (id) => Boolean(await resolve(id)));

  return {
    // We don't need to resolve the glob since vite supports globs for entries.
    entries: stories,
    // We need Vite to precompile these dependencies, because they contain non-ESM code that would break
    // if we served it directly to the browser.
    include,
    // In some cases we need to prevent deps from being pre-bundled
    exclude,
  };
}

// Refines an error received from 'catch' to be a NodeJS exception
const isNodeError = (error: unknown): error is NodeJS.ErrnoException => error instanceof Error;
