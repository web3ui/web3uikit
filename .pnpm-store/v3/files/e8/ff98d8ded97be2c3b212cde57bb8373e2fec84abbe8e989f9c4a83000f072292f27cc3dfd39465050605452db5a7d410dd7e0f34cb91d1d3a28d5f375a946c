import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { setAPIKey, setEmbedHost, post } from '@toruslabs/http-helpers';
import stringify from 'json-stable-stringify';
import { ec as ec$1 } from 'elliptic';
import createKeccakHash from 'keccak';
import { encrypt, getPublic, decrypt } from '@toruslabs/eccrypto';

function keccak256(a) {
  return createKeccakHash("keccak256").update(a).digest();
}
const ec = new ec$1("secp256k1");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

class MetadataStorageLayer {
  // ms
  constructor() {
    let metadataHost = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://metadata.tor.us";
    let serverTimeOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _defineProperty(this, "metadataHost", void 0);

    _defineProperty(this, "serverTimeOffset", void 0);

    this.metadataHost = metadataHost;
    this.serverTimeOffset = serverTimeOffset;
  }

  static setAPIKey(apiKey) {
    setAPIKey(apiKey);
  }

  static setEmbedHost(embedHost) {
    setEmbedHost(embedHost);
  }

  generateMetadataParams(message, privateKeyHex) {
    var _ref, _sig$recoveryParam;

    const key = ec.keyFromPrivate(privateKeyHex, "hex");
    const setData = {
      data: message,
      timestamp: Math.floor(this.serverTimeOffset + Date.now() / 1000).toString(16)
    };
    const sig = key.sign(keccak256(stringify(setData)));
    return {
      pub_key_X: key.getPublic().getX().toString("hex"),
      pub_key_Y: key.getPublic().getY().toString("hex"),
      set_data: setData,
      signature: Buffer.from((_ref = sig.r.toString(16, 64) + sig.s.toString(16, 64) + ((_sig$recoveryParam = sig.recoveryParam) === null || _sig$recoveryParam === void 0 ? void 0 : _sig$recoveryParam.toString(16).padStart(2, "0").slice(-2))) !== null && _ref !== void 0 ? _ref : "00", "hex").toString("base64")
    };
  }

  generatePubKeyParams(privateKeyHex) {
    const key = ec.keyFromPrivate(privateKeyHex, "hex");
    return {
      pub_key_X: key.getPublic().getX().toString("hex"),
      pub_key_Y: key.getPublic().getY().toString("hex")
    };
  }

  async setMetadata(data, namespace, options) {
    const params = namespace !== null ? _objectSpread(_objectSpread({}, data), {}, {
      namespace
    }) : data;
    const metadataResponse = await post("".concat(this.metadataHost, "/set"), params, options, {
      useAPIKey: true
    });
    return metadataResponse.message;
  }

  async getMetadata(pubKey, namespace, options) {
    const params = namespace !== null ? _objectSpread(_objectSpread({}, pubKey), {}, {
      namespace
    }) : pubKey;
    const metadataResponse = await post("".concat(this.metadataHost, "/get"), params, options, {
      useAPIKey: true
    });
    return metadataResponse.message;
  }

}

const WEBAUTHN_TORUS_SHARE = "webauthn_torus_share";
const WEBAUTHN_DEVICE_SHARE = "webauthn_device_share";
function encParamsHexToBuf(encParamsHex) {
  return {
    iv: Buffer.from(encParamsHex.iv, "hex"),
    ephemPublicKey: Buffer.from(encParamsHex.ephemPublicKey, "hex"),
    ciphertext: Buffer.from(encParamsHex.ciphertext, "hex"),
    mac: Buffer.from(encParamsHex.mac, "hex")
  };
}
function encParamsBufToHex(encParams) {
  return {
    iv: Buffer.from(encParams.iv).toString("hex"),
    ephemPublicKey: Buffer.from(encParams.ephemPublicKey).toString("hex"),
    ciphertext: Buffer.from(encParams.ciphertext).toString("hex"),
    mac: Buffer.from(encParams.mac).toString("hex")
  };
}
async function encryptData(privKeyHex, d) {
  const serializedDec = JSON.stringify(d);
  const serializedBuf = Buffer.from(serializedDec, "utf-8");
  const encParams = await encrypt(getPublic(Buffer.from(privKeyHex, "hex")), serializedBuf);
  const encParamsHex = encParamsBufToHex(encParams);
  const sData = JSON.stringify(encParamsHex);
  return sData;
}
async function decryptData(privKeyHex, d) {
  const encParamsHex = JSON.parse(d);
  const encParams = encParamsHexToBuf(encParamsHex);
  const keyPair = ec.keyFromPrivate(privKeyHex);
  const serializedBuf = await decrypt(Buffer.from(keyPair.getPrivate().toString("hex", 64), "hex"), encParams);
  const serializedDec = serializedBuf.toString("utf-8");
  const data = JSON.parse(serializedDec);
  return data;
}
async function getAndDecryptData(m, privKeyHex, namespace) {
  const keyPair = ec.keyFromPrivate(privKeyHex);
  const pubKey = keyPair.getPublic();
  const serializedData = await m.getMetadata({
    pub_key_X: pubKey.getX().toString(16),
    pub_key_Y: pubKey.getY().toString(16)
  }, namespace);

  if (!serializedData) {
    return null;
  }

  const data = await decryptData(privKeyHex, serializedData);
  return data;
}
async function encryptAndSetData(m, privKeyHex, d, namespace) {
  const sData = await encryptData(privKeyHex, d);
  const metadataParams = m.generateMetadataParams(sData, privKeyHex);
  await m.setMetadata(metadataParams, namespace);
}
async function setTorusShare(m, webAuthnPubKey, webAuthnRefHex, subspace, subspaceData) {
  const refKeyPair = ec.keyFromPrivate(webAuthnRefHex);
  const privKey = refKeyPair.getPrivate();
  const pubKey = ec.keyFromPublic({
    x: webAuthnPubKey.pub_key_X,
    y: webAuthnPubKey.pub_key_Y
  });
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_TORUS_SHARE);
  let d = {};
  if (data) d = data;
  const serializedSubspaceData = JSON.stringify(subspaceData);
  const serializedSubspaceDataBuf = Buffer.from(serializedSubspaceData, "utf-8");
  const encSubspaceData = await encrypt(Buffer.from(pubKey.getPublic("hex"), "hex"), serializedSubspaceDataBuf);
  const encSubspaceDataHex = encParamsBufToHex(encSubspaceData);
  d[subspace] = encSubspaceDataHex;
  await encryptAndSetData(m, privKey.toString("hex", 64), d, WEBAUTHN_TORUS_SHARE);
}
async function setDeviceShare(m, webAuthnRefHex, subspace, subspaceData) {
  const keyPair = ec.keyFromPrivate(webAuthnRefHex);
  const privKey = keyPair.getPrivate();
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_DEVICE_SHARE);
  let d = {};
  if (data) d = data;
  d[subspace] = subspaceData;
  await encryptAndSetData(m, privKey.toString("hex", 64), d, WEBAUTHN_DEVICE_SHARE);
}
async function getTorusShare(m, webAuthnKeyHex, webAuthnRefHex, subspace) {
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_TORUS_SHARE);
  if (!data) return null;
  const encParamsHex = data[subspace];
  if (!encParamsHex) return null;
  const encParams = encParamsHexToBuf(encParamsHex);
  const keyPair = ec.keyFromPrivate(webAuthnKeyHex);
  const privKey = keyPair.getPrivate();
  const serializedSubspaceDataBuf = await decrypt(Buffer.from(privKey.toString("hex", 64), "hex"), encParams);
  const serializedSubspaceData = serializedSubspaceDataBuf.toString("utf-8");
  const subspaceData = JSON.parse(serializedSubspaceData);
  return subspaceData;
}
async function getDeviceShare(m, webAuthnRefHex, subspace) {
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_DEVICE_SHARE);
  if (data) return data[subspace];
  return null;
}

export { decryptData, MetadataStorageLayer as default, ec, encParamsBufToHex, encParamsHexToBuf, encryptAndSetData, encryptData, getAndDecryptData, getDeviceShare, getTorusShare, keccak256, setDeviceShare, setTorusShare };
//# sourceMappingURL=metadataHelpers.esm.js.map
