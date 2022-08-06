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
// When there is no native storage interface, we default to an in-memory map

const memMap = {};
const StorageController = {
  async: 0,

  getItem(path
  /*: string*/
  )
  /*: ?string*/
  {
    if (memMap.hasOwnProperty(path)) {
      return memMap[path];
    }

    return null;
  },

  setItem(path
  /*: string*/
  , value
  /*: string*/
  ) {
    memMap[path] = String(value);
  },

  removeItem(path
  /*: string*/
  ) {
    delete memMap[path];
  },

  getAllKeys() {
    return Object.keys(memMap);
  },

  clear() {
    for (const key in memMap) {
      if (memMap.hasOwnProperty(key)) {
        delete memMap[key];
      }
    }
  }

};
module.exports = StorageController;