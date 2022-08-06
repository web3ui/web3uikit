"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

require("core-js/modules/es.weak-map.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.object.get-prototype-of.js");

require("core-js/modules/es.reflect.construct.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = void 0;
exports.renderToDOM = renderToDOM;

require("regenerator-runtime/runtime.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.map.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.string.starts-with.js");

require("core-js/modules/es.array.concat.js");

var _global = _interopRequireDefault(require("global"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireWildcard(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var FRAMEWORK_OPTIONS = _global.default.FRAMEWORK_OPTIONS; // A map of all rendered React 18 nodes

var nodes = new Map();

var render = function render(args, context) {
  var id = context.id,
      Component = context.component;

  if (!Component) {
    throw new Error("Unable to render story ".concat(id, " as the component annotation is missing from the default export"));
  }

  return /*#__PURE__*/_react.default.createElement(Component, args);
};

exports.render = render;

var renderElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(node, el) {
    var root;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getReactRoot(el);

          case 2:
            root = _context.sent;
            return _context.abrupt("return", new Promise(function (resolve) {
              if (root) {
                root.render(node);
                setTimeout(function () {
                  resolve(null);
                }, 0);
              } else {
                _reactDom.default.render(node, el, function () {
                  return resolve(null);
                });
              }
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderElement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var canUseNewReactRootApi = _reactDom.version && (_reactDom.version.startsWith('18') || _reactDom.version.startsWith('0.0.0'));

var shouldUseNewRootApi = (FRAMEWORK_OPTIONS === null || FRAMEWORK_OPTIONS === void 0 ? void 0 : FRAMEWORK_OPTIONS.legacyRootApi) !== true;
var isUsingNewReactRootApi = shouldUseNewRootApi && canUseNewReactRootApi;

var unmountElement = function unmountElement(el) {
  var root = nodes.get(el);

  if (root && isUsingNewReactRootApi) {
    root.unmount();
    nodes.delete(el);
  } else {
    _reactDom.default.unmountComponentAtNode(el);
  }
};

var getReactRoot = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(el) {
    var root, reactDomClient;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (isUsingNewReactRootApi) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", null);

          case 2:
            root = nodes.get(el);

            if (root) {
              _context2.next = 9;
              break;
            }

            _context2.next = 6;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require('react-dom/client'));
            });

          case 6:
            reactDomClient = _context2.sent.default;
            root = reactDomClient.createRoot(el);
            nodes.set(el, root);

          case 9:
            return _context2.abrupt("return", root);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getReactRoot(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var ErrorBoundary = /*#__PURE__*/function (_ReactComponent) {
  _inherits(ErrorBoundary, _ReactComponent);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var hasError = this.state.hasError;
      var showMain = this.props.showMain;

      if (!hasError) {
        showMain();
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      var showException = this.props.showException; // message partially duplicates stack, strip it

      showException(err);
    }
  }, {
    key: "render",
    value: function render() {
      var hasError = this.state.hasError;
      var children = this.props.children;
      return hasError ? null : children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(_react.Component);

var Wrapper = FRAMEWORK_OPTIONS !== null && FRAMEWORK_OPTIONS !== void 0 && FRAMEWORK_OPTIONS.strictMode ? _react.StrictMode : _react.Fragment;

function renderToDOM(_x4, _x5) {
  return _renderToDOM.apply(this, arguments);
}

function _renderToDOM() {
  _renderToDOM = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3, domElement) {
    var storyContext, unboundStoryFn, showMain, showException, forceRemount, Story, content, element;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            storyContext = _ref3.storyContext, unboundStoryFn = _ref3.unboundStoryFn, showMain = _ref3.showMain, showException = _ref3.showException, forceRemount = _ref3.forceRemount;
            Story = unboundStoryFn;
            content = /*#__PURE__*/_react.default.createElement(ErrorBoundary, {
              showMain: showMain,
              showException: showException
            }, /*#__PURE__*/_react.default.createElement(Story, storyContext)); // For React 15, StrictMode & Fragment doesn't exists.

            element = Wrapper ? /*#__PURE__*/_react.default.createElement(Wrapper, null, content) : content; // In most cases, we need to unmount the existing set of components in the DOM node.
            // Otherwise, React may not recreate instances for every story run.
            // This could leads to issues like below:
            // https://github.com/storybookjs/react-storybook/issues/81
            // (This is not the case when we change args or globals to the story however)

            if (forceRemount) {
              unmountElement(domElement);
            }

            _context3.next = 7;
            return renderElement(element, domElement);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _renderToDOM.apply(this, arguments);
}