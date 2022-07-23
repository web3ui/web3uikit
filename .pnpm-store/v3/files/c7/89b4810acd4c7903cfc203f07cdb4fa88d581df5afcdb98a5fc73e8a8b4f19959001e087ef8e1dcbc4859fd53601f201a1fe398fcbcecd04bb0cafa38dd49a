"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */


var Storage = {
  async: function ()
  /*: boolean*/
  {
    var controller = _CoreManager.default.getStorageController();

    return !!controller.async;
  },
  getItem: function (path
  /*: string*/
  )
  /*: ?string*/
  {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      throw new Error('Synchronous storage is not supported by the current storage controller');
    }

    return controller.getItem(path);
  },
  getItemAsync: function (path
  /*: string*/
  )
  /*: Promise<string>*/
  {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      return controller.getItemAsync(path);
    }

    return _promise.default.resolve(controller.getItem(path));
  },
  setItem: function (path
  /*: string*/
  , value
  /*: string*/
  )
  /*: void*/
  {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      throw new Error('Synchronous storage is not supported by the current storage controller');
    }

    return controller.setItem(path, value);
  },
  setItemAsync: function (path
  /*: string*/
  , value
  /*: string*/
  )
  /*: Promise<void>*/
  {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      return controller.setItemAsync(path, value);
    }

    return _promise.default.resolve(controller.setItem(path, value));
  },
  removeItem: function (path
  /*: string*/
  )
  /*: void*/
  {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      throw new Error('Synchronous storage is not supported by the current storage controller');
    }

    return controller.removeItem(path);
  },
  removeItemAsync: function (path
  /*: string*/
  )
  /*: Promise<void>*/
  {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      return controller.removeItemAsync(path);
    }

    return _promise.default.resolve(controller.removeItem(path));
  },
  getAllKeys: function ()
  /*: Array<string>*/
  {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      throw new Error('Synchronous storage is not supported by the current storage controller');
    }

    return controller.getAllKeys();
  },
  getAllKeysAsync: function ()
  /*: Promise<Array<string>>*/
  {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      return controller.getAllKeysAsync();
    }

    return _promise.default.resolve(controller.getAllKeys());
  },
  generatePath: function (path
  /*: string*/
  )
  /*: string*/
  {
    var _context;

    if (!_CoreManager.default.get('APPLICATION_ID')) {
      throw new Error('You need to call Moralis.start with an applicationId before using Moralis.');
    }

    if (typeof path !== 'string') {
      throw new Error('Tried to get a Storage path that was not a String.');
    }

    if (path[0] === '/') {
      path = path.substr(1);
    }

    return (0, _concat.default)(_context = "Parse/".concat(_CoreManager.default.get('APPLICATION_ID'), "/")).call(_context, path);
  },
  _clear: function () {
    var controller = _CoreManager.default.getStorageController();

    if (controller.hasOwnProperty('clear')) {
      controller.clear();
    }
  }
};
module.exports = Storage;

_CoreManager.default.setStorageController(require('./StorageController.weapp'));