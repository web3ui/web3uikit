var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _EventEmitter = _interopRequireDefault(require("./EventEmitter"));

var _LiveQueryClient = _interopRequireDefault(require("./LiveQueryClient"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

function getLiveQueryClient() {
  return _CoreManager.default.getLiveQueryController().getDefaultLiveQueryClient();
}

var LiveQuery = new _EventEmitter.default();

LiveQuery.open = function () {
  var liveQueryClient;
  return _regenerator.default.async(function (_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _regenerator.default.awrap(getLiveQueryClient());

        case 2:
          liveQueryClient = _context.sent;
          liveQueryClient.open();

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

LiveQuery.close = function () {
  var liveQueryClient;
  return _regenerator.default.async(function (_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _regenerator.default.awrap(getLiveQueryClient());

        case 2:
          liveQueryClient = _context2.sent;
          liveQueryClient.close();

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

LiveQuery.on('error', function () {});
var _default = LiveQuery;
exports.default = _default;
var defaultLiveQueryClient;
var DefaultLiveQueryController = {
  setDefaultLiveQueryClient: function (liveQueryClient) {
    defaultLiveQueryClient = liveQueryClient;
  },
  getDefaultLiveQueryClient: function () {
    return function () {
      var _await$Promise$all, _await$Promise$all2, currentUser, installationId, sessionToken, liveQueryServerURL, serverURL, protocol, host, applicationId, javascriptKey, masterKey;

      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!defaultLiveQueryClient) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", defaultLiveQueryClient);

            case 2:
              _context3.next = 4;
              return _regenerator.default.awrap(Promise.all([_CoreManager.default.getUserController().currentUserAsync(), _CoreManager.default.getInstallationController().currentInstallationId()]));

            case 4:
              _await$Promise$all = _context3.sent;
              _await$Promise$all2 = (0, _slicedToArray2.default)(_await$Promise$all, 2);
              currentUser = _await$Promise$all2[0];
              installationId = _await$Promise$all2[1];
              sessionToken = currentUser ? currentUser.getSessionToken() : undefined;
              liveQueryServerURL = _CoreManager.default.get('LIVEQUERY_SERVER_URL');

              if (!(liveQueryServerURL && liveQueryServerURL.indexOf('ws') !== 0)) {
                _context3.next = 12;
                break;
              }

              throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');

            case 12:
              if (!liveQueryServerURL) {
                serverURL = _CoreManager.default.get('SERVER_URL');
                protocol = serverURL.indexOf('https') === 0 ? 'wss://' : 'ws://';
                host = serverURL.replace(/^https?:\/\//, '');
                liveQueryServerURL = protocol + host;

                _CoreManager.default.set('LIVEQUERY_SERVER_URL', liveQueryServerURL);
              }

              applicationId = _CoreManager.default.get('APPLICATION_ID');
              javascriptKey = _CoreManager.default.get('JAVASCRIPT_KEY');
              masterKey = _CoreManager.default.get('MASTER_KEY');
              defaultLiveQueryClient = new _LiveQueryClient.default({
                applicationId: applicationId,
                serverURL: liveQueryServerURL,
                javascriptKey: javascriptKey,
                masterKey: masterKey,
                sessionToken: sessionToken,
                installationId: installationId
              });
              defaultLiveQueryClient.on('error', function (error) {
                LiveQuery.emit('error', error);
              });
              defaultLiveQueryClient.on('open', function () {
                LiveQuery.emit('open');
              });
              defaultLiveQueryClient.on('close', function () {
                LiveQuery.emit('close');
              });
              return _context3.abrupt("return", defaultLiveQueryClient);

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  _clearCachedDefaultClient: function () {
    defaultLiveQueryClient = null;
  }
};

_CoreManager.default.setLiveQueryController(DefaultLiveQueryController);