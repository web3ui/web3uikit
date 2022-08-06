var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.track = track;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

function track(name, dimensions) {
  name = name || '';
  name = name.replace(/^\s*/, '');
  name = name.replace(/\s*$/, '');

  if (name.length === 0) {
    throw new TypeError('A name for the custom event must be provided');
  }

  for (var _key in dimensions) {
    if (typeof _key !== 'string' || typeof dimensions[_key] !== 'string') {
      throw new TypeError('track() dimensions expects keys and values of type "string".');
    }
  }

  return _CoreManager.default.getAnalyticsController().track(name, dimensions);
}

var DefaultController = {
  track: function (name, dimensions) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('POST', "events/" + name, {
      dimensions: dimensions
    });
  }
};

_CoreManager.default.setAnalyticsController(DefaultController);