var StorageController = {
  async: 0,
  getItem: function (path) {
    return wx.getStorageSync(path);
  },
  setItem: function (path, value) {
    try {
      wx.setStorageSync(path, value);
    } catch (e) {}
  },
  removeItem: function (path) {
    wx.removeStorageSync(path);
  },
  getAllKeys: function () {
    var res = wx.getStorageInfoSync();
    return res.keys;
  },
  clear: function () {
    wx.clearStorageSync();
  }
};
module.exports = StorageController;