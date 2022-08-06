"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _Storage = _interopRequireDefault(require("./Storage"));
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


var _require = require('uuid'),
    uuidv4 = _require.v4;

var iidCache = null;
var InstallationController = {
  currentInstallationId: function ()
  /*: Promise<string>*/
  {
    if (typeof iidCache === 'string') {
      return _promise.default.resolve(iidCache);
    }

    var path = _Storage.default.generatePath('installationId');

    return _Storage.default.getItemAsync(path).then(function (iid) {
      if (!iid) {
        iid = uuidv4();
        return _Storage.default.setItemAsync(path, iid).then(function () {
          iidCache = iid;
          return iid;
        });
      }

      iidCache = iid;
      return iid;
    });
  },
  _clearCache: function () {
    iidCache = null;
  },
  _setInstallationIdCache: function (iid
  /*: string*/
  ) {
    iidCache = iid;
  }
};
module.exports = InstallationController;