const parentRE = /^((?:\.\.\/)*\.\.)$/
const cousinRE = /^((?:\.\.\/)+)(.+)?$/

/**
 * Resolve `ref` relative to `file` (not a directory).
 *
 * The `ref` must begin with `./` or `../` or equal `.` or `..`
 */
export function relative(file: string, ref: string) {
  return ref.length == 1
    ? dirname(file, 1) // parent
    : ref[1] == '/'
    ? join(dirname(file, 1), ref.slice(2)) // sibling or nephew
    : relativeRegex(file, ref)
}

function relativeRegex(file: string, ref: string) {
  let id = parentRE.exec(ref) // grand-parent
  if (id) {
    return dirname(file, 1 + (id[1].length + 1) / 3)
  }
  id = cousinRE.exec(ref) // cousin or uncle
  if (id) {
    const dir = dirname(file, 1 + id[1].length / 3)
    return dir == null ? null : join(dir, id[2])
  }
  return null // invalid path
}

function join(a: string | null, b: string) {
  return b ? (a ? (a == '/' ? a : a + '/') + b : b) : a
}

/**
 * This assumes `file` never ends with a path separator.
 * It returns an empty string if no parent directory exists.
 */
function dirname(file: string, n: number) {
  let i: number
  if (n <= 1) {
    i = file.lastIndexOf('/')
    if (i < 0) {
      return ''
    }
  } else {
    i = file.length
    while (--n >= 0) {
      i = i ? file.lastIndexOf('/', i - 1) : -1
      if (i < 0) {
        return n || file[0] == '/' ? null : ''
      }
    }
  }
  return i ? file.slice(0, i) : '/'
}
