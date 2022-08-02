"use strict";

var _LocalDatastoreUtils = require("./LocalDatastoreUtils");

var _Storage = _interopRequireDefault(require("./Storage"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
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


const LocalDatastoreController = {
  async fromPinWithName(name
  /*: string*/
  )
  /*: Array<Object>*/
  {
    const values = await _Storage.default.getItemAsync(name);

    if (!values) {
      return [];
    }

    const objects = JSON.parse(values);
    return objects;
  },

  pinWithName(name
  /*: string*/
  , value
  /*: any*/
  ) {
    const values = JSON.stringify(value);
    return _Storage.default.setItemAsync(name, values);
  },

  unPinWithName(name
  /*: string*/
  ) {
    return _Storage.default.removeItemAsync(name);
  },

  async getAllContents()
  /*: Object*/
  {
    const keys = await _Storage.default.getAllKeysAsync();
    return keys.reduce(async (previousPromise, key) => {
      const LDS = await previousPromise;

      if ((0, _LocalDatastoreUtils.isLocalDatastoreKey)(key)) {
        const value = await _Storage.default.getItemAsync(key);

        try {
          LDS[key] = JSON.parse(value);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error getAllContents: ', error);
        }
      }

      return LDS;
    }, Promise.resolve({}));
  },

  // Used for testing
  async getRawStorage()
  /*: Object*/
  {
    const keys = await _Storage.default.getAllKeysAsync();
    return keys.reduce(async (previousPromise, key) => {
      const LDS = await previousPromise;
      const value = await _Storage.default.getItemAsync(key);
      LDS[key] = value;
      return LDS;
    }, Promise.resolve({}));
  },

  async clear()
  /*: Promise*/
  {
    const keys = await _Storage.default.getAllKeysAsync();
    const toRemove = [];

    for (const key of keys) {
      if ((0, _LocalDatastoreUtils.isLocalDatastoreKey)(key)) {
        toRemove.push(key);
      }
    }

    const promises = toRemove.map(this.unPinWithName);
    return Promise.all(promises);
  }

};
module.exports = LocalDatastoreController;