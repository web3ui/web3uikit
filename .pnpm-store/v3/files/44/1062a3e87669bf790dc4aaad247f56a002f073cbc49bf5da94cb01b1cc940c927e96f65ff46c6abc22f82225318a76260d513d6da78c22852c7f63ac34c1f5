"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _createSigningData = _interopRequireDefault(require("./createSigningData"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global window */


let web3EnablePromise = null;

class MoralisDot {
  static web3IsInjected() {
    return Object.keys(window.injectedWeb3).length !== 0;
  }

  static async enable(opts, type = 'polkadot-js') {
    var _window$injectedWeb, _window$injectedWeb$t;

    if (web3EnablePromise) return web3EnablePromise;
    web3EnablePromise = (_window$injectedWeb = window.injectedWeb3) === null || _window$injectedWeb === void 0 ? void 0 : (_window$injectedWeb$t = _window$injectedWeb[type]) === null || _window$injectedWeb$t === void 0 ? void 0 : _window$injectedWeb$t.enable(opts);
    return web3EnablePromise;
  }

  static async authenticate(opts) {
    var _opts$name;

    MoralisDot.web3 = await MoralisDot.enable((_opts$name = opts === null || opts === void 0 ? void 0 : opts.name) !== null && _opts$name !== void 0 ? _opts$name : 'Moralis');
    const allAccounts = await MoralisDot.web3.accounts.get();
    const account = allAccounts[0];
    const address = account === null || account === void 0 ? void 0 : account.address;
    if (!address) throw new Error('Address not found');
    const dotAddress = address;
    const message = MoralisDot.getSigningData();
    const data = await (0, _createSigningData.default)(message);
    const signature = await MoralisDot.sign(address, data);
    const user = await _ParseUser.default.logInWith('moralisDot', {
      authData: {
        id: dotAddress,
        signature,
        data
      }
    });
    if (!user) throw new Error('Could not get user');
    await user.setACL(new _ParseACL.default(user));
    user.addAllUnique('dotAccounts', [dotAddress]);
    user.set('dotAddress', dotAddress);
    await user.save();
    return user;
  }

  static async link(account, options) {
    const message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisDot.getSigningData();
    const user = await _ParseUser.default.current();
    const dotAddress = account;

    const DotAddress = _ParseObject.default.extend('_DotAddress');

    const query = new _ParseQuery.default(DotAddress);
    const dotAddressRecord = await query.get(dotAddress).catch(() => null);

    if (!dotAddressRecord) {
      const data = await (0, _createSigningData.default)(message);
      const signature = await MoralisDot.sign(dotAddress, data);
      await user.linkWith('moralisDot', {
        authData: {
          id: dotAddress,
          signature,
          data
        }
      });
    }

    user.addAllUnique('dotAccounts', [dotAddress]);
    user.set('dotAddress', dotAddress);
    await user.save();
    return user;
  }

  static async unlink(account) {
    var _user$get;

    const accountsLower = account;

    const DotAddress = _ParseObject.default.extend('_DotAddress');

    const query = new _ParseQuery.default(DotAddress);
    const dotAddressRecord = await query.get(accountsLower);
    await dotAddressRecord.destroy();
    const user = await _ParseUser.default.current();
    const accounts = (_user$get = user.get('dotAccounts')) !== null && _user$get !== void 0 ? _user$get : [];
    const nextAccounts = accounts.filter(v => v !== accountsLower);
    user.set('dotAccounts', nextAccounts);
    user.set('dotAddress', nextAccounts[0]);
    await user._unlinkFrom('moralisDot');
    await user.save();
    return user;
  }

  static async sign(address, data) {
    if (!web3EnablePromise) throw new Error('Must enable MoralisDot');
    const web3 = await web3EnablePromise;

    if (!web3.signer) {
      throw new Error('No signer found');
    }

    const {
      signature
    } = await web3.signer.signRaw({
      address,
      data: stringToHex(data),
      type: 'bytes'
    });
    return signature;
  }

  static getSigningData() {
    return 'Moralis Authentication';
  }

}

var _default = MoralisDot;
exports.default = _default;

function stringToHex(value) {
  return toHexString(stringToU8a(value));
}

function stringToU8a(value) {
  const u8a = new Uint8Array(value.length);

  for (let i = 0; i < value.length; i++) {
    u8a[i] = value.charCodeAt(i);
  }

  return u8a;
}

function toHexString(byteArray) {
  return `0x${Array.from(byteArray, byte => {
    // eslint-disable-next-line no-bitwise
    return `0${(byte & 0xff).toString(16)}`.slice(-2);
  }).join('')}`;
}