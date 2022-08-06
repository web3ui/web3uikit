var StorageController = {
  async: 0,
  getItem: function (path) {
    return localStorage.getItem(path);
  },
  setItem: function (path, value) {
    try {
      localStorage.setItem(path, value);
    } catch (e) {
      console.log(e.message);
    }
  },
  removeItem: function (path) {
    localStorage.removeItem(path);
  },
  getAllKeys: function () {
    var keys = [];

    for (var i = 0; i < localStorage.length; i += 1) {
      keys.push(localStorage.key(i));
    }

    return keys;
  },
  clear: function () {
    localStorage.clear();
  }
};
module.exports = StorageController;