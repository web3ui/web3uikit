"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = createSigningData;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _Cloud = require("./Cloud");
/**
 * Creates the data for the authentication message by extending the message
 * with a unique string with applicationId and current time
 */


function createSigningData() {
  return _createSigningData.apply(this, arguments);
}

function _createSigningData() {
  _createSigningData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(message) {
    var data, _context, _context2, _yield$run, dateTime, applicationId;

    return _regenerator.default.wrap(function (_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _Cloud.run)('getServerTime');

          case 3:
            _yield$run = _context3.sent;
            dateTime = _yield$run.dateTime;
            applicationId = _CoreManager.default.get('APPLICATION_ID');
            data = (0, _concat.default)(_context = (0, _concat.default)(_context2 = "".concat(message, "\n\nId: ")).call(_context2, applicationId, ":")).call(_context, dateTime);
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            data = "".concat(message);

          case 12:
            return _context3.abrupt("return", data);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _createSigningData.apply(this, arguments);
}