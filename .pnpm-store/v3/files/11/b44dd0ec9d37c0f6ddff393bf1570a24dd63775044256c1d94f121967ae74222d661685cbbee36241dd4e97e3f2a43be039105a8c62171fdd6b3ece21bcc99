"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

module.exports = /*#__PURE__*/function () {
  function XhrWeapp() {
    (0, _classCallCheck2.default)(this, XhrWeapp);
    this.UNSENT = 0;
    this.OPENED = 1;
    this.HEADERS_RECEIVED = 2;
    this.LOADING = 3;
    this.DONE = 4;
    this.header = {};
    this.readyState = this.DONE;
    this.status = 0;
    this.response = '';
    this.responseType = '';
    this.responseText = '';
    this.responseHeader = {};
    this.method = '';
    this.url = '';

    this.onabort = function () {};

    this.onprogress = function () {};

    this.onerror = function () {};

    this.onreadystatechange = function () {};

    this.requestTask = null;
  }

  (0, _createClass2.default)(XhrWeapp, [{
    key: "getAllResponseHeaders",
    value: function () {
      var header = '';

      for (var key in this.responseHeader) {
        var _context;

        header += (0, _concat.default)(_context = "".concat(key, ":")).call(_context, this.getResponseHeader(key), "\r\n");
      }

      return header;
    }
  }, {
    key: "getResponseHeader",
    value: function (key) {
      return this.responseHeader[key];
    }
  }, {
    key: "setRequestHeader",
    value: function (key, value) {
      this.header[key] = value;
    }
  }, {
    key: "open",
    value: function (method, url) {
      this.method = method;
      this.url = url;
    }
  }, {
    key: "abort",
    value: function () {
      if (!this.requestTask) {
        return;
      }

      this.requestTask.abort();
      this.status = 0;
      this.response = undefined;
      this.onabort();
      this.onreadystatechange();
    }
  }, {
    key: "send",
    value: function (data) {
      var _this = this;

      this.requestTask = wx.request({
        url: this.url,
        method: this.method,
        data: data,
        header: this.header,
        responseType: this.responseType,
        success: function (res) {
          _this.status = res.statusCode;
          _this.response = res.data;
          _this.responseHeader = res.header;
          _this.responseText = (0, _stringify.default)(res.data);
          _this.requestTask = null;

          _this.onreadystatechange();
        },
        fail: function (err) {
          _this.requestTask = null;

          _this.onerror(err);
        }
      });
      this.requestTask.onProgressUpdate(function (res) {
        var event = {
          lengthComputable: res.totalBytesExpectedToWrite !== 0,
          loaded: res.totalBytesWritten,
          total: res.totalBytesExpectedToWrite
        };

        _this.onprogress(event);
      });
    }
  }]);
  return XhrWeapp;
}();