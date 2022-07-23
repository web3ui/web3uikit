"use strict";
/* eslint-disable no-bitwise */

function b64Digit(number
/*: number*/
)
/*: string*/
{
  if (number < 26) {
    return String.fromCharCode(65 + number);
  }

  if (number < 52) {
    return String.fromCharCode(97 + (number - 26));
  }

  if (number < 62) {
    return String.fromCharCode(48 + (number - 52));
  }

  if (number === 62) {
    return '+';
  }

  if (number === 63) {
    return '/';
  }

  throw new TypeError("Tried to encode large digit ".concat(number, " in base64."));
}

function encodeBase64(bytes
/*: Array<number>*/
)
/*: string*/
{
  var chunks = [];
  chunks.length = Math.ceil(bytes.length / 3);

  for (var i = 0; i < chunks.length; i++) {
    var b1 = bytes[i * 3];
    var b2 = bytes[i * 3 + 1] || 0;
    var b3 = bytes[i * 3 + 2] || 0;
    var has2 = i * 3 + 1 < bytes.length;
    var has3 = i * 3 + 2 < bytes.length;
    chunks[i] = [b64Digit(b1 >> 2 & 0x3f), b64Digit(b1 << 4 & 0x30 | b2 >> 4 & 0x0f), has2 ? b64Digit(b2 << 2 & 0x3c | b3 >> 6 & 0x03) : '=', has3 ? b64Digit(b3 & 0x3f) : '='].join('');
  }

  return chunks.join('');
}

module.exports = {
  encodeBase64: encodeBase64,
  b64Digit: b64Digit
};