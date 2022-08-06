"use strict";

require("core-js/modules/es.symbol.description.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listCodemods = listCodemods;
Object.defineProperty(exports, "packageNames", {
  enumerable: true,
  get: function () {
    return _updateOrganisationName.packageNames;
  }
});
exports.runCodemod = runCodemod;
Object.defineProperty(exports, "updateAddonInfo", {
  enumerable: true,
  get: function () {
    return _updateAddonInfo.default;
  }
});
Object.defineProperty(exports, "updateOrganisationName", {
  enumerable: true,
  get: function () {
    return _updateOrganisationName.default;
  }
});

require("core-js/modules/es.promise.js");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _util = require("util");

var _globby = _interopRequireDefault(require("globby"));

var _crossSpawn = require("cross-spawn");

var _utils = require("./lib/utils");

var _updateOrganisationName = _interopRequireWildcard(require("./transforms/update-organisation-name"));

var _updateAddonInfo = _interopRequireDefault(require("./transforms/update-addon-info"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TRANSFORM_DIR = `${__dirname}/transforms`;

function listCodemods() {
  return _fs.default.readdirSync(TRANSFORM_DIR).filter(function (fname) {
    return fname.endsWith('.js');
  }).map(function (fname) {
    return fname.slice(0, -3);
  });
}

var renameAsync = (0, _util.promisify)(_fs.default.rename);

async function renameFile(file, from, to, {
  logger: logger
}) {
  var newFile = file.replace(from, to);
  logger.log(`Rename: ${file} ${newFile}`);
  return renameAsync(file, newFile);
}

async function runCodemod(codemod, {
  glob: glob,
  logger: logger,
  dryRun: dryRun,
  rename: rename,
  parser: parser
}) {
  var codemods = listCodemods();

  if (!codemods.includes(codemod)) {
    throw new Error(`Unknown codemod ${codemod}. Run --list for options.`);
  }

  var renameParts = null;

  if (rename) {
    renameParts = rename.split(':');

    if (renameParts.length !== 2) {
      throw new Error(`Codemod rename: expected format "from:to", got "${rename}"`);
    }
  } // jscodeshift/prettier know how to handle .ts/.tsx extensions,
  // so if the user uses one of those globs, we can auto-infer


  var inferredParser = parser;

  if (!parser) {
    var extension = _path.default.extname(glob).slice(1);

    var knownParser = (0, _utils.jscodeshiftToPrettierParser)(extension);
    if (knownParser !== 'babel') inferredParser = extension;
  }

  var files = await (0, _globby.default)([glob, '!**/node_modules', '!**/dist']);
  logger.log(`=> Applying ${codemod}: ${files.length} files`);

  if (!dryRun) {
    var parserArgs = inferredParser ? ['--parser', inferredParser] : [];
    (0, _crossSpawn.sync)('npx', ['jscodeshift', '-t', `${TRANSFORM_DIR}/${codemod}.js`, ...parserArgs, ...files], {
      stdio: 'inherit'
    });
  }

  if (renameParts) {
    var _renameParts = renameParts,
        _renameParts2 = _slicedToArray(_renameParts, 2),
        from = _renameParts2[0],
        to = _renameParts2[1];

    logger.log(`=> Renaming ${rename}: ${files.length} files`);
    await Promise.all(files.map(function (file) {
      return renameFile(file, new RegExp(`${from}$`), to, {
        logger: logger
      });
    }));
  }
}