var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJobStatus = getJobStatus;
exports.getJobsData = getJobsData;
exports.run = run;
exports.startJob = startJob;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

function run(name, data, options) {
  options = options || {};

  if (typeof name !== 'string' || name.length === 0) {
    throw new TypeError('Cloud function name must be a string.');
  }

  var requestOptions = {};

  if (options.useMasterKey) {
    requestOptions.useMasterKey = options.useMasterKey;
  }

  if (options.sessionToken) {
    requestOptions.sessionToken = options.sessionToken;
  }

  if (options.context && typeof options.context === 'object') {
    requestOptions.context = options.context;
  }

  return _CoreManager.default.getCloudController().run(name, data, requestOptions);
}

function getJobsData() {
  return _CoreManager.default.getCloudController().getJobsData({
    useMasterKey: true
  });
}

function startJob(name, data) {
  if (typeof name !== 'string' || name.length === 0) {
    throw new TypeError('Cloud job name must be a string.');
  }

  return _CoreManager.default.getCloudController().startJob(name, data, {
    useMasterKey: true
  });
}

function getJobStatus(jobStatusId) {
  var query = new _ParseQuery.default('_JobStatus');
  return query.get(jobStatusId, {
    useMasterKey: true
  });
}

var DefaultController = {
  run: function (name, data, options) {
    var RESTController = _CoreManager.default.getRESTController();

    var payload = (0, _encode.default)(data, true);
    var request = RESTController.request('POST', "functions/" + name, payload, options);
    return request.then(function (res) {
      if (typeof res === 'object' && Object.keys(res).length > 0 && !res.hasOwnProperty('result')) {
        throw new _ParseError.default(_ParseError.default.INVALID_JSON, 'The server returned an invalid response.');
      }

      var decoded = (0, _decode.default)(res);

      if (decoded && decoded.hasOwnProperty('result')) {
        return Promise.resolve(decoded.result);
      }

      return Promise.resolve(undefined);
    });
  },
  getJobsData: function (options) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'cloud_code/jobs/data', null, options);
  },
  startJob: function (name, data, options) {
    var RESTController = _CoreManager.default.getRESTController();

    var payload = (0, _encode.default)(data, true);
    return RESTController.request('POST', "jobs/" + name, payload, options);
  }
};

_CoreManager.default.setCloudController(DefaultController);