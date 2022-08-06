"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Web3Auth = void 0;

var _ethers = require("ethers");

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class Web3Auth extends _AbstractWeb3Connector.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "type", 'web3Auth');

    _defineProperty(this, "connect", web3auth => {
      return new Promise((resolve, reject) => {
        (web3auth => {
          web3auth.loginModal.on('MODAL_VISIBILITY', async visibility => {
            if (!visibility) {
              reject(new Error('Web3Auth: User closed login modal.'));
            }
          });
        })(web3auth);

        web3auth.connect().then(resolve).catch(reject);
      });
    });

    _defineProperty(this, "activate", async ({
      chainId = '0x1',
      clientId,
      theme,
      appLogo,
      loginMethodsOrder,
      rpcTarget,
      displayName,
      blockExplorer,
      ticker,
      tickerName
    } = {}) => {
      // Checking that all params are given
      if (!clientId) {
        throw new Error('"clientId" not provided, please provide clientId');
      } // Initalizing Web3Auth and getting constants


      let Web3Auth;

      try {
        var _require;

        Web3Auth = (_require = require('@web3auth/web3auth')) === null || _require === void 0 ? void 0 : _require.Web3Auth;
      } catch (_unused) {// Do Nothing Individual Checks are done below
      } // Check if user is using CDN to import


      if (!Web3Auth) {
        var _window, _window$Web3auth;

        Web3Auth = (_window = window) === null || _window === void 0 ? void 0 : (_window$Web3auth = _window.Web3auth) === null || _window$Web3auth === void 0 ? void 0 : _window$Web3auth.Web3Auth;
      } // Error checking for if library is not installed


      if (!Web3Auth) {
        throw new Error('"@web3auth/web3auth" not installed, please install');
      } // Build config


      const ethChainConfig = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        chainNamespace: 'eip155',
        chainId: (0, _verifyChainId.default)(chainId)
      }, rpcTarget && {
        rpcTarget
      }), displayName && {
        displayName
      }), blockExplorer && {
        blockExplorer
      }), ticker && {
        ticker
      }), tickerName && {
        tickerName
      }); // Build Web3Auth


      let web3auth;

      try {
        web3auth = new Web3Auth({
          chainConfig: ethChainConfig,
          uiConfig: {
            theme: theme !== null && theme !== void 0 ? theme : 'dark',
            appLogo: appLogo !== null && appLogo !== void 0 ? appLogo : 'https://moralis.io/wp-content/uploads/2021/05/moralisWhiteLogo.svg',
            loginMethodsOrder
          },
          clientId: clientId
        });
      } catch (_unused2) {// Do Nothing error checked below
      }

      if (!web3auth) {
        throw new Error('Could not connect via Web3Auth, error during initializing Web3Auth');
      } // Authenticate


      await web3auth.initModal();
      let provider = null;
      provider = await this.connect(web3auth);

      if (!provider) {
        throw new Error('Could not connect via Web3Auth, error in connecting to provider');
      } // Gather User data


      try {
        var _web3auth, _web3auth2, _web3auth3;

        const isSocialLogin = (_web3auth = web3auth) !== null && _web3auth !== void 0 && _web3auth.provider ? false : true;
        const ether = new _ethers.ethers.providers.Web3Provider((_web3auth2 = web3auth) !== null && _web3auth2 !== void 0 && _web3auth2.provider ? web3auth.provider : web3auth);
        const signer = ether.getSigner();
        const values = await Promise.all([ether.getNetwork(), signer.getAddress()]);
        const providerChainId = values[0].chainId;
        this.account = values[1].toLocaleLowerCase();
        this.chainId = `0x${providerChainId.toString(16)}`;
        this.provider = isSocialLogin ? ether : (_web3auth3 = web3auth) === null || _web3auth3 === void 0 ? void 0 : _web3auth3.provider;
        this.web3Instance = web3auth;
        this.subscribeToEvents(this.provider);
        return {
          chainId: this.chainId,
          account: this.account,
          provider: this.provider
        };
      } catch (_unused3) {
        throw new Error('Could not connect via Web3Auth, error while authenticating');
      }
    });

    _defineProperty(this, "deactivate", async () => {
      this.unsubscribeToEvents(this.provider);

      if (this.web3Instance) {
        await this.web3Instance.logout();
      }

      this.account = null;
      this.chainId = null;
      this.provider = null;
    });
  }

}

exports.Web3Auth = Web3Auth;