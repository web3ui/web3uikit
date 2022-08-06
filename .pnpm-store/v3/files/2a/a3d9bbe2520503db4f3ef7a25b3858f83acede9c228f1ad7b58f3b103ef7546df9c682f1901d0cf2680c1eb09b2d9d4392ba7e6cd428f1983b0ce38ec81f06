"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

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
 * @private
 */


var StorageController = {
  async: 1,
  getAsyncStorage: function ()
  /*: any*/
  {
    return _CoreManager.default.getAsyncStorage();
  },
  getItemAsync: function (path
  /*: string*/
  )
  /*: Promise*/
  {
    var _this = this;

    return new _promise.default(function (resolve, reject) {
      _this.getAsyncStorage().getItem(path, function (err, value) {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  },
  setItemAsync: function (path
  /*: string*/
  , value
  /*: string*/
  )
  /*: Promise*/
  {
    var _this2 = this;

    return new _promise.default(function (resolve, reject) {
      _this2.getAsyncStorage().setItem(path, value, function (err, value) {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  },
  removeItemAsync: function (path
  /*: string*/
  )
  /*: Promise*/
  {
    var _this3 = this;

    return new _promise.default(function (resolve, reject) {
      _this3.getAsyncStorage().removeItem(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
  getAllKeysAsync: function ()
  /*: Promise*/
  {
    var _this4 = this;

    return new _promise.default(function (resolve, reject) {
      _this4.getAsyncStorage().getAllKeys(function (err, keys) {
        if (err) {
          reject(err);
        } else {
          resolve(keys);
        }
      });
    });
  },
  multiGet: function (keys
  /*: Array<string>*/
  )
  /*: Promise<Array<Array<string>>>*/
  {
    var _this5 = this;

    return new _promise.default(function (resolve, reject) {
      _this5.getAsyncStorage().multiGet(keys, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  multiRemove: function (keys
  /*: Array<string>*/
  )
  /*: Promise*/
  {
    var _this6 = this;

    return new _promise.default(function (resolve, reject) {
      _this6.getAsyncStorage().multiRemove(keys, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve(keys);
        }
      });
    });
  },
  clear: function () {
    return this.getAsyncStorage().clear();
  }
};
module.exports = StorageController;