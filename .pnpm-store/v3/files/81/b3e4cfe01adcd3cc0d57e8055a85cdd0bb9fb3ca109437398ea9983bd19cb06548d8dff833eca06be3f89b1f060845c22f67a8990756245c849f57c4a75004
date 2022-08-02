var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var Storage = {
  async: function () {
    var controller = _CoreManager.default.getStorageController();

    return !!controller.async;
  },
  getItem: function (path) {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      throw new Error('Synchronous storage is not supported by the current storage controller');
    }

    return controller.getItem(path);
  },
  getItemAsync: function (path) {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      return controller.getItemAsync(path);
    }

    return Promise.resolve(controller.getItem(path));
  },
  setItem: function (path, value) {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      throw new Error('Synchronous storage is not supported by the current storage controller');
    }

    return controller.setItem(path, value);
  },
  setItemAsync: function (path, value) {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      return controller.setItemAsync(path, value);
    }

    return Promise.resolve(controller.setItem(path, value));
  },
  removeItem: function (path) {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      throw new Error('Synchronous storage is not supported by the current storage controller');
    }

    return controller.removeItem(path);
  },
  removeItemAsync: function (path) {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      return controller.removeItemAsync(path);
    }

    return Promise.resolve(controller.removeItem(path));
  },
  getAllKeys: function () {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      throw new Error('Synchronous storage is not supported by the current storage controller');
    }

    return controller.getAllKeys();
  },
  getAllKeysAsync: function () {
    var controller = _CoreManager.default.getStorageController();

    if (controller.async === 1) {
      return controller.getAllKeysAsync();
    }

    return Promise.resolve(controller.getAllKeys());
  },
  generatePath: function (path) {
    if (!_CoreManager.default.get('APPLICATION_ID')) {
      throw new Error('You need to call Moralis.start with an applicationId before using Moralis.');
    }

    if (typeof path !== 'string') {
      throw new Error('Tried to get a Storage path that was not a String.');
    }

    if (path[0] === '/') {
      path = path.substr(1);
    }

    return "Parse/" + _CoreManager.default.get('APPLICATION_ID') + "/" + path;
  },
  _clear: function () {
    var controller = _CoreManager.default.getStorageController();

    if (controller.hasOwnProperty('clear')) {
      controller.clear();
    }
  }
};
module.exports = Storage;

_CoreManager.default.setStorageController(require('./StorageController.react-native'));