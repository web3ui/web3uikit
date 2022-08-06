import {
  loadTsconfig,
  walkForTsConfig,
} from 'tsconfig-paths/lib/tsconfig-loader.js'
import { normalizePath } from 'vite'
import { resolve } from 'path'
import { statSync } from 'fs'
import { TSConfig } from './types'

export interface Config {
  configPath: string
  include?: string[]
  exclude?: string[]
  allowJs?: boolean
  baseUrl?: string
  paths?: { [path: string]: string[] }
  outDir?: string
}

export function loadConfig(cwd: string): Config | undefined {
  const configPath = resolveConfigPath(cwd)
  if (configPath) {
    const config = loadTsconfig(configPath) as TSConfig
    const {
      compilerOptions: { allowJs, checkJs, baseUrl, paths, outDir } = {},
    } = config

    return {
      configPath: normalizePath(configPath),
      include: config.include,
      exclude: config.exclude,
      allowJs: allowJs || checkJs,
      baseUrl: baseUrl && normalizePath(resolve(configPath, '..', baseUrl)),
      paths,
      outDir,
    }
  }
}

// Adapted from https://github.com/dividab/tsconfig-paths/blob/0b259d4cf6cffbc03ad362cfc6bb129d040375b7/src/tsconfig-loader.ts#L65
function resolveConfigPath(cwd: string) {
  if (statSync(cwd).isFile()) {
    return cwd
  }
  const configPath = walkForTsConfig(cwd)
  if (configPath) {
    return configPath
  }
}
