"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

module.exports = /*#__PURE__*/function () {
  function SocketWeapp(serverURL) {
    var _this = this;

    (0, _classCallCheck2.default)(this, SocketWeapp);

    this.onopen = function () {};

    this.onmessage = function () {};

    this.onclose = function () {};

    this.onerror = function () {};

    wx.onSocketOpen(function () {
      _this.onopen();
    });
    wx.onSocketMessage(function (msg) {
      _this.onmessage(msg);
    });
    wx.onSocketClose(function () {
      _this.onclose();
    });
    wx.onSocketError(function (error) {
      _this.onerror(error);
    });
    wx.connectSocket({
      url: serverURL
    });
  }

  (0, _createClass2.default)(SocketWeapp, [{
    key: "send",
    value: function (data) {
      wx.sendSocketMessage({
        data: data
      });
    }
  }, {
    key: "close",
    value: function () {
      wx.closeSocket();
    }
  }]);
  return SocketWeapp;
}();