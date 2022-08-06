# Storybook builder for Vite

Build your stories with [vite](https://vitejs.dev/) for fast startup times and near-instant HMR.

# Table of Contents

- [Migration from storybook-builder-vite](#project-has-been-renamed)
- [Installation](#installation)
- [Usage](#usage)
  - [Customize Vite Config](#customize-vite-config)
  - [Svelte Customization](#svelte-customization)
  - [TypeScript](#typescript)
  - [React Docgen](#react-docgen)
  - [Working Directory](#note-about-working-directory)
- [How to Start a New Project](#getting-started-with-vite-and-storybook-on-a-new-project)
- [Known issues](#known-issues)
- [Contributing](#contributing)

## Project has been renamed

This project has moved from `storybook-builder-vite` to `@storybook/builder-vite` as part of a larger effort to improve Vite support in Storybook. To automatically migrate your existing project, you can run

```bash
npx sb@next automigrate
```

To manually migrate:

1. Remove `storybook-builder-vite` from your `package.json` dependencies
2. Install `@storybook/builder-vite`
3. Update your `core.builder` setting in `.storybook/main.js` to `@storybook/builder-vite`.

## Installation

Requirements:

- Vite 2.5 or newer
- Storybook 6.4.0 or newer (for storybook 6.3, use `storybook-builder-vite@0.1.16`)

```bash
npm install @storybook/builder-vite --save-dev
```

or

```bash
yarn add --dev @storybook/builder-vite
```

or

```bash
pnpm add --save-dev @storybook/builder-vite
```

Note: when using `pnpm`, you may need to enable [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist), until https://github.com/storybookjs/builder-vite/issues/55 can be fixed.

## Usage

In your `main.js` configuration file,
set `core: { builder: "@storybook/builder-vite" }`.

> For autoreload of react stories to work, they need to have a `.stories.tsx` or `.stories.jsx` file suffix.
> See also [#53](https://github.com/storybookjs/builder-vite/pull/53)

The builder supports both development mode in Storybook, and building a static production version.

If you were previously using `@storybook/manager-webpack5`, you'll need to remove it, since currently the vite builder only works with `manager-webpack4`, which is the default and does not need to be installed manually.

### Customize Vite config

The builder will _not_ read your `vite.config.js` file by default.

In `.storybook/main.js` (or whatever your Storybook config file is named)
you can override the Vite config:

```javascript
// use `mergeConfig` to recursively merge Vite options
const { mergeConfig } = require('vite');

module.exports = {
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      resolve: {
        alias: { foo: 'bar' },
      },
    });
  },
  // ... other options here
};
```

The `viteFinal` function will give you `config` which is
the builder's own Vite config. You can tweak this as you want,
for example to set up aliases, add new plugins etc.

The `configType` variable will be either `"DEVELOPMENT"` or `"PRODUCTION"`.

The function should return the updated Vite configuration.

### Svelte Customization

When using this builder with Svelte, your `.storybook/main.js` (or equivalent)
can contain a `svelteOptions` object to pass custom options to
[`vite-plugin-svelte`](https://github.com/sveltejs/vite-plugin-svelte/tree/main/packages/vite-plugin-svelte):

```javascript
const preprocess = require('svelte-preprocess');

module.exports = {
  svelteOptions: {
    preprocess: preprocess({
      typescript: true,
      postcss: true,
      sourceMap: true,
    }),
  },
};
```

### TypeScript

Configure your `.storybook/main.ts` to use TypeScript:

```typescript
import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  // other storybook options...,
  async viteFinal(config, options) {
    // modify and return config
  },
};

export default config;
```

Or alternatively, you can use named exports:

```typescript
import type { ViteFinal } from '@storybook/builder-vite';

export const viteFinal: ViteFinal = async (config, options) => {
  // modify and return config
};
```

See [Customize Vite config](#customize-vite-config) for details about using `viteFinal`.

### React Docgen

Docgen is used in Storybook to populate the props table in docs view, the controls panel, and for several other addons. Docgen is supported in vue and react, and there are two docgen options when using react, `react-docgen` and `react-docgen-typescript`. You can learn more about the pros/cons of each in [this gist](https://gist.github.com/shilman/036313ffa3af52ca986b375d90ea46b0). By default, if we find a `typescript` dependency in your `package.json` file, we will assume you're using typescript and will choose `react-docgen-typescript`. You can change this by setting the `typescript.reactDocgen` option in your `.storybook/main.js` file:

```javascript
module.exports = {
  typescript: {
    reactDocgen: 'react-docgen`
  }
}
```

If you're using TypeScript, we encourage you to experiment and see which option works better for your project.

### Note about working directory

The builder will by default enable Vite's [server.fs.strict](https://vitejs.dev/config/#server-fs-strict)
option, for increased security. The default project `root` is set to the parent directory of the
storybook configuration directory. This can be overridden in viteFinal.

## Getting started with Vite and Storybook (on a new project)

See https://vitejs.dev/guide/#scaffolding-your-first-vite-project,

```
npm create vite@latest # follow the prompts
npx sb init --builder @storybook/builder-vite && npm run storybook
```

## Known issues

- HMR: saving a story file does not hot-module-reload, a full reload happens instead. HMR works correctly when saving component files.
- Prebundling: Vite restarts if it detects new dependencies which it did not know about and needs to pre-bundle. This breaks within storybook, with confusing error messages. If you see a message in your terminal like `[vite] new dependencies found:`, please add those dependencies to your `optimizeDeps.include` in `viteFinal`. E.g. `config.optimizeDeps.include = [...(config.optimizeDeps?.include ?? []), "storybook-dark-mode"],`. Vite 2.9.0+ may improve this behavior.

## Contributing

The Vite builder cannot build itself.
Are you willing to contribute?

https://github.com/storybookjs/builder-vite/issues/11

Have a look at the GitHub issues for known bugs. If you find any new bugs,
feel free to create an issue or send a pull request!

Please read the [How to contribute](/CONTRIBUTING.md) guide.

### About this codebase

The code is a monorepo with the core `@storybook/builder-vite` package,
and examples (like `examples/react`) to test the builder implementation.

Similar to the main storybook monorepo, you need yarn to develop this builder, because the project is organized as yarn workspaces.
This lets you write new code in the core builder package, and instantly use them from
the example packages.
