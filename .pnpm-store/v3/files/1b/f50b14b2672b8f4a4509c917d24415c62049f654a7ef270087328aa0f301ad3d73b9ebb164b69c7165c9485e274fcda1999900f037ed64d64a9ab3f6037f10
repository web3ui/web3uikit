"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSigningData = _interopRequireDefault(require("./createSigningData"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

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

const base64 = {
  decode: s => Uint8Array.from(atob(s), c => c.charCodeAt(0)),
  encode: b => btoa(String.fromCharCode(...new Uint8Array(b)))
};

class MoralisSol {
  static async authenticate(options) {
    var _user$get;

    const phantom = await MoralisSol.enable();
    if (!phantom) throw new Error('Phantom wallet not available');
    const solAddress = phantom.publicKey.toString();
    if (!solAddress) throw new Error('Address not found');
    const message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisSol.getSigningData();
    const data = await (0, _createSigningData.default)(message);
    const signature = await MoralisSol.sign(data);
    const user = await _ParseUser.default.logInWith('moralisSol', {
      authData: {
        id: solAddress,
        signature,
        data
      }
    });
    await user.setACL(new _ParseACL.default(user));
    if (!user) throw new Error('Could not get user');
    user.set('solAccounts', uniq([].concat([solAddress], (_user$get = user.get('solAccounts')) !== null && _user$get !== void 0 ? _user$get : [])));
    user.set('solAddress', solAddress);
    await user.save();
    return user;
  }

  static async link(account, options) {
    var _user$get2;

    const message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisSol.getSigningData();
    const user = await _ParseUser.default.current();
    const solAddress = account;

    const SolAddress = _ParseObject.default.extend('_SolAddress');

    const query = new _ParseQuery.default(SolAddress);
    const solAddressRecord = await query.get(solAddress).catch(() => null);

    if (!solAddressRecord) {
      const data = await (0, _createSigningData.default)(message);
      const signature = await MoralisSol.sign(solAddress, data);
      await user.linkWith('moralisSol', {
        authData: {
          id: solAddress,
          signature,
          data
        }
      });
    }

    user.set('SolAccounts', uniq([solAddress].concat((_user$get2 = user.get('SolAccounts')) !== null && _user$get2 !== void 0 ? _user$get2 : [])));
    user.set('solAddress', solAddress);
    await user.save();
    return user;
  }

  static async unlink(account) {
    var _user$get3;

    const accountsLower = account;

    const SolAddress = _ParseObject.default.extend('_SolAddress');

    const query = new _ParseQuery.default(SolAddress);
    const solAddressRecord = await query.get(accountsLower);
    await solAddressRecord.destroy();
    const user = await _ParseUser.default.current();
    const accounts = (_user$get3 = user.get('solAccounts')) !== null && _user$get3 !== void 0 ? _user$get3 : [];
    const nextAccounts = accounts.filter(v => v !== accountsLower);
    user.set('solAccounts', nextAccounts);
    user.set('solAddress', nextAccounts[0]);
    await user._unlinkFrom('moralisSol');
    await user.save();
    return user;
  }

  static async sign(message) {
    const phantom = await MoralisSol.enable();
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await phantom.signMessage(encodedMessage, 'utf8');
    return base64.encode(signedMessage.signature);
  }

  static getSigningData() {
    return 'Moralis Authentication';
  }

}

_defineProperty(MoralisSol, "enable", async () => {
  if (window && 'solana' in window) {
    const provider = window.solana;

    if (provider.isPhantom) {
      try {
        await provider.connect({
          onlyIfTrusted: true
        });
      } catch (error) {
        if (error.message === 'User rejected the request.') await provider.connect();else throw error;
      }

      return provider;
    }
  }

  throw new Error('Phantom wallet not available');
});

function toHexString(buffer
/*: Buffer*/
) {
  return buffer.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
}

function uniq(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}

var _default = MoralisSol;
exports.default = _default;