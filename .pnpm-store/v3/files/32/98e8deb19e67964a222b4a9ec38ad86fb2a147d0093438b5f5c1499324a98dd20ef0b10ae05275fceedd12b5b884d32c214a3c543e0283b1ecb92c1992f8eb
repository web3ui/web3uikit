var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = send;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

function send(data) {
  if (data.where && data.where instanceof _ParseQuery.default) {
    data.where = data.where.toJSON().where;
  }

  if (data.push_time && typeof data.push_time === 'object') {
    data.push_time = data.push_time.toJSON();
  }

  if (data.expiration_time && typeof data.expiration_time === 'object') {
    data.expiration_time = data.expiration_time.toJSON();
  }

  if (data.expiration_time && data.expiration_interval) {
    throw new Error('expiration_time and expiration_interval cannot both be set.');
  }

  return _CoreManager.default.getPushController().send(data);
}

var DefaultController = {
  send: function (data) {
    return _CoreManager.default.getRESTController().request('POST', 'push', data, {
      useMasterKey: true
    });
  }
};

_CoreManager.default.setPushController(DefaultController);