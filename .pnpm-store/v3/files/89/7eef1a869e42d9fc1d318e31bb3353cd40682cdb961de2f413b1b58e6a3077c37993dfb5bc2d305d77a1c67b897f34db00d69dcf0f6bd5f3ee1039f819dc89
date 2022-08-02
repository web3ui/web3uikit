# vite-tsconfig-paths

[![npm](https://img.shields.io/npm/v/vite-tsconfig-paths.svg)](https://www.npmjs.com/package/vite-tsconfig-paths)
[![codecov](https://codecov.io/gh/aleclarson/vite-tsconfig-paths/branch/master/graph/badge.svg)](https://codecov.io/gh/aleclarson/vite-tsconfig-paths)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/alecdotbiz)

Give [`vite`] the ability to resolve imports using TypeScript's path mapping.

[`vite`]: https://github.com/vitejs/vite

## Usage

1. Install as dev dependency

2. Inject `vite-tsconfig-paths` using the `vite.config.ts` module

   ```ts
   import { defineConfig } from 'vite'
   import tsconfigPaths from 'vite-tsconfig-paths'

   export default defineConfig({
     plugins: [tsconfigPaths()],
   })
   ```

**Note:** You need to restart Vite when you update your `paths` mappings.

### Options

- `root: string`  
  The directory to crawl for `tsconfig.json` files.  
  Defaults to `viteConfig.root`

- `projects: string[]`  
  An array of `tsconfig.json` paths (relative to `viteConfig.root`)
  and/or directories that contain a `tsconfig.json` file.  
  This overrides the `root` option.

- `extensions: string[]`  
  File extensions to search for.  
  Defaults to `.ts | .tsx | .js | .jsx | .mjs`

- `loose: boolean`  
  Disable strictness that limits path resolution to TypeScript and JavaScript modules.  
  Useful if you want asset URLs in Vue templates to be resolved.

&nbsp;

### allowJs

If your `tsconfig.json` file has `"allowJs": true` in it, path resolution will be expanded beyond TypeScript modules. The following extensions will have their imports resolved by this plugin: `.vue`, `.svelte`, `.mdx`, `.mjs`, `.js`, `.jsx`

&nbsp;

### baseUrl

If the `baseUrl` is defined, it gets prepended to all bare imports, and its resolution will take precedence over node_modules. This is also how TypeScript does it.

Say the `baseUrl` is `../root` and you import `react`. This plugin will use `../root/react` if it exists. If not found, then `react` is resolved normally. The `baseUrl` is relative to the project root (where `tsconfig.json` lives).

&nbsp;

### include/exclude

The `include` and `exclude` compiler options are respected.

Internally, [globrex](https://github.com/terkelg/globrex) is used for glob matching.

&nbsp;

### Troubleshooting

The `DEBUG` environment variable can be used to figure out why this plugin isn't working as you may have expected.

```sh
DEBUG=vite-tsconfig-paths yarn vite
```

&nbsp;

## Donate

If this package helps you, please donate! Any amount is greatly appreciated. 🥰

- ETH: **0xa446626195bbe4d0697e729c1433a86fB6Cf66cF**
- BTC: **17vYtAUPKXzubMEnNcN8SiuFgicrd5Rp9A**
- KIN: **GBU7RDRD7VDVT254RR6PGMBJESXQVDHJ5CGGODZKRXM2P4MP3G5QSAMH**
