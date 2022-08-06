var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var StorageController = {
  async: 1,
  getAsyncStorage: function () {
    return _CoreManager.default.getAsyncStorage();
  },
  getItemAsync: function (path) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this.getAsyncStorage().getItem(path, function (err, value) {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  },
  setItemAsync: function (path, value) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      _this2.getAsyncStorage().setItem(path, value, function (err, value) {
        if (err) {
          reject(err);
        } else {
          resolve(value);
        }
      });
    });
  },
  removeItemAsync: function (path) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      _this3.getAsyncStorage().removeItem(path, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
  getAllKeysAsync: function () {
    var _this4 = this;

    return new Promise(function (resolve, reject) {
      _this4.getAsyncStorage().getAllKeys(function (err, keys) {
        if (err) {
          reject(err);
        } else {
          resolve(keys);
        }
      });
    });
  },
  multiGet: function (keys) {
    var _this5 = this;

    return new Promise(function (resolve, reject) {
      _this5.getAsyncStorage().multiGet(keys, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  multiRemove: function (keys) {
    var _this6 = this;

    return new Promise(function (resolve, reject) {
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