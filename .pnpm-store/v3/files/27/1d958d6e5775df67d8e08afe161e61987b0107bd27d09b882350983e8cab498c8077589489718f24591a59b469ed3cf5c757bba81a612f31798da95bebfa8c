'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getColorByPercent = exports.setCoveredSizes = exports.addCoverageRanges = void 0;
const url_1 = require('url');
const helpers_1 = require('./helpers');
const app_error_1 = require('./app-error');
function convertRangesToLinesRanges(coverage) {
  const { ranges, text } = coverage;
  const eol = helpers_1.detectEOL(text);
  const eolLength = eol.length;
  const lines = text.split(eol);
  let offset = 0;
  const lineRanges = lines.map((line) => {
    const lineLength = line.length;
    if (lineLength === 0) {
      return [];
    }
    const lineStart = offset;
    const lineEnd = offset + lineLength;
    const lineRanges = ranges.reduce((result, { start, end }) => {
      const startIndex = start - lineStart;
      const endIndex = end - lineStart - 1;
      const lineEndIndex = lineLength - 1;
      if (start <= lineStart && lineEnd <= end) {
        result.push({ start: 0, end: lineEndIndex });
      } else if (lineStart <= start && end <= lineEnd) {
        result.push({ start: startIndex, end: endIndex });
      } else if (lineStart <= start && start <= lineEnd) {
        result.push({ start: startIndex, end: lineEndIndex });
      } else if (lineStart <= end && end <= lineEnd) {
        result.push({ start: 0, end: endIndex });
      }
      return result;
    }, []);
    offset = lineEnd + eolLength;
    return lineRanges;
  });
  return lineRanges;
}
const PATH_SEPARATOR_REGEX = /[/\\]/;
function getPathParts(path) {
  return path.split(PATH_SEPARATOR_REGEX).filter(Boolean);
}
function addCoverageRanges(bundles, coverageFilename) {
  if (!coverageFilename) {
    return bundles;
  }
  try {
    const coverages = JSON.parse(helpers_1.getFileContent(coverageFilename));
    const bundlesPaths = bundles.reduce((result, { code }, index) => {
      if (!Buffer.isBuffer(code)) {
        result.push([getPathParts(code).reverse(), index]);
      }
      return result;
    }, []);
    coverages
      .map(({ url }) => getPathParts(new url_1.URL(url).pathname).reverse())
      .forEach((partsA, coverageIndex) => {
        if (!partsA.length) return;
        let matchingBundles = [...bundlesPaths];
        for (let i = 0; i < partsA.length; i++) {
          matchingBundles = matchingBundles.filter(
            ([partsB]) => i < partsB.length && partsB[i] === partsA[i]
          );
          if (matchingBundles.length <= 1) {
            break;
          }
        }
        if (matchingBundles.length === 1) {
          const [[, bundleIndex]] = matchingBundles;
          bundles[bundleIndex].coverageRanges = convertRangesToLinesRanges(
            coverages[coverageIndex]
          );
        }
      });
  } catch (error) {
    throw new app_error_1.AppError({ code: 'CannotOpenCoverageFile' }, error);
  }
  if (bundles.every(({ coverageRanges }) => coverageRanges === undefined)) {
    throw new app_error_1.AppError({ code: 'NoCoverageMatches' });
  }
  return bundles;
}
exports.addCoverageRanges = addCoverageRanges;
function findCoveredMappingRanges(mappingRanges, coveredRanges) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < mappingRanges.length && j < coveredRanges.length) {
    const mappingRange = mappingRanges[i];
    const coveredRange = coveredRanges[j];
    if (mappingRange.start <= coveredRange.end && coveredRange.start <= mappingRange.end) {
      const end = Math.min(coveredRange.end, mappingRange.end);
      const start = Math.max(mappingRange.start, coveredRange.start);
      result.push({
        start,
        end,
        source: mappingRange.source,
      });
      if (
        mappingRanges[i + 1] !== undefined &&
        mappingRanges[i + 1].start <= coveredRange.end &&
        mappingRanges[i + 1].end >= coveredRange.start
      ) {
        i++;
      } else {
        j++;
      }
    } else if (mappingRange.end < coveredRange.start) {
      i++;
    }
    if (coveredRange.end < mappingRange.start) {
      j++;
    }
  }
  return result;
}
function setCoveredSizes(line, files, mappingRanges, coveredRanges) {
  findCoveredMappingRanges(mappingRanges, coveredRanges).forEach(({ start, end, source }) => {
    const rangeByteLength = Buffer.byteLength(line.substring(start, end + 1));
    let coveredSize = files[source].coveredSize || 0;
    coveredSize += rangeByteLength;
    files[source].coveredSize = coveredSize;
  });
  return files;
}
exports.setCoveredSizes = setCoveredSizes;
const percentColors = [
  { percent: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
  { percent: 0.5, color: { r: 0xff, g: 0xff, b: 0 } },
  { percent: 1.0, color: { r: 0x00, g: 0xff, b: 0 } },
];
function getColorByPercent(percent) {
  let i = 1;
  for (; i < percentColors.length - 1; i++) {
    if (percent < percentColors[i].percent) {
      break;
    }
  }
  const lowerColor = percentColors[i - 1];
  const upperColor = percentColors[i];
  const rangeWithinColors = upperColor.percent - lowerColor.percent;
  const rangePercent = (percent - lowerColor.percent) / rangeWithinColors;
  const percentLower = 1 - rangePercent;
  const percentUpper = rangePercent;
  const r = Math.floor(lowerColor.color.r * percentLower + upperColor.color.r * percentUpper);
  const g = Math.floor(lowerColor.color.g * percentLower + upperColor.color.g * percentUpper);
  const b = Math.floor(lowerColor.color.b * percentLower + upperColor.color.b * percentUpper);
  return `rgb(${r}, ${g}, ${b})`;
}
exports.getColorByPercent = getColorByPercent;
//# sourceMappingURL=coverage.js.map
