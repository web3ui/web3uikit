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

/* global localStorage */

const StorageController = {
  async: 0,

  getItem(path
  /*: string*/
  )
  /*: ?string*/
  {
    return localStorage.getItem(path);
  },

  setItem(path
  /*: string*/
  , value
  /*: string*/
  ) {
    try {
      localStorage.setItem(path, value);
    } catch (e) {
      // Quota exceeded, possibly due to Safari Private Browsing mode
      // eslint-disable-next-line no-console
      console.log(e.message);
    }
  },

  removeItem(path
  /*: string*/
  ) {
    localStorage.removeItem(path);
  },

  getAllKeys() {
    const keys = [];

    for (let i = 0; i < localStorage.length; i += 1) {
      keys.push(localStorage.key(i));
    }

    return keys;
  },

  clear() {
    localStorage.clear();
  }

};
module.exports = StorageController;