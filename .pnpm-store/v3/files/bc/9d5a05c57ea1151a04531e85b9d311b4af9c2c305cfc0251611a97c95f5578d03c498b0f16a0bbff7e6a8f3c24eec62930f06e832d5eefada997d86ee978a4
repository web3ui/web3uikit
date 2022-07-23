var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _Storage = _interopRequireDefault(require("./Storage"));

var _require = require('uuid'),
    uuidv4 = _require.v4;

var iidCache = null;
var InstallationController = {
  currentInstallationId: function () {
    if (typeof iidCache === 'string') {
      return Promise.resolve(iidCache);
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
  _setInstallationIdCache: function (iid) {
    iidCache = iid;
  }
};
module.exports = InstallationController;