export interface PluginOptions {
  /**
   * The directory to crawl for `tsconfig.json` files.
   *
   * @default viteConfig.root
   */
  root?: string
  /**
   * An array of `tsconfig.json` paths (relative to `viteConfig.root`)
   * and/or directories that contain a `tsconfig.json` file.
   *
   * When undefined, we crawl the project for `tsconfig.json` files.
   * You can set the `root` option to control where crawling starts.
   */
  projects?: string[]
  /**
   * Implicit extensions used when resolving an import path
   * like `./App` which has no explicit extension like `./App.vue` does.
   *
   * TypeScript and JavaScript extensions are used by default.
   */
  extensions?: string[]
  /**
   * Disable strictness that limits path resolution to TypeScript
   * and JavaScript modules.
   *
   * Useful if you want asset URLs in Vue templates to be resolved,
   * or when `"allowJs": true` in your tsconfig isn't good enough.
   */
  loose?: boolean
}

export interface TSConfig {
  include?: string[]
  exclude?: string[]
  compilerOptions?: {
    baseUrl?: string
    paths?: { [path: string]: string[] }
    allowJs?: boolean
    checkJs?: boolean
    outDir?: string
  }
}
