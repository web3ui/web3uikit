import randombytes from 'randombytes';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import base64urlLib from 'base64url';
import keccakLib from 'keccak';

const randomId = () => randombytes(32).toString("hex");

class URLWithHashParams extends URL {
  constructor() {
    super(...arguments);

    _defineProperty(this, "hashParams", new URLSearchParams());
  }

  toString() {
    this.hash = this.hashParams.toString();
    return super.toString.call(this);
  }

}

const base64url = base64urlLib;
function safebtoa(str) {
  return base64url.encode(str);
}
function safeatob(str) {
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return base64url.decode(str);
}
const keccak = keccakLib;
function base64toJSON(b64str) {
  return JSON.parse(base64url.decode(b64str));
}
function jsonToBase64(json) {
  return base64url.encode(JSON.stringify(json));
}
function keccak256(str) {
  let input = str;

  if (typeof str === "string" && str.slice(0, 2) === "0x" && str.length === 66) {
    input = Buffer.from(str.slice(2), "hex");
  }

  const data = "0x".concat(keccak("keccak256").update(input).digest("hex").padStart(64, "0"));
  return data;
}

export { URLWithHashParams, base64toJSON, base64url, jsonToBase64, keccak, keccak256, randomId, safeatob, safebtoa };
//# sourceMappingURL=openloginUtils.esm.js.map
