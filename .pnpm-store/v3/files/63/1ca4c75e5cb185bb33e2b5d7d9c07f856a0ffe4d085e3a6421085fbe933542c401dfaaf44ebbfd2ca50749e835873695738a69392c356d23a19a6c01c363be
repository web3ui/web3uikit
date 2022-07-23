"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/keys"));
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
  async: 0,
  getItem: function (path
  /*: string*/
  )
  /*: ?string*/
  {
    return wx.getStorageSync(path);
  },
  setItem: function (path
  /*: string*/
  , value
  /*: string*/
  ) {
    try {
      wx.setStorageSync(path, value);
    } catch (e) {// Quota exceeded
    }
  },
  removeItem: function (path
  /*: string*/
  ) {
    wx.removeStorageSync(path);
  },
  getAllKeys: function () {
    var res = wx.getStorageInfoSync();
    return (0, _keys.default)(res);
  },
  clear: function () {
    wx.clearStorageSync();
  }
};
module.exports = StorageController;