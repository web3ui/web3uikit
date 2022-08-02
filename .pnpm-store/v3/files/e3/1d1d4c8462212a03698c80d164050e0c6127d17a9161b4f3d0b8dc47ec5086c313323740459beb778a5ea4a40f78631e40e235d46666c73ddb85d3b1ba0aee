"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _EventEmitter2 = _interopRequireDefault(require("./EventEmitter"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _promiseUtils = require("./promiseUtils");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
/**
 * Creates a new LiveQuery Subscription.
 * Extends events.EventEmitter
 * <a href="https://nodejs.org/api/events.html#events_class_eventemitter">cloud functions</a>.
 *
 * <p>Response Object - Contains data from the client that made the request
 * <ul>
 * <li>clientId</li>
 * <li>installationId - requires Parse Server 4.0.0+</li>
 * </ul>
 * </p>
 *
 * <p>Open Event - When you call query.subscribe(), we send a subscribe request to
 * the LiveQuery server, when we get the confirmation from the LiveQuery server,
 * this event will be emitted. When the client loses WebSocket connection to the
 * LiveQuery server, we will try to auto reconnect the LiveQuery server. If we
 * reconnect the LiveQuery server and successfully resubscribe the ParseQuery,
 * you'll also get this event.
 *
 * <pre>
 * subscription.on('open', (response) => {
 *
 * });</pre></p>
 *
 * <p>Create Event - When a new ParseObject is created and it fulfills the ParseQuery you subscribe,
 * you'll get this event. The object is the ParseObject which is created.
 *
 * <pre>
 * subscription.on('create', (object, response) => {
 *
 * });</pre></p>
 *
 * <p>Update Event - When an existing ParseObject (original) which fulfills the ParseQuery you subscribe
 * is updated (The ParseObject fulfills the ParseQuery before and after changes),
 * you'll get this event. The object is the ParseObject which is updated.
 * Its content is the latest value of the ParseObject.
 *
 * Parse-Server 3.1.3+ Required for original object parameter
 *
 * <pre>
 * subscription.on('update', (object, original, response) => {
 *
 * });</pre></p>
 *
 * <p>Enter Event - When an existing ParseObject's (original) old value doesn't fulfill the ParseQuery
 * but its new value fulfills the ParseQuery, you'll get this event. The object is the
 * ParseObject which enters the ParseQuery. Its content is the latest value of the ParseObject.
 *
 * Parse-Server 3.1.3+ Required for original object parameter
 *
 * <pre>
 * subscription.on('enter', (object, original, response) => {
 *
 * });</pre></p>
 *
 *
 * <p>Update Event - When an existing ParseObject's old value fulfills the ParseQuery but its new value
 * doesn't fulfill the ParseQuery, you'll get this event. The object is the ParseObject
 * which leaves the ParseQuery. Its content is the latest value of the ParseObject.
 *
 * <pre>
 * subscription.on('leave', (object, response) => {
 *
 * });</pre></p>
 *
 *
 * <p>Delete Event - When an existing ParseObject which fulfills the ParseQuery is deleted, you'll
 * get this event. The object is the ParseObject which is deleted.
 *
 * <pre>
 * subscription.on('delete', (object, response) => {
 *
 * });</pre></p>
 *
 *
 * <p>Close Event - When the client loses the WebSocket connection to the LiveQuery
 * server and we stop receiving events, you'll get this event.
 *
 * <pre>
 * subscription.on('close', () => {
 *
 * });</pre></p>
 *
 * @alias Parse.LiveQuerySubscription
 */


var Subscription = /*#__PURE__*/function (_EventEmitter) {
  (0, _inherits2.default)(Subscription, _EventEmitter);

  var _super = _createSuper(Subscription);
  /*
   * @param {string} id - subscription id
   * @param {string} query - query to subscribe to
   * @param {string} sessionToken - optional session token
   */


  function Subscription(id, query, sessionToken) {
    var _this;

    (0, _classCallCheck2.default)(this, Subscription);
    _this = _super.call(this);
    _this.id = id;
    _this.query = query;
    _this.sessionToken = sessionToken;
    _this.subscribePromise = (0, _promiseUtils.resolvingPromise)();
    _this.subscribed = false; // adding listener so process does not crash
    // best practice is for developer to register their own listener

    _this.on('error', function () {});

    return _this;
  }
  /**
   * Close the subscription
   *
   * @returns {Promise}
   */


  (0, _createClass2.default)(Subscription, [{
    key: "unsubscribe",
    value: function ()
    /*: Promise*/
    {
      var _this2 = this;

      return _CoreManager.default.getLiveQueryController().getDefaultLiveQueryClient().then(function (liveQueryClient) {
        liveQueryClient.unsubscribe(_this2);

        _this2.emit('close');
      });
    }
  }]);
  return Subscription;
}(_EventEmitter2.default);

var _default = Subscription;
exports.default = _default;