'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.adjustSourcePaths = exports.exploreBundle = exports.SPECIAL_FILENAMES = exports.EOL_KEY = exports.NO_SOURCE_KEY = exports.SOURCE_MAP_COMMENT_KEY = exports.UNMAPPED_KEY = void 0;
const convert_source_map_1 = __importDefault(require('convert-source-map'));
const path_1 = __importDefault(require('path'));
const source_map_1 = require('source-map');
const gzip_size_1 = __importDefault(require('gzip-size'));
const lodash_1 = require('lodash');
const api_1 = require('./api');
const helpers_1 = require('./helpers');
const app_error_1 = require('./app-error');
const coverage_1 = require('./coverage');
exports.UNMAPPED_KEY = '[unmapped]';
exports.SOURCE_MAP_COMMENT_KEY = '[sourceMappingURL]';
exports.NO_SOURCE_KEY = '[no source]';
exports.EOL_KEY = '[EOLs]';
exports.SPECIAL_FILENAMES = [
  exports.UNMAPPED_KEY,
  exports.SOURCE_MAP_COMMENT_KEY,
  exports.NO_SOURCE_KEY,
  exports.EOL_KEY,
];
async function exploreBundle(bundle, options) {
  const { code, map, coverageRanges } = bundle;
  const sourceMapData = await loadSourceMap(code, map);
  const sizes = computeFileSizes(sourceMapData, options, coverageRanges);
  const files = adjustSourcePaths(sizes.files, options);
  sourceMapData.consumer.destroy();
  return {
    bundleName: api_1.getBundleName(bundle),
    ...sizes,
    files,
  };
}
exports.exploreBundle = exploreBundle;
async function loadSourceMap(codeFile, sourceMapFile) {
  const codeFileContent = helpers_1.getFileContent(codeFile);
  let consumer;
  if (sourceMapFile) {
    const sourceMapFileContent = helpers_1.getFileContent(sourceMapFile);
    consumer = await new source_map_1.SourceMapConsumer(sourceMapFileContent);
  } else {
    let converter = convert_source_map_1.default.fromSource(codeFileContent);
    if (!converter && !Buffer.isBuffer(codeFile)) {
      converter = convert_source_map_1.default.fromMapFileSource(
        codeFileContent,
        path_1.default.dirname(codeFile)
      );
    }
    if (!converter) {
      throw new app_error_1.AppError({ code: 'NoSourceMap' });
    }
    consumer = await new source_map_1.SourceMapConsumer(converter.toJSON());
  }
  if (!consumer) {
    throw new app_error_1.AppError({ code: 'NoSourceMap' });
  }
  return {
    consumer,
    codeFileContent,
  };
}
const COMMENT_REGEX = convert_source_map_1.default.commentRegex;
const MAP_FILE_COMMENT_REGEX = convert_source_map_1.default.mapFileCommentRegex;
function getSourceMapComment(fileContent) {
  const sourceMapComment =
    helpers_1.getFirstRegexMatch(COMMENT_REGEX, fileContent) ||
    helpers_1.getFirstRegexMatch(MAP_FILE_COMMENT_REGEX, fileContent) ||
    '';
  return sourceMapComment.trim();
}
function isReferencingEOL(context, maxColumnIndex) {
  const { generatedLine, generatedColumn, source, consumer } = context;
  if (maxColumnIndex - generatedColumn > 2) {
    return false;
  }
  if (!source) {
    return false;
  }
  if (context.mapReferenceEOLSources.has(source)) {
    return true;
  }
  const content = consumer.sourceContentFor(source, true);
  if (!content) {
    return false;
  }
  const { line, column } = consumer.originalPositionFor({
    line: generatedLine,
    column: generatedColumn,
  });
  if (line === null || column === null) {
    return false;
  }
  if (helpers_1.isEOLAtPosition(content, [line, column])) {
    context.mapReferenceEOLSources.add(source);
    return true;
  }
  return false;
}
function checkInvalidMappingColumn(context) {
  const { line, generatedLine, generatedColumn } = context;
  const maxColumnIndex = line.length - 1;
  if (generatedColumn > maxColumnIndex) {
    if (isReferencingEOL(context, maxColumnIndex)) {
      return;
    }
    throw new app_error_1.AppError({
      code: 'InvalidMappingColumn',
      generatedLine,
      generatedColumn,
      maxColumn: line.length,
    });
  }
}
function computeFileSizes(sourceMapData, options, coverageRanges) {
  const { consumer, codeFileContent: fileContent } = sourceMapData;
  const sourceMapComment = getSourceMapComment(fileContent);
  const sourceContent = fileContent.replace(sourceMapComment, '').trim();
  const eol = helpers_1.detectEOL(fileContent);
  const lines = sourceContent.split(eol);
  const mappingRanges = [];
  const context = {
    generatedLine: -1,
    generatedColumn: -1,
    line: '',
    source: null,
    consumer,
    mapReferenceEOLSources: new Set(),
  };
  consumer.computeColumnSpans();
  consumer.eachMapping(({ source, generatedLine, generatedColumn, lastGeneratedColumn }) => {
    const lineIndex = generatedLine - 1;
    const line = lines[lineIndex];
    if (line === undefined) {
      if (options.noBorderChecks) {
        return;
      }
      throw new app_error_1.AppError({
        code: 'InvalidMappingLine',
        generatedLine,
        maxLine: lines.length,
      });
    }
    context.generatedLine = generatedLine;
    context.generatedColumn = lastGeneratedColumn || generatedColumn;
    context.line = line;
    context.source = source;
    if (!options.noBorderChecks) {
      checkInvalidMappingColumn(context);
    }
    const start = generatedColumn;
    const end = lastGeneratedColumn === null ? line.length - 1 : lastGeneratedColumn;
    const lineRanges = mappingRanges[lineIndex] || [];
    lineRanges.push({
      start,
      end,
      source: source === null ? exports.NO_SOURCE_KEY : source,
    });
    mappingRanges[lineIndex] = lineRanges;
  });
  let files = {};
  let mappedBytes = 0;
  const getSize = options.gzip ? gzip_size_1.default.sync : Buffer.byteLength;
  mappingRanges.forEach((lineRanges, lineIndex) => {
    const line = lines[lineIndex];
    const mergedRanges = helpers_1.mergeRanges(lineRanges);
    mergedRanges.forEach(({ start, end, source }) => {
      const rangeString = line.substring(start, end + 1);
      const rangeByteLength = getSize(rangeString);
      if (!files[source]) {
        files[source] = { size: 0 };
      }
      files[source].size += rangeByteLength;
      mappedBytes += rangeByteLength;
    });
    if (coverageRanges) {
      files = coverage_1.setCoveredSizes(line, files, mergedRanges, coverageRanges[lineIndex]);
    }
  });
  const sourceMapCommentBytes = getSize(sourceMapComment);
  const eolBytes = helpers_1.getOccurrencesCount(eol, fileContent) * Buffer.byteLength(eol);
  const totalBytes = getSize(fileContent);
  let unmappedBytes;
  if (!options.excludeSourceMapComment) {
    files[exports.SOURCE_MAP_COMMENT_KEY] = { size: sourceMapCommentBytes };
  }
  if (!options.onlyMapped) {
    unmappedBytes = totalBytes - mappedBytes - sourceMapCommentBytes - eolBytes;
    files[exports.UNMAPPED_KEY] = { size: unmappedBytes };
  }
  if (eolBytes > 0) {
    files[exports.EOL_KEY] = { size: eolBytes };
  }
  return {
    ...(options.excludeSourceMapComment
      ? { totalBytes: totalBytes - sourceMapCommentBytes }
      : { totalBytes }),
    mappedBytes,
    ...(!options.onlyMapped && { unmappedBytes }),
    eolBytes,
    sourceMapCommentBytes,
    files,
  };
}
function adjustSourcePaths(fileSizeMap, options) {
  if (!options.noRoot) {
    const prefix = helpers_1.getCommonPathPrefix(Object.keys(fileSizeMap));
    const length = prefix.length;
    if (length) {
      fileSizeMap = lodash_1.mapKeys(fileSizeMap, (size, source) => source.slice(length));
    }
  }
  if (options.replaceMap) {
    fileSizeMap = Object.entries(options.replaceMap).reduce((result, [before, after]) => {
      const regexp = new RegExp(before, 'g');
      return lodash_1.mapKeys(result, (size, source) => source.replace(regexp, after));
    }, fileSizeMap);
  }
  return fileSizeMap;
}
exports.adjustSourcePaths = adjustSourcePaths;
//# sourceMappingURL=explore.js.map
