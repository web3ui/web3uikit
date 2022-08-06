
var dotRE = /\./g
var dotPattern = '\\.'

var restRE = /\*\*$/g
var restPattern = '(.+)'

var globRE = /(?:\*\*\/|\*\*|\*)/g
var globPatterns = {
  '*': '([^/]+)',        // no backslashes
  '**': '(.+/)?([^/]+)', // short for "**/*"
  '**/': '(.+/)?',       // one or more directories
}

function mapToPattern(str) {
  return globPatterns[str]
}

function replace(glob) {
  return glob
    .replace(dotRE, dotPattern)
    .replace(restRE, restPattern)
    .replace(globRE, mapToPattern)
}

function join(globs) {
  return '((' + globs.map(replace).join(')|(') + '))'
}

function globRegex(glob) {
  return new RegExp('^' + (Array.isArray(glob) ? join : replace)(glob) + '$')
}

globRegex.replace = replace
Object.defineProperty(globRegex, 'default', { value: globRegex })
module.exports = globRegex
