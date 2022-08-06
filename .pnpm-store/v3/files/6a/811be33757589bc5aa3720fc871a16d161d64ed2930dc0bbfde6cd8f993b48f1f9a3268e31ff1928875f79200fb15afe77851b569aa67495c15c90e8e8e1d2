import * as os from 'os'
import * as path from 'path'
import { normalizePath } from 'vite'

const isWindows = os.platform() == 'win32'

export const resolve = isWindows
  ? (...paths: string[]) => normalizePath(path.win32.resolve(...paths))
  : path.posix.resolve

export const isAbsolute = isWindows
  ? path.win32.isAbsolute
  : path.posix.isAbsolute

/** Only call this on normalized paths */
export const join = path.posix.join

/** Only call this on normalized paths */
export const relative = path.posix.relative

/** Only call this on normalized paths */
export const basename = path.posix.basename

export { dirname } from 'path'
