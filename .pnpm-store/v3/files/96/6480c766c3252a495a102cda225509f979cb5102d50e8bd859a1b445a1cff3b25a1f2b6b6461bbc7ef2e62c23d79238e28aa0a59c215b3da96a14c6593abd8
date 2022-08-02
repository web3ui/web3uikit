var memMap = {};
var StorageController = {
  async: 0,
  getItem: function (path) {
    if (memMap.hasOwnProperty(path)) {
      return memMap[path];
    }

    return null;
  },
  setItem: function (path, value) {
    memMap[path] = String(value);
  },
  removeItem: function (path) {
    delete memMap[path];
  },
  getAllKeys: function () {
    return Object.keys(memMap);
  },
  clear: function () {
    for (var key in memMap) {
      if (memMap.hasOwnProperty(key)) {
        delete memMap[key];
      }
    }
  }
};
module.exports = StorageController;