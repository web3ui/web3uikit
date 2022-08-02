var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSigningData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _Cloud = require("./Cloud");

function createSigningData(message) {
  var data, _await$run, dateTime, applicationId;

  return _regenerator.default.async(function (_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _regenerator.default.awrap((0, _Cloud.run)('getServerTime'));

        case 3:
          _await$run = _context.sent;
          dateTime = _await$run.dateTime;
          applicationId = _CoreManager.default.get('APPLICATION_ID');
          data = message + "\n\nId: " + applicationId + ":" + dateTime;
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          data = "" + message;

        case 12:
          return _context.abrupt("return", data);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]], Promise);
}