import * as path from 'path';
import fs from 'fs';
import { Plugin } from 'vite';
import { allowedEnvPrefix as envPrefix } from './envs';
import { TypescriptConfig } from '@storybook/core-common';
import { mockCoreJs } from './mock-core-js';
import { codeGeneratorPlugin } from './code-generator-plugin';
import { injectExportOrderPlugin } from './inject-export-order-plugin';
import { mdxPlugin } from './mdx-plugin';
import { noFouc } from './plugins/no-fouc';
import { sourceLoaderPlugin } from './source-loader-plugin';

import type { UserConfig } from 'vite';
import type { ExtendedOptions } from './types';

export type PluginConfigType = 'build' | 'development';

export function readPackageJson(): Record<string, any> | false {
  const packageJsonPath = path.resolve('package.json');
  if (!fs.existsSync(packageJsonPath)) {
    return false;
  }

  const jsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  return JSON.parse(jsonContent);
}

// Vite config that is common to development and production mode
export async function commonConfig(
  options: ExtendedOptions,
  _type: PluginConfigType
): Promise<UserConfig & { configFile: false; root: string }> {
  const { framework } = options;

  return {
    configFile: false,
    root: path.resolve(options.configDir, '..'),
    cacheDir: 'node_modules/.vite-storybook',
    envPrefix,
    define: {},
    resolve:
      framework === 'vue3'
        ? {
            alias: {
              vue: 'vue/dist/vue.esm-bundler.js',
            },
          }
        : {},
    plugins: await pluginConfig(options, _type),
  };
}

export async function pluginConfig(options: ExtendedOptions, _type: PluginConfigType) {
  const { framework, presets } = options;
  const svelteOptions: Record<string, any> = await presets.apply('svelteOptions', {}, options);

  const plugins = [
    codeGeneratorPlugin(options),
    mockCoreJs(),
    sourceLoaderPlugin(options),
    mdxPlugin(),
    noFouc(),
    injectExportOrderPlugin,
  ] as Plugin[];
  if (framework === 'vue' || framework === 'vue3') {
    try {
      const vuePlugin = require('@vitejs/plugin-vue');
      plugins.push(vuePlugin());
      const { vueDocgen } = await import('./plugins/vue-docgen');
      plugins.push(vueDocgen());
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'MODULE_NOT_FOUND') {
        throw new Error(
          '@storybook/builder-vite requires @vitejs/plugin-vue to be installed ' +
            'when using @storybook/vue or @storybook/vue3.' +
            '  Please install it and start storybook again.'
        );
      }
      throw err;
    }
  }
  if (framework === 'svelte') {
    try {
      const sveltePlugin = require('@sveltejs/vite-plugin-svelte').svelte;

      // We need to create two separate svelte plugins, one for stories, and one for other svelte files
      // because stories.svelte files cannot be hot-module-reloaded.
      // Suggested in: https://github.com/sveltejs/vite-plugin-svelte/issues/321#issuecomment-1113205509

      // First, create an array containing user exclude patterns, to combine with ours.
      const userExclude = Array.isArray(svelteOptions?.exclude)
        ? svelteOptions?.exclude
        : svelteOptions?.exclude
        ? [svelteOptions?.exclude]
        : [];

      // These are the svelte stories we need to exclude from HMR
      const storyPatterns = ['**/*.story.svelte', '**/*.stories.svelte'];
      // Non-story svelte files
      // Starting in 1.0.0-next.42, svelte.config.js is included by default.
      // We disable that, but allow it to be overridden in svelteOptions
      plugins.push(sveltePlugin({ configFile: false, ...svelteOptions, exclude: [...userExclude, ...storyPatterns] }));
      // Svelte stories without HMR
      const storySveltePlugin = sveltePlugin({
        configFile: false,
        ...svelteOptions,
        exclude: userExclude,
        include: storyPatterns,
        hot: false,
      });
      plugins.push({
        // Starting in 1.0.0-next.43, the plugin function returns an array of plugins.  We only want the first one here.
        ...(Array.isArray(storySveltePlugin) ? storySveltePlugin[0] : storySveltePlugin),
        name: 'vite-plugin-svelte-stories',
      });
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'MODULE_NOT_FOUND') {
        throw new Error(
          '@storybook/builder-vite requires @sveltejs/vite-plugin-svelte to be installed' +
            ' when using @storybook/svelte.' +
            '  Please install it and start storybook again.'
        );
      }
      throw err;
    }

    try {
      const csfPlugin = require('./svelte/csf-plugin').default;
      plugins.push(csfPlugin(svelteOptions));
    } catch (err) {
      // Not all projects use `.stories.svelte` for stories, and by default 6.5+ does not auto-install @storybook/addon-svelte-csf.
      // If it's any other kind of error, re-throw.
      if ((err as NodeJS.ErrnoException).code !== 'MODULE_NOT_FOUND') {
        throw err;
      }
    }

    const { svelteDocgen } = await import('./plugins/svelte-docgen');
    plugins.push(svelteDocgen(svelteOptions));
  }

  if (framework === 'react') {
    plugins.push(
      require('@vitejs/plugin-react')({
        // Do not treat story files as HMR boundaries, storybook itself needs to handle them.
        exclude: [/\.stories\.([tj])sx?$/, /node_modules/],
      })
    );

    const { reactDocgen, reactDocgenTypescriptOptions } = await presets.apply('typescript', {} as TypescriptConfig);

    let typescriptPresent;

    try {
      const pkgJson = readPackageJson();
      typescriptPresent = pkgJson && (pkgJson?.devDependencies?.typescript || pkgJson?.dependencies?.typescript);
    } catch (e) {
      typescriptPresent = false;
    }

    if (reactDocgen === 'react-docgen-typescript' && typescriptPresent) {
      plugins.push(require('@joshwooding/vite-plugin-react-docgen-typescript').default(reactDocgenTypescriptOptions));
    } else if (reactDocgen) {
      const { reactDocgen } = await import('./plugins/react-docgen');
      // Needs to run before the react plugin, so add to the front
      plugins.unshift(reactDocgen());
    }
  }

  if (framework === 'glimmerx') {
    const plugin = require('vite-plugin-glimmerx/index.cjs');
    plugins.push(plugin.default());
  }

  return plugins;
}
