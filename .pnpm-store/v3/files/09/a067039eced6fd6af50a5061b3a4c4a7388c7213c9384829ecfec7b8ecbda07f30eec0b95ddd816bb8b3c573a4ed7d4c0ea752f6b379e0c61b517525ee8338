"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ethers = require("ethers");

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
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

class MagicWeb3Connector extends _AbstractWeb3Connector.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "type", 'MagicLink');

    _defineProperty(this, "deactivate", async () => {
      this.unsubscribeToEvents(this.provider);

      if (this.magicUser) {
        await this.magicUser.user.logout();
      }

      this.account = null;
      this.chainId = null;
      this.provider = null;
    });
  }

  async activate({
    email,
    apiKey,
    network,
    newSession
  } = {}) {
    let magic = null;
    let ether = null;

    if (!email) {
      throw new Error('"email" not provided, please provide Email');
    }

    if (!apiKey) {
      throw new Error('"apiKey" not provided, please provide Api Key');
    }

    if (!network) {
      throw new Error('"network" not provided, please provide network');
    }

    let Magic;

    try {
      var _require;

      Magic = (_require = require('magic-sdk')) === null || _require === void 0 ? void 0 : _require.Magic;
    } catch (error) {// Do nothing. User might not need walletconnect
    }

    if (!Magic) {
      var _window;

      Magic = (_window = window) === null || _window === void 0 ? void 0 : _window.Magic;
    }

    if (!Magic) {
      throw new Error('Cannot enable via MagicLink: dependency "magic-sdk" is missing');
    }

    try {
      magic = new Magic(apiKey, {
        network: network
      });

      if (newSession) {
        var _magic;

        if ((_magic = magic) !== null && _magic !== void 0 && _magic.user) {
          try {
            var _magic2, _magic2$user;

            await ((_magic2 = magic) === null || _magic2 === void 0 ? void 0 : (_magic2$user = _magic2.user) === null || _magic2$user === void 0 ? void 0 : _magic2$user.logout());
          } catch (error) {// Do nothing
          }
        }
      }

      ether = new _ethers.ethers.providers.Web3Provider(magic.rpcProvider);
      await magic.auth.loginWithMagicLink({
        email: email
      });
    } catch (err) {
      throw new Error('Error during enable via MagicLink, please double check network and apikey');
    }

    const loggedIn = await magic.user.isLoggedIn();

    if (loggedIn) {
      const signer = ether.getSigner();
      const {
        chainId
      } = await ether.getNetwork();
      const address = (await signer.getAddress()).toLowerCase(); // Assign Constants

      this.account = address;
      this.provider = ether.provider;
      this.chainId = `0x${chainId.toString(16)}`; // Assign magic user for deactivation

      this.magicUser = magic;
      this.subscribeToEvents(this.provider);
      return {
        provider: this.provider,
        account: this.account,
        chainId: this.chainId
      };
    }

    throw new Error('Error during enable via MagicLink, login to magic failed');
  }

}

exports.default = MagicWeb3Connector;