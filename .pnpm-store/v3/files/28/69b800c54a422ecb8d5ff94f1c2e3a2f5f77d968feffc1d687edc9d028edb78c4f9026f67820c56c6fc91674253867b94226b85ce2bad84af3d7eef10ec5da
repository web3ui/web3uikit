"use strict";
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

const StorageController = {
  async: 0,

  getItem(path
  /*: string*/
  )
  /*: ?string*/
  {
    return wx.getStorageSync(path);
  },

  setItem(path
  /*: string*/
  , value
  /*: string*/
  ) {
    try {
      wx.setStorageSync(path, value);
    } catch (e) {// Quota exceeded
    }
  },

  removeItem(path
  /*: string*/
  ) {
    wx.removeStorageSync(path);
  },

  getAllKeys() {
    const res = wx.getStorageInfoSync();
    return res.keys;
  },

  clear() {
    wx.clearStorageSync();
  }

};
module.exports = StorageController;