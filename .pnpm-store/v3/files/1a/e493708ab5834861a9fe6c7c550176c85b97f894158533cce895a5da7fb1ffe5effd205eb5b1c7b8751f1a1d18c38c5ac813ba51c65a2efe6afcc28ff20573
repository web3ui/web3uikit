'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.mergeRanges = exports.isEOLAtPosition = exports.getOccurrencesCount = exports.detectEOL = exports.getFirstRegexMatch = exports.getCommonPathPrefix = exports.formatPercent = exports.formatBytes = exports.getFileContent = void 0;
const fs_1 = __importDefault(require('fs'));
function getFileContent(file) {
  const buffer = Buffer.isBuffer(file) ? file : fs_1.default.readFileSync(file);
  return buffer.toString();
}
exports.getFileContent = getFileContent;
const BYTE_SIZES = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const SIZE_BASE = 1024;
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return `0 ${BYTE_SIZES[0]}`;
  const exponent = Math.floor(Math.log(bytes) / Math.log(SIZE_BASE));
  const value = bytes / Math.pow(SIZE_BASE, exponent);
  return `${parseFloat(value.toFixed(decimals))} ${BYTE_SIZES[exponent]}`;
}
exports.formatBytes = formatBytes;
function formatPercent(value, total, fractionDigits) {
  return ((100.0 * value) / total).toFixed(fractionDigits);
}
exports.formatPercent = formatPercent;
const PATH_SEPARATOR_REGEX = /(\/)/;
function getCommonPathPrefix(paths) {
  if (paths.length < 2) return '';
  const A = paths.concat().sort();
  const a1 = A[0].split(PATH_SEPARATOR_REGEX);
  const a2 = A[A.length - 1].split(PATH_SEPARATOR_REGEX);
  const L = a1.length;
  let i = 0;
  while (i < L && a1[i] === a2[i]) i++;
  return a1.slice(0, i).join('');
}
exports.getCommonPathPrefix = getCommonPathPrefix;
function getFirstRegexMatch(regex, string) {
  const match = string.match(regex);
  return match ? match[0] : null;
}
exports.getFirstRegexMatch = getFirstRegexMatch;
const LF = '\n';
const CR_LF = '\r\n';
function detectEOL(content) {
  return content.includes(CR_LF) ? CR_LF : LF;
}
exports.detectEOL = detectEOL;
function getOccurrencesCount(subString, string) {
  let count = 0;
  let position = string.indexOf(subString);
  const subStringLength = subString.length;
  while (position !== -1) {
    count += 1;
    position = string.indexOf(subString, position + subStringLength);
  }
  return count;
}
exports.getOccurrencesCount = getOccurrencesCount;
function isEOLAtPosition(string, [line, column]) {
  const eol = detectEOL(string);
  const eolLength = eol.length;
  let lineOffset = 0;
  for (let lineIndex = 1; lineIndex < line; lineIndex += 1) {
    lineOffset = string.indexOf(eol, lineOffset);
    if (lineOffset === -1) {
      return false;
    }
    lineOffset += eolLength;
  }
  return string.substr(lineOffset + column, eolLength) === eol;
}
exports.isEOLAtPosition = isEOLAtPosition;
function mergeRanges(ranges) {
  const mergedRanges = [];
  const rangesCount = ranges.length;
  if (rangesCount === 1) {
    return ranges;
  }
  let { start, end, source } = ranges[0];
  for (let i = 1; i < rangesCount; i += 1) {
    const isSourceMatch = ranges[i].source === ranges[i - 1].source;
    const isConsecutive = ranges[i].start - ranges[i - 1].end === 1;
    if (isSourceMatch && isConsecutive) {
      end = ranges[i].end;
    } else {
      mergedRanges.push({ start, end, source });
      ({ start, end, source } = ranges[i]);
    }
  }
  mergedRanges.push({ start, end, source });
  return mergedRanges;
}
exports.mergeRanges = mergeRanges;
//# sourceMappingURL=helpers.js.map
