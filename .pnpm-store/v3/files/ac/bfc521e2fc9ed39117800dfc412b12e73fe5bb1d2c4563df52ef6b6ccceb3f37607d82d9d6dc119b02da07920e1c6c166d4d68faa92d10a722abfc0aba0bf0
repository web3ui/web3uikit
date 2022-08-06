function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import "core-js/modules/es.promise.js";
import "core-js/modules/es.symbol.description.js";

/* eslint import/prefer-default-export: "off" */
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import globby from 'globby';
import { sync as spawnSync } from 'cross-spawn';
import { jscodeshiftToPrettierParser } from './lib/utils';
export { default as updateOrganisationName, packageNames } from './transforms/update-organisation-name';
export { default as updateAddonInfo } from './transforms/update-addon-info';
var TRANSFORM_DIR = `${__dirname}/transforms`;
export function listCodemods() {
  return fs.readdirSync(TRANSFORM_DIR).filter(function (fname) {
    return fname.endsWith('.js');
  }).map(function (fname) {
    return fname.slice(0, -3);
  });
}
var renameAsync = promisify(fs.rename);

async function renameFile(file, from, to, {
  logger: logger
}) {
  var newFile = file.replace(from, to);
  logger.log(`Rename: ${file} ${newFile}`);
  return renameAsync(file, newFile);
}

export async function runCodemod(codemod, {
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
    var extension = path.extname(glob).slice(1);
    var knownParser = jscodeshiftToPrettierParser(extension);
    if (knownParser !== 'babel') inferredParser = extension;
  }

  var files = await globby([glob, '!**/node_modules', '!**/dist']);
  logger.log(`=> Applying ${codemod}: ${files.length} files`);

  if (!dryRun) {
    var parserArgs = inferredParser ? ['--parser', inferredParser] : [];
    spawnSync('npx', ['jscodeshift', '-t', `${TRANSFORM_DIR}/${codemod}.js`, ...parserArgs, ...files], {
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