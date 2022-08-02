'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.getWebTreeMapData = exports.makeMergedTreeDataMap = exports.generateHtml = void 0;
const btoa_1 = __importDefault(require('btoa'));
const ejs_1 = __importDefault(require('ejs'));
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
const escape_html_1 = __importDefault(require('escape-html'));
const lodash_1 = require('lodash');
const helpers_1 = require('./helpers');
const coverage_1 = require('./coverage');
const COMBINED_BUNDLE_NAME = '[combined]';
function getTreeDataMap(exploreResults) {
  let treeData = exploreResults.map((data) => ({
    name: data.bundleName,
    data: getWebTreeMapData(data.files),
  }));
  if (treeData.length > 1) {
    treeData = [makeMergedTreeDataMap(lodash_1.cloneDeep(treeData)), ...treeData];
  }
  for (const webTreeData of treeData) {
    addSizeToTitle(webTreeData.data, webTreeData.data.data['$area']);
  }
  return { ...treeData };
}
function generateHtml(exploreResults, options) {
  const assets = {
    webtreemapJs: btoa_1.default(
      fs_1.default.readFileSync(require.resolve('./vendor/webtreemap.js'))
    ),
    webtreemapCss: btoa_1.default(
      fs_1.default.readFileSync(require.resolve('./vendor/webtreemap.css'))
    ),
  };
  const treeDataMap = getTreeDataMap(exploreResults);
  const bundles = exploreResults.map((data) => ({
    name: data.bundleName,
    size: helpers_1.formatBytes(data.totalBytes),
  }));
  if (exploreResults.length > 1) {
    bundles.unshift({
      name: COMBINED_BUNDLE_NAME,
      size: helpers_1.formatBytes(
        exploreResults.reduce((total, result) => total + result.totalBytes, 0)
      ),
    });
  }
  const template = helpers_1.getFileContent(path_1.default.join(__dirname, 'tree-viz.ejs'));
  return ejs_1.default.render(template, {
    options,
    bundles,
    treeDataMap,
    webtreemapJs: assets.webtreemapJs,
    webtreemapCss: assets.webtreemapCss,
  });
}
exports.generateHtml = generateHtml;
function makeMergedTreeDataMap(treeData) {
  const data = newNode('/');
  data.children = [];
  for (const result of treeData) {
    const childTree = result.data;
    childTree.name = result.name;
    data.data['$area'] += childTree.data['$area'];
    data.children.push(childTree);
  }
  const commonPrefix = helpers_1.getCommonPathPrefix(data.children.map((node) => node.name));
  const commonPrefixLength = commonPrefix.length;
  if (commonPrefixLength > 0) {
    for (const node of data.children) {
      node.name = node.name.slice(commonPrefixLength);
    }
  }
  return {
    name: COMBINED_BUNDLE_NAME,
    data,
  };
}
exports.makeMergedTreeDataMap = makeMergedTreeDataMap;
function getNodePath(parts, depthIndex) {
  return parts.slice(0, depthIndex + 1).join('/');
}
const WEBPACK_FILENAME_PREFIX = 'webpack:///';
const WEBPACK_FILENAME_PREFIX_LENGTH = WEBPACK_FILENAME_PREFIX.length;
const PATH_SEPARATOR_REGEX = /[\\/]/;
function splitFilename(file) {
  const webpackPrefixIndex = file.indexOf(WEBPACK_FILENAME_PREFIX);
  if (webpackPrefixIndex !== -1) {
    return [
      ...file.substring(0, webpackPrefixIndex).split('/'),
      WEBPACK_FILENAME_PREFIX,
      ...file.substring(webpackPrefixIndex + WEBPACK_FILENAME_PREFIX_LENGTH).split('/'),
    ].filter(Boolean);
  }
  return file.split(PATH_SEPARATOR_REGEX);
}
function getTreeNodesMap(fileDataMap) {
  let partsSourceTuples = Object.keys(fileDataMap).map((file) => [splitFilename(file), file]);
  const maxDepth = Math.max(...partsSourceTuples.map(([parts]) => parts.length));
  for (let depthIndex = 0; depthIndex < maxDepth; depthIndex += 1) {
    partsSourceTuples = partsSourceTuples.map(([parts, file], currentNodeIndex) => {
      if (parts[depthIndex]) {
        const nodePath = getNodePath(parts, depthIndex);
        const hasSameRootPaths = partsSourceTuples.some(([pathParts], index) => {
          if (index === currentNodeIndex) {
            return false;
          }
          if (!pathParts[depthIndex]) {
            return false;
          }
          return getNodePath(pathParts, depthIndex) === nodePath;
        });
        if (!hasSameRootPaths) {
          return [[...parts.slice(0, depthIndex), parts.slice(depthIndex).join('/')], file];
        }
      }
      return [parts, file];
    });
  }
  return partsSourceTuples.reduce((result, [parts, file]) => {
    result[file] = parts;
    return result;
  }, {});
}
function getWebTreeMapData(files) {
  const treeNodesMap = getTreeNodesMap(files);
  const treeData = newNode('/');
  for (const source in files) {
    addNode(treeNodesMap[source], files[source], treeData);
  }
  return treeData;
}
exports.getWebTreeMapData = getWebTreeMapData;
function newNode(name) {
  return {
    name: escape_html_1.default(name),
    data: {
      $area: 0,
    },
  };
}
function setNodeData(node, fileData) {
  const size = node.data['$area'] + fileData.size;
  if (fileData.coveredSize !== undefined) {
    const coveredSize = (node.data.coveredSize || 0) + fileData.coveredSize;
    node.data.coveredSize = coveredSize;
    node.data.backgroundColor = coverage_1.getColorByPercent(coveredSize / size);
  }
  node.data['$area'] = size;
}
function addNode(parts, fileData, treeData) {
  if (fileData.size === 0) {
    return;
  }
  let node = treeData;
  setNodeData(node, fileData);
  parts.forEach((part) => {
    if (!node.children) {
      node.children = [];
    }
    let child = node.children.find((child) => child.name === part);
    if (!child) {
      child = newNode(part);
      node.children.push(child);
    }
    node = child;
    setNodeData(child, fileData);
  });
}
function addSizeToTitle(node, total) {
  const { $area: size, coveredSize } = node.data;
  const titleParts = [
    node.name,
    helpers_1.formatBytes(size),
    `${helpers_1.formatPercent(size, total, 1)}%`,
  ];
  if (coveredSize !== undefined && node.children === undefined) {
    titleParts.push(`Coverage: ${helpers_1.formatPercent(coveredSize, size, 1)}%`);
  }
  node.name = titleParts.join(' • ');
  if (node.children) {
    node.children.forEach((child) => {
      addSizeToTitle(child, total);
    });
  }
}
//# sourceMappingURL=html.js.map
