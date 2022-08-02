'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var nacl = require('tweetnacl');
var buffer = require('buffer');
var BN = require('bn.js');
var bs58 = require('bs58');
var borsh = require('borsh');
var BufferLayout = require('@solana/buffer-layout');
var bigintBuffer = require('bigint-buffer');
var superstruct = require('superstruct');
var rpcWebsockets = require('rpc-websockets');
var RpcClient = require('jayson/lib/client/browser');
var reactNativeUrlPolyfill = require('react-native-url-polyfill');
var secp256k1 = require('secp256k1');
var sha3 = require('js-sha3');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var nacl__default = /*#__PURE__*/_interopDefaultLegacy(nacl);
var BN__default = /*#__PURE__*/_interopDefaultLegacy(BN);
var bs58__default = /*#__PURE__*/_interopDefaultLegacy(bs58);
var BufferLayout__namespace = /*#__PURE__*/_interopNamespace(BufferLayout);
var RpcClient__default = /*#__PURE__*/_interopDefaultLegacy(RpcClient);
var secp256k1__default = /*#__PURE__*/_interopDefaultLegacy(secp256k1);
var sha3__default = /*#__PURE__*/_interopDefaultLegacy(sha3);

const toBuffer = arr => {
  if (buffer.Buffer.isBuffer(arr)) {
    return arr;
  } else if (arr instanceof Uint8Array) {
    return buffer.Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
  } else {
    return buffer.Buffer.from(arr);
  }
};

var hash$1 = {};

var utils$9 = {};

var minimalisticAssert = assert$6;

function assert$6(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert$6.equal = function assertEqual(l, r, msg) {
  if (l != r)
    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
};

var inherits_browser = {exports: {}};

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

var assert$5 = minimalisticAssert;
var inherits = inherits_browser.exports;

utils$9.inherits = inherits;

function isSurrogatePair(msg, i) {
  if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) {
    return false;
  }
  if (i < 0 || i + 1 >= msg.length) {
    return false;
  }
  return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;
}

function toArray(msg, enc) {
  if (Array.isArray(msg))
    return msg.slice();
  if (!msg)
    return [];
  var res = [];
  if (typeof msg === 'string') {
    if (!enc) {
      // Inspired by stringToUtf8ByteArray() in closure-library by Google
      // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
      // Apache License 2.0
      // https://github.com/google/closure-library/blob/master/LICENSE
      var p = 0;
      for (var i = 0; i < msg.length; i++) {
        var c = msg.charCodeAt(i);
        if (c < 128) {
          res[p++] = c;
        } else if (c < 2048) {
          res[p++] = (c >> 6) | 192;
          res[p++] = (c & 63) | 128;
        } else if (isSurrogatePair(msg, i)) {
          c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);
          res[p++] = (c >> 18) | 240;
          res[p++] = ((c >> 12) & 63) | 128;
          res[p++] = ((c >> 6) & 63) | 128;
          res[p++] = (c & 63) | 128;
        } else {
          res[p++] = (c >> 12) | 224;
          res[p++] = ((c >> 6) & 63) | 128;
          res[p++] = (c & 63) | 128;
        }
      }
    } else if (enc === 'hex') {
      msg = msg.replace(/[^a-z0-9]+/ig, '');
      if (msg.length % 2 !== 0)
        msg = '0' + msg;
      for (i = 0; i < msg.length; i += 2)
        res.push(parseInt(msg[i] + msg[i + 1], 16));
    }
  } else {
    for (i = 0; i < msg.length; i++)
      res[i] = msg[i] | 0;
  }
  return res;
}
utils$9.toArray = toArray;

function toHex(msg) {
  var res = '';
  for (var i = 0; i < msg.length; i++)
    res += zero2(msg[i].toString(16));
  return res;
}
utils$9.toHex = toHex;

function htonl(w) {
  var res = (w >>> 24) |
            ((w >>> 8) & 0xff00) |
            ((w << 8) & 0xff0000) |
            ((w & 0xff) << 24);
  return res >>> 0;
}
utils$9.htonl = htonl;

function toHex32(msg, endian) {
  var res = '';
  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    if (endian === 'little')
      w = htonl(w);
    res += zero8(w.toString(16));
  }
  return res;
}
utils$9.toHex32 = toHex32;

function zero2(word) {
  if (word.length === 1)
    return '0' + word;
  else
    return word;
}
utils$9.zero2 = zero2;

function zero8(word) {
  if (word.length === 7)
    return '0' + word;
  else if (word.length === 6)
    return '00' + word;
  else if (word.length === 5)
    return '000' + word;
  else if (word.length === 4)
    return '0000' + word;
  else if (word.length === 3)
    return '00000' + word;
  else if (word.length === 2)
    return '000000' + word;
  else if (word.length === 1)
    return '0000000' + word;
  else
    return word;
}
utils$9.zero8 = zero8;

function join32(msg, start, end, endian) {
  var len = end - start;
  assert$5(len % 4 === 0);
  var res = new Array(len / 4);
  for (var i = 0, k = start; i < res.length; i++, k += 4) {
    var w;
    if (endian === 'big')
      w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];
    else
      w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];
    res[i] = w >>> 0;
  }
  return res;
}
utils$9.join32 = join32;

function split32(msg, endian) {
  var res = new Array(msg.length * 4);
  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {
    var m = msg[i];
    if (endian === 'big') {
      res[k] = m >>> 24;
      res[k + 1] = (m >>> 16) & 0xff;
      res[k + 2] = (m >>> 8) & 0xff;
      res[k + 3] = m & 0xff;
    } else {
      res[k + 3] = m >>> 24;
      res[k + 2] = (m >>> 16) & 0xff;
      res[k + 1] = (m >>> 8) & 0xff;
      res[k] = m & 0xff;
    }
  }
  return res;
}
utils$9.split32 = split32;

function rotr32$1(w, b) {
  return (w >>> b) | (w << (32 - b));
}
utils$9.rotr32 = rotr32$1;

function rotl32$2(w, b) {
  return (w << b) | (w >>> (32 - b));
}
utils$9.rotl32 = rotl32$2;

function sum32$3(a, b) {
  return (a + b) >>> 0;
}
utils$9.sum32 = sum32$3;

function sum32_3$1(a, b, c) {
  return (a + b + c) >>> 0;
}
utils$9.sum32_3 = sum32_3$1;

function sum32_4$2(a, b, c, d) {
  return (a + b + c + d) >>> 0;
}
utils$9.sum32_4 = sum32_4$2;

function sum32_5$2(a, b, c, d, e) {
  return (a + b + c + d + e) >>> 0;
}
utils$9.sum32_5 = sum32_5$2;

function sum64$1(buf, pos, ah, al) {
  var bh = buf[pos];
  var bl = buf[pos + 1];

  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  buf[pos] = hi >>> 0;
  buf[pos + 1] = lo;
}
utils$9.sum64 = sum64$1;

function sum64_hi$1(ah, al, bh, bl) {
  var lo = (al + bl) >>> 0;
  var hi = (lo < al ? 1 : 0) + ah + bh;
  return hi >>> 0;
}
utils$9.sum64_hi = sum64_hi$1;

function sum64_lo$1(ah, al, bh, bl) {
  var lo = al + bl;
  return lo >>> 0;
}
utils$9.sum64_lo = sum64_lo$1;

function sum64_4_hi$1(ah, al, bh, bl, ch, cl, dh, dl) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;

  var hi = ah + bh + ch + dh + carry;
  return hi >>> 0;
}
utils$9.sum64_4_hi = sum64_4_hi$1;

function sum64_4_lo$1(ah, al, bh, bl, ch, cl, dh, dl) {
  var lo = al + bl + cl + dl;
  return lo >>> 0;
}
utils$9.sum64_4_lo = sum64_4_lo$1;

function sum64_5_hi$1(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var carry = 0;
  var lo = al;
  lo = (lo + bl) >>> 0;
  carry += lo < al ? 1 : 0;
  lo = (lo + cl) >>> 0;
  carry += lo < cl ? 1 : 0;
  lo = (lo + dl) >>> 0;
  carry += lo < dl ? 1 : 0;
  lo = (lo + el) >>> 0;
  carry += lo < el ? 1 : 0;

  var hi = ah + bh + ch + dh + eh + carry;
  return hi >>> 0;
}
utils$9.sum64_5_hi = sum64_5_hi$1;

function sum64_5_lo$1(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {
  var lo = al + bl + cl + dl + el;

  return lo >>> 0;
}
utils$9.sum64_5_lo = sum64_5_lo$1;

function rotr64_hi$1(ah, al, num) {
  var r = (al << (32 - num)) | (ah >>> num);
  return r >>> 0;
}
utils$9.rotr64_hi = rotr64_hi$1;

function rotr64_lo$1(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
}
utils$9.rotr64_lo = rotr64_lo$1;

function shr64_hi$1(ah, al, num) {
  return ah >>> num;
}
utils$9.shr64_hi = shr64_hi$1;

function shr64_lo$1(ah, al, num) {
  var r = (ah << (32 - num)) | (al >>> num);
  return r >>> 0;
}
utils$9.shr64_lo = shr64_lo$1;

var common$5 = {};

var utils$8 = utils$9;
var assert$4 = minimalisticAssert;

function BlockHash$4() {
  this.pending = null;
  this.pendingTotal = 0;
  this.blockSize = this.constructor.blockSize;
  this.outSize = this.constructor.outSize;
  this.hmacStrength = this.constructor.hmacStrength;
  this.padLength = this.constructor.padLength / 8;
  this.endian = 'big';

  this._delta8 = this.blockSize / 8;
  this._delta32 = this.blockSize / 32;
}
common$5.BlockHash = BlockHash$4;

BlockHash$4.prototype.update = function update(msg, enc) {
  // Convert message to array, pad it, and join into 32bit blocks
  msg = utils$8.toArray(msg, enc);
  if (!this.pending)
    this.pending = msg;
  else
    this.pending = this.pending.concat(msg);
  this.pendingTotal += msg.length;

  // Enough data, try updating
  if (this.pending.length >= this._delta8) {
    msg = this.pending;

    // Process pending data in blocks
    var r = msg.length % this._delta8;
    this.pending = msg.slice(msg.length - r, msg.length);
    if (this.pending.length === 0)
      this.pending = null;

    msg = utils$8.join32(msg, 0, msg.length - r, this.endian);
    for (var i = 0; i < msg.length; i += this._delta32)
      this._update(msg, i, i + this._delta32);
  }

  return this;
};

BlockHash$4.prototype.digest = function digest(enc) {
  this.update(this._pad());
  assert$4(this.pending === null);

  return this._digest(enc);
};

BlockHash$4.prototype._pad = function pad() {
  var len = this.pendingTotal;
  var bytes = this._delta8;
  var k = bytes - ((len + this.padLength) % bytes);
  var res = new Array(k + this.padLength);
  res[0] = 0x80;
  for (var i = 1; i < k; i++)
    res[i] = 0;

  // Append length
  len <<= 3;
  if (this.endian === 'big') {
    for (var t = 8; t < this.padLength; t++)
      res[i++] = 0;

    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = len & 0xff;
  } else {
    res[i++] = len & 0xff;
    res[i++] = (len >>> 8) & 0xff;
    res[i++] = (len >>> 16) & 0xff;
    res[i++] = (len >>> 24) & 0xff;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;
    res[i++] = 0;

    for (t = 8; t < this.padLength; t++)
      res[i++] = 0;
  }

  return res;
};

var sha = {};

var common$4 = {};

var utils$7 = utils$9;
var rotr32 = utils$7.rotr32;

function ft_1$1(s, x, y, z) {
  if (s === 0)
    return ch32$1(x, y, z);
  if (s === 1 || s === 3)
    return p32(x, y, z);
  if (s === 2)
    return maj32$1(x, y, z);
}
common$4.ft_1 = ft_1$1;

function ch32$1(x, y, z) {
  return (x & y) ^ ((~x) & z);
}
common$4.ch32 = ch32$1;

function maj32$1(x, y, z) {
  return (x & y) ^ (x & z) ^ (y & z);
}
common$4.maj32 = maj32$1;

function p32(x, y, z) {
  return x ^ y ^ z;
}
common$4.p32 = p32;

function s0_256$1(x) {
  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);
}
common$4.s0_256 = s0_256$1;

function s1_256$1(x) {
  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);
}
common$4.s1_256 = s1_256$1;

function g0_256$1(x) {
  return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);
}
common$4.g0_256 = g0_256$1;

function g1_256$1(x) {
  return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);
}
common$4.g1_256 = g1_256$1;

var utils$6 = utils$9;
var common$3 = common$5;
var shaCommon$1 = common$4;

var rotl32$1 = utils$6.rotl32;
var sum32$2 = utils$6.sum32;
var sum32_5$1 = utils$6.sum32_5;
var ft_1 = shaCommon$1.ft_1;
var BlockHash$3 = common$3.BlockHash;

var sha1_K = [
  0x5A827999, 0x6ED9EBA1,
  0x8F1BBCDC, 0xCA62C1D6
];

function SHA1() {
  if (!(this instanceof SHA1))
    return new SHA1();

  BlockHash$3.call(this);
  this.h = [
    0x67452301, 0xefcdab89, 0x98badcfe,
    0x10325476, 0xc3d2e1f0 ];
  this.W = new Array(80);
}

utils$6.inherits(SHA1, BlockHash$3);
var _1 = SHA1;

SHA1.blockSize = 512;
SHA1.outSize = 160;
SHA1.hmacStrength = 80;
SHA1.padLength = 64;

SHA1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];

  for(; i < W.length; i++)
    W[i] = rotl32$1(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];

  for (i = 0; i < W.length; i++) {
    var s = ~~(i / 20);
    var t = sum32_5$1(rotl32$1(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);
    e = d;
    d = c;
    c = rotl32$1(b, 30);
    b = a;
    a = t;
  }

  this.h[0] = sum32$2(this.h[0], a);
  this.h[1] = sum32$2(this.h[1], b);
  this.h[2] = sum32$2(this.h[2], c);
  this.h[3] = sum32$2(this.h[3], d);
  this.h[4] = sum32$2(this.h[4], e);
};

SHA1.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils$6.toHex32(this.h, 'big');
  else
    return utils$6.split32(this.h, 'big');
};

var utils$5 = utils$9;
var common$2 = common$5;
var shaCommon = common$4;
var assert$3 = minimalisticAssert;

var sum32$1 = utils$5.sum32;
var sum32_4$1 = utils$5.sum32_4;
var sum32_5 = utils$5.sum32_5;
var ch32 = shaCommon.ch32;
var maj32 = shaCommon.maj32;
var s0_256 = shaCommon.s0_256;
var s1_256 = shaCommon.s1_256;
var g0_256 = shaCommon.g0_256;
var g1_256 = shaCommon.g1_256;

var BlockHash$2 = common$2.BlockHash;

var sha256_K = [
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
];

function SHA256$1() {
  if (!(this instanceof SHA256$1))
    return new SHA256$1();

  BlockHash$2.call(this);
  this.h = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
  ];
  this.k = sha256_K;
  this.W = new Array(64);
}
utils$5.inherits(SHA256$1, BlockHash$2);
var _256 = SHA256$1;

SHA256$1.blockSize = 512;
SHA256$1.outSize = 256;
SHA256$1.hmacStrength = 192;
SHA256$1.padLength = 64;

SHA256$1.prototype._update = function _update(msg, start) {
  var W = this.W;

  for (var i = 0; i < 16; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i++)
    W[i] = sum32_4$1(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);

  var a = this.h[0];
  var b = this.h[1];
  var c = this.h[2];
  var d = this.h[3];
  var e = this.h[4];
  var f = this.h[5];
  var g = this.h[6];
  var h = this.h[7];

  assert$3(this.k.length === W.length);
  for (i = 0; i < W.length; i++) {
    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);
    var T2 = sum32$1(s0_256(a), maj32(a, b, c));
    h = g;
    g = f;
    f = e;
    e = sum32$1(d, T1);
    d = c;
    c = b;
    b = a;
    a = sum32$1(T1, T2);
  }

  this.h[0] = sum32$1(this.h[0], a);
  this.h[1] = sum32$1(this.h[1], b);
  this.h[2] = sum32$1(this.h[2], c);
  this.h[3] = sum32$1(this.h[3], d);
  this.h[4] = sum32$1(this.h[4], e);
  this.h[5] = sum32$1(this.h[5], f);
  this.h[6] = sum32$1(this.h[6], g);
  this.h[7] = sum32$1(this.h[7], h);
};

SHA256$1.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils$5.toHex32(this.h, 'big');
  else
    return utils$5.split32(this.h, 'big');
};

var utils$4 = utils$9;
var SHA256 = _256;

function SHA224() {
  if (!(this instanceof SHA224))
    return new SHA224();

  SHA256.call(this);
  this.h = [
    0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
    0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4 ];
}
utils$4.inherits(SHA224, SHA256);
var _224 = SHA224;

SHA224.blockSize = 512;
SHA224.outSize = 224;
SHA224.hmacStrength = 192;
SHA224.padLength = 64;

SHA224.prototype._digest = function digest(enc) {
  // Just truncate output
  if (enc === 'hex')
    return utils$4.toHex32(this.h.slice(0, 7), 'big');
  else
    return utils$4.split32(this.h.slice(0, 7), 'big');
};

var utils$3 = utils$9;
var common$1 = common$5;
var assert$2 = minimalisticAssert;

var rotr64_hi = utils$3.rotr64_hi;
var rotr64_lo = utils$3.rotr64_lo;
var shr64_hi = utils$3.shr64_hi;
var shr64_lo = utils$3.shr64_lo;
var sum64 = utils$3.sum64;
var sum64_hi = utils$3.sum64_hi;
var sum64_lo = utils$3.sum64_lo;
var sum64_4_hi = utils$3.sum64_4_hi;
var sum64_4_lo = utils$3.sum64_4_lo;
var sum64_5_hi = utils$3.sum64_5_hi;
var sum64_5_lo = utils$3.sum64_5_lo;

var BlockHash$1 = common$1.BlockHash;

var sha512_K = [
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
];

function SHA512$1() {
  if (!(this instanceof SHA512$1))
    return new SHA512$1();

  BlockHash$1.call(this);
  this.h = [
    0x6a09e667, 0xf3bcc908,
    0xbb67ae85, 0x84caa73b,
    0x3c6ef372, 0xfe94f82b,
    0xa54ff53a, 0x5f1d36f1,
    0x510e527f, 0xade682d1,
    0x9b05688c, 0x2b3e6c1f,
    0x1f83d9ab, 0xfb41bd6b,
    0x5be0cd19, 0x137e2179 ];
  this.k = sha512_K;
  this.W = new Array(160);
}
utils$3.inherits(SHA512$1, BlockHash$1);
var _512 = SHA512$1;

SHA512$1.blockSize = 1024;
SHA512$1.outSize = 512;
SHA512$1.hmacStrength = 192;
SHA512$1.padLength = 128;

SHA512$1.prototype._prepareBlock = function _prepareBlock(msg, start) {
  var W = this.W;

  // 32 x 32bit words
  for (var i = 0; i < 32; i++)
    W[i] = msg[start + i];
  for (; i < W.length; i += 2) {
    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);  // i - 2
    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);
    var c1_hi = W[i - 14];  // i - 7
    var c1_lo = W[i - 13];
    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);  // i - 15
    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);
    var c3_hi = W[i - 32];  // i - 16
    var c3_lo = W[i - 31];

    W[i] = sum64_4_hi(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo);
    W[i + 1] = sum64_4_lo(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo);
  }
};

SHA512$1.prototype._update = function _update(msg, start) {
  this._prepareBlock(msg, start);

  var W = this.W;

  var ah = this.h[0];
  var al = this.h[1];
  var bh = this.h[2];
  var bl = this.h[3];
  var ch = this.h[4];
  var cl = this.h[5];
  var dh = this.h[6];
  var dl = this.h[7];
  var eh = this.h[8];
  var el = this.h[9];
  var fh = this.h[10];
  var fl = this.h[11];
  var gh = this.h[12];
  var gl = this.h[13];
  var hh = this.h[14];
  var hl = this.h[15];

  assert$2(this.k.length === W.length);
  for (var i = 0; i < W.length; i += 2) {
    var c0_hi = hh;
    var c0_lo = hl;
    var c1_hi = s1_512_hi(eh, el);
    var c1_lo = s1_512_lo(eh, el);
    var c2_hi = ch64_hi(eh, el, fh, fl, gh);
    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);
    var c3_hi = this.k[i];
    var c3_lo = this.k[i + 1];
    var c4_hi = W[i];
    var c4_lo = W[i + 1];

    var T1_hi = sum64_5_hi(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo,
      c4_hi, c4_lo);
    var T1_lo = sum64_5_lo(
      c0_hi, c0_lo,
      c1_hi, c1_lo,
      c2_hi, c2_lo,
      c3_hi, c3_lo,
      c4_hi, c4_lo);

    c0_hi = s0_512_hi(ah, al);
    c0_lo = s0_512_lo(ah, al);
    c1_hi = maj64_hi(ah, al, bh, bl, ch);
    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);

    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);
    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);

    hh = gh;
    hl = gl;

    gh = fh;
    gl = fl;

    fh = eh;
    fl = el;

    eh = sum64_hi(dh, dl, T1_hi, T1_lo);
    el = sum64_lo(dl, dl, T1_hi, T1_lo);

    dh = ch;
    dl = cl;

    ch = bh;
    cl = bl;

    bh = ah;
    bl = al;

    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);
    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);
  }

  sum64(this.h, 0, ah, al);
  sum64(this.h, 2, bh, bl);
  sum64(this.h, 4, ch, cl);
  sum64(this.h, 6, dh, dl);
  sum64(this.h, 8, eh, el);
  sum64(this.h, 10, fh, fl);
  sum64(this.h, 12, gh, gl);
  sum64(this.h, 14, hh, hl);
};

SHA512$1.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils$3.toHex32(this.h, 'big');
  else
    return utils$3.split32(this.h, 'big');
};

function ch64_hi(xh, xl, yh, yl, zh) {
  var r = (xh & yh) ^ ((~xh) & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function ch64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ ((~xl) & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_hi(xh, xl, yh, yl, zh) {
  var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function maj64_lo(xh, xl, yh, yl, zh, zl) {
  var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 28);
  var c1_hi = rotr64_hi(xl, xh, 2);  // 34
  var c2_hi = rotr64_hi(xl, xh, 7);  // 39

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 28);
  var c1_lo = rotr64_lo(xl, xh, 2);  // 34
  var c2_lo = rotr64_lo(xl, xh, 7);  // 39

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 14);
  var c1_hi = rotr64_hi(xh, xl, 18);
  var c2_hi = rotr64_hi(xl, xh, 9);  // 41

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function s1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 14);
  var c1_lo = rotr64_lo(xh, xl, 18);
  var c2_lo = rotr64_lo(xl, xh, 9);  // 41

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 1);
  var c1_hi = rotr64_hi(xh, xl, 8);
  var c2_hi = shr64_hi(xh, xl, 7);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g0_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 1);
  var c1_lo = rotr64_lo(xh, xl, 8);
  var c2_lo = shr64_lo(xh, xl, 7);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_hi(xh, xl) {
  var c0_hi = rotr64_hi(xh, xl, 19);
  var c1_hi = rotr64_hi(xl, xh, 29);  // 61
  var c2_hi = shr64_hi(xh, xl, 6);

  var r = c0_hi ^ c1_hi ^ c2_hi;
  if (r < 0)
    r += 0x100000000;
  return r;
}

function g1_512_lo(xh, xl) {
  var c0_lo = rotr64_lo(xh, xl, 19);
  var c1_lo = rotr64_lo(xl, xh, 29);  // 61
  var c2_lo = shr64_lo(xh, xl, 6);

  var r = c0_lo ^ c1_lo ^ c2_lo;
  if (r < 0)
    r += 0x100000000;
  return r;
}

var utils$2 = utils$9;

var SHA512 = _512;

function SHA384() {
  if (!(this instanceof SHA384))
    return new SHA384();

  SHA512.call(this);
  this.h = [
    0xcbbb9d5d, 0xc1059ed8,
    0x629a292a, 0x367cd507,
    0x9159015a, 0x3070dd17,
    0x152fecd8, 0xf70e5939,
    0x67332667, 0xffc00b31,
    0x8eb44a87, 0x68581511,
    0xdb0c2e0d, 0x64f98fa7,
    0x47b5481d, 0xbefa4fa4 ];
}
utils$2.inherits(SHA384, SHA512);
var _384 = SHA384;

SHA384.blockSize = 1024;
SHA384.outSize = 384;
SHA384.hmacStrength = 192;
SHA384.padLength = 128;

SHA384.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils$2.toHex32(this.h.slice(0, 12), 'big');
  else
    return utils$2.split32(this.h.slice(0, 12), 'big');
};

sha.sha1 = _1;
sha.sha224 = _224;
sha.sha256 = _256;
sha.sha384 = _384;
sha.sha512 = _512;

var ripemd = {};

var utils$1 = utils$9;
var common = common$5;

var rotl32 = utils$1.rotl32;
var sum32 = utils$1.sum32;
var sum32_3 = utils$1.sum32_3;
var sum32_4 = utils$1.sum32_4;
var BlockHash = common.BlockHash;

function RIPEMD160() {
  if (!(this instanceof RIPEMD160))
    return new RIPEMD160();

  BlockHash.call(this);

  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];
  this.endian = 'little';
}
utils$1.inherits(RIPEMD160, BlockHash);
ripemd.ripemd160 = RIPEMD160;

RIPEMD160.blockSize = 512;
RIPEMD160.outSize = 160;
RIPEMD160.hmacStrength = 192;
RIPEMD160.padLength = 64;

RIPEMD160.prototype._update = function update(msg, start) {
  var A = this.h[0];
  var B = this.h[1];
  var C = this.h[2];
  var D = this.h[3];
  var E = this.h[4];
  var Ah = A;
  var Bh = B;
  var Ch = C;
  var Dh = D;
  var Eh = E;
  for (var j = 0; j < 80; j++) {
    var T = sum32(
      rotl32(
        sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),
        s[j]),
      E);
    A = E;
    E = D;
    D = rotl32(C, 10);
    C = B;
    B = T;
    T = sum32(
      rotl32(
        sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),
        sh[j]),
      Eh);
    Ah = Eh;
    Eh = Dh;
    Dh = rotl32(Ch, 10);
    Ch = Bh;
    Bh = T;
  }
  T = sum32_3(this.h[1], C, Dh);
  this.h[1] = sum32_3(this.h[2], D, Eh);
  this.h[2] = sum32_3(this.h[3], E, Ah);
  this.h[3] = sum32_3(this.h[4], A, Bh);
  this.h[4] = sum32_3(this.h[0], B, Ch);
  this.h[0] = T;
};

RIPEMD160.prototype._digest = function digest(enc) {
  if (enc === 'hex')
    return utils$1.toHex32(this.h, 'little');
  else
    return utils$1.split32(this.h, 'little');
};

function f(j, x, y, z) {
  if (j <= 15)
    return x ^ y ^ z;
  else if (j <= 31)
    return (x & y) | ((~x) & z);
  else if (j <= 47)
    return (x | (~y)) ^ z;
  else if (j <= 63)
    return (x & z) | (y & (~z));
  else
    return x ^ (y | (~z));
}

function K(j) {
  if (j <= 15)
    return 0x00000000;
  else if (j <= 31)
    return 0x5a827999;
  else if (j <= 47)
    return 0x6ed9eba1;
  else if (j <= 63)
    return 0x8f1bbcdc;
  else
    return 0xa953fd4e;
}

function Kh(j) {
  if (j <= 15)
    return 0x50a28be6;
  else if (j <= 31)
    return 0x5c4dd124;
  else if (j <= 47)
    return 0x6d703ef3;
  else if (j <= 63)
    return 0x7a6d76e9;
  else
    return 0x00000000;
}

var r = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
];

var rh = [
  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
];

var s = [
  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
];

var sh = [
  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
];

var utils = utils$9;
var assert$1 = minimalisticAssert;

function Hmac(hash, key, enc) {
  if (!(this instanceof Hmac))
    return new Hmac(hash, key, enc);
  this.Hash = hash;
  this.blockSize = hash.blockSize / 8;
  this.outSize = hash.outSize / 8;
  this.inner = null;
  this.outer = null;

  this._init(utils.toArray(key, enc));
}
var hmac = Hmac;

Hmac.prototype._init = function init(key) {
  // Shorten key, if needed
  if (key.length > this.blockSize)
    key = new this.Hash().update(key).digest();
  assert$1(key.length <= this.blockSize);

  // Add padding to key
  for (var i = key.length; i < this.blockSize; i++)
    key.push(0);

  for (i = 0; i < key.length; i++)
    key[i] ^= 0x36;
  this.inner = new this.Hash().update(key);

  // 0x36 ^ 0x5c = 0x6a
  for (i = 0; i < key.length; i++)
    key[i] ^= 0x6a;
  this.outer = new this.Hash().update(key);
};

Hmac.prototype.update = function update(msg, enc) {
  this.inner.update(msg, enc);
  return this;
};

Hmac.prototype.digest = function digest(enc) {
  this.outer.update(this.inner.digest());
  return this.outer.digest(enc);
};

(function (exports) {
	var hash = exports;

	hash.utils = utils$9;
	hash.common = common$5;
	hash.sha = sha;
	hash.ripemd = ripemd;
	hash.hmac = hmac;

	// Proxy hash functions to the main object
	hash.sha1 = hash.sha.sha1;
	hash.sha256 = hash.sha.sha256;
	hash.sha224 = hash.sha.sha224;
	hash.sha384 = hash.sha.sha384;
	hash.sha512 = hash.sha.sha512;
	hash.ripemd160 = hash.ripemd.ripemd160;
} (hash$1));

var hash = hash$1;

const version$2 = "logger/5.6.0";

let _permanentCensorErrors = false;
let _censorErrors = false;
const LogLevels = { debug: 1, "default": 2, info: 2, warning: 3, error: 4, off: 5 };
let _logLevel = LogLevels["default"];
let _globalLogger = null;
function _checkNormalize() {
    try {
        const missing = [];
        // Make sure all forms of normalization are supported
        ["NFD", "NFC", "NFKD", "NFKC"].forEach((form) => {
            try {
                if ("test".normalize(form) !== "test") {
                    throw new Error("bad normalize");
                }
                ;
            }
            catch (error) {
                missing.push(form);
            }
        });
        if (missing.length) {
            throw new Error("missing " + missing.join(", "));
        }
        if (String.fromCharCode(0xe9).normalize("NFD") !== String.fromCharCode(0x65, 0x0301)) {
            throw new Error("broken implementation");
        }
    }
    catch (error) {
        return error.message;
    }
    return null;
}
const _normalizeError = _checkNormalize();
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["OFF"] = "OFF";
})(LogLevel || (LogLevel = {}));
var ErrorCode;
(function (ErrorCode) {
    ///////////////////
    // Generic Errors
    // Unknown Error
    ErrorCode["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    // Not Implemented
    ErrorCode["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
    // Unsupported Operation
    //   - operation
    ErrorCode["UNSUPPORTED_OPERATION"] = "UNSUPPORTED_OPERATION";
    // Network Error (i.e. Ethereum Network, such as an invalid chain ID)
    //   - event ("noNetwork" is not re-thrown in provider.ready; otherwise thrown)
    ErrorCode["NETWORK_ERROR"] = "NETWORK_ERROR";
    // Some sort of bad response from the server
    ErrorCode["SERVER_ERROR"] = "SERVER_ERROR";
    // Timeout
    ErrorCode["TIMEOUT"] = "TIMEOUT";
    ///////////////////
    // Operational  Errors
    // Buffer Overrun
    ErrorCode["BUFFER_OVERRUN"] = "BUFFER_OVERRUN";
    // Numeric Fault
    //   - operation: the operation being executed
    //   - fault: the reason this faulted
    ErrorCode["NUMERIC_FAULT"] = "NUMERIC_FAULT";
    ///////////////////
    // Argument Errors
    // Missing new operator to an object
    //  - name: The name of the class
    ErrorCode["MISSING_NEW"] = "MISSING_NEW";
    // Invalid argument (e.g. value is incompatible with type) to a function:
    //   - argument: The argument name that was invalid
    //   - value: The value of the argument
    ErrorCode["INVALID_ARGUMENT"] = "INVALID_ARGUMENT";
    // Missing argument to a function:
    //   - count: The number of arguments received
    //   - expectedCount: The number of arguments expected
    ErrorCode["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
    // Too many arguments
    //   - count: The number of arguments received
    //   - expectedCount: The number of arguments expected
    ErrorCode["UNEXPECTED_ARGUMENT"] = "UNEXPECTED_ARGUMENT";
    ///////////////////
    // Blockchain Errors
    // Call exception
    //  - transaction: the transaction
    //  - address?: the contract address
    //  - args?: The arguments passed into the function
    //  - method?: The Solidity method signature
    //  - errorSignature?: The EIP848 error signature
    //  - errorArgs?: The EIP848 error parameters
    //  - reason: The reason (only for EIP848 "Error(string)")
    ErrorCode["CALL_EXCEPTION"] = "CALL_EXCEPTION";
    // Insufficient funds (< value + gasLimit * gasPrice)
    //   - transaction: the transaction attempted
    ErrorCode["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    // Nonce has already been used
    //   - transaction: the transaction attempted
    ErrorCode["NONCE_EXPIRED"] = "NONCE_EXPIRED";
    // The replacement fee for the transaction is too low
    //   - transaction: the transaction attempted
    ErrorCode["REPLACEMENT_UNDERPRICED"] = "REPLACEMENT_UNDERPRICED";
    // The gas limit could not be estimated
    //   - transaction: the transaction passed to estimateGas
    ErrorCode["UNPREDICTABLE_GAS_LIMIT"] = "UNPREDICTABLE_GAS_LIMIT";
    // The transaction was replaced by one with a higher gas price
    //   - reason: "cancelled", "replaced" or "repriced"
    //   - cancelled: true if reason == "cancelled" or reason == "replaced")
    //   - hash: original transaction hash
    //   - replacement: the full TransactionsResponse for the replacement
    //   - receipt: the receipt of the replacement
    ErrorCode["TRANSACTION_REPLACED"] = "TRANSACTION_REPLACED";
})(ErrorCode || (ErrorCode = {}));
const HEX = "0123456789abcdef";
class Logger {
    constructor(version) {
        Object.defineProperty(this, "version", {
            enumerable: true,
            value: version,
            writable: false
        });
    }
    _log(logLevel, args) {
        const level = logLevel.toLowerCase();
        if (LogLevels[level] == null) {
            this.throwArgumentError("invalid log level name", "logLevel", logLevel);
        }
        if (_logLevel > LogLevels[level]) {
            return;
        }
        console.log.apply(console, args);
    }
    debug(...args) {
        this._log(Logger.levels.DEBUG, args);
    }
    info(...args) {
        this._log(Logger.levels.INFO, args);
    }
    warn(...args) {
        this._log(Logger.levels.WARNING, args);
    }
    makeError(message, code, params) {
        // Errors are being censored
        if (_censorErrors) {
            return this.makeError("censored error", code, {});
        }
        if (!code) {
            code = Logger.errors.UNKNOWN_ERROR;
        }
        if (!params) {
            params = {};
        }
        const messageDetails = [];
        Object.keys(params).forEach((key) => {
            const value = params[key];
            try {
                if (value instanceof Uint8Array) {
                    let hex = "";
                    for (let i = 0; i < value.length; i++) {
                        hex += HEX[value[i] >> 4];
                        hex += HEX[value[i] & 0x0f];
                    }
                    messageDetails.push(key + "=Uint8Array(0x" + hex + ")");
                }
                else {
                    messageDetails.push(key + "=" + JSON.stringify(value));
                }
            }
            catch (error) {
                messageDetails.push(key + "=" + JSON.stringify(params[key].toString()));
            }
        });
        messageDetails.push(`code=${code}`);
        messageDetails.push(`version=${this.version}`);
        const reason = message;
        let url = "";
        switch (code) {
            case ErrorCode.NUMERIC_FAULT: {
                url = "NUMERIC_FAULT";
                const fault = message;
                switch (fault) {
                    case "overflow":
                    case "underflow":
                    case "division-by-zero":
                        url += "-" + fault;
                        break;
                    case "negative-power":
                    case "negative-width":
                        url += "-unsupported";
                        break;
                    case "unbound-bitwise-result":
                        url += "-unbound-result";
                        break;
                }
                break;
            }
            case ErrorCode.CALL_EXCEPTION:
            case ErrorCode.INSUFFICIENT_FUNDS:
            case ErrorCode.MISSING_NEW:
            case ErrorCode.NONCE_EXPIRED:
            case ErrorCode.REPLACEMENT_UNDERPRICED:
            case ErrorCode.TRANSACTION_REPLACED:
            case ErrorCode.UNPREDICTABLE_GAS_LIMIT:
                url = code;
                break;
        }
        if (url) {
            message += " [ See: https:/\/links.ethers.org/v5-errors-" + url + " ]";
        }
        if (messageDetails.length) {
            message += " (" + messageDetails.join(", ") + ")";
        }
        // @TODO: Any??
        const error = new Error(message);
        error.reason = reason;
        error.code = code;
        Object.keys(params).forEach(function (key) {
            error[key] = params[key];
        });
        return error;
    }
    throwError(message, code, params) {
        throw this.makeError(message, code, params);
    }
    throwArgumentError(message, name, value) {
        return this.throwError(message, Logger.errors.INVALID_ARGUMENT, {
            argument: name,
            value: value
        });
    }
    assert(condition, message, code, params) {
        if (!!condition) {
            return;
        }
        this.throwError(message, code, params);
    }
    assertArgument(condition, message, name, value) {
        if (!!condition) {
            return;
        }
        this.throwArgumentError(message, name, value);
    }
    checkNormalize(message) {
        if (_normalizeError) {
            this.throwError("platform missing String.prototype.normalize", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "String.prototype.normalize", form: _normalizeError
            });
        }
    }
    checkSafeUint53(value, message) {
        if (typeof (value) !== "number") {
            return;
        }
        if (message == null) {
            message = "value not safe";
        }
        if (value < 0 || value >= 0x1fffffffffffff) {
            this.throwError(message, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "out-of-safe-range",
                value: value
            });
        }
        if (value % 1) {
            this.throwError(message, Logger.errors.NUMERIC_FAULT, {
                operation: "checkSafeInteger",
                fault: "non-integer",
                value: value
            });
        }
    }
    checkArgumentCount(count, expectedCount, message) {
        if (message) {
            message = ": " + message;
        }
        else {
            message = "";
        }
        if (count < expectedCount) {
            this.throwError("missing argument" + message, Logger.errors.MISSING_ARGUMENT, {
                count: count,
                expectedCount: expectedCount
            });
        }
        if (count > expectedCount) {
            this.throwError("too many arguments" + message, Logger.errors.UNEXPECTED_ARGUMENT, {
                count: count,
                expectedCount: expectedCount
            });
        }
    }
    checkNew(target, kind) {
        if (target === Object || target == null) {
            this.throwError("missing new", Logger.errors.MISSING_NEW, { name: kind.name });
        }
    }
    checkAbstract(target, kind) {
        if (target === kind) {
            this.throwError("cannot instantiate abstract class " + JSON.stringify(kind.name) + " directly; use a sub-class", Logger.errors.UNSUPPORTED_OPERATION, { name: target.name, operation: "new" });
        }
        else if (target === Object || target == null) {
            this.throwError("missing new", Logger.errors.MISSING_NEW, { name: kind.name });
        }
    }
    static globalLogger() {
        if (!_globalLogger) {
            _globalLogger = new Logger(version$2);
        }
        return _globalLogger;
    }
    static setCensorship(censorship, permanent) {
        if (!censorship && permanent) {
            this.globalLogger().throwError("cannot permanently disable censorship", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            });
        }
        if (_permanentCensorErrors) {
            if (!censorship) {
                return;
            }
            this.globalLogger().throwError("error censorship permanent", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            });
        }
        _censorErrors = !!censorship;
        _permanentCensorErrors = !!permanent;
    }
    static setLogLevel(logLevel) {
        const level = LogLevels[logLevel.toLowerCase()];
        if (level == null) {
            Logger.globalLogger().warn("invalid log level - " + logLevel);
            return;
        }
        _logLevel = level;
    }
    static from(version) {
        return new Logger(version);
    }
}
Logger.errors = ErrorCode;
Logger.levels = LogLevel;

const version$1 = "bytes/5.6.0";

const logger = new Logger(version$1);
///////////////////////////////
function isHexable(value) {
    return !!(value.toHexString);
}
function addSlice(array) {
    if (array.slice) {
        return array;
    }
    array.slice = function () {
        const args = Array.prototype.slice.call(arguments);
        return addSlice(new Uint8Array(Array.prototype.slice.apply(array, args)));
    };
    return array;
}
function isInteger(value) {
    return (typeof (value) === "number" && value == value && (value % 1) === 0);
}
function isBytes(value) {
    if (value == null) {
        return false;
    }
    if (value.constructor === Uint8Array) {
        return true;
    }
    if (typeof (value) === "string") {
        return false;
    }
    if (!isInteger(value.length) || value.length < 0) {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        const v = value[i];
        if (!isInteger(v) || v < 0 || v >= 256) {
            return false;
        }
    }
    return true;
}
function arrayify(value, options) {
    if (!options) {
        options = {};
    }
    if (typeof (value) === "number") {
        logger.checkSafeUint53(value, "invalid arrayify value");
        const result = [];
        while (value) {
            result.unshift(value & 0xff);
            value = parseInt(String(value / 256));
        }
        if (result.length === 0) {
            result.push(0);
        }
        return addSlice(new Uint8Array(result));
    }
    if (options.allowMissingPrefix && typeof (value) === "string" && value.substring(0, 2) !== "0x") {
        value = "0x" + value;
    }
    if (isHexable(value)) {
        value = value.toHexString();
    }
    if (isHexString(value)) {
        let hex = value.substring(2);
        if (hex.length % 2) {
            if (options.hexPad === "left") {
                hex = "0x0" + hex.substring(2);
            }
            else if (options.hexPad === "right") {
                hex += "0";
            }
            else {
                logger.throwArgumentError("hex data is odd-length", "value", value);
            }
        }
        const result = [];
        for (let i = 0; i < hex.length; i += 2) {
            result.push(parseInt(hex.substring(i, i + 2), 16));
        }
        return addSlice(new Uint8Array(result));
    }
    if (isBytes(value)) {
        return addSlice(new Uint8Array(value));
    }
    return logger.throwArgumentError("invalid arrayify value", "value", value);
}
function isHexString(value, length) {
    if (typeof (value) !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
        return false;
    }
    if (length && value.length !== 2 + 2 * length) {
        return false;
    }
    return true;
}

const version = "sha2/5.6.0";

new Logger(version);
function sha256(data) {
    return "0x" + (hash.sha256().update(arrayify(data)).digest("hex"));
}

class Struct {
  constructor(properties) {
    Object.assign(this, properties);
  }

  encode() {
    return buffer.Buffer.from(borsh.serialize(SOLANA_SCHEMA, this));
  }

  static decode(data) {
    return borsh.deserialize(SOLANA_SCHEMA, this, data);
  }

  static decodeUnchecked(data) {
    return borsh.deserializeUnchecked(SOLANA_SCHEMA, this, data);
  }

} // Class representing a Rust-compatible enum, since enums are only strings or
// numbers in pure JS

class Enum extends Struct {
  constructor(properties) {
    super(properties);
    this.enum = '';

    if (Object.keys(properties).length !== 1) {
      throw new Error('Enum can only take single value');
    }

    Object.keys(properties).map(key => {
      this.enum = key;
    });
  }

}
const SOLANA_SCHEMA = new Map();

/**
 * Maximum length of derived pubkey seed
 */

const MAX_SEED_LENGTH = 32;
/**
 * Value to be converted into public key
 */

function isPublicKeyData(value) {
  return value._bn !== undefined;
}
/**
 * A public key
 */


class PublicKey extends Struct {
  /** @internal */

  /**
   * Create a new PublicKey object
   * @param value ed25519 public key as buffer or base-58 encoded string
   */
  constructor(value) {
    super({});
    this._bn = void 0;

    if (isPublicKeyData(value)) {
      this._bn = value._bn;
    } else {
      if (typeof value === 'string') {
        // assume base 58 encoding by default
        const decoded = bs58__default["default"].decode(value);

        if (decoded.length != 32) {
          throw new Error(`Invalid public key input`);
        }

        this._bn = new BN__default["default"](decoded);
      } else {
        this._bn = new BN__default["default"](value);
      }

      if (this._bn.byteLength() > 32) {
        throw new Error(`Invalid public key input`);
      }
    }
  }
  /**
   * Default public key value. (All zeros)
   */


  /**
   * Checks if two publicKeys are equal
   */
  equals(publicKey) {
    return this._bn.eq(publicKey._bn);
  }
  /**
   * Return the base-58 representation of the public key
   */


  toBase58() {
    return bs58__default["default"].encode(this.toBytes());
  }

  toJSON() {
    return this.toBase58();
  }
  /**
   * Return the byte array representation of the public key
   */


  toBytes() {
    return this.toBuffer();
  }
  /**
   * Return the Buffer representation of the public key
   */


  toBuffer() {
    const b = this._bn.toArrayLike(buffer.Buffer);

    if (b.length === 32) {
      return b;
    }

    const zeroPad = buffer.Buffer.alloc(32);
    b.copy(zeroPad, 32 - b.length);
    return zeroPad;
  }
  /**
   * Return the base-58 representation of the public key
   */


  toString() {
    return this.toBase58();
  }
  /**
   * Derive a public key from another key, a seed, and a program ID.
   * The program ID will also serve as the owner of the public key, giving
   * it permission to write data to the account.
   */

  /* eslint-disable require-await */


  static async createWithSeed(fromPublicKey, seed, programId) {
    const buffer$1 = buffer.Buffer.concat([fromPublicKey.toBuffer(), buffer.Buffer.from(seed), programId.toBuffer()]);
    const hash = sha256(new Uint8Array(buffer$1)).slice(2);
    return new PublicKey(buffer.Buffer.from(hash, 'hex'));
  }
  /**
   * Derive a program address from seeds and a program ID.
   */

  /* eslint-disable require-await */


  static createProgramAddressSync(seeds, programId) {
    let buffer$1 = buffer.Buffer.alloc(0);
    seeds.forEach(function (seed) {
      if (seed.length > MAX_SEED_LENGTH) {
        throw new TypeError(`Max seed length exceeded`);
      }

      buffer$1 = buffer.Buffer.concat([buffer$1, toBuffer(seed)]);
    });
    buffer$1 = buffer.Buffer.concat([buffer$1, programId.toBuffer(), buffer.Buffer.from('ProgramDerivedAddress')]);
    let hash = sha256(new Uint8Array(buffer$1)).slice(2);
    let publicKeyBytes = new BN__default["default"](hash, 16).toArray(undefined, 32);

    if (is_on_curve(publicKeyBytes)) {
      throw new Error(`Invalid seeds, address must fall off the curve`);
    }

    return new PublicKey(publicKeyBytes);
  }
  /**
   * Async version of createProgramAddressSync
   * For backwards compatibility
   */

  /* eslint-disable require-await */


  static async createProgramAddress(seeds, programId) {
    return this.createProgramAddressSync(seeds, programId);
  }
  /**
   * Find a valid program address
   *
   * Valid program addresses must fall off the ed25519 curve.  This function
   * iterates a nonce until it finds one that when combined with the seeds
   * results in a valid program address.
   */


  static findProgramAddressSync(seeds, programId) {
    let nonce = 255;
    let address;

    while (nonce != 0) {
      try {
        const seedsWithNonce = seeds.concat(buffer.Buffer.from([nonce]));
        address = this.createProgramAddressSync(seedsWithNonce, programId);
      } catch (err) {
        if (err instanceof TypeError) {
          throw err;
        }

        nonce--;
        continue;
      }

      return [address, nonce];
    }

    throw new Error(`Unable to find a viable program address nonce`);
  }
  /**
   * Async version of findProgramAddressSync
   * For backwards compatibility
   */


  static async findProgramAddress(seeds, programId) {
    return this.findProgramAddressSync(seeds, programId);
  }
  /**
   * Check that a pubkey is on the ed25519 curve.
   */


  static isOnCurve(pubkeyData) {
    const pubkey = new PublicKey(pubkeyData);
    return is_on_curve(pubkey.toBytes()) == 1;
  }

}
PublicKey.default = new PublicKey('11111111111111111111111111111111');
SOLANA_SCHEMA.set(PublicKey, {
  kind: 'struct',
  fields: [['_bn', 'u256']]
}); // @ts-ignore

let naclLowLevel = nacl__default["default"].lowlevel; // Check that a pubkey is on the curve.
// This function and its dependents were sourced from:
// https://github.com/dchest/tweetnacl-js/blob/f1ec050ceae0861f34280e62498b1d3ed9c350c6/nacl.js#L792

function is_on_curve(p) {
  var r = [naclLowLevel.gf(), naclLowLevel.gf(), naclLowLevel.gf(), naclLowLevel.gf()];
  var t = naclLowLevel.gf(),
      chk = naclLowLevel.gf(),
      num = naclLowLevel.gf(),
      den = naclLowLevel.gf(),
      den2 = naclLowLevel.gf(),
      den4 = naclLowLevel.gf(),
      den6 = naclLowLevel.gf();
  naclLowLevel.set25519(r[2], gf1);
  naclLowLevel.unpack25519(r[1], p);
  naclLowLevel.S(num, r[1]);
  naclLowLevel.M(den, num, naclLowLevel.D);
  naclLowLevel.Z(num, num, r[2]);
  naclLowLevel.A(den, r[2], den);
  naclLowLevel.S(den2, den);
  naclLowLevel.S(den4, den2);
  naclLowLevel.M(den6, den4, den2);
  naclLowLevel.M(t, den6, num);
  naclLowLevel.M(t, t, den);
  naclLowLevel.pow2523(t, t);
  naclLowLevel.M(t, t, num);
  naclLowLevel.M(t, t, den);
  naclLowLevel.M(t, t, den);
  naclLowLevel.M(r[0], t, den);
  naclLowLevel.S(chk, r[0]);
  naclLowLevel.M(chk, chk, den);
  if (neq25519(chk, num)) naclLowLevel.M(r[0], r[0], I);
  naclLowLevel.S(chk, r[0]);
  naclLowLevel.M(chk, chk, den);
  if (neq25519(chk, num)) return 0;
  return 1;
}

let gf1 = naclLowLevel.gf([1]);
let I = naclLowLevel.gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

function neq25519(a, b) {
  var c = new Uint8Array(32),
      d = new Uint8Array(32);
  naclLowLevel.pack25519(c, a);
  naclLowLevel.pack25519(d, b);
  return naclLowLevel.crypto_verify_32(c, 0, d, 0);
}

/**
 * An account key pair (public and secret keys).
 *
 * @deprecated since v1.10.0, please use {@link Keypair} instead.
 */

class Account {
  /** @internal */

  /**
   * Create a new Account object
   *
   * If the secretKey parameter is not provided a new key pair is randomly
   * created for the account
   *
   * @param secretKey Secret key for the account
   */
  constructor(secretKey) {
    this._keypair = void 0;

    if (secretKey) {
      this._keypair = nacl__default["default"].sign.keyPair.fromSecretKey(toBuffer(secretKey));
    } else {
      this._keypair = nacl__default["default"].sign.keyPair();
    }
  }
  /**
   * The public key for this account
   */


  get publicKey() {
    return new PublicKey(this._keypair.publicKey);
  }
  /**
   * The **unencrypted** secret key for this account
   */


  get secretKey() {
    return toBuffer(this._keypair.secretKey);
  }

}

const BPF_LOADER_DEPRECATED_PROGRAM_ID = new PublicKey('BPFLoader1111111111111111111111111111111111');

/**
 * Maximum over-the-wire size of a Transaction
 *
 * 1280 is IPv6 minimum MTU
 * 40 bytes is the size of the IPv6 header
 * 8 bytes is the size of the fragment header
 */
const PACKET_DATA_SIZE = 1280 - 40 - 8;
const SIGNATURE_LENGTH_IN_BYTES = 64;

/**
 * Layout for a public key
 */

const publicKey = (property = 'publicKey') => {
  return BufferLayout__namespace.blob(32, property);
};

/**
 * Layout for a Rust String type
 */
const rustString = (property = 'string') => {
  const rsl = BufferLayout__namespace.struct([BufferLayout__namespace.u32('length'), BufferLayout__namespace.u32('lengthPadding'), BufferLayout__namespace.blob(BufferLayout__namespace.offset(BufferLayout__namespace.u32(), -8), 'chars')], property);

  const _decode = rsl.decode.bind(rsl);

  const _encode = rsl.encode.bind(rsl);

  const rslShim = rsl;

  rslShim.decode = (b, offset) => {
    const data = _decode(b, offset);

    return data['chars'].toString();
  };

  rslShim.encode = (str, b, offset) => {
    const data = {
      chars: buffer.Buffer.from(str, 'utf8')
    };
    return _encode(data, b, offset);
  };

  rslShim.alloc = str => {
    return BufferLayout__namespace.u32().span + BufferLayout__namespace.u32().span + buffer.Buffer.from(str, 'utf8').length;
  };

  return rslShim;
};
/**
 * Layout for an Authorized object
 */

const authorized = (property = 'authorized') => {
  return BufferLayout__namespace.struct([publicKey('staker'), publicKey('withdrawer')], property);
};
/**
 * Layout for a Lockup object
 */

const lockup = (property = 'lockup') => {
  return BufferLayout__namespace.struct([BufferLayout__namespace.ns64('unixTimestamp'), BufferLayout__namespace.ns64('epoch'), publicKey('custodian')], property);
};
/**
 *  Layout for a VoteInit object
 */

const voteInit = (property = 'voteInit') => {
  return BufferLayout__namespace.struct([publicKey('nodePubkey'), publicKey('authorizedVoter'), publicKey('authorizedWithdrawer'), BufferLayout__namespace.u8('commission')], property);
};
function getAlloc(type, fields) {
  let alloc = 0;
  type.layout.fields.forEach(item => {
    if (item.span >= 0) {
      alloc += item.span;
    } else if (typeof item.alloc === 'function') {
      alloc += item.alloc(fields[item.property]);
    }
  });
  return alloc;
}

function decodeLength(bytes) {
  let len = 0;
  let size = 0;

  for (;;) {
    let elem = bytes.shift();
    len |= (elem & 0x7f) << size * 7;
    size += 1;

    if ((elem & 0x80) === 0) {
      break;
    }
  }

  return len;
}
function encodeLength(bytes, len) {
  let rem_len = len;

  for (;;) {
    let elem = rem_len & 0x7f;
    rem_len >>= 7;

    if (rem_len == 0) {
      bytes.push(elem);
      break;
    } else {
      elem |= 0x80;
      bytes.push(elem);
    }
  }
}

/**
 * The message header, identifying signed and read-only account
 */

const PUBKEY_LENGTH = 32;
/**
 * List of instructions to be processed atomically
 */

class Message {
  constructor(args) {
    this.header = void 0;
    this.accountKeys = void 0;
    this.recentBlockhash = void 0;
    this.instructions = void 0;
    this.indexToProgramIds = new Map();
    this.header = args.header;
    this.accountKeys = args.accountKeys.map(account => new PublicKey(account));
    this.recentBlockhash = args.recentBlockhash;
    this.instructions = args.instructions;
    this.instructions.forEach(ix => this.indexToProgramIds.set(ix.programIdIndex, this.accountKeys[ix.programIdIndex]));
  }

  isAccountSigner(index) {
    return index < this.header.numRequiredSignatures;
  }

  isAccountWritable(index) {
    return index < this.header.numRequiredSignatures - this.header.numReadonlySignedAccounts || index >= this.header.numRequiredSignatures && index < this.accountKeys.length - this.header.numReadonlyUnsignedAccounts;
  }

  isProgramId(index) {
    return this.indexToProgramIds.has(index);
  }

  programIds() {
    return [...this.indexToProgramIds.values()];
  }

  nonProgramIds() {
    return this.accountKeys.filter((_, index) => !this.isProgramId(index));
  }

  serialize() {
    const numKeys = this.accountKeys.length;
    let keyCount = [];
    encodeLength(keyCount, numKeys);
    const instructions = this.instructions.map(instruction => {
      const {
        accounts,
        programIdIndex
      } = instruction;
      const data = Array.from(bs58__default["default"].decode(instruction.data));
      let keyIndicesCount = [];
      encodeLength(keyIndicesCount, accounts.length);
      let dataCount = [];
      encodeLength(dataCount, data.length);
      return {
        programIdIndex,
        keyIndicesCount: buffer.Buffer.from(keyIndicesCount),
        keyIndices: accounts,
        dataLength: buffer.Buffer.from(dataCount),
        data
      };
    });
    let instructionCount = [];
    encodeLength(instructionCount, instructions.length);
    let instructionBuffer = buffer.Buffer.alloc(PACKET_DATA_SIZE);
    buffer.Buffer.from(instructionCount).copy(instructionBuffer);
    let instructionBufferLength = instructionCount.length;
    instructions.forEach(instruction => {
      const instructionLayout = BufferLayout__namespace.struct([BufferLayout__namespace.u8('programIdIndex'), BufferLayout__namespace.blob(instruction.keyIndicesCount.length, 'keyIndicesCount'), BufferLayout__namespace.seq(BufferLayout__namespace.u8('keyIndex'), instruction.keyIndices.length, 'keyIndices'), BufferLayout__namespace.blob(instruction.dataLength.length, 'dataLength'), BufferLayout__namespace.seq(BufferLayout__namespace.u8('userdatum'), instruction.data.length, 'data')]);
      const length = instructionLayout.encode(instruction, instructionBuffer, instructionBufferLength);
      instructionBufferLength += length;
    });
    instructionBuffer = instructionBuffer.slice(0, instructionBufferLength);
    const signDataLayout = BufferLayout__namespace.struct([BufferLayout__namespace.blob(1, 'numRequiredSignatures'), BufferLayout__namespace.blob(1, 'numReadonlySignedAccounts'), BufferLayout__namespace.blob(1, 'numReadonlyUnsignedAccounts'), BufferLayout__namespace.blob(keyCount.length, 'keyCount'), BufferLayout__namespace.seq(publicKey('key'), numKeys, 'keys'), publicKey('recentBlockhash')]);
    const transaction = {
      numRequiredSignatures: buffer.Buffer.from([this.header.numRequiredSignatures]),
      numReadonlySignedAccounts: buffer.Buffer.from([this.header.numReadonlySignedAccounts]),
      numReadonlyUnsignedAccounts: buffer.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
      keyCount: buffer.Buffer.from(keyCount),
      keys: this.accountKeys.map(key => toBuffer(key.toBytes())),
      recentBlockhash: bs58__default["default"].decode(this.recentBlockhash)
    };
    let signData = buffer.Buffer.alloc(2048);
    const length = signDataLayout.encode(transaction, signData);
    instructionBuffer.copy(signData, length);
    return signData.slice(0, length + instructionBuffer.length);
  }
  /**
   * Decode a compiled message into a Message object.
   */


  static from(buffer$1) {
    // Slice up wire data
    let byteArray = [...buffer$1];
    const numRequiredSignatures = byteArray.shift();
    const numReadonlySignedAccounts = byteArray.shift();
    const numReadonlyUnsignedAccounts = byteArray.shift();
    const accountCount = decodeLength(byteArray);
    let accountKeys = [];

    for (let i = 0; i < accountCount; i++) {
      const account = byteArray.slice(0, PUBKEY_LENGTH);
      byteArray = byteArray.slice(PUBKEY_LENGTH);
      accountKeys.push(bs58__default["default"].encode(buffer.Buffer.from(account)));
    }

    const recentBlockhash = byteArray.slice(0, PUBKEY_LENGTH);
    byteArray = byteArray.slice(PUBKEY_LENGTH);
    const instructionCount = decodeLength(byteArray);
    let instructions = [];

    for (let i = 0; i < instructionCount; i++) {
      const programIdIndex = byteArray.shift();
      const accountCount = decodeLength(byteArray);
      const accounts = byteArray.slice(0, accountCount);
      byteArray = byteArray.slice(accountCount);
      const dataLength = decodeLength(byteArray);
      const dataSlice = byteArray.slice(0, dataLength);
      const data = bs58__default["default"].encode(buffer.Buffer.from(dataSlice));
      byteArray = byteArray.slice(dataLength);
      instructions.push({
        programIdIndex,
        accounts,
        data
      });
    }

    const messageArgs = {
      header: {
        numRequiredSignatures,
        numReadonlySignedAccounts,
        numReadonlyUnsignedAccounts
      },
      recentBlockhash: bs58__default["default"].encode(buffer.Buffer.from(recentBlockhash)),
      accountKeys,
      instructions
    };
    return new Message(messageArgs);
  }

}

function assert (condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

exports.TransactionStatus = void 0;
/**
 * Default (empty) signature
 */

(function (TransactionStatus) {
  TransactionStatus[TransactionStatus["BLOCKHEIGHT_EXCEEDED"] = 0] = "BLOCKHEIGHT_EXCEEDED";
  TransactionStatus[TransactionStatus["PROCESSED"] = 1] = "PROCESSED";
  TransactionStatus[TransactionStatus["TIMED_OUT"] = 2] = "TIMED_OUT";
})(exports.TransactionStatus || (exports.TransactionStatus = {}));

const DEFAULT_SIGNATURE = buffer.Buffer.alloc(SIGNATURE_LENGTH_IN_BYTES).fill(0);
/**
 * Account metadata used to define instructions
 */

/**
 * Transaction Instruction class
 */
class TransactionInstruction {
  /**
   * Public keys to include in this transaction
   * Boolean represents whether this pubkey needs to sign the transaction
   */

  /**
   * Program Id to execute
   */

  /**
   * Program input
   */
  constructor(opts) {
    this.keys = void 0;
    this.programId = void 0;
    this.data = buffer.Buffer.alloc(0);
    this.programId = opts.programId;
    this.keys = opts.keys;

    if (opts.data) {
      this.data = opts.data;
    }
  }
  /**
   * @internal
   */


  toJSON() {
    return {
      keys: this.keys.map(({
        pubkey,
        isSigner,
        isWritable
      }) => ({
        pubkey: pubkey.toJSON(),
        isSigner,
        isWritable
      })),
      programId: this.programId.toJSON(),
      data: [...this.data]
    };
  }

}
/**
 * Pair of signature and corresponding public key
 */

/**
 * Transaction class
 */
class Transaction {
  /**
   * Signatures for the transaction.  Typically created by invoking the
   * `sign()` method
   */

  /**
   * The first (payer) Transaction signature
   */
  get signature() {
    if (this.signatures.length > 0) {
      return this.signatures[0].signature;
    }

    return null;
  }
  /**
   * The transaction fee payer
   */


  /**
   * Construct an empty Transaction
   */
  constructor(opts) {
    this.signatures = [];
    this.feePayer = void 0;
    this.instructions = [];
    this.recentBlockhash = void 0;
    this.lastValidBlockHeight = void 0;
    this.nonceInfo = void 0;
    this._message = void 0;
    this._json = void 0;

    if (!opts) {
      return;
    }

    if (opts.feePayer) {
      this.feePayer = opts.feePayer;
    }

    if (opts.signatures) {
      this.signatures = opts.signatures;
    }

    if (Object.prototype.hasOwnProperty.call(opts, 'lastValidBlockHeight')) {
      const {
        blockhash,
        lastValidBlockHeight
      } = opts;
      this.recentBlockhash = blockhash;
      this.lastValidBlockHeight = lastValidBlockHeight;
    } else {
      const {
        recentBlockhash,
        nonceInfo
      } = opts;

      if (nonceInfo) {
        this.nonceInfo = nonceInfo;
      }

      this.recentBlockhash = recentBlockhash;
    }
  }
  /**
   * @internal
   */


  toJSON() {
    return {
      recentBlockhash: this.recentBlockhash || null,
      feePayer: this.feePayer ? this.feePayer.toJSON() : null,
      nonceInfo: this.nonceInfo ? {
        nonce: this.nonceInfo.nonce,
        nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
      } : null,
      instructions: this.instructions.map(instruction => instruction.toJSON()),
      signers: this.signatures.map(({
        publicKey
      }) => {
        return publicKey.toJSON();
      })
    };
  }
  /**
   * Add one or more instructions to this Transaction
   */


  add(...items) {
    if (items.length === 0) {
      throw new Error('No instructions');
    }

    items.forEach(item => {
      if ('instructions' in item) {
        this.instructions = this.instructions.concat(item.instructions);
      } else if ('data' in item && 'programId' in item && 'keys' in item) {
        this.instructions.push(item);
      } else {
        this.instructions.push(new TransactionInstruction(item));
      }
    });
    return this;
  }
  /**
   * Compile transaction data
   */


  compileMessage() {
    if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) {
      return this._message;
    }

    let recentBlockhash;
    let instructions;

    if (this.nonceInfo) {
      recentBlockhash = this.nonceInfo.nonce;

      if (this.instructions[0] != this.nonceInfo.nonceInstruction) {
        instructions = [this.nonceInfo.nonceInstruction, ...this.instructions];
      } else {
        instructions = this.instructions;
      }
    } else {
      recentBlockhash = this.recentBlockhash;
      instructions = this.instructions;
    }

    if (!recentBlockhash) {
      throw new Error('Transaction recentBlockhash required');
    }

    if (instructions.length < 1) {
      console.warn('No instructions provided');
    }

    let feePayer;

    if (this.feePayer) {
      feePayer = this.feePayer;
    } else if (this.signatures.length > 0 && this.signatures[0].publicKey) {
      // Use implicit fee payer
      feePayer = this.signatures[0].publicKey;
    } else {
      throw new Error('Transaction fee payer required');
    }

    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i].programId === undefined) {
        throw new Error(`Transaction instruction index ${i} has undefined program id`);
      }
    }

    const programIds = [];
    const accountMetas = [];
    instructions.forEach(instruction => {
      instruction.keys.forEach(accountMeta => {
        accountMetas.push({ ...accountMeta
        });
      });
      const programId = instruction.programId.toString();

      if (!programIds.includes(programId)) {
        programIds.push(programId);
      }
    }); // Append programID account metas

    programIds.forEach(programId => {
      accountMetas.push({
        pubkey: new PublicKey(programId),
        isSigner: false,
        isWritable: false
      });
    }); // Cull duplicate account metas

    const uniqueMetas = [];
    accountMetas.forEach(accountMeta => {
      const pubkeyString = accountMeta.pubkey.toString();
      const uniqueIndex = uniqueMetas.findIndex(x => {
        return x.pubkey.toString() === pubkeyString;
      });

      if (uniqueIndex > -1) {
        uniqueMetas[uniqueIndex].isWritable = uniqueMetas[uniqueIndex].isWritable || accountMeta.isWritable;
        uniqueMetas[uniqueIndex].isSigner = uniqueMetas[uniqueIndex].isSigner || accountMeta.isSigner;
      } else {
        uniqueMetas.push(accountMeta);
      }
    }); // Sort. Prioritizing first by signer, then by writable

    uniqueMetas.sort(function (x, y) {
      if (x.isSigner !== y.isSigner) {
        // Signers always come before non-signers
        return x.isSigner ? -1 : 1;
      }

      if (x.isWritable !== y.isWritable) {
        // Writable accounts always come before read-only accounts
        return x.isWritable ? -1 : 1;
      } // Otherwise, sort by pubkey, stringwise.


      return x.pubkey.toBase58().localeCompare(y.pubkey.toBase58());
    }); // Move fee payer to the front

    const feePayerIndex = uniqueMetas.findIndex(x => {
      return x.pubkey.equals(feePayer);
    });

    if (feePayerIndex > -1) {
      const [payerMeta] = uniqueMetas.splice(feePayerIndex, 1);
      payerMeta.isSigner = true;
      payerMeta.isWritable = true;
      uniqueMetas.unshift(payerMeta);
    } else {
      uniqueMetas.unshift({
        pubkey: feePayer,
        isSigner: true,
        isWritable: true
      });
    } // Disallow unknown signers


    for (const signature of this.signatures) {
      const uniqueIndex = uniqueMetas.findIndex(x => {
        return x.pubkey.equals(signature.publicKey);
      });

      if (uniqueIndex > -1) {
        if (!uniqueMetas[uniqueIndex].isSigner) {
          uniqueMetas[uniqueIndex].isSigner = true;
          console.warn('Transaction references a signature that is unnecessary, ' + 'only the fee payer and instruction signer accounts should sign a transaction. ' + 'This behavior is deprecated and will throw an error in the next major version release.');
        }
      } else {
        throw new Error(`unknown signer: ${signature.publicKey.toString()}`);
      }
    }

    let numRequiredSignatures = 0;
    let numReadonlySignedAccounts = 0;
    let numReadonlyUnsignedAccounts = 0; // Split out signing from non-signing keys and count header values

    const signedKeys = [];
    const unsignedKeys = [];
    uniqueMetas.forEach(({
      pubkey,
      isSigner,
      isWritable
    }) => {
      if (isSigner) {
        signedKeys.push(pubkey.toString());
        numRequiredSignatures += 1;

        if (!isWritable) {
          numReadonlySignedAccounts += 1;
        }
      } else {
        unsignedKeys.push(pubkey.toString());

        if (!isWritable) {
          numReadonlyUnsignedAccounts += 1;
        }
      }
    });
    const accountKeys = signedKeys.concat(unsignedKeys);
    const compiledInstructions = instructions.map(instruction => {
      const {
        data,
        programId
      } = instruction;
      return {
        programIdIndex: accountKeys.indexOf(programId.toString()),
        accounts: instruction.keys.map(meta => accountKeys.indexOf(meta.pubkey.toString())),
        data: bs58__default["default"].encode(data)
      };
    });
    compiledInstructions.forEach(instruction => {
      assert(instruction.programIdIndex >= 0);
      instruction.accounts.forEach(keyIndex => assert(keyIndex >= 0));
    });
    return new Message({
      header: {
        numRequiredSignatures,
        numReadonlySignedAccounts,
        numReadonlyUnsignedAccounts
      },
      accountKeys,
      recentBlockhash,
      instructions: compiledInstructions
    });
  }
  /**
   * @internal
   */


  _compile() {
    const message = this.compileMessage();
    const signedKeys = message.accountKeys.slice(0, message.header.numRequiredSignatures);

    if (this.signatures.length === signedKeys.length) {
      const valid = this.signatures.every((pair, index) => {
        return signedKeys[index].equals(pair.publicKey);
      });
      if (valid) return message;
    }

    this.signatures = signedKeys.map(publicKey => ({
      signature: null,
      publicKey
    }));
    return message;
  }
  /**
   * Get a buffer of the Transaction data that need to be covered by signatures
   */


  serializeMessage() {
    return this._compile().serialize();
  }
  /**
   * Get the estimated fee associated with a transaction
   */


  async getEstimatedFee(connection) {
    return (await connection.getFeeForMessage(this.compileMessage())).value;
  }
  /**
   * Specify the public keys which will be used to sign the Transaction.
   * The first signer will be used as the transaction fee payer account.
   *
   * Signatures can be added with either `partialSign` or `addSignature`
   *
   * @deprecated Deprecated since v0.84.0. Only the fee payer needs to be
   * specified and it can be set in the Transaction constructor or with the
   * `feePayer` property.
   */


  setSigners(...signers) {
    if (signers.length === 0) {
      throw new Error('No signers');
    }

    const seen = new Set();
    this.signatures = signers.filter(publicKey => {
      const key = publicKey.toString();

      if (seen.has(key)) {
        return false;
      } else {
        seen.add(key);
        return true;
      }
    }).map(publicKey => ({
      signature: null,
      publicKey
    }));
  }
  /**
   * Sign the Transaction with the specified signers. Multiple signatures may
   * be applied to a Transaction. The first signature is considered "primary"
   * and is used identify and confirm transactions.
   *
   * If the Transaction `feePayer` is not set, the first signer will be used
   * as the transaction fee payer account.
   *
   * Transaction fields should not be modified after the first call to `sign`,
   * as doing so may invalidate the signature and cause the Transaction to be
   * rejected.
   *
   * The Transaction must be assigned a valid `recentBlockhash` before invoking this method
   */


  sign(...signers) {
    if (signers.length === 0) {
      throw new Error('No signers');
    } // Dedupe signers


    const seen = new Set();
    const uniqueSigners = [];

    for (const signer of signers) {
      const key = signer.publicKey.toString();

      if (seen.has(key)) {
        continue;
      } else {
        seen.add(key);
        uniqueSigners.push(signer);
      }
    }

    this.signatures = uniqueSigners.map(signer => ({
      signature: null,
      publicKey: signer.publicKey
    }));

    const message = this._compile();

    this._partialSign(message, ...uniqueSigners);
  }
  /**
   * Partially sign a transaction with the specified accounts. All accounts must
   * correspond to either the fee payer or a signer account in the transaction
   * instructions.
   *
   * All the caveats from the `sign` method apply to `partialSign`
   */


  partialSign(...signers) {
    if (signers.length === 0) {
      throw new Error('No signers');
    } // Dedupe signers


    const seen = new Set();
    const uniqueSigners = [];

    for (const signer of signers) {
      const key = signer.publicKey.toString();

      if (seen.has(key)) {
        continue;
      } else {
        seen.add(key);
        uniqueSigners.push(signer);
      }
    }

    const message = this._compile();

    this._partialSign(message, ...uniqueSigners);
  }
  /**
   * @internal
   */


  _partialSign(message, ...signers) {
    const signData = message.serialize();
    signers.forEach(signer => {
      const signature = nacl__default["default"].sign.detached(signData, signer.secretKey);

      this._addSignature(signer.publicKey, toBuffer(signature));
    });
  }
  /**
   * Add an externally created signature to a transaction. The public key
   * must correspond to either the fee payer or a signer account in the transaction
   * instructions.
   */


  addSignature(pubkey, signature) {
    this._compile(); // Ensure signatures array is populated


    this._addSignature(pubkey, signature);
  }
  /**
   * @internal
   */


  _addSignature(pubkey, signature) {
    assert(signature.length === 64);
    const index = this.signatures.findIndex(sigpair => pubkey.equals(sigpair.publicKey));

    if (index < 0) {
      throw new Error(`unknown signer: ${pubkey.toString()}`);
    }

    this.signatures[index].signature = buffer.Buffer.from(signature);
  }
  /**
   * Verify signatures of a complete, signed Transaction
   */


  verifySignatures() {
    return this._verifySignatures(this.serializeMessage(), true);
  }
  /**
   * @internal
   */


  _verifySignatures(signData, requireAllSignatures) {
    for (const {
      signature,
      publicKey
    } of this.signatures) {
      if (signature === null) {
        if (requireAllSignatures) {
          return false;
        }
      } else {
        if (!nacl__default["default"].sign.detached.verify(signData, signature, publicKey.toBuffer())) {
          return false;
        }
      }
    }

    return true;
  }
  /**
   * Serialize the Transaction in the wire format.
   */


  serialize(config) {
    const {
      requireAllSignatures,
      verifySignatures
    } = Object.assign({
      requireAllSignatures: true,
      verifySignatures: true
    }, config);
    const signData = this.serializeMessage();

    if (verifySignatures && !this._verifySignatures(signData, requireAllSignatures)) {
      throw new Error('Signature verification failed');
    }

    return this._serialize(signData);
  }
  /**
   * @internal
   */


  _serialize(signData) {
    const {
      signatures
    } = this;
    const signatureCount = [];
    encodeLength(signatureCount, signatures.length);
    const transactionLength = signatureCount.length + signatures.length * 64 + signData.length;
    const wireTransaction = buffer.Buffer.alloc(transactionLength);
    assert(signatures.length < 256);
    buffer.Buffer.from(signatureCount).copy(wireTransaction, 0);
    signatures.forEach(({
      signature
    }, index) => {
      if (signature !== null) {
        assert(signature.length === 64, `signature has invalid length`);
        buffer.Buffer.from(signature).copy(wireTransaction, signatureCount.length + index * 64);
      }
    });
    signData.copy(wireTransaction, signatureCount.length + signatures.length * 64);
    assert(wireTransaction.length <= PACKET_DATA_SIZE, `Transaction too large: ${wireTransaction.length} > ${PACKET_DATA_SIZE}`);
    return wireTransaction;
  }
  /**
   * Deprecated method
   * @internal
   */


  get keys() {
    assert(this.instructions.length === 1);
    return this.instructions[0].keys.map(keyObj => keyObj.pubkey);
  }
  /**
   * Deprecated method
   * @internal
   */


  get programId() {
    assert(this.instructions.length === 1);
    return this.instructions[0].programId;
  }
  /**
   * Deprecated method
   * @internal
   */


  get data() {
    assert(this.instructions.length === 1);
    return this.instructions[0].data;
  }
  /**
   * Parse a wire transaction into a Transaction object.
   */


  static from(buffer$1) {
    // Slice up wire data
    let byteArray = [...buffer$1];
    const signatureCount = decodeLength(byteArray);
    let signatures = [];

    for (let i = 0; i < signatureCount; i++) {
      const signature = byteArray.slice(0, SIGNATURE_LENGTH_IN_BYTES);
      byteArray = byteArray.slice(SIGNATURE_LENGTH_IN_BYTES);
      signatures.push(bs58__default["default"].encode(buffer.Buffer.from(signature)));
    }

    return Transaction.populate(Message.from(byteArray), signatures);
  }
  /**
   * Populate Transaction object from message and signatures
   */


  static populate(message, signatures = []) {
    const transaction = new Transaction();
    transaction.recentBlockhash = message.recentBlockhash;

    if (message.header.numRequiredSignatures > 0) {
      transaction.feePayer = message.accountKeys[0];
    }

    signatures.forEach((signature, index) => {
      const sigPubkeyPair = {
        signature: signature == bs58__default["default"].encode(DEFAULT_SIGNATURE) ? null : bs58__default["default"].decode(signature),
        publicKey: message.accountKeys[index]
      };
      transaction.signatures.push(sigPubkeyPair);
    });
    message.instructions.forEach(instruction => {
      const keys = instruction.accounts.map(account => {
        const pubkey = message.accountKeys[account];
        return {
          pubkey,
          isSigner: transaction.signatures.some(keyObj => keyObj.publicKey.toString() === pubkey.toString()) || message.isAccountSigner(account),
          isWritable: message.isAccountWritable(account)
        };
      });
      transaction.instructions.push(new TransactionInstruction({
        keys,
        programId: message.accountKeys[instruction.programIdIndex],
        data: bs58__default["default"].decode(instruction.data)
      }));
    });
    transaction._message = message;
    transaction._json = transaction.toJSON();
    return transaction;
  }

}

const SYSVAR_CLOCK_PUBKEY = new PublicKey('SysvarC1ock11111111111111111111111111111111');
const SYSVAR_EPOCH_SCHEDULE_PUBKEY = new PublicKey('SysvarEpochSchedu1e111111111111111111111111');
const SYSVAR_INSTRUCTIONS_PUBKEY = new PublicKey('Sysvar1nstructions1111111111111111111111111');
const SYSVAR_RECENT_BLOCKHASHES_PUBKEY = new PublicKey('SysvarRecentB1ockHashes11111111111111111111');
const SYSVAR_RENT_PUBKEY = new PublicKey('SysvarRent111111111111111111111111111111111');
const SYSVAR_REWARDS_PUBKEY = new PublicKey('SysvarRewards111111111111111111111111111111');
const SYSVAR_SLOT_HASHES_PUBKEY = new PublicKey('SysvarS1otHashes111111111111111111111111111');
const SYSVAR_SLOT_HISTORY_PUBKEY = new PublicKey('SysvarS1otHistory11111111111111111111111111');
const SYSVAR_STAKE_HISTORY_PUBKEY = new PublicKey('SysvarStakeHistory1111111111111111111111111');

/**
 * Sign, send and confirm a transaction.
 *
 * If `commitment` option is not specified, defaults to 'max' commitment.
 *
 * @param {Connection} connection
 * @param {Transaction} transaction
 * @param {Array<Signer>} signers
 * @param {ConfirmOptions} [options]
 * @returns {Promise<TransactionSignature>}
 */
async function sendAndConfirmTransaction(connection, transaction, signers, options) {
  const sendOptions = options && {
    skipPreflight: options.skipPreflight,
    preflightCommitment: options.preflightCommitment || options.commitment,
    maxRetries: options.maxRetries,
    minContextSlot: options.minContextSlot
  };
  const signature = await connection.sendTransaction(transaction, signers, sendOptions);
  const status = transaction.recentBlockhash != null && transaction.lastValidBlockHeight != null ? (await connection.confirmTransaction({
    signature: signature,
    blockhash: transaction.recentBlockhash,
    lastValidBlockHeight: transaction.lastValidBlockHeight
  }, options && options.commitment)).value : (await connection.confirmTransaction(signature, options && options.commitment)).value;

  if (status.err) {
    throw new Error(`Transaction ${signature} failed (${JSON.stringify(status)})`);
  }

  return signature;
}

// zzz
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Populate a buffer of instruction data using an InstructionType
 * @internal
 */
function encodeData(type, fields) {
  const allocLength = type.layout.span >= 0 ? type.layout.span : getAlloc(type, fields);
  const data = buffer.Buffer.alloc(allocLength);
  const layoutFields = Object.assign({
    instruction: type.index
  }, fields);
  type.layout.encode(layoutFields, data);
  return data;
}
/**
 * Decode instruction data buffer using an InstructionType
 * @internal
 */

function decodeData(type, buffer) {
  let data;

  try {
    data = type.layout.decode(buffer);
  } catch (err) {
    throw new Error('invalid instruction; ' + err);
  }

  if (data.instruction !== type.index) {
    throw new Error(`invalid instruction; instruction index mismatch ${data.instruction} != ${type.index}`);
  }

  return data;
}

/**
 * https://github.com/solana-labs/solana/blob/90bedd7e067b5b8f3ddbb45da00a4e9cabb22c62/sdk/src/fee_calculator.rs#L7-L11
 *
 * @internal
 */

const FeeCalculatorLayout = BufferLayout__namespace.nu64('lamportsPerSignature');
/**
 * Calculator for transaction fees.
 */

/**
 * See https://github.com/solana-labs/solana/blob/0ea2843ec9cdc517572b8e62c959f41b55cf4453/sdk/src/nonce_state.rs#L29-L32
 *
 * @internal
 */

const NonceAccountLayout = BufferLayout__namespace.struct([BufferLayout__namespace.u32('version'), BufferLayout__namespace.u32('state'), publicKey('authorizedPubkey'), publicKey('nonce'), BufferLayout__namespace.struct([FeeCalculatorLayout], 'feeCalculator')]);
const NONCE_ACCOUNT_LENGTH = NonceAccountLayout.span;

/**
 * NonceAccount class
 */
class NonceAccount {
  /**
   * @internal
   */
  constructor(args) {
    this.authorizedPubkey = void 0;
    this.nonce = void 0;
    this.feeCalculator = void 0;
    this.authorizedPubkey = args.authorizedPubkey;
    this.nonce = args.nonce;
    this.feeCalculator = args.feeCalculator;
  }
  /**
   * Deserialize NonceAccount from the account data.
   *
   * @param buffer account data
   * @return NonceAccount
   */


  static fromAccountData(buffer) {
    const nonceAccount = NonceAccountLayout.decode(toBuffer(buffer), 0);
    return new NonceAccount({
      authorizedPubkey: new PublicKey(nonceAccount.authorizedPubkey),
      nonce: new PublicKey(nonceAccount.nonce).toString(),
      feeCalculator: nonceAccount.feeCalculator
    });
  }

}

const encodeDecode = layout => {
  const decode = layout.decode.bind(layout);
  const encode = layout.encode.bind(layout);
  return {
    decode,
    encode
  };
};

const bigInt = length => property => {
  const layout = BufferLayout.blob(length, property);
  const {
    encode,
    decode
  } = encodeDecode(layout);
  const bigIntLayout = layout;

  bigIntLayout.decode = (buffer$1, offset) => {
    const src = decode(buffer$1, offset);
    return bigintBuffer.toBigIntLE(buffer.Buffer.from(src));
  };

  bigIntLayout.encode = (bigInt, buffer, offset) => {
    const src = bigintBuffer.toBufferLE(bigInt, length);
    return encode(src, buffer, offset);
  };

  return bigIntLayout;
};

const u64 = bigInt(8);

/**
 * Create account system transaction params
 */

/**
 * System Instruction class
 */
class SystemInstruction {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Decode a system instruction and retrieve the instruction type.
   */


  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = BufferLayout__namespace.u32('instruction');
    const typeIndex = instructionTypeLayout.decode(instruction.data);
    let type;

    for (const [ixType, layout] of Object.entries(SYSTEM_INSTRUCTION_LAYOUTS)) {
      if (layout.index == typeIndex) {
        type = ixType;
        break;
      }
    }

    if (!type) {
      throw new Error('Instruction type incorrect; not a SystemInstruction');
    }

    return type;
  }
  /**
   * Decode a create account system instruction and retrieve the instruction params.
   */


  static decodeCreateAccount(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      lamports,
      space,
      programId
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.Create, instruction.data);
    return {
      fromPubkey: instruction.keys[0].pubkey,
      newAccountPubkey: instruction.keys[1].pubkey,
      lamports,
      space,
      programId: new PublicKey(programId)
    };
  }
  /**
   * Decode a transfer system instruction and retrieve the instruction params.
   */


  static decodeTransfer(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      lamports
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.Transfer, instruction.data);
    return {
      fromPubkey: instruction.keys[0].pubkey,
      toPubkey: instruction.keys[1].pubkey,
      lamports
    };
  }
  /**
   * Decode a transfer with seed system instruction and retrieve the instruction params.
   */


  static decodeTransferWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      lamports,
      seed,
      programId
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed, instruction.data);
    return {
      fromPubkey: instruction.keys[0].pubkey,
      basePubkey: instruction.keys[1].pubkey,
      toPubkey: instruction.keys[2].pubkey,
      lamports,
      seed,
      programId: new PublicKey(programId)
    };
  }
  /**
   * Decode an allocate system instruction and retrieve the instruction params.
   */


  static decodeAllocate(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 1);
    const {
      space
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.Allocate, instruction.data);
    return {
      accountPubkey: instruction.keys[0].pubkey,
      space
    };
  }
  /**
   * Decode an allocate with seed system instruction and retrieve the instruction params.
   */


  static decodeAllocateWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 1);
    const {
      base,
      seed,
      space,
      programId
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed, instruction.data);
    return {
      accountPubkey: instruction.keys[0].pubkey,
      basePubkey: new PublicKey(base),
      seed,
      space,
      programId: new PublicKey(programId)
    };
  }
  /**
   * Decode an assign system instruction and retrieve the instruction params.
   */


  static decodeAssign(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 1);
    const {
      programId
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.Assign, instruction.data);
    return {
      accountPubkey: instruction.keys[0].pubkey,
      programId: new PublicKey(programId)
    };
  }
  /**
   * Decode an assign with seed system instruction and retrieve the instruction params.
   */


  static decodeAssignWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 1);
    const {
      base,
      seed,
      programId
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed, instruction.data);
    return {
      accountPubkey: instruction.keys[0].pubkey,
      basePubkey: new PublicKey(base),
      seed,
      programId: new PublicKey(programId)
    };
  }
  /**
   * Decode a create account with seed system instruction and retrieve the instruction params.
   */


  static decodeCreateWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      base,
      seed,
      lamports,
      space,
      programId
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed, instruction.data);
    return {
      fromPubkey: instruction.keys[0].pubkey,
      newAccountPubkey: instruction.keys[1].pubkey,
      basePubkey: new PublicKey(base),
      seed,
      lamports,
      space,
      programId: new PublicKey(programId)
    };
  }
  /**
   * Decode a nonce initialize system instruction and retrieve the instruction params.
   */


  static decodeNonceInitialize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      authorized
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount, instruction.data);
    return {
      noncePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: new PublicKey(authorized)
    };
  }
  /**
   * Decode a nonce advance system instruction and retrieve the instruction params.
   */


  static decodeNonceAdvance(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    decodeData(SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount, instruction.data);
    return {
      noncePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey
    };
  }
  /**
   * Decode a nonce withdraw system instruction and retrieve the instruction params.
   */


  static decodeNonceWithdraw(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 5);
    const {
      lamports
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount, instruction.data);
    return {
      noncePubkey: instruction.keys[0].pubkey,
      toPubkey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[4].pubkey,
      lamports
    };
  }
  /**
   * Decode a nonce authorize system instruction and retrieve the instruction params.
   */


  static decodeNonceAuthorize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      authorized
    } = decodeData(SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount, instruction.data);
    return {
      noncePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[1].pubkey,
      newAuthorizedPubkey: new PublicKey(authorized)
    };
  }
  /**
   * @internal
   */


  static checkProgramId(programId) {
    if (!programId.equals(SystemProgram.programId)) {
      throw new Error('invalid instruction; programId is not SystemProgram');
    }
  }
  /**
   * @internal
   */


  static checkKeyLength(keys, expectedLength) {
    if (keys.length < expectedLength) {
      throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
  }

}
/**
 * An enumeration of valid SystemInstructionType's
 */

/**
 * An enumeration of valid system InstructionType's
 * @internal
 */
const SYSTEM_INSTRUCTION_LAYOUTS = Object.freeze({
  Create: {
    index: 0,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), BufferLayout__namespace.ns64('lamports'), BufferLayout__namespace.ns64('space'), publicKey('programId')])
  },
  Assign: {
    index: 1,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('programId')])
  },
  Transfer: {
    index: 2,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), u64('lamports')])
  },
  CreateWithSeed: {
    index: 3,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('base'), rustString('seed'), BufferLayout__namespace.ns64('lamports'), BufferLayout__namespace.ns64('space'), publicKey('programId')])
  },
  AdvanceNonceAccount: {
    index: 4,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction')])
  },
  WithdrawNonceAccount: {
    index: 5,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), BufferLayout__namespace.ns64('lamports')])
  },
  InitializeNonceAccount: {
    index: 6,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('authorized')])
  },
  AuthorizeNonceAccount: {
    index: 7,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('authorized')])
  },
  Allocate: {
    index: 8,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), BufferLayout__namespace.ns64('space')])
  },
  AllocateWithSeed: {
    index: 9,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('base'), rustString('seed'), BufferLayout__namespace.ns64('space'), publicKey('programId')])
  },
  AssignWithSeed: {
    index: 10,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('base'), rustString('seed'), publicKey('programId')])
  },
  TransferWithSeed: {
    index: 11,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), u64('lamports'), rustString('seed'), publicKey('programId')])
  },
  UpgradeNonceAccount: {
    index: 12,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction')])
  }
});
/**
 * Factory class for transactions to interact with the System program
 */

class SystemProgram {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Public key that identifies the System program
   */


  /**
   * Generate a transaction instruction that creates a new account
   */
  static createAccount(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.Create;
    const data = encodeData(type, {
      lamports: params.lamports,
      space: params.space,
      programId: toBuffer(params.programId.toBuffer())
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.fromPubkey,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: params.newAccountPubkey,
        isSigner: true,
        isWritable: true
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that transfers lamports from one account to another
   */


  static transfer(params) {
    let data;
    let keys;

    if ('basePubkey' in params) {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.TransferWithSeed;
      data = encodeData(type, {
        lamports: BigInt(params.lamports),
        seed: params.seed,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.fromPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }];
    } else {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.Transfer;
      data = encodeData(type, {
        lamports: BigInt(params.lamports)
      });
      keys = [{
        pubkey: params.fromPubkey,
        isSigner: true,
        isWritable: true
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }];
    }

    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that assigns an account to a program
   */


  static assign(params) {
    let data;
    let keys;

    if ('basePubkey' in params) {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.AssignWithSeed;
      data = encodeData(type, {
        base: toBuffer(params.basePubkey.toBuffer()),
        seed: params.seed,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }];
    } else {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.Assign;
      data = encodeData(type, {
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: true,
        isWritable: true
      }];
    }

    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that creates a new account at
   *   an address generated with `from`, a seed, and programId
   */


  static createAccountWithSeed(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.CreateWithSeed;
    const data = encodeData(type, {
      base: toBuffer(params.basePubkey.toBuffer()),
      seed: params.seed,
      lamports: params.lamports,
      space: params.space,
      programId: toBuffer(params.programId.toBuffer())
    });
    let keys = [{
      pubkey: params.fromPubkey,
      isSigner: true,
      isWritable: true
    }, {
      pubkey: params.newAccountPubkey,
      isSigner: false,
      isWritable: true
    }];

    if (params.basePubkey != params.fromPubkey) {
      keys.push({
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      });
    }

    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction that creates a new Nonce account
   */


  static createNonceAccount(params) {
    const transaction = new Transaction();

    if ('basePubkey' in params && 'seed' in params) {
      transaction.add(SystemProgram.createAccountWithSeed({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.noncePubkey,
        basePubkey: params.basePubkey,
        seed: params.seed,
        lamports: params.lamports,
        space: NONCE_ACCOUNT_LENGTH,
        programId: this.programId
      }));
    } else {
      transaction.add(SystemProgram.createAccount({
        fromPubkey: params.fromPubkey,
        newAccountPubkey: params.noncePubkey,
        lamports: params.lamports,
        space: NONCE_ACCOUNT_LENGTH,
        programId: this.programId
      }));
    }

    const initParams = {
      noncePubkey: params.noncePubkey,
      authorizedPubkey: params.authorizedPubkey
    };
    transaction.add(this.nonceInitialize(initParams));
    return transaction;
  }
  /**
   * Generate an instruction to initialize a Nonce account
   */


  static nonceInitialize(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.InitializeNonceAccount;
    const data = encodeData(type, {
      authorized: toBuffer(params.authorizedPubkey.toBuffer())
    });
    const instructionData = {
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }
  /**
   * Generate an instruction to advance the nonce in a Nonce account
   */


  static nonceAdvance(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.AdvanceNonceAccount;
    const data = encodeData(type);
    const instructionData = {
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }
  /**
   * Generate a transaction instruction that withdraws lamports from a Nonce account
   */


  static nonceWithdraw(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.WithdrawNonceAccount;
    const data = encodeData(type, {
      lamports: params.lamports
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.toPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that authorizes a new PublicKey as the authority
   * on a Nonce account.
   */


  static nonceAuthorize(params) {
    const type = SYSTEM_INSTRUCTION_LAYOUTS.AuthorizeNonceAccount;
    const data = encodeData(type, {
      authorized: toBuffer(params.newAuthorizedPubkey.toBuffer())
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: params.noncePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction instruction that allocates space in an account without funding
   */


  static allocate(params) {
    let data;
    let keys;

    if ('basePubkey' in params) {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.AllocateWithSeed;
      data = encodeData(type, {
        base: toBuffer(params.basePubkey.toBuffer()),
        seed: params.seed,
        space: params.space,
        programId: toBuffer(params.programId.toBuffer())
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: params.basePubkey,
        isSigner: true,
        isWritable: false
      }];
    } else {
      const type = SYSTEM_INSTRUCTION_LAYOUTS.Allocate;
      data = encodeData(type, {
        space: params.space
      });
      keys = [{
        pubkey: params.accountPubkey,
        isSigner: true,
        isWritable: true
      }];
    }

    return new TransactionInstruction({
      keys,
      programId: this.programId,
      data
    });
  }

}
SystemProgram.programId = new PublicKey('11111111111111111111111111111111');

// rest of the Transaction fields
//
// TODO: replace 300 with a proper constant for the size of the other
// Transaction fields

const CHUNK_SIZE = PACKET_DATA_SIZE - 300;
/**
 * Program loader interface
 */

class Loader {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Amount of program data placed in each load Transaction
   */


  /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */
  static getMinNumSignatures(dataLength) {
    return 2 * ( // Every transaction requires two signatures (payer + program)
    Math.ceil(dataLength / Loader.chunkSize) + 1 + // Add one for Create transaction
    1) // Add one for Finalize transaction
    ;
  }
  /**
   * Loads a generic program
   *
   * @param connection The connection to use
   * @param payer System account that pays to load the program
   * @param program Account to load the program into
   * @param programId Public key that identifies the loader
   * @param data Program octets
   * @return true if program was loaded successfully, false if program was already loaded
   */


  static async load(connection, payer, program, programId, data) {
    {
      const balanceNeeded = await connection.getMinimumBalanceForRentExemption(data.length); // Fetch program account info to check if it has already been created

      const programInfo = await connection.getAccountInfo(program.publicKey, 'confirmed');
      let transaction = null;

      if (programInfo !== null) {
        if (programInfo.executable) {
          console.error('Program load failed, account is already executable');
          return false;
        }

        if (programInfo.data.length !== data.length) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.allocate({
            accountPubkey: program.publicKey,
            space: data.length
          }));
        }

        if (!programInfo.owner.equals(programId)) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.assign({
            accountPubkey: program.publicKey,
            programId
          }));
        }

        if (programInfo.lamports < balanceNeeded) {
          transaction = transaction || new Transaction();
          transaction.add(SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: program.publicKey,
            lamports: balanceNeeded - programInfo.lamports
          }));
        }
      } else {
        transaction = new Transaction().add(SystemProgram.createAccount({
          fromPubkey: payer.publicKey,
          newAccountPubkey: program.publicKey,
          lamports: balanceNeeded > 0 ? balanceNeeded : 1,
          space: data.length,
          programId
        }));
      } // If the account is already created correctly, skip this step
      // and proceed directly to loading instructions


      if (transaction !== null) {
        await sendAndConfirmTransaction(connection, transaction, [payer, program], {
          commitment: 'confirmed'
        });
      }
    }
    const dataLayout = BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), BufferLayout__namespace.u32('offset'), BufferLayout__namespace.u32('bytesLength'), BufferLayout__namespace.u32('bytesLengthPadding'), BufferLayout__namespace.seq(BufferLayout__namespace.u8('byte'), BufferLayout__namespace.offset(BufferLayout__namespace.u32(), -8), 'bytes')]);
    const chunkSize = Loader.chunkSize;
    let offset = 0;
    let array = data;
    let transactions = [];

    while (array.length > 0) {
      const bytes = array.slice(0, chunkSize);
      const data = buffer.Buffer.alloc(chunkSize + 16);
      dataLayout.encode({
        instruction: 0,
        // Load instruction
        offset,
        bytes: bytes,
        bytesLength: 0,
        bytesLengthPadding: 0
      }, data);
      const transaction = new Transaction().add({
        keys: [{
          pubkey: program.publicKey,
          isSigner: true,
          isWritable: true
        }],
        programId,
        data
      });
      transactions.push(sendAndConfirmTransaction(connection, transaction, [payer, program], {
        commitment: 'confirmed'
      })); // Delay between sends in an attempt to reduce rate limit errors

      if (connection._rpcEndpoint.includes('solana.com')) {
        const REQUESTS_PER_SECOND = 4;
        await sleep(1000 / REQUESTS_PER_SECOND);
      }

      offset += chunkSize;
      array = array.slice(chunkSize);
    }

    await Promise.all(transactions); // Finalize the account loaded with program data for execution

    {
      const dataLayout = BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction')]);
      const data = buffer.Buffer.alloc(dataLayout.span);
      dataLayout.encode({
        instruction: 1 // Finalize instruction

      }, data);
      const transaction = new Transaction().add({
        keys: [{
          pubkey: program.publicKey,
          isSigner: true,
          isWritable: true
        }, {
          pubkey: SYSVAR_RENT_PUBKEY,
          isSigner: false,
          isWritable: false
        }],
        programId,
        data
      });
      await sendAndConfirmTransaction(connection, transaction, [payer, program], {
        commitment: 'confirmed'
      });
    } // success

    return true;
  }

}
Loader.chunkSize = CHUNK_SIZE;

const BPF_LOADER_PROGRAM_ID = new PublicKey('BPFLoader2111111111111111111111111111111111');
/**
 * Factory class for transactions to interact with a program loader
 */

class BpfLoader {
  /**
   * Minimum number of signatures required to load a program not including
   * retries
   *
   * Can be used to calculate transaction fees
   */
  static getMinNumSignatures(dataLength) {
    return Loader.getMinNumSignatures(dataLength);
  }
  /**
   * Load a BPF program
   *
   * @param connection The connection to use
   * @param payer Account that will pay program loading fees
   * @param program Account to load the program into
   * @param elf The entire ELF containing the BPF program
   * @param loaderProgramId The program id of the BPF loader to use
   * @return true if program was loaded successfully, false if program was already loaded
   */


  static load(connection, payer, program, elf, loaderProgramId) {
    return Loader.load(connection, payer, program, loaderProgramId, elf);
  }

}

/**
 * Compute Budget Instruction class
 */

class ComputeBudgetInstruction {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Decode a compute budget instruction and retrieve the instruction type.
   */


  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = BufferLayout__namespace.u8('instruction');
    const typeIndex = instructionTypeLayout.decode(instruction.data);
    let type;

    for (const [ixType, layout] of Object.entries(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS)) {
      if (layout.index == typeIndex) {
        type = ixType;
        break;
      }
    }

    if (!type) {
      throw new Error('Instruction type incorrect; not a ComputeBudgetInstruction');
    }

    return type;
  }
  /**
   * Decode request units compute budget instruction and retrieve the instruction params.
   */


  static decodeRequestUnits(instruction) {
    this.checkProgramId(instruction.programId);
    const {
      units,
      additionalFee
    } = decodeData(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits, instruction.data);
    return {
      units,
      additionalFee
    };
  }
  /**
   * Decode request heap frame compute budget instruction and retrieve the instruction params.
   */


  static decodeRequestHeapFrame(instruction) {
    this.checkProgramId(instruction.programId);
    const {
      bytes
    } = decodeData(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame, instruction.data);
    return {
      bytes
    };
  }
  /**
   * Decode set compute unit limit compute budget instruction and retrieve the instruction params.
   */


  static decodeSetComputeUnitLimit(instruction) {
    this.checkProgramId(instruction.programId);
    const {
      units
    } = decodeData(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit, instruction.data);
    return {
      units
    };
  }
  /**
   * Decode set compute unit price compute budget instruction and retrieve the instruction params.
   */


  static decodeSetComputeUnitPrice(instruction) {
    this.checkProgramId(instruction.programId);
    const {
      microLamports
    } = decodeData(COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice, instruction.data);
    return {
      microLamports
    };
  }
  /**
   * @internal
   */


  static checkProgramId(programId) {
    if (!programId.equals(ComputeBudgetProgram.programId)) {
      throw new Error('invalid instruction; programId is not ComputeBudgetProgram');
    }
  }

}
/**
 * An enumeration of valid ComputeBudgetInstructionType's
 */

/**
 * An enumeration of valid ComputeBudget InstructionType's
 * @internal
 */
const COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = Object.freeze({
  RequestUnits: {
    index: 0,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u8('instruction'), BufferLayout__namespace.u32('units'), BufferLayout__namespace.u32('additionalFee')])
  },
  RequestHeapFrame: {
    index: 1,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u8('instruction'), BufferLayout__namespace.u32('bytes')])
  },
  SetComputeUnitLimit: {
    index: 2,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u8('instruction'), BufferLayout__namespace.u32('units')])
  },
  SetComputeUnitPrice: {
    index: 3,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u8('instruction'), u64('microLamports')])
  }
});
/**
 * Factory class for transaction instructions to interact with the Compute Budget program
 */

class ComputeBudgetProgram {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Public key that identifies the Compute Budget program
   */


  static requestUnits(params) {
    const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestUnits;
    const data = encodeData(type, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }

  static requestHeapFrame(params) {
    const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.RequestHeapFrame;
    const data = encodeData(type, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }

  static setComputeUnitLimit(params) {
    const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitLimit;
    const data = encodeData(type, params);
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }

  static setComputeUnitPrice(params) {
    const type = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS.SetComputeUnitPrice;
    const data = encodeData(type, {
      microLamports: BigInt(params.microLamports)
    });
    return new TransactionInstruction({
      keys: [],
      programId: this.programId,
      data
    });
  }

}
ComputeBudgetProgram.programId = new PublicKey('ComputeBudget111111111111111111111111111111');

var objToString = Object.prototype.toString;
var objKeys = Object.keys || function(obj) {
		var keys = [];
		for (var name in obj) {
			keys.push(name);
		}
		return keys;
	};

function stringify(val, isArrayProp) {
	var i, max, str, keys, key, propVal, toStr;
	if (val === true) {
		return "true";
	}
	if (val === false) {
		return "false";
	}
	switch (typeof val) {
		case "object":
			if (val === null) {
				return null;
			} else if (val.toJSON && typeof val.toJSON === "function") {
				return stringify(val.toJSON(), isArrayProp);
			} else {
				toStr = objToString.call(val);
				if (toStr === "[object Array]") {
					str = '[';
					max = val.length - 1;
					for(i = 0; i < max; i++) {
						str += stringify(val[i], true) + ',';
					}
					if (max > -1) {
						str += stringify(val[i], true);
					}
					return str + ']';
				} else if (toStr === "[object Object]") {
					// only object is left
					keys = objKeys(val).sort();
					max = keys.length;
					str = "";
					i = 0;
					while (i < max) {
						key = keys[i];
						propVal = stringify(val[key], false);
						if (propVal !== undefined) {
							if (str) {
								str += ',';
							}
							str += JSON.stringify(key) + ':' + propVal;
						}
						i++;
					}
					return '{' + str + '}';
				} else {
					return JSON.stringify(val);
				}
			}
		case "function":
		case "undefined":
			return isArrayProp ? null : undefined;
		case "string":
			return JSON.stringify(val);
		default:
			return isFinite(val) ? val : null;
	}
}

var fastStableStringify = function(val) {
	var returnVal = stringify(val, false);
	if (returnVal !== undefined) {
		return ''+ returnVal;
	}
};

var fastStableStringify$1 = fastStableStringify;

const MINIMUM_SLOT_PER_EPOCH = 32; // Returns the number of trailing zeros in the binary representation of self.

function trailingZeros(n) {
  let trailingZeros = 0;

  while (n > 1) {
    n /= 2;
    trailingZeros++;
  }

  return trailingZeros;
} // Returns the smallest power of two greater than or equal to n


function nextPowerOfTwo(n) {
  if (n === 0) return 1;
  n--;
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  n |= n >> 32;
  return n + 1;
}
/**
 * Epoch schedule
 * (see https://docs.solana.com/terminology#epoch)
 * Can be retrieved with the {@link connection.getEpochSchedule} method
 */


class EpochSchedule {
  /** The maximum number of slots in each epoch */

  /** The number of slots before beginning of an epoch to calculate a leader schedule for that epoch */

  /** Indicates whether epochs start short and grow */

  /** The first epoch with `slotsPerEpoch` slots */

  /** The first slot of `firstNormalEpoch` */
  constructor(slotsPerEpoch, leaderScheduleSlotOffset, warmup, firstNormalEpoch, firstNormalSlot) {
    this.slotsPerEpoch = void 0;
    this.leaderScheduleSlotOffset = void 0;
    this.warmup = void 0;
    this.firstNormalEpoch = void 0;
    this.firstNormalSlot = void 0;
    this.slotsPerEpoch = slotsPerEpoch;
    this.leaderScheduleSlotOffset = leaderScheduleSlotOffset;
    this.warmup = warmup;
    this.firstNormalEpoch = firstNormalEpoch;
    this.firstNormalSlot = firstNormalSlot;
  }

  getEpoch(slot) {
    return this.getEpochAndSlotIndex(slot)[0];
  }

  getEpochAndSlotIndex(slot) {
    if (slot < this.firstNormalSlot) {
      const epoch = trailingZeros(nextPowerOfTwo(slot + MINIMUM_SLOT_PER_EPOCH + 1)) - trailingZeros(MINIMUM_SLOT_PER_EPOCH) - 1;
      const epochLen = this.getSlotsInEpoch(epoch);
      const slotIndex = slot - (epochLen - MINIMUM_SLOT_PER_EPOCH);
      return [epoch, slotIndex];
    } else {
      const normalSlotIndex = slot - this.firstNormalSlot;
      const normalEpochIndex = Math.floor(normalSlotIndex / this.slotsPerEpoch);
      const epoch = this.firstNormalEpoch + normalEpochIndex;
      const slotIndex = normalSlotIndex % this.slotsPerEpoch;
      return [epoch, slotIndex];
    }
  }

  getFirstSlotInEpoch(epoch) {
    if (epoch <= this.firstNormalEpoch) {
      return (Math.pow(2, epoch) - 1) * MINIMUM_SLOT_PER_EPOCH;
    } else {
      return (epoch - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot;
    }
  }

  getLastSlotInEpoch(epoch) {
    return this.getFirstSlotInEpoch(epoch) + this.getSlotsInEpoch(epoch) - 1;
  }

  getSlotsInEpoch(epoch) {
    if (epoch < this.firstNormalEpoch) {
      return Math.pow(2, epoch + trailingZeros(MINIMUM_SLOT_PER_EPOCH));
    } else {
      return this.slotsPerEpoch;
    }
  }

}

class SendTransactionError extends Error {
  constructor(message, logs) {
    super(message);
    this.logs = void 0;
    this.logs = logs;
  }

} // Keep in sync with client/src/rpc_custom_errors.rs
// Typescript `enums` thwart tree-shaking. See https://bargsten.org/jsts/enums/

const SolanaJSONRPCErrorCode = {
  JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
  JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
  JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
  JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
  JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
  JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
  JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
  JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
  JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
  JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
  JSON_RPC_SCAN_ERROR: -32012,
  JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
  JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
  JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
  JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
};
class SolanaJSONRPCError extends Error {
  constructor({
    code,
    message,
    data
  }, customMessage) {
    super(customMessage != null ? `${customMessage}: ${message}` : message);
    this.code = void 0;
    this.data = void 0;
    this.code = code;
    this.data = data;
    this.name = 'SolanaJSONRPCError';
  }

}

var fetchImpl = globalThis.fetch;

// TODO: These constants should be removed in favor of reading them out of a
// Syscall account

/**
 * @internal
 */
const NUM_TICKS_PER_SECOND = 160;
/**
 * @internal
 */

const DEFAULT_TICKS_PER_SLOT = 64;
/**
 * @internal
 */

const NUM_SLOTS_PER_SECOND = NUM_TICKS_PER_SECOND / DEFAULT_TICKS_PER_SLOT;
/**
 * @internal
 */

const MS_PER_SLOT = 1000 / NUM_SLOTS_PER_SECOND;

class TransactionExpiredBlockheightExceededError extends Error {
  constructor(signature) {
    super(`Signature ${signature} has expired: block height exceeded.`);
    this.signature = void 0;
    this.signature = signature;
  }

}
Object.defineProperty(TransactionExpiredBlockheightExceededError.prototype, 'name', {
  value: 'TransactionExpiredBlockheightExceededError'
});
class TransactionExpiredTimeoutError extends Error {
  constructor(signature, timeoutSeconds) {
    super(`Transaction was not confirmed in ${timeoutSeconds.toFixed(2)} seconds. It is ` + 'unknown if it succeeded or failed. Check signature ' + `${signature} using the Solana Explorer or CLI tools.`);
    this.signature = void 0;
    this.signature = signature;
  }

}
Object.defineProperty(TransactionExpiredTimeoutError.prototype, 'name', {
  value: 'TransactionExpiredTimeoutError'
});

function makeWebsocketUrl(endpoint) {
  let url = new reactNativeUrlPolyfill.URL(endpoint);
  const useHttps = url.protocol === 'https:';
  url.protocol = useHttps ? 'wss:' : 'ws:';
  url.host = ''; // Only shift the port by +1 as a convention for ws(s) only if given endpoint
  // is explictly specifying the endpoint port (HTTP-based RPC), assuming
  // we're directly trying to connect to solana-validator's ws listening port.
  // When the endpoint omits the port, we're connecting to the protocol
  // default ports: http(80) or https(443) and it's assumed we're behind a reverse
  // proxy which manages WebSocket upgrade and backend port redirection.

  if (url.port !== '') {
    url.port = String(Number(url.port) + 1);
  }

  return url.toString();
}

var _process$env$npm_pack;
const PublicKeyFromString = superstruct.coerce(superstruct.instance(PublicKey), superstruct.string(), value => new PublicKey(value));
const RawAccountDataResult = superstruct.tuple([superstruct.string(), superstruct.literal('base64')]);
const BufferFromRawAccountData = superstruct.coerce(superstruct.instance(buffer.Buffer), RawAccountDataResult, value => buffer.Buffer.from(value[0], 'base64'));
/**
 * Attempt to use a recent blockhash for up to 30 seconds
 * @internal
 */

const BLOCKHASH_CACHE_TIMEOUT_MS = 30 * 1000;
/**
 * HACK.
 * Copied from rpc-websockets/dist/lib/client.
 * Otherwise, `yarn build` fails with:
 * https://gist.github.com/steveluscher/c057eca81d479ef705cdb53162f9971d
 */

/** @internal */
function extractCommitmentFromConfig(commitmentOrConfig) {
  let commitment;
  let config;

  if (typeof commitmentOrConfig === 'string') {
    commitment = commitmentOrConfig;
  } else if (commitmentOrConfig) {
    const {
      commitment: specifiedCommitment,
      ...specifiedConfig
    } = commitmentOrConfig;
    commitment = specifiedCommitment;
    config = specifiedConfig;
  }

  return {
    commitment,
    config
  };
}
/**
 * @internal
 */


function createRpcResult(result) {
  return superstruct.union([superstruct.type({
    jsonrpc: superstruct.literal('2.0'),
    id: superstruct.string(),
    result
  }), superstruct.type({
    jsonrpc: superstruct.literal('2.0'),
    id: superstruct.string(),
    error: superstruct.type({
      code: superstruct.unknown(),
      message: superstruct.string(),
      data: superstruct.optional(superstruct.any())
    })
  })]);
}

const UnknownRpcResult = createRpcResult(superstruct.unknown());
/**
 * @internal
 */

function jsonRpcResult(schema) {
  return superstruct.coerce(createRpcResult(schema), UnknownRpcResult, value => {
    if ('error' in value) {
      return value;
    } else {
      return { ...value,
        result: superstruct.create(value.result, schema)
      };
    }
  });
}
/**
 * @internal
 */


function jsonRpcResultAndContext(value) {
  return jsonRpcResult(superstruct.type({
    context: superstruct.type({
      slot: superstruct.number()
    }),
    value
  }));
}
/**
 * @internal
 */


function notificationResultAndContext(value) {
  return superstruct.type({
    context: superstruct.type({
      slot: superstruct.number()
    }),
    value
  });
}
/**
 * The level of commitment desired when querying state
 * <pre>
 *   'processed': Query the most recent block which has reached 1 confirmation by the connected node
 *   'confirmed': Query the most recent block which has reached 1 confirmation by the cluster
 *   'finalized': Query the most recent block which has been finalized by the cluster
 * </pre>
 */


const GetInflationGovernorResult = superstruct.type({
  foundation: superstruct.number(),
  foundationTerm: superstruct.number(),
  initial: superstruct.number(),
  taper: superstruct.number(),
  terminal: superstruct.number()
});
/**
 * The inflation reward for an epoch
 */

/**
 * Expected JSON RPC response for the "getInflationReward" message
 */
const GetInflationRewardResult = jsonRpcResult(superstruct.array(superstruct.nullable(superstruct.type({
  epoch: superstruct.number(),
  effectiveSlot: superstruct.number(),
  amount: superstruct.number(),
  postBalance: superstruct.number()
}))));
/**
 * Information about the current epoch
 */

const GetEpochInfoResult = superstruct.type({
  epoch: superstruct.number(),
  slotIndex: superstruct.number(),
  slotsInEpoch: superstruct.number(),
  absoluteSlot: superstruct.number(),
  blockHeight: superstruct.optional(superstruct.number()),
  transactionCount: superstruct.optional(superstruct.number())
});
const GetEpochScheduleResult = superstruct.type({
  slotsPerEpoch: superstruct.number(),
  leaderScheduleSlotOffset: superstruct.number(),
  warmup: superstruct.boolean(),
  firstNormalEpoch: superstruct.number(),
  firstNormalSlot: superstruct.number()
});
/**
 * Leader schedule
 * (see https://docs.solana.com/terminology#leader-schedule)
 */

const GetLeaderScheduleResult = superstruct.record(superstruct.string(), superstruct.array(superstruct.number()));
/**
 * Transaction error or null
 */

const TransactionErrorResult = superstruct.nullable(superstruct.union([superstruct.type({}), superstruct.string()]));
/**
 * Signature status for a transaction
 */

const SignatureStatusResult = superstruct.type({
  err: TransactionErrorResult
});
/**
 * Transaction signature received notification
 */

const SignatureReceivedResult = superstruct.literal('receivedSignature');
/**
 * Version info for a node
 */

const VersionResult = superstruct.type({
  'solana-core': superstruct.string(),
  'feature-set': superstruct.optional(superstruct.number())
});
const SimulatedTransactionResponseStruct = jsonRpcResultAndContext(superstruct.type({
  err: superstruct.nullable(superstruct.union([superstruct.type({}), superstruct.string()])),
  logs: superstruct.nullable(superstruct.array(superstruct.string())),
  accounts: superstruct.optional(superstruct.nullable(superstruct.array(superstruct.nullable(superstruct.type({
    executable: superstruct.boolean(),
    owner: superstruct.string(),
    lamports: superstruct.number(),
    data: superstruct.array(superstruct.string()),
    rentEpoch: superstruct.optional(superstruct.number())
  }))))),
  unitsConsumed: superstruct.optional(superstruct.number()),
  returnData: superstruct.optional(superstruct.nullable(superstruct.type({
    programId: superstruct.string(),
    data: superstruct.tuple([superstruct.string(), superstruct.literal('base64')])
  })))
}));

/**
 * Expected JSON RPC response for the "getBlockProduction" message
 */
const BlockProductionResponseStruct = jsonRpcResultAndContext(superstruct.type({
  byIdentity: superstruct.record(superstruct.string(), superstruct.array(superstruct.number())),
  range: superstruct.type({
    firstSlot: superstruct.number(),
    lastSlot: superstruct.number()
  })
}));
/**
 * A performance sample
 */

function createRpcClient(url, useHttps, httpHeaders, customFetch, fetchMiddleware, disableRetryOnRateLimit) {
  const fetch = customFetch ? customFetch : fetchImpl;

  let fetchWithMiddleware;

  if (fetchMiddleware) {
    fetchWithMiddleware = async (info, init) => {
      const modifiedFetchArgs = await new Promise((resolve, reject) => {
        try {
          fetchMiddleware(info, init, (modifiedInfo, modifiedInit) => resolve([modifiedInfo, modifiedInit]));
        } catch (error) {
          reject(error);
        }
      });
      return await fetch(...modifiedFetchArgs);
    };
  }

  const clientBrowser = new RpcClient__default["default"](async (request, callback) => {
    const agent = undefined;
    const options = {
      method: 'POST',
      body: request,
      agent,
      headers: Object.assign({
        'Content-Type': 'application/json'
      }, httpHeaders || {}, COMMON_HTTP_HEADERS)
    };

    try {
      let too_many_requests_retries = 5;
      let res;
      let waitTime = 500;

      for (;;) {
        if (fetchWithMiddleware) {
          res = await fetchWithMiddleware(url, options);
        } else {
          res = await fetch(url, options);
        }

        if (res.status !== 429
        /* Too many requests */
        ) {
          break;
        }

        if (disableRetryOnRateLimit === true) {
          break;
        }

        too_many_requests_retries -= 1;

        if (too_many_requests_retries === 0) {
          break;
        }

        console.log(`Server responded with ${res.status} ${res.statusText}.  Retrying after ${waitTime}ms delay...`);
        await sleep(waitTime);
        waitTime *= 2;
      }

      const text = await res.text();

      if (res.ok) {
        callback(null, text);
      } else {
        callback(new Error(`${res.status} ${res.statusText}: ${text}`));
      }
    } catch (err) {
      if (err instanceof Error) callback(err);
    } finally {
    }
  }, {});
  return clientBrowser;
}

function createRpcRequest(client) {
  return (method, args) => {
    return new Promise((resolve, reject) => {
      client.request(method, args, (err, response) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(response);
      });
    });
  };
}

function createRpcBatchRequest(client) {
  return requests => {
    return new Promise((resolve, reject) => {
      // Do nothing if requests is empty
      if (requests.length === 0) resolve([]);
      const batch = requests.map(params => {
        return client.request(params.methodName, params.args);
      });
      client.request(batch, (err, response) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(response);
      });
    });
  };
}
/**
 * Expected JSON RPC response for the "getInflationGovernor" message
 */


const GetInflationGovernorRpcResult = jsonRpcResult(GetInflationGovernorResult);
/**
 * Expected JSON RPC response for the "getEpochInfo" message
 */

const GetEpochInfoRpcResult = jsonRpcResult(GetEpochInfoResult);
/**
 * Expected JSON RPC response for the "getEpochSchedule" message
 */

const GetEpochScheduleRpcResult = jsonRpcResult(GetEpochScheduleResult);
/**
 * Expected JSON RPC response for the "getLeaderSchedule" message
 */

const GetLeaderScheduleRpcResult = jsonRpcResult(GetLeaderScheduleResult);
/**
 * Expected JSON RPC response for the "minimumLedgerSlot" and "getFirstAvailableBlock" messages
 */

const SlotRpcResult = jsonRpcResult(superstruct.number());
/**
 * Supply
 */

/**
 * Expected JSON RPC response for the "getSupply" message
 */
const GetSupplyRpcResult = jsonRpcResultAndContext(superstruct.type({
  total: superstruct.number(),
  circulating: superstruct.number(),
  nonCirculating: superstruct.number(),
  nonCirculatingAccounts: superstruct.array(PublicKeyFromString)
}));
/**
 * Token amount object which returns a token amount in different formats
 * for various client use cases.
 */

/**
 * Expected JSON RPC structure for token amounts
 */
const TokenAmountResult = superstruct.type({
  amount: superstruct.string(),
  uiAmount: superstruct.nullable(superstruct.number()),
  decimals: superstruct.number(),
  uiAmountString: superstruct.optional(superstruct.string())
});
/**
 * Token address and balance.
 */

/**
 * Expected JSON RPC response for the "getTokenLargestAccounts" message
 */
const GetTokenLargestAccountsResult = jsonRpcResultAndContext(superstruct.array(superstruct.type({
  address: PublicKeyFromString,
  amount: superstruct.string(),
  uiAmount: superstruct.nullable(superstruct.number()),
  decimals: superstruct.number(),
  uiAmountString: superstruct.optional(superstruct.string())
})));
/**
 * Expected JSON RPC response for the "getTokenAccountsByOwner" message
 */

const GetTokenAccountsByOwner = jsonRpcResultAndContext(superstruct.array(superstruct.type({
  pubkey: PublicKeyFromString,
  account: superstruct.type({
    executable: superstruct.boolean(),
    owner: PublicKeyFromString,
    lamports: superstruct.number(),
    data: BufferFromRawAccountData,
    rentEpoch: superstruct.number()
  })
})));
const ParsedAccountDataResult = superstruct.type({
  program: superstruct.string(),
  parsed: superstruct.unknown(),
  space: superstruct.number()
});
/**
 * Expected JSON RPC response for the "getTokenAccountsByOwner" message with parsed data
 */

const GetParsedTokenAccountsByOwner = jsonRpcResultAndContext(superstruct.array(superstruct.type({
  pubkey: PublicKeyFromString,
  account: superstruct.type({
    executable: superstruct.boolean(),
    owner: PublicKeyFromString,
    lamports: superstruct.number(),
    data: ParsedAccountDataResult,
    rentEpoch: superstruct.number()
  })
})));
/**
 * Pair of an account address and its balance
 */

/**
 * Expected JSON RPC response for the "getLargestAccounts" message
 */
const GetLargestAccountsRpcResult = jsonRpcResultAndContext(superstruct.array(superstruct.type({
  lamports: superstruct.number(),
  address: PublicKeyFromString
})));
/**
 * @internal
 */

const AccountInfoResult = superstruct.type({
  executable: superstruct.boolean(),
  owner: PublicKeyFromString,
  lamports: superstruct.number(),
  data: BufferFromRawAccountData,
  rentEpoch: superstruct.number()
});
/**
 * @internal
 */

const KeyedAccountInfoResult = superstruct.type({
  pubkey: PublicKeyFromString,
  account: AccountInfoResult
});
const ParsedOrRawAccountData = superstruct.coerce(superstruct.union([superstruct.instance(buffer.Buffer), ParsedAccountDataResult]), superstruct.union([RawAccountDataResult, ParsedAccountDataResult]), value => {
  if (Array.isArray(value)) {
    return superstruct.create(value, BufferFromRawAccountData);
  } else {
    return value;
  }
});
/**
 * @internal
 */

const ParsedAccountInfoResult = superstruct.type({
  executable: superstruct.boolean(),
  owner: PublicKeyFromString,
  lamports: superstruct.number(),
  data: ParsedOrRawAccountData,
  rentEpoch: superstruct.number()
});
const KeyedParsedAccountInfoResult = superstruct.type({
  pubkey: PublicKeyFromString,
  account: ParsedAccountInfoResult
});
/**
 * @internal
 */

const StakeActivationResult = superstruct.type({
  state: superstruct.union([superstruct.literal('active'), superstruct.literal('inactive'), superstruct.literal('activating'), superstruct.literal('deactivating')]),
  active: superstruct.number(),
  inactive: superstruct.number()
});
/**
 * Expected JSON RPC response for the "getConfirmedSignaturesForAddress2" message
 */

const GetConfirmedSignaturesForAddress2RpcResult = jsonRpcResult(superstruct.array(superstruct.type({
  signature: superstruct.string(),
  slot: superstruct.number(),
  err: TransactionErrorResult,
  memo: superstruct.nullable(superstruct.string()),
  blockTime: superstruct.optional(superstruct.nullable(superstruct.number()))
})));
/**
 * Expected JSON RPC response for the "getSignaturesForAddress" message
 */

const GetSignaturesForAddressRpcResult = jsonRpcResult(superstruct.array(superstruct.type({
  signature: superstruct.string(),
  slot: superstruct.number(),
  err: TransactionErrorResult,
  memo: superstruct.nullable(superstruct.string()),
  blockTime: superstruct.optional(superstruct.nullable(superstruct.number()))
})));
/***
 * Expected JSON RPC response for the "accountNotification" message
 */

const AccountNotificationResult = superstruct.type({
  subscription: superstruct.number(),
  result: notificationResultAndContext(AccountInfoResult)
});
/**
 * @internal
 */

const ProgramAccountInfoResult = superstruct.type({
  pubkey: PublicKeyFromString,
  account: AccountInfoResult
});
/***
 * Expected JSON RPC response for the "programNotification" message
 */

const ProgramAccountNotificationResult = superstruct.type({
  subscription: superstruct.number(),
  result: notificationResultAndContext(ProgramAccountInfoResult)
});
/**
 * @internal
 */

const SlotInfoResult = superstruct.type({
  parent: superstruct.number(),
  slot: superstruct.number(),
  root: superstruct.number()
});
/**
 * Expected JSON RPC response for the "slotNotification" message
 */

const SlotNotificationResult = superstruct.type({
  subscription: superstruct.number(),
  result: SlotInfoResult
});
/**
 * Slot updates which can be used for tracking the live progress of a cluster.
 * - `"firstShredReceived"`: connected node received the first shred of a block.
 * Indicates that a new block that is being produced.
 * - `"completed"`: connected node has received all shreds of a block. Indicates
 * a block was recently produced.
 * - `"optimisticConfirmation"`: block was optimistically confirmed by the
 * cluster. It is not guaranteed that an optimistic confirmation notification
 * will be sent for every finalized blocks.
 * - `"root"`: the connected node rooted this block.
 * - `"createdBank"`: the connected node has started validating this block.
 * - `"frozen"`: the connected node has validated this block.
 * - `"dead"`: the connected node failed to validate this block.
 */

/**
 * @internal
 */
const SlotUpdateResult = superstruct.union([superstruct.type({
  type: superstruct.union([superstruct.literal('firstShredReceived'), superstruct.literal('completed'), superstruct.literal('optimisticConfirmation'), superstruct.literal('root')]),
  slot: superstruct.number(),
  timestamp: superstruct.number()
}), superstruct.type({
  type: superstruct.literal('createdBank'),
  parent: superstruct.number(),
  slot: superstruct.number(),
  timestamp: superstruct.number()
}), superstruct.type({
  type: superstruct.literal('frozen'),
  slot: superstruct.number(),
  timestamp: superstruct.number(),
  stats: superstruct.type({
    numTransactionEntries: superstruct.number(),
    numSuccessfulTransactions: superstruct.number(),
    numFailedTransactions: superstruct.number(),
    maxTransactionsPerEntry: superstruct.number()
  })
}), superstruct.type({
  type: superstruct.literal('dead'),
  slot: superstruct.number(),
  timestamp: superstruct.number(),
  err: superstruct.string()
})]);
/**
 * Expected JSON RPC response for the "slotsUpdatesNotification" message
 */

const SlotUpdateNotificationResult = superstruct.type({
  subscription: superstruct.number(),
  result: SlotUpdateResult
});
/**
 * Expected JSON RPC response for the "signatureNotification" message
 */

const SignatureNotificationResult = superstruct.type({
  subscription: superstruct.number(),
  result: notificationResultAndContext(superstruct.union([SignatureStatusResult, SignatureReceivedResult]))
});
/**
 * Expected JSON RPC response for the "rootNotification" message
 */

const RootNotificationResult = superstruct.type({
  subscription: superstruct.number(),
  result: superstruct.number()
});
const ContactInfoResult = superstruct.type({
  pubkey: superstruct.string(),
  gossip: superstruct.nullable(superstruct.string()),
  tpu: superstruct.nullable(superstruct.string()),
  rpc: superstruct.nullable(superstruct.string()),
  version: superstruct.nullable(superstruct.string())
});
const VoteAccountInfoResult = superstruct.type({
  votePubkey: superstruct.string(),
  nodePubkey: superstruct.string(),
  activatedStake: superstruct.number(),
  epochVoteAccount: superstruct.boolean(),
  epochCredits: superstruct.array(superstruct.tuple([superstruct.number(), superstruct.number(), superstruct.number()])),
  commission: superstruct.number(),
  lastVote: superstruct.number(),
  rootSlot: superstruct.nullable(superstruct.number())
});
/**
 * Expected JSON RPC response for the "getVoteAccounts" message
 */

const GetVoteAccounts = jsonRpcResult(superstruct.type({
  current: superstruct.array(VoteAccountInfoResult),
  delinquent: superstruct.array(VoteAccountInfoResult)
}));
const ConfirmationStatus = superstruct.union([superstruct.literal('processed'), superstruct.literal('confirmed'), superstruct.literal('finalized')]);
const SignatureStatusResponse = superstruct.type({
  slot: superstruct.number(),
  confirmations: superstruct.nullable(superstruct.number()),
  err: TransactionErrorResult,
  confirmationStatus: superstruct.optional(ConfirmationStatus)
});
/**
 * Expected JSON RPC response for the "getSignatureStatuses" message
 */

const GetSignatureStatusesRpcResult = jsonRpcResultAndContext(superstruct.array(superstruct.nullable(SignatureStatusResponse)));
/**
 * Expected JSON RPC response for the "getMinimumBalanceForRentExemption" message
 */

const GetMinimumBalanceForRentExemptionRpcResult = jsonRpcResult(superstruct.number());
const ConfirmedTransactionResult = superstruct.type({
  signatures: superstruct.array(superstruct.string()),
  message: superstruct.type({
    accountKeys: superstruct.array(superstruct.string()),
    header: superstruct.type({
      numRequiredSignatures: superstruct.number(),
      numReadonlySignedAccounts: superstruct.number(),
      numReadonlyUnsignedAccounts: superstruct.number()
    }),
    instructions: superstruct.array(superstruct.type({
      accounts: superstruct.array(superstruct.number()),
      data: superstruct.string(),
      programIdIndex: superstruct.number()
    })),
    recentBlockhash: superstruct.string()
  })
});
const ParsedInstructionResult = superstruct.type({
  parsed: superstruct.unknown(),
  program: superstruct.string(),
  programId: PublicKeyFromString
});
const RawInstructionResult = superstruct.type({
  accounts: superstruct.array(PublicKeyFromString),
  data: superstruct.string(),
  programId: PublicKeyFromString
});
const InstructionResult = superstruct.union([RawInstructionResult, ParsedInstructionResult]);
const UnknownInstructionResult = superstruct.union([superstruct.type({
  parsed: superstruct.unknown(),
  program: superstruct.string(),
  programId: superstruct.string()
}), superstruct.type({
  accounts: superstruct.array(superstruct.string()),
  data: superstruct.string(),
  programId: superstruct.string()
})]);
const ParsedOrRawInstruction = superstruct.coerce(InstructionResult, UnknownInstructionResult, value => {
  if ('accounts' in value) {
    return superstruct.create(value, RawInstructionResult);
  } else {
    return superstruct.create(value, ParsedInstructionResult);
  }
});
/**
 * @internal
 */

const ParsedConfirmedTransactionResult = superstruct.type({
  signatures: superstruct.array(superstruct.string()),
  message: superstruct.type({
    accountKeys: superstruct.array(superstruct.type({
      pubkey: PublicKeyFromString,
      signer: superstruct.boolean(),
      writable: superstruct.boolean()
    })),
    instructions: superstruct.array(ParsedOrRawInstruction),
    recentBlockhash: superstruct.string()
  })
});
const TokenBalanceResult = superstruct.type({
  accountIndex: superstruct.number(),
  mint: superstruct.string(),
  owner: superstruct.optional(superstruct.string()),
  uiTokenAmount: TokenAmountResult
});
/**
 * @internal
 */

const ConfirmedTransactionMetaResult = superstruct.type({
  err: TransactionErrorResult,
  fee: superstruct.number(),
  innerInstructions: superstruct.optional(superstruct.nullable(superstruct.array(superstruct.type({
    index: superstruct.number(),
    instructions: superstruct.array(superstruct.type({
      accounts: superstruct.array(superstruct.number()),
      data: superstruct.string(),
      programIdIndex: superstruct.number()
    }))
  })))),
  preBalances: superstruct.array(superstruct.number()),
  postBalances: superstruct.array(superstruct.number()),
  logMessages: superstruct.optional(superstruct.nullable(superstruct.array(superstruct.string()))),
  preTokenBalances: superstruct.optional(superstruct.nullable(superstruct.array(TokenBalanceResult))),
  postTokenBalances: superstruct.optional(superstruct.nullable(superstruct.array(TokenBalanceResult)))
});
/**
 * @internal
 */

const ParsedConfirmedTransactionMetaResult = superstruct.type({
  err: TransactionErrorResult,
  fee: superstruct.number(),
  innerInstructions: superstruct.optional(superstruct.nullable(superstruct.array(superstruct.type({
    index: superstruct.number(),
    instructions: superstruct.array(ParsedOrRawInstruction)
  })))),
  preBalances: superstruct.array(superstruct.number()),
  postBalances: superstruct.array(superstruct.number()),
  logMessages: superstruct.optional(superstruct.nullable(superstruct.array(superstruct.string()))),
  preTokenBalances: superstruct.optional(superstruct.nullable(superstruct.array(TokenBalanceResult))),
  postTokenBalances: superstruct.optional(superstruct.nullable(superstruct.array(TokenBalanceResult)))
});
/**
 * Expected JSON RPC response for the "getBlock" message
 */

const GetBlockRpcResult = jsonRpcResult(superstruct.nullable(superstruct.type({
  blockhash: superstruct.string(),
  previousBlockhash: superstruct.string(),
  parentSlot: superstruct.number(),
  transactions: superstruct.array(superstruct.type({
    transaction: ConfirmedTransactionResult,
    meta: superstruct.nullable(ConfirmedTransactionMetaResult)
  })),
  rewards: superstruct.optional(superstruct.array(superstruct.type({
    pubkey: superstruct.string(),
    lamports: superstruct.number(),
    postBalance: superstruct.nullable(superstruct.number()),
    rewardType: superstruct.nullable(superstruct.string())
  }))),
  blockTime: superstruct.nullable(superstruct.number()),
  blockHeight: superstruct.nullable(superstruct.number())
})));
/**
 * Expected JSON RPC response for the "getConfirmedBlock" message
 *
 * @deprecated Deprecated since Solana v1.8.0. Please use {@link GetBlockRpcResult} instead.
 */

const GetConfirmedBlockRpcResult = jsonRpcResult(superstruct.nullable(superstruct.type({
  blockhash: superstruct.string(),
  previousBlockhash: superstruct.string(),
  parentSlot: superstruct.number(),
  transactions: superstruct.array(superstruct.type({
    transaction: ConfirmedTransactionResult,
    meta: superstruct.nullable(ConfirmedTransactionMetaResult)
  })),
  rewards: superstruct.optional(superstruct.array(superstruct.type({
    pubkey: superstruct.string(),
    lamports: superstruct.number(),
    postBalance: superstruct.nullable(superstruct.number()),
    rewardType: superstruct.nullable(superstruct.string())
  }))),
  blockTime: superstruct.nullable(superstruct.number())
})));
/**
 * Expected JSON RPC response for the "getBlock" message
 */

const GetBlockSignaturesRpcResult = jsonRpcResult(superstruct.nullable(superstruct.type({
  blockhash: superstruct.string(),
  previousBlockhash: superstruct.string(),
  parentSlot: superstruct.number(),
  signatures: superstruct.array(superstruct.string()),
  blockTime: superstruct.nullable(superstruct.number())
})));
/**
 * Expected JSON RPC response for the "getTransaction" message
 */

const GetTransactionRpcResult = jsonRpcResult(superstruct.nullable(superstruct.type({
  slot: superstruct.number(),
  meta: ConfirmedTransactionMetaResult,
  blockTime: superstruct.optional(superstruct.nullable(superstruct.number())),
  transaction: ConfirmedTransactionResult
})));
/**
 * Expected parsed JSON RPC response for the "getTransaction" message
 */

const GetParsedTransactionRpcResult = jsonRpcResult(superstruct.nullable(superstruct.type({
  slot: superstruct.number(),
  transaction: ParsedConfirmedTransactionResult,
  meta: superstruct.nullable(ParsedConfirmedTransactionMetaResult),
  blockTime: superstruct.optional(superstruct.nullable(superstruct.number()))
})));
/**
 * Expected JSON RPC response for the "getRecentBlockhash" message
 *
 * @deprecated Deprecated since Solana v1.8.0. Please use {@link GetLatestBlockhashRpcResult} instead.
 */

const GetRecentBlockhashAndContextRpcResult = jsonRpcResultAndContext(superstruct.type({
  blockhash: superstruct.string(),
  feeCalculator: superstruct.type({
    lamportsPerSignature: superstruct.number()
  })
}));
/**
 * Expected JSON RPC response for the "getLatestBlockhash" message
 */

const GetLatestBlockhashRpcResult = jsonRpcResultAndContext(superstruct.type({
  blockhash: superstruct.string(),
  lastValidBlockHeight: superstruct.number()
}));
const PerfSampleResult = superstruct.type({
  slot: superstruct.number(),
  numTransactions: superstruct.number(),
  numSlots: superstruct.number(),
  samplePeriodSecs: superstruct.number()
});
/*
 * Expected JSON RPC response for "getRecentPerformanceSamples" message
 */

const GetRecentPerformanceSamplesRpcResult = jsonRpcResult(superstruct.array(PerfSampleResult));
/**
 * Expected JSON RPC response for the "getFeeCalculatorForBlockhash" message
 */

const GetFeeCalculatorRpcResult = jsonRpcResultAndContext(superstruct.nullable(superstruct.type({
  feeCalculator: superstruct.type({
    lamportsPerSignature: superstruct.number()
  })
})));
/**
 * Expected JSON RPC response for the "requestAirdrop" message
 */

const RequestAirdropRpcResult = jsonRpcResult(superstruct.string());
/**
 * Expected JSON RPC response for the "sendTransaction" message
 */

const SendTransactionRpcResult = jsonRpcResult(superstruct.string());
/**
 * Information about the latest slot being processed by a node
 */

/**
 * @internal
 */
const LogsResult = superstruct.type({
  err: TransactionErrorResult,
  logs: superstruct.array(superstruct.string()),
  signature: superstruct.string()
});
/**
 * Logs result.
 */

/**
 * Expected JSON RPC response for the "logsNotification" message.
 */
const LogsNotificationResult = superstruct.type({
  result: notificationResultAndContext(LogsResult),
  subscription: superstruct.number()
});
/**
 * Filter for log subscriptions.
 */

/** @internal */
const COMMON_HTTP_HEADERS = {
  'solana-client': `js/${(_process$env$npm_pack = "0.0.0-development") !== null && _process$env$npm_pack !== void 0 ? _process$env$npm_pack : 'UNKNOWN'}`
};
/**
 * A connection to a fullnode JSON RPC endpoint
 */

class Connection {
  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal
   * A number that we increment every time an active connection closes.
   * Used to determine whether the same socket connection that was open
   * when an async operation started is the same one that's active when
   * its continuation fires.
   *
   */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /** @internal */

  /**
   * Special case.
   * After a signature is processed, RPCs automatically dispose of the
   * subscription on the server side. We need to track which of these
   * subscriptions have been disposed in such a way, so that we know
   * whether the client is dealing with a not-yet-processed signature
   * (in which case we must tear down the server subscription) or an
   * already-processed signature (in which case the client can simply
   * clear out the subscription locally without telling the server).
   *
   * NOTE: There is a proposal to eliminate this special case, here:
   * https://github.com/solana-labs/solana/issues/18892
   */

  /** @internal */

  /**
   * Establish a JSON RPC connection
   *
   * @param endpoint URL to the fullnode JSON RPC endpoint
   * @param commitmentOrConfig optional default commitment level or optional ConnectionConfig configuration object
   */
  constructor(endpoint, commitmentOrConfig) {
    this._commitment = void 0;
    this._confirmTransactionInitialTimeout = void 0;
    this._rpcEndpoint = void 0;
    this._rpcWsEndpoint = void 0;
    this._rpcClient = void 0;
    this._rpcRequest = void 0;
    this._rpcBatchRequest = void 0;
    this._rpcWebSocket = void 0;
    this._rpcWebSocketConnected = false;
    this._rpcWebSocketHeartbeat = null;
    this._rpcWebSocketIdleTimeout = null;
    this._rpcWebSocketGeneration = 0;
    this._disableBlockhashCaching = false;
    this._pollingBlockhash = false;
    this._blockhashInfo = {
      latestBlockhash: null,
      lastFetch: 0,
      transactionSignatures: [],
      simulatedSignatures: []
    };
    this._nextClientSubscriptionId = 0;
    this._subscriptionDisposeFunctionsByClientSubscriptionId = {};
    this._subscriptionCallbacksByServerSubscriptionId = {};
    this._subscriptionsByHash = {};
    this._subscriptionsAutoDisposedByRpc = new Set();
    let url = new reactNativeUrlPolyfill.URL(endpoint);
    const useHttps = url.protocol === 'https:';
    let wsEndpoint;
    let httpHeaders;
    let fetch;
    let fetchMiddleware;
    let disableRetryOnRateLimit;

    if (commitmentOrConfig && typeof commitmentOrConfig === 'string') {
      this._commitment = commitmentOrConfig;
    } else if (commitmentOrConfig) {
      this._commitment = commitmentOrConfig.commitment;
      this._confirmTransactionInitialTimeout = commitmentOrConfig.confirmTransactionInitialTimeout;
      wsEndpoint = commitmentOrConfig.wsEndpoint;
      httpHeaders = commitmentOrConfig.httpHeaders;
      fetch = commitmentOrConfig.fetch;
      fetchMiddleware = commitmentOrConfig.fetchMiddleware;
      disableRetryOnRateLimit = commitmentOrConfig.disableRetryOnRateLimit;
    }

    this._rpcEndpoint = endpoint;
    this._rpcWsEndpoint = wsEndpoint || makeWebsocketUrl(endpoint);
    this._rpcClient = createRpcClient(url.toString(), useHttps, httpHeaders, fetch, fetchMiddleware, disableRetryOnRateLimit);
    this._rpcRequest = createRpcRequest(this._rpcClient);
    this._rpcBatchRequest = createRpcBatchRequest(this._rpcClient);
    this._rpcWebSocket = new rpcWebsockets.Client(this._rpcWsEndpoint, {
      autoconnect: false,
      max_reconnects: Infinity
    });

    this._rpcWebSocket.on('open', this._wsOnOpen.bind(this));

    this._rpcWebSocket.on('error', this._wsOnError.bind(this));

    this._rpcWebSocket.on('close', this._wsOnClose.bind(this));

    this._rpcWebSocket.on('accountNotification', this._wsOnAccountNotification.bind(this));

    this._rpcWebSocket.on('programNotification', this._wsOnProgramAccountNotification.bind(this));

    this._rpcWebSocket.on('slotNotification', this._wsOnSlotNotification.bind(this));

    this._rpcWebSocket.on('slotsUpdatesNotification', this._wsOnSlotUpdatesNotification.bind(this));

    this._rpcWebSocket.on('signatureNotification', this._wsOnSignatureNotification.bind(this));

    this._rpcWebSocket.on('rootNotification', this._wsOnRootNotification.bind(this));

    this._rpcWebSocket.on('logsNotification', this._wsOnLogsNotification.bind(this));
  }
  /**
   * The default commitment used for requests
   */


  get commitment() {
    return this._commitment;
  }
  /**
   * The RPC endpoint
   */


  get rpcEndpoint() {
    return this._rpcEndpoint;
  }
  /**
   * Fetch the balance for the specified public key, return with context
   */


  async getBalanceAndContext(publicKey, commitmentOrConfig) {
    /** @internal */
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([publicKey.toBase58()], commitment, undefined
    /* encoding */
    , config);

    const unsafeRes = await this._rpcRequest('getBalance', args);
    const res = superstruct.create(unsafeRes, jsonRpcResultAndContext(superstruct.number()));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get balance for ${publicKey.toBase58()}`);
    }

    return res.result;
  }
  /**
   * Fetch the balance for the specified public key
   */


  async getBalance(publicKey, commitmentOrConfig) {
    return await this.getBalanceAndContext(publicKey, commitmentOrConfig).then(x => x.value).catch(e => {
      throw new Error('failed to get balance of account ' + publicKey.toBase58() + ': ' + e);
    });
  }
  /**
   * Fetch the estimated production time of a block
   */


  async getBlockTime(slot) {
    const unsafeRes = await this._rpcRequest('getBlockTime', [slot]);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.nullable(superstruct.number())));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get block time for slot ${slot}`);
    }

    return res.result;
  }
  /**
   * Fetch the lowest slot that the node has information about in its ledger.
   * This value may increase over time if the node is configured to purge older ledger data
   */


  async getMinimumLedgerSlot() {
    const unsafeRes = await this._rpcRequest('minimumLedgerSlot', []);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.number()));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get minimum ledger slot');
    }

    return res.result;
  }
  /**
   * Fetch the slot of the lowest confirmed block that has not been purged from the ledger
   */


  async getFirstAvailableBlock() {
    const unsafeRes = await this._rpcRequest('getFirstAvailableBlock', []);
    const res = superstruct.create(unsafeRes, SlotRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get first available block');
    }

    return res.result;
  }
  /**
   * Fetch information about the current supply
   */


  async getSupply(config) {
    let configArg = {};

    if (typeof config === 'string') {
      configArg = {
        commitment: config
      };
    } else if (config) {
      configArg = { ...config,
        commitment: config && config.commitment || this.commitment
      };
    } else {
      configArg = {
        commitment: this.commitment
      };
    }

    const unsafeRes = await this._rpcRequest('getSupply', [configArg]);
    const res = superstruct.create(unsafeRes, GetSupplyRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get supply');
    }

    return res.result;
  }
  /**
   * Fetch the current supply of a token mint
   */


  async getTokenSupply(tokenMintAddress, commitment) {
    const args = this._buildArgs([tokenMintAddress.toBase58()], commitment);

    const unsafeRes = await this._rpcRequest('getTokenSupply', args);
    const res = superstruct.create(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get token supply');
    }

    return res.result;
  }
  /**
   * Fetch the current balance of a token account
   */


  async getTokenAccountBalance(tokenAddress, commitment) {
    const args = this._buildArgs([tokenAddress.toBase58()], commitment);

    const unsafeRes = await this._rpcRequest('getTokenAccountBalance', args);
    const res = superstruct.create(unsafeRes, jsonRpcResultAndContext(TokenAmountResult));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get token account balance');
    }

    return res.result;
  }
  /**
   * Fetch all the token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>>}
   */


  async getTokenAccountsByOwner(ownerAddress, filter, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    let _args = [ownerAddress.toBase58()];

    if ('mint' in filter) {
      _args.push({
        mint: filter.mint.toBase58()
      });
    } else {
      _args.push({
        programId: filter.programId.toBase58()
      });
    }

    const args = this._buildArgs(_args, commitment, 'base64', config);

    const unsafeRes = await this._rpcRequest('getTokenAccountsByOwner', args);
    const res = superstruct.create(unsafeRes, GetTokenAccountsByOwner);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
    }

    return res.result;
  }
  /**
   * Fetch parsed token accounts owned by the specified account
   *
   * @return {Promise<RpcResponseAndContext<Array<{pubkey: PublicKey, account: AccountInfo<ParsedAccountData>}>>>}
   */


  async getParsedTokenAccountsByOwner(ownerAddress, filter, commitment) {
    let _args = [ownerAddress.toBase58()];

    if ('mint' in filter) {
      _args.push({
        mint: filter.mint.toBase58()
      });
    } else {
      _args.push({
        programId: filter.programId.toBase58()
      });
    }

    const args = this._buildArgs(_args, commitment, 'jsonParsed');

    const unsafeRes = await this._rpcRequest('getTokenAccountsByOwner', args);
    const res = superstruct.create(unsafeRes, GetParsedTokenAccountsByOwner);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get token accounts owned by account ${ownerAddress.toBase58()}`);
    }

    return res.result;
  }
  /**
   * Fetch the 20 largest accounts with their current balances
   */


  async getLargestAccounts(config) {
    const arg = { ...config,
      commitment: config && config.commitment || this.commitment
    };
    const args = arg.filter || arg.commitment ? [arg] : [];
    const unsafeRes = await this._rpcRequest('getLargestAccounts', args);
    const res = superstruct.create(unsafeRes, GetLargestAccountsRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get largest accounts');
    }

    return res.result;
  }
  /**
   * Fetch the 20 largest token accounts with their current balances
   * for a given mint.
   */


  async getTokenLargestAccounts(mintAddress, commitment) {
    const args = this._buildArgs([mintAddress.toBase58()], commitment);

    const unsafeRes = await this._rpcRequest('getTokenLargestAccounts', args);
    const res = superstruct.create(unsafeRes, GetTokenLargestAccountsResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get token largest accounts');
    }

    return res.result;
  }
  /**
   * Fetch all the account info for the specified public key, return with context
   */


  async getAccountInfoAndContext(publicKey, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([publicKey.toBase58()], commitment, 'base64', config);

    const unsafeRes = await this._rpcRequest('getAccountInfo', args);
    const res = superstruct.create(unsafeRes, jsonRpcResultAndContext(superstruct.nullable(AccountInfoResult)));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey.toBase58()}`);
    }

    return res.result;
  }
  /**
   * Fetch parsed account info for the specified public key
   */


  async getParsedAccountInfo(publicKey, commitment) {
    const args = this._buildArgs([publicKey.toBase58()], commitment, 'jsonParsed');

    const unsafeRes = await this._rpcRequest('getAccountInfo', args);
    const res = superstruct.create(unsafeRes, jsonRpcResultAndContext(superstruct.nullable(ParsedAccountInfoResult)));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info about account ${publicKey.toBase58()}`);
    }

    return res.result;
  }
  /**
   * Fetch all the account info for the specified public key
   */


  async getAccountInfo(publicKey, commitmentOrConfig) {
    try {
      const res = await this.getAccountInfoAndContext(publicKey, commitmentOrConfig);
      return res.value;
    } catch (e) {
      throw new Error('failed to get info about account ' + publicKey.toBase58() + ': ' + e);
    }
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys, return with context
   */


  async getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);
    const keys = publicKeys.map(key => key.toBase58());

    const args = this._buildArgs([keys], commitment, 'base64', config);

    const unsafeRes = await this._rpcRequest('getMultipleAccounts', args);
    const res = superstruct.create(unsafeRes, jsonRpcResultAndContext(superstruct.array(superstruct.nullable(AccountInfoResult))));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get info for accounts ${keys}`);
    }

    return res.result;
  }
  /**
   * Fetch all the account info for multiple accounts specified by an array of public keys
   */


  async getMultipleAccountsInfo(publicKeys, commitmentOrConfig) {
    const res = await this.getMultipleAccountsInfoAndContext(publicKeys, commitmentOrConfig);
    return res.value;
  }
  /**
   * Returns epoch activation information for a stake account that has been delegated
   */


  async getStakeActivation(publicKey, commitmentOrConfig, epoch) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([publicKey.toBase58()], commitment, undefined
    /* encoding */
    , { ...config,
      epoch: epoch != null ? epoch : config === null || config === void 0 ? void 0 : config.epoch
    });

    const unsafeRes = await this._rpcRequest('getStakeActivation', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(StakeActivationResult));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get Stake Activation ${publicKey.toBase58()}`);
    }

    return res.result;
  }
  /**
   * Fetch all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer>}>>}
   */


  async getProgramAccounts(programId, configOrCommitment) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(configOrCommitment);
    const {
      encoding,
      ...configWithoutEncoding
    } = config || {};

    const args = this._buildArgs([programId.toBase58()], commitment, encoding || 'base64', configWithoutEncoding);

    const unsafeRes = await this._rpcRequest('getProgramAccounts', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.array(KeyedAccountInfoResult)));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
    }

    return res.result;
  }
  /**
   * Fetch and parse all the accounts owned by the specified program id
   *
   * @return {Promise<Array<{pubkey: PublicKey, account: AccountInfo<Buffer | ParsedAccountData>}>>}
   */


  async getParsedProgramAccounts(programId, configOrCommitment) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(configOrCommitment);

    const args = this._buildArgs([programId.toBase58()], commitment, 'jsonParsed', config);

    const unsafeRes = await this._rpcRequest('getProgramAccounts', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.array(KeyedParsedAccountInfoResult)));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `failed to get accounts owned by program ${programId.toBase58()}`);
    }

    return res.result;
  }

  // eslint-disable-next-line no-dupe-class-members
  async confirmTransaction(strategy, commitment) {
    let rawSignature;

    if (typeof strategy == 'string') {
      rawSignature = strategy;
    } else {
      const config = strategy;
      rawSignature = config.signature;
    }

    let decodedSignature;

    try {
      decodedSignature = bs58__default["default"].decode(rawSignature);
    } catch (err) {
      throw new Error('signature must be base58 encoded: ' + rawSignature);
    }

    assert(decodedSignature.length === 64, 'signature has invalid length');
    const subscriptionCommitment = commitment || this.commitment;
    let timeoutId;
    let subscriptionId;
    let done = false;
    const confirmationPromise = new Promise((resolve, reject) => {
      try {
        subscriptionId = this.onSignature(rawSignature, (result, context) => {
          subscriptionId = undefined;
          const response = {
            context,
            value: result
          };
          done = true;
          resolve({
            __type: exports.TransactionStatus.PROCESSED,
            response
          });
        }, subscriptionCommitment);
      } catch (err) {
        reject(err);
      }
    });
    const expiryPromise = new Promise(resolve => {
      if (typeof strategy === 'string') {
        let timeoutMs = this._confirmTransactionInitialTimeout || 60 * 1000;

        switch (subscriptionCommitment) {
          case 'processed':
          case 'recent':
          case 'single':
          case 'confirmed':
          case 'singleGossip':
            {
              timeoutMs = this._confirmTransactionInitialTimeout || 30 * 1000;
              break;
            }
        }

        timeoutId = setTimeout(() => resolve({
          __type: exports.TransactionStatus.TIMED_OUT,
          timeoutMs
        }), timeoutMs);
      } else {
        let config = strategy;

        const checkBlockHeight = async () => {
          try {
            const blockHeight = await this.getBlockHeight(commitment);
            return blockHeight;
          } catch (_e) {
            return -1;
          }
        };

        (async () => {
          let currentBlockHeight = await checkBlockHeight();
          if (done) return;

          while (currentBlockHeight <= config.lastValidBlockHeight) {
            await sleep(1000);
            if (done) return;
            currentBlockHeight = await checkBlockHeight();
            if (done) return;
          }

          resolve({
            __type: exports.TransactionStatus.BLOCKHEIGHT_EXCEEDED
          });
        })();
      }
    });
    let result;

    try {
      const outcome = await Promise.race([confirmationPromise, expiryPromise]);

      switch (outcome.__type) {
        case exports.TransactionStatus.BLOCKHEIGHT_EXCEEDED:
          throw new TransactionExpiredBlockheightExceededError(rawSignature);

        case exports.TransactionStatus.PROCESSED:
          result = outcome.response;
          break;

        case exports.TransactionStatus.TIMED_OUT:
          throw new TransactionExpiredTimeoutError(rawSignature, outcome.timeoutMs / 1000);
      }
    } finally {
      clearTimeout(timeoutId);

      if (subscriptionId) {
        this.removeSignatureListener(subscriptionId);
      }
    }

    return result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */


  async getClusterNodes() {
    const unsafeRes = await this._rpcRequest('getClusterNodes', []);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.array(ContactInfoResult)));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get cluster nodes');
    }

    return res.result;
  }
  /**
   * Return the list of nodes that are currently participating in the cluster
   */


  async getVoteAccounts(commitment) {
    const args = this._buildArgs([], commitment);

    const unsafeRes = await this._rpcRequest('getVoteAccounts', args);
    const res = superstruct.create(unsafeRes, GetVoteAccounts);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get vote accounts');
    }

    return res.result;
  }
  /**
   * Fetch the current slot that the node is processing
   */


  async getSlot(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([], commitment, undefined
    /* encoding */
    , config);

    const unsafeRes = await this._rpcRequest('getSlot', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.number()));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get slot');
    }

    return res.result;
  }
  /**
   * Fetch the current slot leader of the cluster
   */


  async getSlotLeader(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([], commitment, undefined
    /* encoding */
    , config);

    const unsafeRes = await this._rpcRequest('getSlotLeader', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.string()));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get slot leader');
    }

    return res.result;
  }
  /**
   * Fetch `limit` number of slot leaders starting from `startSlot`
   *
   * @param startSlot fetch slot leaders starting from this slot
   * @param limit number of slot leaders to return
   */


  async getSlotLeaders(startSlot, limit) {
    const args = [startSlot, limit];
    const unsafeRes = await this._rpcRequest('getSlotLeaders', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.array(PublicKeyFromString)));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get slot leaders');
    }

    return res.result;
  }
  /**
   * Fetch the current status of a signature
   */


  async getSignatureStatus(signature, config) {
    const {
      context,
      value: values
    } = await this.getSignatureStatuses([signature], config);
    assert(values.length === 1);
    const value = values[0];
    return {
      context,
      value
    };
  }
  /**
   * Fetch the current statuses of a batch of signatures
   */


  async getSignatureStatuses(signatures, config) {
    const params = [signatures];

    if (config) {
      params.push(config);
    }

    const unsafeRes = await this._rpcRequest('getSignatureStatuses', params);
    const res = superstruct.create(unsafeRes, GetSignatureStatusesRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get signature status');
    }

    return res.result;
  }
  /**
   * Fetch the current transaction count of the cluster
   */


  async getTransactionCount(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([], commitment, undefined
    /* encoding */
    , config);

    const unsafeRes = await this._rpcRequest('getTransactionCount', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.number()));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get transaction count');
    }

    return res.result;
  }
  /**
   * Fetch the current total currency supply of the cluster in lamports
   *
   * @deprecated Deprecated since v1.2.8. Please use {@link getSupply} instead.
   */


  async getTotalSupply(commitment) {
    const result = await this.getSupply({
      commitment,
      excludeNonCirculatingAccountsList: true
    });
    return result.value.total;
  }
  /**
   * Fetch the cluster InflationGovernor parameters
   */


  async getInflationGovernor(commitment) {
    const args = this._buildArgs([], commitment);

    const unsafeRes = await this._rpcRequest('getInflationGovernor', args);
    const res = superstruct.create(unsafeRes, GetInflationGovernorRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get inflation');
    }

    return res.result;
  }
  /**
   * Fetch the inflation reward for a list of addresses for an epoch
   */


  async getInflationReward(addresses, epoch, commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([addresses.map(pubkey => pubkey.toBase58())], commitment, undefined
    /* encoding */
    , { ...config,
      epoch: epoch != null ? epoch : config === null || config === void 0 ? void 0 : config.epoch
    });

    const unsafeRes = await this._rpcRequest('getInflationReward', args);
    const res = superstruct.create(unsafeRes, GetInflationRewardResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get inflation reward');
    }

    return res.result;
  }
  /**
   * Fetch the Epoch Info parameters
   */


  async getEpochInfo(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([], commitment, undefined
    /* encoding */
    , config);

    const unsafeRes = await this._rpcRequest('getEpochInfo', args);
    const res = superstruct.create(unsafeRes, GetEpochInfoRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get epoch info');
    }

    return res.result;
  }
  /**
   * Fetch the Epoch Schedule parameters
   */


  async getEpochSchedule() {
    const unsafeRes = await this._rpcRequest('getEpochSchedule', []);
    const res = superstruct.create(unsafeRes, GetEpochScheduleRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get epoch schedule');
    }

    const epochSchedule = res.result;
    return new EpochSchedule(epochSchedule.slotsPerEpoch, epochSchedule.leaderScheduleSlotOffset, epochSchedule.warmup, epochSchedule.firstNormalEpoch, epochSchedule.firstNormalSlot);
  }
  /**
   * Fetch the leader schedule for the current epoch
   * @return {Promise<RpcResponseAndContext<LeaderSchedule>>}
   */


  async getLeaderSchedule() {
    const unsafeRes = await this._rpcRequest('getLeaderSchedule', []);
    const res = superstruct.create(unsafeRes, GetLeaderScheduleRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get leader schedule');
    }

    return res.result;
  }
  /**
   * Fetch the minimum balance needed to exempt an account of `dataLength`
   * size from rent
   */


  async getMinimumBalanceForRentExemption(dataLength, commitment) {
    const args = this._buildArgs([dataLength], commitment);

    const unsafeRes = await this._rpcRequest('getMinimumBalanceForRentExemption', args);
    const res = superstruct.create(unsafeRes, GetMinimumBalanceForRentExemptionRpcResult);

    if ('error' in res) {
      console.warn('Unable to fetch minimum balance for rent exemption');
      return 0;
    }

    return res.result;
  }
  /**
   * Fetch a recent blockhash from the cluster, return with context
   * @return {Promise<RpcResponseAndContext<{blockhash: Blockhash, feeCalculator: FeeCalculator}>>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */


  async getRecentBlockhashAndContext(commitment) {
    const args = this._buildArgs([], commitment);

    const unsafeRes = await this._rpcRequest('getRecentBlockhash', args);
    const res = superstruct.create(unsafeRes, GetRecentBlockhashAndContextRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get recent blockhash');
    }

    return res.result;
  }
  /**
   * Fetch recent performance samples
   * @return {Promise<Array<PerfSample>>}
   */


  async getRecentPerformanceSamples(limit) {
    const unsafeRes = await this._rpcRequest('getRecentPerformanceSamples', limit ? [limit] : []);
    const res = superstruct.create(unsafeRes, GetRecentPerformanceSamplesRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get recent performance samples');
    }

    return res.result;
  }
  /**
   * Fetch the fee calculator for a recent blockhash from the cluster, return with context
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getFeeForMessage} instead.
   */


  async getFeeCalculatorForBlockhash(blockhash, commitment) {
    const args = this._buildArgs([blockhash], commitment);

    const unsafeRes = await this._rpcRequest('getFeeCalculatorForBlockhash', args);
    const res = superstruct.create(unsafeRes, GetFeeCalculatorRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get fee calculator');
    }

    const {
      context,
      value
    } = res.result;
    return {
      context,
      value: value !== null ? value.feeCalculator : null
    };
  }
  /**
   * Fetch the fee for a message from the cluster, return with context
   */


  async getFeeForMessage(message, commitment) {
    const wireMessage = message.serialize().toString('base64');

    const args = this._buildArgs([wireMessage], commitment);

    const unsafeRes = await this._rpcRequest('getFeeForMessage', args);
    const res = superstruct.create(unsafeRes, jsonRpcResultAndContext(superstruct.nullable(superstruct.number())));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get slot');
    }

    if (res.result === null) {
      throw new Error('invalid blockhash');
    }

    return res.result;
  }
  /**
   * Fetch a recent blockhash from the cluster
   * @return {Promise<{blockhash: Blockhash, feeCalculator: FeeCalculator}>}
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getLatestBlockhash} instead.
   */


  async getRecentBlockhash(commitment) {
    try {
      const res = await this.getRecentBlockhashAndContext(commitment);
      return res.value;
    } catch (e) {
      throw new Error('failed to get recent blockhash: ' + e);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */


  async getLatestBlockhash(commitmentOrConfig) {
    try {
      const res = await this.getLatestBlockhashAndContext(commitmentOrConfig);
      return res.value;
    } catch (e) {
      throw new Error('failed to get recent blockhash: ' + e);
    }
  }
  /**
   * Fetch the latest blockhash from the cluster
   * @return {Promise<BlockhashWithExpiryBlockHeight>}
   */


  async getLatestBlockhashAndContext(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([], commitment, undefined
    /* encoding */
    , config);

    const unsafeRes = await this._rpcRequest('getLatestBlockhash', args);
    const res = superstruct.create(unsafeRes, GetLatestBlockhashRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get latest blockhash');
    }

    return res.result;
  }
  /**
   * Fetch the node version
   */


  async getVersion() {
    const unsafeRes = await this._rpcRequest('getVersion', []);
    const res = superstruct.create(unsafeRes, jsonRpcResult(VersionResult));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get version');
    }

    return res.result;
  }
  /**
   * Fetch the genesis hash
   */


  async getGenesisHash() {
    const unsafeRes = await this._rpcRequest('getGenesisHash', []);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.string()));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get genesis hash');
    }

    return res.result;
  }
  /**
   * Fetch a processed block from the cluster.
   */


  async getBlock(slot, opts) {
    const args = this._buildArgsAtLeastConfirmed([slot], opts && opts.commitment);

    const unsafeRes = await this._rpcRequest('getBlock', args);
    const res = superstruct.create(unsafeRes, GetBlockRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed block');
    }

    const result = res.result;
    if (!result) return result;
    return { ...result,
      transactions: result.transactions.map(({
        transaction,
        meta
      }) => {
        const message = new Message(transaction.message);
        return {
          meta,
          transaction: { ...transaction,
            message
          }
        };
      })
    };
  }
  /*
   * Returns the current block height of the node
   */


  async getBlockHeight(commitmentOrConfig) {
    const {
      commitment,
      config
    } = extractCommitmentFromConfig(commitmentOrConfig);

    const args = this._buildArgs([], commitment, undefined
    /* encoding */
    , config);

    const unsafeRes = await this._rpcRequest('getBlockHeight', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.number()));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get block height information');
    }

    return res.result;
  }
  /*
   * Returns recent block production information from the current or previous epoch
   */


  async getBlockProduction(configOrCommitment) {
    let extra;
    let commitment;

    if (typeof configOrCommitment === 'string') {
      commitment = configOrCommitment;
    } else if (configOrCommitment) {
      const {
        commitment: c,
        ...rest
      } = configOrCommitment;
      commitment = c;
      extra = rest;
    }

    const args = this._buildArgs([], commitment, 'base64', extra);

    const unsafeRes = await this._rpcRequest('getBlockProduction', args);
    const res = superstruct.create(unsafeRes, BlockProductionResponseStruct);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get block production information');
    }

    return res.result;
  }
  /**
   * Fetch a confirmed or finalized transaction from the cluster.
   */


  async getTransaction(signature, opts) {
    const args = this._buildArgsAtLeastConfirmed([signature], opts && opts.commitment);

    const unsafeRes = await this._rpcRequest('getTransaction', args);
    const res = superstruct.create(unsafeRes, GetTransactionRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get transaction');
    }

    const result = res.result;
    if (!result) return result;
    return { ...result,
      transaction: { ...result.transaction,
        message: new Message(result.transaction.message)
      }
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed or finalized transaction
   */


  async getParsedTransaction(signature, commitment) {
    const args = this._buildArgsAtLeastConfirmed([signature], commitment, 'jsonParsed');

    const unsafeRes = await this._rpcRequest('getTransaction', args);
    const res = superstruct.create(unsafeRes, GetParsedTransactionRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get transaction');
    }

    return res.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   */


  async getParsedTransactions(signatures, commitment) {
    const batch = signatures.map(signature => {
      const args = this._buildArgsAtLeastConfirmed([signature], commitment, 'jsonParsed');

      return {
        methodName: 'getTransaction',
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map(unsafeRes => {
      const res = superstruct.create(unsafeRes, GetParsedTransactionRpcResult);

      if ('error' in res) {
        throw new SolanaJSONRPCError(res.error, 'failed to get transactions');
      }

      return res.result;
    });
    return res;
  }
  /**
   * Fetch transaction details for a batch of confirmed transactions.
   * Similar to {@link getParsedTransactions} but returns a {@link TransactionResponse}.
   */


  async getTransactions(signatures, commitment) {
    const batch = signatures.map(signature => {
      const args = this._buildArgsAtLeastConfirmed([signature], commitment);

      return {
        methodName: 'getTransaction',
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map(unsafeRes => {
      const res = superstruct.create(unsafeRes, GetTransactionRpcResult);

      if ('error' in res) {
        throw new SolanaJSONRPCError(res.error, 'failed to get transactions');
      }

      const result = res.result;
      if (!result) return result;
      return { ...result,
        transaction: { ...result.transaction,
          message: new Message(result.transaction.message)
        }
      };
    });
    return res;
  }
  /**
   * Fetch a list of Transactions and transaction statuses from the cluster
   * for a confirmed block.
   *
   * @deprecated Deprecated since v1.13.0. Please use {@link getBlock} instead.
   */


  async getConfirmedBlock(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment);

    const unsafeRes = await this._rpcRequest('getConfirmedBlock', args);
    const res = superstruct.create(unsafeRes, GetConfirmedBlockRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed block');
    }

    const result = res.result;

    if (!result) {
      throw new Error('Confirmed block ' + slot + ' not found');
    }

    const block = { ...result,
      transactions: result.transactions.map(({
        transaction,
        meta
      }) => {
        const message = new Message(transaction.message);
        return {
          meta,
          transaction: { ...transaction,
            message
          }
        };
      })
    };
    return { ...block,
      transactions: block.transactions.map(({
        transaction,
        meta
      }) => {
        return {
          meta,
          transaction: Transaction.populate(transaction.message, transaction.signatures)
        };
      })
    };
  }
  /**
   * Fetch confirmed blocks between two slots
   */


  async getBlocks(startSlot, endSlot, commitment) {
    const args = this._buildArgsAtLeastConfirmed(endSlot !== undefined ? [startSlot, endSlot] : [startSlot], commitment);

    const unsafeRes = await this._rpcRequest('getBlocks', args);
    const res = superstruct.create(unsafeRes, jsonRpcResult(superstruct.array(superstruct.number())));

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get blocks');
    }

    return res.result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a block, excluding rewards
   */


  async getBlockSignatures(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, undefined, {
      transactionDetails: 'signatures',
      rewards: false
    });

    const unsafeRes = await this._rpcRequest('getBlock', args);
    const res = superstruct.create(unsafeRes, GetBlockSignaturesRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get block');
    }

    const result = res.result;

    if (!result) {
      throw new Error('Block ' + slot + ' not found');
    }

    return result;
  }
  /**
   * Fetch a list of Signatures from the cluster for a confirmed block, excluding rewards
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getBlockSignatures} instead.
   */


  async getConfirmedBlockSignatures(slot, commitment) {
    const args = this._buildArgsAtLeastConfirmed([slot], commitment, undefined, {
      transactionDetails: 'signatures',
      rewards: false
    });

    const unsafeRes = await this._rpcRequest('getConfirmedBlock', args);
    const res = superstruct.create(unsafeRes, GetBlockSignaturesRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed block');
    }

    const result = res.result;

    if (!result) {
      throw new Error('Confirmed block ' + slot + ' not found');
    }

    return result;
  }
  /**
   * Fetch a transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getTransaction} instead.
   */


  async getConfirmedTransaction(signature, commitment) {
    const args = this._buildArgsAtLeastConfirmed([signature], commitment);

    const unsafeRes = await this._rpcRequest('getConfirmedTransaction', args);
    const res = superstruct.create(unsafeRes, GetTransactionRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get transaction');
    }

    const result = res.result;
    if (!result) return result;
    const message = new Message(result.transaction.message);
    const signatures = result.transaction.signatures;
    return { ...result,
      transaction: Transaction.populate(message, signatures)
    };
  }
  /**
   * Fetch parsed transaction details for a confirmed transaction
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransaction} instead.
   */


  async getParsedConfirmedTransaction(signature, commitment) {
    const args = this._buildArgsAtLeastConfirmed([signature], commitment, 'jsonParsed');

    const unsafeRes = await this._rpcRequest('getConfirmedTransaction', args);
    const res = superstruct.create(unsafeRes, GetParsedTransactionRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed transaction');
    }

    return res.result;
  }
  /**
   * Fetch parsed transaction details for a batch of confirmed transactions
   *
   * @deprecated Deprecated since Solana v1.8.0. Please use {@link getParsedTransactions} instead.
   */


  async getParsedConfirmedTransactions(signatures, commitment) {
    const batch = signatures.map(signature => {
      const args = this._buildArgsAtLeastConfirmed([signature], commitment, 'jsonParsed');

      return {
        methodName: 'getConfirmedTransaction',
        args
      };
    });
    const unsafeRes = await this._rpcBatchRequest(batch);
    const res = unsafeRes.map(unsafeRes => {
      const res = superstruct.create(unsafeRes, GetParsedTransactionRpcResult);

      if ('error' in res) {
        throw new SolanaJSONRPCError(res.error, 'failed to get confirmed transactions');
      }

      return res.result;
    });
    return res;
  }
  /**
   * Fetch a list of all the confirmed signatures for transactions involving an address
   * within a specified slot range. Max range allowed is 10,000 slots.
   *
   * @deprecated Deprecated since v1.3. Please use {@link getConfirmedSignaturesForAddress2} instead.
   *
   * @param address queried address
   * @param startSlot start slot, inclusive
   * @param endSlot end slot, inclusive
   */


  async getConfirmedSignaturesForAddress(address, startSlot, endSlot) {
    let options = {};
    let firstAvailableBlock = await this.getFirstAvailableBlock();

    while (!('until' in options)) {
      startSlot--;

      if (startSlot <= 0 || startSlot < firstAvailableBlock) {
        break;
      }

      try {
        const block = await this.getConfirmedBlockSignatures(startSlot, 'finalized');

        if (block.signatures.length > 0) {
          options.until = block.signatures[block.signatures.length - 1].toString();
        }
      } catch (err) {
        if (err instanceof Error && err.message.includes('skipped')) {
          continue;
        } else {
          throw err;
        }
      }
    }

    let highestConfirmedRoot = await this.getSlot('finalized');

    while (!('before' in options)) {
      endSlot++;

      if (endSlot > highestConfirmedRoot) {
        break;
      }

      try {
        const block = await this.getConfirmedBlockSignatures(endSlot);

        if (block.signatures.length > 0) {
          options.before = block.signatures[block.signatures.length - 1].toString();
        }
      } catch (err) {
        if (err instanceof Error && err.message.includes('skipped')) {
          continue;
        } else {
          throw err;
        }
      }
    }

    const confirmedSignatureInfo = await this.getConfirmedSignaturesForAddress2(address, options);
    return confirmedSignatureInfo.map(info => info.signature);
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */


  async getConfirmedSignaturesForAddress2(address, options, commitment) {
    const args = this._buildArgsAtLeastConfirmed([address.toBase58()], commitment, undefined, options);

    const unsafeRes = await this._rpcRequest('getConfirmedSignaturesForAddress2', args);
    const res = superstruct.create(unsafeRes, GetConfirmedSignaturesForAddress2RpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get confirmed signatures for address');
    }

    return res.result;
  }
  /**
   * Returns confirmed signatures for transactions involving an
   * address backwards in time from the provided signature or most recent confirmed block
   *
   *
   * @param address queried address
   * @param options
   */


  async getSignaturesForAddress(address, options, commitment) {
    const args = this._buildArgsAtLeastConfirmed([address.toBase58()], commitment, undefined, options);

    const unsafeRes = await this._rpcRequest('getSignaturesForAddress', args);
    const res = superstruct.create(unsafeRes, GetSignaturesForAddressRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, 'failed to get signatures for address');
    }

    return res.result;
  }
  /**
   * Fetch the contents of a Nonce account from the cluster, return with context
   */


  async getNonceAndContext(nonceAccount, commitment) {
    const {
      context,
      value: accountInfo
    } = await this.getAccountInfoAndContext(nonceAccount, commitment);
    let value = null;

    if (accountInfo !== null) {
      value = NonceAccount.fromAccountData(accountInfo.data);
    }

    return {
      context,
      value
    };
  }
  /**
   * Fetch the contents of a Nonce account from the cluster
   */


  async getNonce(nonceAccount, commitment) {
    return await this.getNonceAndContext(nonceAccount, commitment).then(x => x.value).catch(e => {
      throw new Error('failed to get nonce for account ' + nonceAccount.toBase58() + ': ' + e);
    });
  }
  /**
   * Request an allocation of lamports to the specified address
   *
   * ```typescript
   * import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
   *
   * (async () => {
   *   const connection = new Connection("https://api.testnet.solana.com", "confirmed");
   *   const myAddress = new PublicKey("2nr1bHFT86W9tGnyvmYW4vcHKsQB3sVQfnddasz4kExM");
   *   const signature = await connection.requestAirdrop(myAddress, LAMPORTS_PER_SOL);
   *   await connection.confirmTransaction(signature);
   * })();
   * ```
   */


  async requestAirdrop(to, lamports) {
    const unsafeRes = await this._rpcRequest('requestAirdrop', [to.toBase58(), lamports]);
    const res = superstruct.create(unsafeRes, RequestAirdropRpcResult);

    if ('error' in res) {
      throw new SolanaJSONRPCError(res.error, `airdrop to ${to.toBase58()} failed`);
    }

    return res.result;
  }
  /**
   * @internal
   */


  async _blockhashWithExpiryBlockHeight(disableCache) {
    if (!disableCache) {
      // Wait for polling to finish
      while (this._pollingBlockhash) {
        await sleep(100);
      }

      const timeSinceFetch = Date.now() - this._blockhashInfo.lastFetch;

      const expired = timeSinceFetch >= BLOCKHASH_CACHE_TIMEOUT_MS;

      if (this._blockhashInfo.latestBlockhash !== null && !expired) {
        return this._blockhashInfo.latestBlockhash;
      }
    }

    return await this._pollNewBlockhash();
  }
  /**
   * @internal
   */


  async _pollNewBlockhash() {
    this._pollingBlockhash = true;

    try {
      const startTime = Date.now();
      const cachedLatestBlockhash = this._blockhashInfo.latestBlockhash;
      const cachedBlockhash = cachedLatestBlockhash ? cachedLatestBlockhash.blockhash : null;

      for (let i = 0; i < 50; i++) {
        const latestBlockhash = await this.getLatestBlockhash('finalized');

        if (cachedBlockhash !== latestBlockhash.blockhash) {
          this._blockhashInfo = {
            latestBlockhash,
            lastFetch: Date.now(),
            transactionSignatures: [],
            simulatedSignatures: []
          };
          return latestBlockhash;
        } // Sleep for approximately half a slot


        await sleep(MS_PER_SLOT / 2);
      }

      throw new Error(`Unable to obtain a new blockhash after ${Date.now() - startTime}ms`);
    } finally {
      this._pollingBlockhash = false;
    }
  }
  /**
   * Simulate a transaction
   */


  async simulateTransaction(transactionOrMessage, signers, includeAccounts) {
    let transaction;

    if (transactionOrMessage instanceof Transaction) {
      let originalTx = transactionOrMessage;
      transaction = new Transaction();
      transaction.feePayer = originalTx.feePayer;
      transaction.instructions = transactionOrMessage.instructions;
      transaction.nonceInfo = originalTx.nonceInfo;
      transaction.signatures = originalTx.signatures;
    } else {
      transaction = Transaction.populate(transactionOrMessage); // HACK: this function relies on mutating the populated transaction

      transaction._message = transaction._json = undefined;
    }

    if (transaction.nonceInfo && signers) {
      transaction.sign(...signers);
    } else {
      let disableCache = this._disableBlockhashCaching;

      for (;;) {
        const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
        transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
        transaction.recentBlockhash = latestBlockhash.blockhash;
        if (!signers) break;
        transaction.sign(...signers);

        if (!transaction.signature) {
          throw new Error('!signature'); // should never happen
        }

        const signature = transaction.signature.toString('base64');

        if (!this._blockhashInfo.simulatedSignatures.includes(signature) && !this._blockhashInfo.transactionSignatures.includes(signature)) {
          // The signature of this transaction has not been seen before with the
          // current recentBlockhash, all done. Let's break
          this._blockhashInfo.simulatedSignatures.push(signature);

          break;
        } else {
          // This transaction would be treated as duplicate (its derived signature
          // matched to one of already recorded signatures).
          // So, we must fetch a new blockhash for a different signature by disabling
          // our cache not to wait for the cache expiration (BLOCKHASH_CACHE_TIMEOUT_MS).
          disableCache = true;
        }
      }
    }

    const message = transaction._compile();

    const signData = message.serialize();

    const wireTransaction = transaction._serialize(signData);

    const encodedTransaction = wireTransaction.toString('base64');
    const config = {
      encoding: 'base64',
      commitment: this.commitment
    };

    if (includeAccounts) {
      const addresses = (Array.isArray(includeAccounts) ? includeAccounts : message.nonProgramIds()).map(key => key.toBase58());
      config['accounts'] = {
        encoding: 'base64',
        addresses
      };
    }

    if (signers) {
      config.sigVerify = true;
    }

    const args = [encodedTransaction, config];
    const unsafeRes = await this._rpcRequest('simulateTransaction', args);
    const res = superstruct.create(unsafeRes, SimulatedTransactionResponseStruct);

    if ('error' in res) {
      let logs;

      if ('data' in res.error) {
        logs = res.error.data.logs;

        if (logs && Array.isArray(logs)) {
          const traceIndent = '\n    ';
          const logTrace = traceIndent + logs.join(traceIndent);
          console.error(res.error.message, logTrace);
        }
      }

      throw new SendTransactionError('failed to simulate transaction: ' + res.error.message, logs);
    }

    return res.result;
  }
  /**
   * Sign and send a transaction
   */


  async sendTransaction(transaction, signers, options) {
    if (transaction.nonceInfo) {
      transaction.sign(...signers);
    } else {
      let disableCache = this._disableBlockhashCaching;

      for (;;) {
        const latestBlockhash = await this._blockhashWithExpiryBlockHeight(disableCache);
        transaction.lastValidBlockHeight = latestBlockhash.lastValidBlockHeight;
        transaction.recentBlockhash = latestBlockhash.blockhash;
        transaction.sign(...signers);

        if (!transaction.signature) {
          throw new Error('!signature'); // should never happen
        }

        const signature = transaction.signature.toString('base64');

        if (!this._blockhashInfo.transactionSignatures.includes(signature)) {
          // The signature of this transaction has not been seen before with the
          // current recentBlockhash, all done. Let's break
          this._blockhashInfo.transactionSignatures.push(signature);

          break;
        } else {
          // This transaction would be treated as duplicate (its derived signature
          // matched to one of already recorded signatures).
          // So, we must fetch a new blockhash for a different signature by disabling
          // our cache not to wait for the cache expiration (BLOCKHASH_CACHE_TIMEOUT_MS).
          disableCache = true;
        }
      }
    }

    const wireTransaction = transaction.serialize();
    return await this.sendRawTransaction(wireTransaction, options);
  }
  /**
   * Send a transaction that has already been signed and serialized into the
   * wire format
   */


  async sendRawTransaction(rawTransaction, options) {
    const encodedTransaction = toBuffer(rawTransaction).toString('base64');
    const result = await this.sendEncodedTransaction(encodedTransaction, options);
    return result;
  }
  /**
   * Send a transaction that has already been signed, serialized into the
   * wire format, and encoded as a base64 string
   */


  async sendEncodedTransaction(encodedTransaction, options) {
    const config = {
      encoding: 'base64'
    };
    const skipPreflight = options && options.skipPreflight;
    const preflightCommitment = options && options.preflightCommitment || this.commitment;

    if (options && options.maxRetries != null) {
      config.maxRetries = options.maxRetries;
    }

    if (options && options.minContextSlot != null) {
      config.minContextSlot = options.minContextSlot;
    }

    if (skipPreflight) {
      config.skipPreflight = skipPreflight;
    }

    if (preflightCommitment) {
      config.preflightCommitment = preflightCommitment;
    }

    const args = [encodedTransaction, config];
    const unsafeRes = await this._rpcRequest('sendTransaction', args);
    const res = superstruct.create(unsafeRes, SendTransactionRpcResult);

    if ('error' in res) {
      let logs;

      if ('data' in res.error) {
        logs = res.error.data.logs;
      }

      throw new SendTransactionError('failed to send transaction: ' + res.error.message, logs);
    }

    return res.result;
  }
  /**
   * @internal
   */


  _wsOnOpen() {
    this._rpcWebSocketConnected = true;
    this._rpcWebSocketHeartbeat = setInterval(() => {
      // Ping server every 5s to prevent idle timeouts
      this._rpcWebSocket.notify('ping').catch(() => {});
    }, 5000);

    this._updateSubscriptions();
  }
  /**
   * @internal
   */


  _wsOnError(err) {
    this._rpcWebSocketConnected = false;
    console.error('ws error:', err.message);
  }
  /**
   * @internal
   */


  _wsOnClose(code) {
    this._rpcWebSocketConnected = false;
    this._rpcWebSocketGeneration++;

    if (this._rpcWebSocketHeartbeat) {
      clearInterval(this._rpcWebSocketHeartbeat);
      this._rpcWebSocketHeartbeat = null;
    }

    if (code === 1000) {
      // explicit close, check if any subscriptions have been made since close
      this._updateSubscriptions();

      return;
    } // implicit close, prepare subscriptions for auto-reconnect


    this._subscriptionCallbacksByServerSubscriptionId = {};
    Object.entries(this._subscriptionsByHash).forEach(([hash, subscription]) => {
      this._subscriptionsByHash[hash] = { ...subscription,
        state: 'pending'
      };
    });
  }
  /**
   * @internal
   */


  async _updateSubscriptions() {
    if (Object.keys(this._subscriptionsByHash).length === 0) {
      if (this._rpcWebSocketConnected) {
        this._rpcWebSocketConnected = false;
        this._rpcWebSocketIdleTimeout = setTimeout(() => {
          this._rpcWebSocketIdleTimeout = null;

          try {
            this._rpcWebSocket.close();
          } catch (err) {
            // swallow error if socket has already been closed.
            if (err instanceof Error) {
              console.log(`Error when closing socket connection: ${err.message}`);
            }
          }
        }, 500);
      }

      return;
    }

    if (this._rpcWebSocketIdleTimeout !== null) {
      clearTimeout(this._rpcWebSocketIdleTimeout);
      this._rpcWebSocketIdleTimeout = null;
      this._rpcWebSocketConnected = true;
    }

    if (!this._rpcWebSocketConnected) {
      this._rpcWebSocket.connect();

      return;
    }

    const activeWebSocketGeneration = this._rpcWebSocketGeneration;

    const isCurrentConnectionStillActive = () => {
      return activeWebSocketGeneration === this._rpcWebSocketGeneration;
    };

    await Promise.all( // Don't be tempted to change this to `Object.entries`. We call
    // `_updateSubscriptions` recursively when processing the state,
    // so it's important that we look up the *current* version of
    // each subscription, every time we process a hash.
    Object.keys(this._subscriptionsByHash).map(async hash => {
      const subscription = this._subscriptionsByHash[hash];

      if (subscription === undefined) {
        // This entry has since been deleted. Skip.
        return;
      }

      switch (subscription.state) {
        case 'pending':
        case 'unsubscribed':
          if (subscription.callbacks.size === 0) {
            /**
             * You can end up here when:
             *
             * - a subscription has recently unsubscribed
             *   without having new callbacks added to it
             *   while the unsubscribe was in flight, or
             * - when a pending subscription has its
             *   listeners removed before a request was
             *   sent to the server.
             *
             * Being that nobody is interested in this
             * subscription any longer, delete it.
             */
            delete this._subscriptionsByHash[hash];

            if (subscription.state === 'unsubscribed') {
              delete this._subscriptionCallbacksByServerSubscriptionId[subscription.serverSubscriptionId];
            }

            await this._updateSubscriptions();
            return;
          }

          await (async () => {
            const {
              args,
              method
            } = subscription;

            try {
              this._subscriptionsByHash[hash] = { ...subscription,
                state: 'subscribing'
              };
              const serverSubscriptionId = await this._rpcWebSocket.call(method, args);
              this._subscriptionsByHash[hash] = { ...subscription,
                serverSubscriptionId,
                state: 'subscribed'
              };
              this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId] = subscription.callbacks;
              await this._updateSubscriptions();
            } catch (e) {
              if (e instanceof Error) {
                console.error(`${method} error for argument`, args, e.message);
              }

              if (!isCurrentConnectionStillActive()) {
                return;
              } // TODO: Maybe add an 'errored' state or a retry limit?


              this._subscriptionsByHash[hash] = { ...subscription,
                state: 'pending'
              };
              await this._updateSubscriptions();
            }
          })();
          break;

        case 'subscribed':
          if (subscription.callbacks.size === 0) {
            // By the time we successfully set up a subscription
            // with the server, the client stopped caring about it.
            // Tear it down now.
            await (async () => {
              const {
                serverSubscriptionId,
                unsubscribeMethod
              } = subscription;

              if (this._subscriptionsAutoDisposedByRpc.has(serverSubscriptionId)) {
                /**
                 * Special case.
                 * If we're dealing with a subscription that has been auto-
                 * disposed by the RPC, then we can skip the RPC call to
                 * tear down the subscription here.
                 *
                 * NOTE: There is a proposal to eliminate this special case, here:
                 * https://github.com/solana-labs/solana/issues/18892
                 */
                this._subscriptionsAutoDisposedByRpc.delete(serverSubscriptionId);
              } else {
                this._subscriptionsByHash[hash] = { ...subscription,
                  state: 'unsubscribing'
                };

                try {
                  await this._rpcWebSocket.call(unsubscribeMethod, [serverSubscriptionId]);
                } catch (e) {
                  if (e instanceof Error) {
                    console.error(`${unsubscribeMethod} error:`, e.message);
                  }

                  if (!isCurrentConnectionStillActive()) {
                    return;
                  } // TODO: Maybe add an 'errored' state or a retry limit?


                  this._subscriptionsByHash[hash] = { ...subscription,
                    state: 'subscribed'
                  };
                  await this._updateSubscriptions();
                  return;
                }
              }

              this._subscriptionsByHash[hash] = { ...subscription,
                state: 'unsubscribed'
              };
              await this._updateSubscriptions();
            })();
          }

          break;
      }
    }));
  }
  /**
   * @internal
   */


  _handleServerNotification(serverSubscriptionId, callbackArgs) {
    const callbacks = this._subscriptionCallbacksByServerSubscriptionId[serverSubscriptionId];

    if (callbacks === undefined) {
      return;
    }

    callbacks.forEach(cb => {
      try {
        cb( // I failed to find a way to convince TypeScript that `cb` is of type
        // `TCallback` which is certainly compatible with `Parameters<TCallback>`.
        // See https://github.com/microsoft/TypeScript/issues/47615
        // @ts-ignore
        ...callbackArgs);
      } catch (e) {
        console.error(e);
      }
    });
  }
  /**
   * @internal
   */


  _wsOnAccountNotification(notification) {
    const {
      result,
      subscription
    } = superstruct.create(notification, AccountNotificationResult);

    this._handleServerNotification(subscription, [result.value, result.context]);
  }
  /**
   * @internal
   */


  _makeSubscription(subscriptionConfig,
  /**
   * When preparing `args` for a call to `_makeSubscription`, be sure
   * to carefully apply a default `commitment` property, if necessary.
   *
   * - If the user supplied a `commitment` use that.
   * - Otherwise, if the `Connection::commitment` is set, use that.
   * - Otherwise, set it to the RPC server default: `finalized`.
   *
   * This is extremely important to ensure that these two fundamentally
   * identical subscriptions produce the same identifying hash:
   *
   * - A subscription made without specifying a commitment.
   * - A subscription made where the commitment specified is the same
   *   as the default applied to the subscription above.
   *
   * Example; these two subscriptions must produce the same hash:
   *
   * - An `accountSubscribe` subscription for `'PUBKEY'`
   * - An `accountSubscribe` subscription for `'PUBKEY'` with commitment
   *   `'finalized'`.
   *
   * See the 'making a subscription with defaulted params omitted' test
   * in `connection-subscriptions.ts` for more.
   */
  args) {
    const clientSubscriptionId = this._nextClientSubscriptionId++;
    const hash = fastStableStringify$1([subscriptionConfig.method, args], true
    /* isArrayProp */
    );
    const existingSubscription = this._subscriptionsByHash[hash];

    if (existingSubscription === undefined) {
      this._subscriptionsByHash[hash] = { ...subscriptionConfig,
        args,
        callbacks: new Set([subscriptionConfig.callback]),
        state: 'pending'
      };
    } else {
      existingSubscription.callbacks.add(subscriptionConfig.callback);
    }

    this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId] = async () => {
      delete this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];
      const subscription = this._subscriptionsByHash[hash];
      assert(subscription !== undefined, `Could not find a \`Subscription\` when tearing down client subscription #${clientSubscriptionId}`);
      subscription.callbacks.delete(subscriptionConfig.callback);
      await this._updateSubscriptions();
    };

    this._updateSubscriptions();

    return clientSubscriptionId;
  }
  /**
   * Register a callback to be invoked whenever the specified account changes
   *
   * @param publicKey Public key of the account to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @return subscription id
   */


  onAccountChange(publicKey, callback, commitment) {
    const args = this._buildArgs([publicKey.toBase58()], commitment || this._commitment || 'finalized', // Apply connection/server default.
    'base64');

    return this._makeSubscription({
      callback,
      method: 'accountSubscribe',
      unsubscribeMethod: 'accountUnsubscribe'
    }, args);
  }
  /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */


  async removeAccountChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'account change');
  }
  /**
   * @internal
   */


  _wsOnProgramAccountNotification(notification) {
    const {
      result,
      subscription
    } = superstruct.create(notification, ProgramAccountNotificationResult);

    this._handleServerNotification(subscription, [{
      accountId: result.value.pubkey,
      accountInfo: result.value.account
    }, result.context]);
  }
  /**
   * Register a callback to be invoked whenever accounts owned by the
   * specified program change
   *
   * @param programId Public key of the program to monitor
   * @param callback Function to invoke whenever the account is changed
   * @param commitment Specify the commitment level account changes must reach before notification
   * @param filters The program account filters to pass into the RPC method
   * @return subscription id
   */


  onProgramAccountChange(programId, callback, commitment, filters) {
    const args = this._buildArgs([programId.toBase58()], commitment || this._commitment || 'finalized', // Apply connection/server default.
    'base64'
    /* encoding */
    , filters ? {
      filters: filters
    } : undefined
    /* extra */
    );

    return this._makeSubscription({
      callback,
      method: 'programSubscribe',
      unsubscribeMethod: 'programUnsubscribe'
    }, args);
  }
  /**
   * Deregister an account notification callback
   *
   * @param id client subscription id to deregister
   */


  async removeProgramAccountChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'program account change');
  }
  /**
   * Registers a callback to be invoked whenever logs are emitted.
   */


  onLogs(filter, callback, commitment) {
    const args = this._buildArgs([typeof filter === 'object' ? {
      mentions: [filter.toString()]
    } : filter], commitment || this._commitment || 'finalized' // Apply connection/server default.
    );

    return this._makeSubscription({
      callback,
      method: 'logsSubscribe',
      unsubscribeMethod: 'logsUnsubscribe'
    }, args);
  }
  /**
   * Deregister a logs callback.
   *
   * @param id client subscription id to deregister.
   */


  async removeOnLogsListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'logs');
  }
  /**
   * @internal
   */


  _wsOnLogsNotification(notification) {
    const {
      result,
      subscription
    } = superstruct.create(notification, LogsNotificationResult);

    this._handleServerNotification(subscription, [result.value, result.context]);
  }
  /**
   * @internal
   */


  _wsOnSlotNotification(notification) {
    const {
      result,
      subscription
    } = superstruct.create(notification, SlotNotificationResult);

    this._handleServerNotification(subscription, [result]);
  }
  /**
   * Register a callback to be invoked upon slot changes
   *
   * @param callback Function to invoke whenever the slot changes
   * @return subscription id
   */


  onSlotChange(callback) {
    return this._makeSubscription({
      callback,
      method: 'slotSubscribe',
      unsubscribeMethod: 'slotUnsubscribe'
    }, []
    /* args */
    );
  }
  /**
   * Deregister a slot notification callback
   *
   * @param id client subscription id to deregister
   */


  async removeSlotChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'slot change');
  }
  /**
   * @internal
   */


  _wsOnSlotUpdatesNotification(notification) {
    const {
      result,
      subscription
    } = superstruct.create(notification, SlotUpdateNotificationResult);

    this._handleServerNotification(subscription, [result]);
  }
  /**
   * Register a callback to be invoked upon slot updates. {@link SlotUpdate}'s
   * may be useful to track live progress of a cluster.
   *
   * @param callback Function to invoke whenever the slot updates
   * @return subscription id
   */


  onSlotUpdate(callback) {
    return this._makeSubscription({
      callback,
      method: 'slotsUpdatesSubscribe',
      unsubscribeMethod: 'slotsUpdatesUnsubscribe'
    }, []
    /* args */
    );
  }
  /**
   * Deregister a slot update notification callback
   *
   * @param id client subscription id to deregister
   */


  async removeSlotUpdateListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'slot update');
  }
  /**
   * @internal
   */


  async _unsubscribeClientSubscription(clientSubscriptionId, subscriptionName) {
    const dispose = this._subscriptionDisposeFunctionsByClientSubscriptionId[clientSubscriptionId];

    if (dispose) {
      await dispose();
    } else {
      console.warn('Ignored unsubscribe request because an active subscription with id ' + `\`${clientSubscriptionId}\` for '${subscriptionName}' events ` + 'could not be found.');
    }
  }

  _buildArgs(args, override, encoding, extra) {
    const commitment = override || this._commitment;

    if (commitment || encoding || extra) {
      let options = {};

      if (encoding) {
        options.encoding = encoding;
      }

      if (commitment) {
        options.commitment = commitment;
      }

      if (extra) {
        options = Object.assign(options, extra);
      }

      args.push(options);
    }

    return args;
  }
  /**
   * @internal
   */


  _buildArgsAtLeastConfirmed(args, override, encoding, extra) {
    const commitment = override || this._commitment;

    if (commitment && !['confirmed', 'finalized'].includes(commitment)) {
      throw new Error('Using Connection with default commitment: `' + this._commitment + '`, but method requires at least `confirmed`');
    }

    return this._buildArgs(args, override, encoding, extra);
  }
  /**
   * @internal
   */


  _wsOnSignatureNotification(notification) {
    const {
      result,
      subscription
    } = superstruct.create(notification, SignatureNotificationResult);

    if (result.value !== 'receivedSignature') {
      /**
       * Special case.
       * After a signature is processed, RPCs automatically dispose of the
       * subscription on the server side. We need to track which of these
       * subscriptions have been disposed in such a way, so that we know
       * whether the client is dealing with a not-yet-processed signature
       * (in which case we must tear down the server subscription) or an
       * already-processed signature (in which case the client can simply
       * clear out the subscription locally without telling the server).
       *
       * NOTE: There is a proposal to eliminate this special case, here:
       * https://github.com/solana-labs/solana/issues/18892
       */
      this._subscriptionsAutoDisposedByRpc.add(subscription);
    }

    this._handleServerNotification(subscription, result.value === 'receivedSignature' ? [{
      type: 'received'
    }, result.context] : [{
      type: 'status',
      result: result.value
    }, result.context]);
  }
  /**
   * Register a callback to be invoked upon signature updates
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param commitment Specify the commitment level signature must reach before notification
   * @return subscription id
   */


  onSignature(signature, callback, commitment) {
    const args = this._buildArgs([signature], commitment || this._commitment || 'finalized' // Apply connection/server default.
    );

    const clientSubscriptionId = this._makeSubscription({
      callback: (notification, context) => {
        if (notification.type === 'status') {
          callback(notification.result, context); // Signatures subscriptions are auto-removed by the RPC service
          // so no need to explicitly send an unsubscribe message.

          try {
            this.removeSignatureListener(clientSubscriptionId); // eslint-disable-next-line no-empty
          } catch (_err) {// Already removed.
          }
        }
      },
      method: 'signatureSubscribe',
      unsubscribeMethod: 'signatureUnsubscribe'
    }, args);

    return clientSubscriptionId;
  }
  /**
   * Register a callback to be invoked when a transaction is
   * received and/or processed.
   *
   * @param signature Transaction signature string in base 58
   * @param callback Function to invoke on signature notifications
   * @param options Enable received notifications and set the commitment
   *   level that signature must reach before notification
   * @return subscription id
   */


  onSignatureWithOptions(signature, callback, options) {
    const {
      commitment,
      ...extra
    } = { ...options,
      commitment: options && options.commitment || this._commitment || 'finalized' // Apply connection/server default.

    };

    const args = this._buildArgs([signature], commitment, undefined
    /* encoding */
    , extra);

    const clientSubscriptionId = this._makeSubscription({
      callback: (notification, context) => {
        callback(notification, context); // Signatures subscriptions are auto-removed by the RPC service
        // so no need to explicitly send an unsubscribe message.

        try {
          this.removeSignatureListener(clientSubscriptionId); // eslint-disable-next-line no-empty
        } catch (_err) {// Already removed.
        }
      },
      method: 'signatureSubscribe',
      unsubscribeMethod: 'signatureUnsubscribe'
    }, args);

    return clientSubscriptionId;
  }
  /**
   * Deregister a signature notification callback
   *
   * @param id client subscription id to deregister
   */


  async removeSignatureListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'signature result');
  }
  /**
   * @internal
   */


  _wsOnRootNotification(notification) {
    const {
      result,
      subscription
    } = superstruct.create(notification, RootNotificationResult);

    this._handleServerNotification(subscription, [result]);
  }
  /**
   * Register a callback to be invoked upon root changes
   *
   * @param callback Function to invoke whenever the root changes
   * @return subscription id
   */


  onRootChange(callback) {
    return this._makeSubscription({
      callback,
      method: 'rootSubscribe',
      unsubscribeMethod: 'rootUnsubscribe'
    }, []
    /* args */
    );
  }
  /**
   * Deregister a root notification callback
   *
   * @param id client subscription id to deregister
   */


  async removeRootChangeListener(clientSubscriptionId) {
    await this._unsubscribeClientSubscription(clientSubscriptionId, 'root change');
  }

}

/**
 * Keypair signer interface
 */

/**
 * An account keypair used for signing transactions.
 */
class Keypair {
  /**
   * Create a new keypair instance.
   * Generate random keypair if no {@link Ed25519Keypair} is provided.
   *
   * @param keypair ed25519 keypair
   */
  constructor(keypair) {
    this._keypair = void 0;

    if (keypair) {
      this._keypair = keypair;
    } else {
      this._keypair = nacl__default["default"].sign.keyPair();
    }
  }
  /**
   * Generate a new random keypair
   */


  static generate() {
    return new Keypair(nacl__default["default"].sign.keyPair());
  }
  /**
   * Create a keypair from a raw secret key byte array.
   *
   * This method should only be used to recreate a keypair from a previously
   * generated secret key. Generating keypairs from a random seed should be done
   * with the {@link Keypair.fromSeed} method.
   *
   * @throws error if the provided secret key is invalid and validation is not skipped.
   *
   * @param secretKey secret key byte array
   * @param options: skip secret key validation
   */


  static fromSecretKey(secretKey, options) {
    const keypair = nacl__default["default"].sign.keyPair.fromSecretKey(secretKey);

    if (!options || !options.skipValidation) {
      const encoder = new TextEncoder();
      const signData = encoder.encode('@solana/web3.js-validation-v1');
      const signature = nacl__default["default"].sign.detached(signData, keypair.secretKey);

      if (!nacl__default["default"].sign.detached.verify(signData, signature, keypair.publicKey)) {
        throw new Error('provided secretKey is invalid');
      }
    }

    return new Keypair(keypair);
  }
  /**
   * Generate a keypair from a 32 byte seed.
   *
   * @param seed seed byte array
   */


  static fromSeed(seed) {
    return new Keypair(nacl__default["default"].sign.keyPair.fromSeed(seed));
  }
  /**
   * The public key for this keypair
   */


  get publicKey() {
    return new PublicKey(this._keypair.publicKey);
  }
  /**
   * The raw secret key for this keypair
   */


  get secretKey() {
    return this._keypair.secretKey;
  }

}

const PRIVATE_KEY_BYTES$1 = 64;
const PUBLIC_KEY_BYTES$1 = 32;
const SIGNATURE_BYTES = 64;
/**
 * Params for creating an ed25519 instruction using a public key
 */

const ED25519_INSTRUCTION_LAYOUT = BufferLayout__namespace.struct([BufferLayout__namespace.u8('numSignatures'), BufferLayout__namespace.u8('padding'), BufferLayout__namespace.u16('signatureOffset'), BufferLayout__namespace.u16('signatureInstructionIndex'), BufferLayout__namespace.u16('publicKeyOffset'), BufferLayout__namespace.u16('publicKeyInstructionIndex'), BufferLayout__namespace.u16('messageDataOffset'), BufferLayout__namespace.u16('messageDataSize'), BufferLayout__namespace.u16('messageInstructionIndex')]);
class Ed25519Program {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Public key that identifies the ed25519 program
   */


  /**
   * Create an ed25519 instruction with a public key and signature. The
   * public key must be a buffer that is 32 bytes long, and the signature
   * must be a buffer of 64 bytes.
   */
  static createInstructionWithPublicKey(params) {
    const {
      publicKey,
      message,
      signature,
      instructionIndex
    } = params;
    assert(publicKey.length === PUBLIC_KEY_BYTES$1, `Public Key must be ${PUBLIC_KEY_BYTES$1} bytes but received ${publicKey.length} bytes`);
    assert(signature.length === SIGNATURE_BYTES, `Signature must be ${SIGNATURE_BYTES} bytes but received ${signature.length} bytes`);
    const publicKeyOffset = ED25519_INSTRUCTION_LAYOUT.span;
    const signatureOffset = publicKeyOffset + publicKey.length;
    const messageDataOffset = signatureOffset + signature.length;
    const numSignatures = 1;
    const instructionData = buffer.Buffer.alloc(messageDataOffset + message.length);
    const index = instructionIndex == null ? 0xffff // An index of `u16::MAX` makes it default to the current instruction.
    : instructionIndex;
    ED25519_INSTRUCTION_LAYOUT.encode({
      numSignatures,
      padding: 0,
      signatureOffset,
      signatureInstructionIndex: index,
      publicKeyOffset,
      publicKeyInstructionIndex: index,
      messageDataOffset,
      messageDataSize: message.length,
      messageInstructionIndex: index
    }, instructionData);
    instructionData.fill(publicKey, publicKeyOffset);
    instructionData.fill(signature, signatureOffset);
    instructionData.fill(message, messageDataOffset);
    return new TransactionInstruction({
      keys: [],
      programId: Ed25519Program.programId,
      data: instructionData
    });
  }
  /**
   * Create an ed25519 instruction with a private key. The private key
   * must be a buffer that is 64 bytes long.
   */


  static createInstructionWithPrivateKey(params) {
    const {
      privateKey,
      message,
      instructionIndex
    } = params;
    assert(privateKey.length === PRIVATE_KEY_BYTES$1, `Private key must be ${PRIVATE_KEY_BYTES$1} bytes but received ${privateKey.length} bytes`);

    try {
      const keypair = Keypair.fromSecretKey(privateKey);
      const publicKey = keypair.publicKey.toBytes();
      const signature = nacl__default["default"].sign.detached(message, keypair.secretKey);
      return this.createInstructionWithPublicKey({
        publicKey,
        message,
        signature,
        instructionIndex
      });
    } catch (error) {
      throw new Error(`Error creating instruction; ${error}`);
    }
  }

}
Ed25519Program.programId = new PublicKey('Ed25519SigVerify111111111111111111111111111');

/**
 * Address of the stake config account which configures the rate
 * of stake warmup and cooldown as well as the slashing penalty.
 */

const STAKE_CONFIG_ID = new PublicKey('StakeConfig11111111111111111111111111111111');
/**
 * Stake account authority info
 */

class Authorized {
  /** stake authority */

  /** withdraw authority */

  /**
   * Create a new Authorized object
   * @param staker the stake authority
   * @param withdrawer the withdraw authority
   */
  constructor(staker, withdrawer) {
    this.staker = void 0;
    this.withdrawer = void 0;
    this.staker = staker;
    this.withdrawer = withdrawer;
  }

}

/**
 * Stake account lockup info
 */
class Lockup {
  /** Unix timestamp of lockup expiration */

  /** Epoch of lockup expiration */

  /** Lockup custodian authority */

  /**
   * Create a new Lockup object
   */
  constructor(unixTimestamp, epoch, custodian) {
    this.unixTimestamp = void 0;
    this.epoch = void 0;
    this.custodian = void 0;
    this.unixTimestamp = unixTimestamp;
    this.epoch = epoch;
    this.custodian = custodian;
  }
  /**
   * Default, inactive Lockup value
   */


}
Lockup.default = new Lockup(0, 0, PublicKey.default);

/**
 * Stake Instruction class
 */
class StakeInstruction {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Decode a stake instruction and retrieve the instruction type.
   */


  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = BufferLayout__namespace.u32('instruction');
    const typeIndex = instructionTypeLayout.decode(instruction.data);
    let type;

    for (const [ixType, layout] of Object.entries(STAKE_INSTRUCTION_LAYOUTS)) {
      if (layout.index == typeIndex) {
        type = ixType;
        break;
      }
    }

    if (!type) {
      throw new Error('Instruction type incorrect; not a StakeInstruction');
    }

    return type;
  }
  /**
   * Decode a initialize stake instruction and retrieve the instruction params.
   */


  static decodeInitialize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      authorized,
      lockup
    } = decodeData(STAKE_INSTRUCTION_LAYOUTS.Initialize, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      authorized: new Authorized(new PublicKey(authorized.staker), new PublicKey(authorized.withdrawer)),
      lockup: new Lockup(lockup.unixTimestamp, lockup.epoch, new PublicKey(lockup.custodian))
    };
  }
  /**
   * Decode a delegate stake instruction and retrieve the instruction params.
   */


  static decodeDelegate(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 6);
    decodeData(STAKE_INSTRUCTION_LAYOUTS.Delegate, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      votePubkey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[5].pubkey
    };
  }
  /**
   * Decode an authorize stake instruction and retrieve the instruction params.
   */


  static decodeAuthorize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      newAuthorized,
      stakeAuthorizationType
    } = decodeData(STAKE_INSTRUCTION_LAYOUTS.Authorize, instruction.data);
    const o = {
      stakePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey,
      newAuthorizedPubkey: new PublicKey(newAuthorized),
      stakeAuthorizationType: {
        index: stakeAuthorizationType
      }
    };

    if (instruction.keys.length > 3) {
      o.custodianPubkey = instruction.keys[3].pubkey;
    }

    return o;
  }
  /**
   * Decode an authorize-with-seed stake instruction and retrieve the instruction params.
   */


  static decodeAuthorizeWithSeed(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 2);
    const {
      newAuthorized,
      stakeAuthorizationType,
      authoritySeed,
      authorityOwner
    } = decodeData(STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed, instruction.data);
    const o = {
      stakePubkey: instruction.keys[0].pubkey,
      authorityBase: instruction.keys[1].pubkey,
      authoritySeed: authoritySeed,
      authorityOwner: new PublicKey(authorityOwner),
      newAuthorizedPubkey: new PublicKey(newAuthorized),
      stakeAuthorizationType: {
        index: stakeAuthorizationType
      }
    };

    if (instruction.keys.length > 3) {
      o.custodianPubkey = instruction.keys[3].pubkey;
    }

    return o;
  }
  /**
   * Decode a split stake instruction and retrieve the instruction params.
   */


  static decodeSplit(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      lamports
    } = decodeData(STAKE_INSTRUCTION_LAYOUTS.Split, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      splitStakePubkey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey,
      lamports
    };
  }
  /**
   * Decode a merge stake instruction and retrieve the instruction params.
   */


  static decodeMerge(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    decodeData(STAKE_INSTRUCTION_LAYOUTS.Merge, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      sourceStakePubKey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[4].pubkey
    };
  }
  /**
   * Decode a withdraw stake instruction and retrieve the instruction params.
   */


  static decodeWithdraw(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 5);
    const {
      lamports
    } = decodeData(STAKE_INSTRUCTION_LAYOUTS.Withdraw, instruction.data);
    const o = {
      stakePubkey: instruction.keys[0].pubkey,
      toPubkey: instruction.keys[1].pubkey,
      authorizedPubkey: instruction.keys[4].pubkey,
      lamports
    };

    if (instruction.keys.length > 5) {
      o.custodianPubkey = instruction.keys[5].pubkey;
    }

    return o;
  }
  /**
   * Decode a deactivate stake instruction and retrieve the instruction params.
   */


  static decodeDeactivate(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    decodeData(STAKE_INSTRUCTION_LAYOUTS.Deactivate, instruction.data);
    return {
      stakePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey
    };
  }
  /**
   * @internal
   */


  static checkProgramId(programId) {
    if (!programId.equals(StakeProgram.programId)) {
      throw new Error('invalid instruction; programId is not StakeProgram');
    }
  }
  /**
   * @internal
   */


  static checkKeyLength(keys, expectedLength) {
    if (keys.length < expectedLength) {
      throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
  }

}
/**
 * An enumeration of valid StakeInstructionType's
 */

/**
 * An enumeration of valid stake InstructionType's
 * @internal
 */
const STAKE_INSTRUCTION_LAYOUTS = Object.freeze({
  Initialize: {
    index: 0,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), authorized(), lockup()])
  },
  Authorize: {
    index: 1,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('newAuthorized'), BufferLayout__namespace.u32('stakeAuthorizationType')])
  },
  Delegate: {
    index: 2,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction')])
  },
  Split: {
    index: 3,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), BufferLayout__namespace.ns64('lamports')])
  },
  Withdraw: {
    index: 4,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), BufferLayout__namespace.ns64('lamports')])
  },
  Deactivate: {
    index: 5,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction')])
  },
  Merge: {
    index: 7,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction')])
  },
  AuthorizeWithSeed: {
    index: 8,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('newAuthorized'), BufferLayout__namespace.u32('stakeAuthorizationType'), rustString('authoritySeed'), publicKey('authorityOwner')])
  }
});
/**
 * Stake authorization type
 */

/**
 * An enumeration of valid StakeAuthorizationLayout's
 */
const StakeAuthorizationLayout = Object.freeze({
  Staker: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});
/**
 * Factory class for transactions to interact with the Stake program
 */

class StakeProgram {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Public key that identifies the Stake program
   */


  /**
   * Generate an Initialize instruction to add to a Stake Create transaction
   */
  static initialize(params) {
    const {
      stakePubkey,
      authorized,
      lockup: maybeLockup
    } = params;
    const lockup = maybeLockup || Lockup.default;
    const type = STAKE_INSTRUCTION_LAYOUTS.Initialize;
    const data = encodeData(type, {
      authorized: {
        staker: toBuffer(authorized.staker.toBuffer()),
        withdrawer: toBuffer(authorized.withdrawer.toBuffer())
      },
      lockup: {
        unixTimestamp: lockup.unixTimestamp,
        epoch: lockup.epoch,
        custodian: toBuffer(lockup.custodian.toBuffer())
      }
    });
    const instructionData = {
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }
  /**
   * Generate a Transaction that creates a new Stake account at
   *   an address generated with `from`, a seed, and the Stake programId
   */


  static createAccountWithSeed(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccountWithSeed({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.stakePubkey,
      basePubkey: params.basePubkey,
      seed: params.seed,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    const {
      stakePubkey,
      authorized,
      lockup
    } = params;
    return transaction.add(this.initialize({
      stakePubkey,
      authorized,
      lockup
    }));
  }
  /**
   * Generate a Transaction that creates a new Stake account
   */


  static createAccount(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.stakePubkey,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    const {
      stakePubkey,
      authorized,
      lockup
    } = params;
    return transaction.add(this.initialize({
      stakePubkey,
      authorized,
      lockup
    }));
  }
  /**
   * Generate a Transaction that delegates Stake tokens to a validator
   * Vote PublicKey. This transaction can also be used to redelegate Stake
   * to a new validator Vote PublicKey.
   */


  static delegate(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      votePubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Delegate;
    const data = encodeData(type);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: votePubkey,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: STAKE_CONFIG_ID,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */


  static authorize(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      newAuthorizedPubkey,
      stakeAuthorizationType,
      custodianPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Authorize;
    const data = encodeData(type, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      stakeAuthorizationType: stakeAuthorizationType.index
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];

    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: false,
        isWritable: false
      });
    }

    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that authorizes a new PublicKey as Staker
   * or Withdrawer on the Stake account.
   */


  static authorizeWithSeed(params) {
    const {
      stakePubkey,
      authorityBase,
      authoritySeed,
      authorityOwner,
      newAuthorizedPubkey,
      stakeAuthorizationType,
      custodianPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.AuthorizeWithSeed;
    const data = encodeData(type, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      stakeAuthorizationType: stakeAuthorizationType.index,
      authoritySeed: authoritySeed,
      authorityOwner: toBuffer(authorityOwner.toBuffer())
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorityBase,
      isSigner: true,
      isWritable: false
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }];

    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: false,
        isWritable: false
      });
    }

    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * @internal
   */


  static splitInstruction(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      lamports
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Split;
    const data = encodeData(type, {
      lamports
    });
    return new TransactionInstruction({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: splitStakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that splits Stake tokens into another stake account
   */


  static split(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.authorizedPubkey,
      newAccountPubkey: params.splitStakePubkey,
      lamports: 0,
      space: this.space,
      programId: this.programId
    }));
    return transaction.add(this.splitInstruction(params));
  }
  /**
   * Generate a Transaction that splits Stake tokens into another account
   * derived from a base public key and seed
   */


  static splitWithSeed(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      basePubkey,
      seed,
      lamports
    } = params;
    const transaction = new Transaction();
    transaction.add(SystemProgram.allocate({
      accountPubkey: splitStakePubkey,
      basePubkey,
      seed,
      space: this.space,
      programId: this.programId
    }));
    return transaction.add(this.splitInstruction({
      stakePubkey,
      authorizedPubkey,
      splitStakePubkey,
      lamports
    }));
  }
  /**
   * Generate a Transaction that merges Stake accounts.
   */


  static merge(params) {
    const {
      stakePubkey,
      sourceStakePubKey,
      authorizedPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Merge;
    const data = encodeData(type);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: sourceStakePubKey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that withdraws deactivated Stake tokens.
   */


  static withdraw(params) {
    const {
      stakePubkey,
      authorizedPubkey,
      toPubkey,
      lamports,
      custodianPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Withdraw;
    const data = encodeData(type, {
      lamports
    });
    const keys = [{
      pubkey: stakePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: toPubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: SYSVAR_STAKE_HISTORY_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];

    if (custodianPubkey) {
      keys.push({
        pubkey: custodianPubkey,
        isSigner: false,
        isWritable: false
      });
    }

    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a Transaction that deactivates Stake tokens.
   */


  static deactivate(params) {
    const {
      stakePubkey,
      authorizedPubkey
    } = params;
    const type = STAKE_INSTRUCTION_LAYOUTS.Deactivate;
    const data = encodeData(type);
    return new Transaction().add({
      keys: [{
        pubkey: stakePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: authorizedPubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    });
  }

}
StakeProgram.programId = new PublicKey('Stake11111111111111111111111111111111111111');
StakeProgram.space = 200;

const {
  publicKeyCreate,
  ecdsaSign
} = secp256k1__default["default"];
const PRIVATE_KEY_BYTES = 32;
const ETHEREUM_ADDRESS_BYTES = 20;
const PUBLIC_KEY_BYTES = 64;
const SIGNATURE_OFFSETS_SERIALIZED_SIZE = 11;
/**
 * Params for creating an secp256k1 instruction using a public key
 */

const SECP256K1_INSTRUCTION_LAYOUT = BufferLayout__namespace.struct([BufferLayout__namespace.u8('numSignatures'), BufferLayout__namespace.u16('signatureOffset'), BufferLayout__namespace.u8('signatureInstructionIndex'), BufferLayout__namespace.u16('ethAddressOffset'), BufferLayout__namespace.u8('ethAddressInstructionIndex'), BufferLayout__namespace.u16('messageDataOffset'), BufferLayout__namespace.u16('messageDataSize'), BufferLayout__namespace.u8('messageInstructionIndex'), BufferLayout__namespace.blob(20, 'ethAddress'), BufferLayout__namespace.blob(64, 'signature'), BufferLayout__namespace.u8('recoveryId')]);
class Secp256k1Program {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Public key that identifies the secp256k1 program
   */


  /**
   * Construct an Ethereum address from a secp256k1 public key buffer.
   * @param {Buffer} publicKey a 64 byte secp256k1 public key buffer
   */
  static publicKeyToEthAddress(publicKey) {
    assert(publicKey.length === PUBLIC_KEY_BYTES, `Public key must be ${PUBLIC_KEY_BYTES} bytes but received ${publicKey.length} bytes`);

    try {
      return buffer.Buffer.from(sha3__default["default"].keccak_256.update(toBuffer(publicKey)).digest()).slice(-ETHEREUM_ADDRESS_BYTES);
    } catch (error) {
      throw new Error(`Error constructing Ethereum address: ${error}`);
    }
  }
  /**
   * Create an secp256k1 instruction with a public key. The public key
   * must be a buffer that is 64 bytes long.
   */


  static createInstructionWithPublicKey(params) {
    const {
      publicKey,
      message,
      signature,
      recoveryId,
      instructionIndex
    } = params;
    return Secp256k1Program.createInstructionWithEthAddress({
      ethAddress: Secp256k1Program.publicKeyToEthAddress(publicKey),
      message,
      signature,
      recoveryId,
      instructionIndex
    });
  }
  /**
   * Create an secp256k1 instruction with an Ethereum address. The address
   * must be a hex string or a buffer that is 20 bytes long.
   */


  static createInstructionWithEthAddress(params) {
    const {
      ethAddress: rawAddress,
      message,
      signature,
      recoveryId,
      instructionIndex = 0
    } = params;
    let ethAddress;

    if (typeof rawAddress === 'string') {
      if (rawAddress.startsWith('0x')) {
        ethAddress = buffer.Buffer.from(rawAddress.substr(2), 'hex');
      } else {
        ethAddress = buffer.Buffer.from(rawAddress, 'hex');
      }
    } else {
      ethAddress = rawAddress;
    }

    assert(ethAddress.length === ETHEREUM_ADDRESS_BYTES, `Address must be ${ETHEREUM_ADDRESS_BYTES} bytes but received ${ethAddress.length} bytes`);
    const dataStart = 1 + SIGNATURE_OFFSETS_SERIALIZED_SIZE;
    const ethAddressOffset = dataStart;
    const signatureOffset = dataStart + ethAddress.length;
    const messageDataOffset = signatureOffset + signature.length + 1;
    const numSignatures = 1;
    const instructionData = buffer.Buffer.alloc(SECP256K1_INSTRUCTION_LAYOUT.span + message.length);
    SECP256K1_INSTRUCTION_LAYOUT.encode({
      numSignatures,
      signatureOffset,
      signatureInstructionIndex: instructionIndex,
      ethAddressOffset,
      ethAddressInstructionIndex: instructionIndex,
      messageDataOffset,
      messageDataSize: message.length,
      messageInstructionIndex: instructionIndex,
      signature: toBuffer(signature),
      ethAddress: toBuffer(ethAddress),
      recoveryId
    }, instructionData);
    instructionData.fill(toBuffer(message), SECP256K1_INSTRUCTION_LAYOUT.span);
    return new TransactionInstruction({
      keys: [],
      programId: Secp256k1Program.programId,
      data: instructionData
    });
  }
  /**
   * Create an secp256k1 instruction with a private key. The private key
   * must be a buffer that is 32 bytes long.
   */


  static createInstructionWithPrivateKey(params) {
    const {
      privateKey: pkey,
      message,
      instructionIndex
    } = params;
    assert(pkey.length === PRIVATE_KEY_BYTES, `Private key must be ${PRIVATE_KEY_BYTES} bytes but received ${pkey.length} bytes`);

    try {
      const privateKey = toBuffer(pkey);
      const publicKey = publicKeyCreate(privateKey, false).slice(1); // throw away leading byte

      const messageHash = buffer.Buffer.from(sha3__default["default"].keccak_256.update(toBuffer(message)).digest());
      const {
        signature,
        recid: recoveryId
      } = ecdsaSign(messageHash, privateKey);
      return this.createInstructionWithPublicKey({
        publicKey,
        message,
        signature,
        recoveryId,
        instructionIndex
      });
    } catch (error) {
      throw new Error(`Error creating instruction; ${error}`);
    }
  }

}
Secp256k1Program.programId = new PublicKey('KeccakSecp256k11111111111111111111111111111');

const VALIDATOR_INFO_KEY = new PublicKey('Va1idator1nfo111111111111111111111111111111');
/**
 * @internal
 */

const InfoString = superstruct.type({
  name: superstruct.string(),
  website: superstruct.optional(superstruct.string()),
  details: superstruct.optional(superstruct.string()),
  keybaseUsername: superstruct.optional(superstruct.string())
});
/**
 * ValidatorInfo class
 */

class ValidatorInfo {
  /**
   * validator public key
   */

  /**
   * validator information
   */

  /**
   * Construct a valid ValidatorInfo
   *
   * @param key validator public key
   * @param info validator information
   */
  constructor(key, info) {
    this.key = void 0;
    this.info = void 0;
    this.key = key;
    this.info = info;
  }
  /**
   * Deserialize ValidatorInfo from the config account data. Exactly two config
   * keys are required in the data.
   *
   * @param buffer config account data
   * @return null if info was not found
   */


  static fromConfigData(buffer$1) {
    const PUBKEY_LENGTH = 32;
    let byteArray = [...buffer$1];
    const configKeyCount = decodeLength(byteArray);
    if (configKeyCount !== 2) return null;
    const configKeys = [];

    for (let i = 0; i < 2; i++) {
      const publicKey = new PublicKey(byteArray.slice(0, PUBKEY_LENGTH));
      byteArray = byteArray.slice(PUBKEY_LENGTH);
      const isSigner = byteArray.slice(0, 1)[0] === 1;
      byteArray = byteArray.slice(1);
      configKeys.push({
        publicKey,
        isSigner
      });
    }

    if (configKeys[0].publicKey.equals(VALIDATOR_INFO_KEY)) {
      if (configKeys[1].isSigner) {
        const rawInfo = rustString().decode(buffer.Buffer.from(byteArray));
        const info = JSON.parse(rawInfo);
        superstruct.assert(info, InfoString);
        return new ValidatorInfo(configKeys[1].publicKey, info);
      }
    }

    return null;
  }

}

const VOTE_PROGRAM_ID = new PublicKey('Vote111111111111111111111111111111111111111');

/**
 * See https://github.com/solana-labs/solana/blob/8a12ed029cfa38d4a45400916c2463fb82bbec8c/programs/vote_api/src/vote_state.rs#L68-L88
 *
 * @internal
 */
const VoteAccountLayout = BufferLayout__namespace.struct([publicKey('nodePubkey'), publicKey('authorizedWithdrawer'), BufferLayout__namespace.u8('commission'), BufferLayout__namespace.nu64(), // votes.length
BufferLayout__namespace.seq(BufferLayout__namespace.struct([BufferLayout__namespace.nu64('slot'), BufferLayout__namespace.u32('confirmationCount')]), BufferLayout__namespace.offset(BufferLayout__namespace.u32(), -8), 'votes'), BufferLayout__namespace.u8('rootSlotValid'), BufferLayout__namespace.nu64('rootSlot'), BufferLayout__namespace.nu64(), // authorizedVoters.length
BufferLayout__namespace.seq(BufferLayout__namespace.struct([BufferLayout__namespace.nu64('epoch'), publicKey('authorizedVoter')]), BufferLayout__namespace.offset(BufferLayout__namespace.u32(), -8), 'authorizedVoters'), BufferLayout__namespace.struct([BufferLayout__namespace.seq(BufferLayout__namespace.struct([publicKey('authorizedPubkey'), BufferLayout__namespace.nu64('epochOfLastAuthorizedSwitch'), BufferLayout__namespace.nu64('targetEpoch')]), 32, 'buf'), BufferLayout__namespace.nu64('idx'), BufferLayout__namespace.u8('isEmpty')], 'priorVoters'), BufferLayout__namespace.nu64(), // epochCredits.length
BufferLayout__namespace.seq(BufferLayout__namespace.struct([BufferLayout__namespace.nu64('epoch'), BufferLayout__namespace.nu64('credits'), BufferLayout__namespace.nu64('prevCredits')]), BufferLayout__namespace.offset(BufferLayout__namespace.u32(), -8), 'epochCredits'), BufferLayout__namespace.struct([BufferLayout__namespace.nu64('slot'), BufferLayout__namespace.nu64('timestamp')], 'lastTimestamp')]);

/**
 * VoteAccount class
 */
class VoteAccount {
  /**
   * @internal
   */
  constructor(args) {
    this.nodePubkey = void 0;
    this.authorizedWithdrawer = void 0;
    this.commission = void 0;
    this.rootSlot = void 0;
    this.votes = void 0;
    this.authorizedVoters = void 0;
    this.priorVoters = void 0;
    this.epochCredits = void 0;
    this.lastTimestamp = void 0;
    this.nodePubkey = args.nodePubkey;
    this.authorizedWithdrawer = args.authorizedWithdrawer;
    this.commission = args.commission;
    this.rootSlot = args.rootSlot;
    this.votes = args.votes;
    this.authorizedVoters = args.authorizedVoters;
    this.priorVoters = args.priorVoters;
    this.epochCredits = args.epochCredits;
    this.lastTimestamp = args.lastTimestamp;
  }
  /**
   * Deserialize VoteAccount from the account data.
   *
   * @param buffer account data
   * @return VoteAccount
   */


  static fromAccountData(buffer) {
    const versionOffset = 4;
    const va = VoteAccountLayout.decode(toBuffer(buffer), versionOffset);
    let rootSlot = va.rootSlot;

    if (!va.rootSlotValid) {
      rootSlot = null;
    }

    return new VoteAccount({
      nodePubkey: new PublicKey(va.nodePubkey),
      authorizedWithdrawer: new PublicKey(va.authorizedWithdrawer),
      commission: va.commission,
      votes: va.votes,
      rootSlot,
      authorizedVoters: va.authorizedVoters.map(parseAuthorizedVoter),
      priorVoters: getPriorVoters(va.priorVoters),
      epochCredits: va.epochCredits,
      lastTimestamp: va.lastTimestamp
    });
  }

}

function parseAuthorizedVoter({
  authorizedVoter,
  epoch
}) {
  return {
    epoch,
    authorizedVoter: new PublicKey(authorizedVoter)
  };
}

function parsePriorVoters({
  authorizedPubkey,
  epochOfLastAuthorizedSwitch,
  targetEpoch
}) {
  return {
    authorizedPubkey: new PublicKey(authorizedPubkey),
    epochOfLastAuthorizedSwitch,
    targetEpoch
  };
}

function getPriorVoters({
  buf,
  idx,
  isEmpty
}) {
  if (isEmpty) {
    return [];
  }

  return [...buf.slice(idx + 1).map(parsePriorVoters), ...buf.slice(0, idx).map(parsePriorVoters)];
}

/**
 * Vote account info
 */

class VoteInit {
  /** [0, 100] */
  constructor(nodePubkey, authorizedVoter, authorizedWithdrawer, commission) {
    this.nodePubkey = void 0;
    this.authorizedVoter = void 0;
    this.authorizedWithdrawer = void 0;
    this.commission = void 0;
    this.nodePubkey = nodePubkey;
    this.authorizedVoter = authorizedVoter;
    this.authorizedWithdrawer = authorizedWithdrawer;
    this.commission = commission;
  }

}
/**
 * Create vote account transaction params
 */

/**
 * Vote Instruction class
 */
class VoteInstruction {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Decode a vote instruction and retrieve the instruction type.
   */


  static decodeInstructionType(instruction) {
    this.checkProgramId(instruction.programId);
    const instructionTypeLayout = BufferLayout__namespace.u32('instruction');
    const typeIndex = instructionTypeLayout.decode(instruction.data);
    let type;

    for (const [ixType, layout] of Object.entries(VOTE_INSTRUCTION_LAYOUTS)) {
      if (layout.index == typeIndex) {
        type = ixType;
        break;
      }
    }

    if (!type) {
      throw new Error('Instruction type incorrect; not a VoteInstruction');
    }

    return type;
  }
  /**
   * Decode an initialize vote instruction and retrieve the instruction params.
   */


  static decodeInitializeAccount(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 4);
    const {
      voteInit
    } = decodeData(VOTE_INSTRUCTION_LAYOUTS.InitializeAccount, instruction.data);
    return {
      votePubkey: instruction.keys[0].pubkey,
      nodePubkey: instruction.keys[3].pubkey,
      voteInit: new VoteInit(new PublicKey(voteInit.nodePubkey), new PublicKey(voteInit.authorizedVoter), new PublicKey(voteInit.authorizedWithdrawer), voteInit.commission)
    };
  }
  /**
   * Decode an authorize instruction and retrieve the instruction params.
   */


  static decodeAuthorize(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      newAuthorized,
      voteAuthorizationType
    } = decodeData(VOTE_INSTRUCTION_LAYOUTS.Authorize, instruction.data);
    return {
      votePubkey: instruction.keys[0].pubkey,
      authorizedPubkey: instruction.keys[2].pubkey,
      newAuthorizedPubkey: new PublicKey(newAuthorized),
      voteAuthorizationType: {
        index: voteAuthorizationType
      }
    };
  }
  /**
   * Decode a withdraw instruction and retrieve the instruction params.
   */


  static decodeWithdraw(instruction) {
    this.checkProgramId(instruction.programId);
    this.checkKeyLength(instruction.keys, 3);
    const {
      lamports
    } = decodeData(VOTE_INSTRUCTION_LAYOUTS.Withdraw, instruction.data);
    return {
      votePubkey: instruction.keys[0].pubkey,
      authorizedWithdrawerPubkey: instruction.keys[2].pubkey,
      lamports,
      toPubkey: instruction.keys[1].pubkey
    };
  }
  /**
   * @internal
   */


  static checkProgramId(programId) {
    if (!programId.equals(VoteProgram.programId)) {
      throw new Error('invalid instruction; programId is not VoteProgram');
    }
  }
  /**
   * @internal
   */


  static checkKeyLength(keys, expectedLength) {
    if (keys.length < expectedLength) {
      throw new Error(`invalid instruction; found ${keys.length} keys, expected at least ${expectedLength}`);
    }
  }

}
/**
 * An enumeration of valid VoteInstructionType's
 */

const VOTE_INSTRUCTION_LAYOUTS = Object.freeze({
  InitializeAccount: {
    index: 0,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), voteInit()])
  },
  Authorize: {
    index: 1,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), publicKey('newAuthorized'), BufferLayout__namespace.u32('voteAuthorizationType')])
  },
  Withdraw: {
    index: 3,
    layout: BufferLayout__namespace.struct([BufferLayout__namespace.u32('instruction'), BufferLayout__namespace.ns64('lamports')])
  }
});
/**
 * VoteAuthorize type
 */

/**
 * An enumeration of valid VoteAuthorization layouts.
 */
const VoteAuthorizationLayout = Object.freeze({
  Voter: {
    index: 0
  },
  Withdrawer: {
    index: 1
  }
});
/**
 * Factory class for transactions to interact with the Vote program
 */

class VoteProgram {
  /**
   * @internal
   */
  constructor() {}
  /**
   * Public key that identifies the Vote program
   */


  /**
   * Generate an Initialize instruction.
   */
  static initializeAccount(params) {
    const {
      votePubkey,
      nodePubkey,
      voteInit
    } = params;
    const type = VOTE_INSTRUCTION_LAYOUTS.InitializeAccount;
    const data = encodeData(type, {
      voteInit: {
        nodePubkey: toBuffer(voteInit.nodePubkey.toBuffer()),
        authorizedVoter: toBuffer(voteInit.authorizedVoter.toBuffer()),
        authorizedWithdrawer: toBuffer(voteInit.authorizedWithdrawer.toBuffer()),
        commission: voteInit.commission
      }
    });
    const instructionData = {
      keys: [{
        pubkey: votePubkey,
        isSigner: false,
        isWritable: true
      }, {
        pubkey: SYSVAR_RENT_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: SYSVAR_CLOCK_PUBKEY,
        isSigner: false,
        isWritable: false
      }, {
        pubkey: nodePubkey,
        isSigner: true,
        isWritable: false
      }],
      programId: this.programId,
      data
    };
    return new TransactionInstruction(instructionData);
  }
  /**
   * Generate a transaction that creates a new Vote account.
   */


  static createAccount(params) {
    const transaction = new Transaction();
    transaction.add(SystemProgram.createAccount({
      fromPubkey: params.fromPubkey,
      newAccountPubkey: params.votePubkey,
      lamports: params.lamports,
      space: this.space,
      programId: this.programId
    }));
    return transaction.add(this.initializeAccount({
      votePubkey: params.votePubkey,
      nodePubkey: params.voteInit.nodePubkey,
      voteInit: params.voteInit
    }));
  }
  /**
   * Generate a transaction that authorizes a new Voter or Withdrawer on the Vote account.
   */


  static authorize(params) {
    const {
      votePubkey,
      authorizedPubkey,
      newAuthorizedPubkey,
      voteAuthorizationType
    } = params;
    const type = VOTE_INSTRUCTION_LAYOUTS.Authorize;
    const data = encodeData(type, {
      newAuthorized: toBuffer(newAuthorizedPubkey.toBuffer()),
      voteAuthorizationType: voteAuthorizationType.index
    });
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: SYSVAR_CLOCK_PUBKEY,
      isSigner: false,
      isWritable: false
    }, {
      pubkey: authorizedPubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }
  /**
   * Generate a transaction to withdraw from a Vote account.
   */


  static withdraw(params) {
    const {
      votePubkey,
      authorizedWithdrawerPubkey,
      lamports,
      toPubkey
    } = params;
    const type = VOTE_INSTRUCTION_LAYOUTS.Withdraw;
    const data = encodeData(type, {
      lamports
    });
    const keys = [{
      pubkey: votePubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: toPubkey,
      isSigner: false,
      isWritable: true
    }, {
      pubkey: authorizedWithdrawerPubkey,
      isSigner: true,
      isWritable: false
    }];
    return new Transaction().add({
      keys,
      programId: this.programId,
      data
    });
  }

}
VoteProgram.programId = new PublicKey('Vote111111111111111111111111111111111111111');
VoteProgram.space = 3731;

/**
 * Send and confirm a raw transaction
 *
 * If `commitment` option is not specified, defaults to 'max' commitment.
 *
 * @param {Connection} connection
 * @param {Buffer} rawTransaction
 * @param {BlockheightBasedTransactionConfirmationStrategy} confirmationStrategy
 * @param {ConfirmOptions} [options]
 * @returns {Promise<TransactionSignature>}
 */

/**
 * @deprecated Calling `sendAndConfirmRawTransaction()` without a `confirmationStrategy`
 * is no longer supported and will be removed in a future version.
 */
// eslint-disable-next-line no-redeclare
// eslint-disable-next-line no-redeclare
async function sendAndConfirmRawTransaction(connection, rawTransaction, confirmationStrategyOrConfirmOptions, maybeConfirmOptions) {
  let confirmationStrategy;
  let options;

  if (confirmationStrategyOrConfirmOptions && Object.prototype.hasOwnProperty.call(confirmationStrategyOrConfirmOptions, 'lastValidBlockHeight')) {
    confirmationStrategy = confirmationStrategyOrConfirmOptions;
    options = maybeConfirmOptions;
  } else {
    options = confirmationStrategyOrConfirmOptions;
  }

  const sendOptions = options && {
    skipPreflight: options.skipPreflight,
    preflightCommitment: options.preflightCommitment || options.commitment,
    minContextSlot: options.minContextSlot
  };
  const signature = await connection.sendRawTransaction(rawTransaction, sendOptions);
  const commitment = options && options.commitment;
  const confirmationPromise = confirmationStrategy ? connection.confirmTransaction(confirmationStrategy, commitment) : connection.confirmTransaction(signature, commitment);
  const status = (await confirmationPromise).value;

  if (status.err) {
    throw new Error(`Raw transaction ${signature} failed (${JSON.stringify(status)})`);
  }

  return signature;
}

const endpoint = {
  http: {
    devnet: 'http://api.devnet.solana.com',
    testnet: 'http://api.testnet.solana.com',
    'mainnet-beta': 'http://api.mainnet-beta.solana.com/'
  },
  https: {
    devnet: 'https://api.devnet.solana.com',
    testnet: 'https://api.testnet.solana.com',
    'mainnet-beta': 'https://api.mainnet-beta.solana.com/'
  }
};

/**
 * Retrieves the RPC API URL for the specified cluster
 */
function clusterApiUrl(cluster, tls) {
  const key = tls === false ? 'http' : 'https';

  if (!cluster) {
    return endpoint[key]['devnet'];
  }

  const url = endpoint[key][cluster];

  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }

  return url;
}

/**
 * There are 1-billion lamports in one SOL
 */

const LAMPORTS_PER_SOL = 1000000000;

exports.Account = Account;
exports.Authorized = Authorized;
exports.BLOCKHASH_CACHE_TIMEOUT_MS = BLOCKHASH_CACHE_TIMEOUT_MS;
exports.BPF_LOADER_DEPRECATED_PROGRAM_ID = BPF_LOADER_DEPRECATED_PROGRAM_ID;
exports.BPF_LOADER_PROGRAM_ID = BPF_LOADER_PROGRAM_ID;
exports.BpfLoader = BpfLoader;
exports.COMPUTE_BUDGET_INSTRUCTION_LAYOUTS = COMPUTE_BUDGET_INSTRUCTION_LAYOUTS;
exports.ComputeBudgetInstruction = ComputeBudgetInstruction;
exports.ComputeBudgetProgram = ComputeBudgetProgram;
exports.Connection = Connection;
exports.Ed25519Program = Ed25519Program;
exports.Enum = Enum;
exports.EpochSchedule = EpochSchedule;
exports.FeeCalculatorLayout = FeeCalculatorLayout;
exports.Keypair = Keypair;
exports.LAMPORTS_PER_SOL = LAMPORTS_PER_SOL;
exports.Loader = Loader;
exports.Lockup = Lockup;
exports.MAX_SEED_LENGTH = MAX_SEED_LENGTH;
exports.Message = Message;
exports.NONCE_ACCOUNT_LENGTH = NONCE_ACCOUNT_LENGTH;
exports.NonceAccount = NonceAccount;
exports.PACKET_DATA_SIZE = PACKET_DATA_SIZE;
exports.PublicKey = PublicKey;
exports.SIGNATURE_LENGTH_IN_BYTES = SIGNATURE_LENGTH_IN_BYTES;
exports.SOLANA_SCHEMA = SOLANA_SCHEMA;
exports.STAKE_CONFIG_ID = STAKE_CONFIG_ID;
exports.STAKE_INSTRUCTION_LAYOUTS = STAKE_INSTRUCTION_LAYOUTS;
exports.SYSTEM_INSTRUCTION_LAYOUTS = SYSTEM_INSTRUCTION_LAYOUTS;
exports.SYSVAR_CLOCK_PUBKEY = SYSVAR_CLOCK_PUBKEY;
exports.SYSVAR_EPOCH_SCHEDULE_PUBKEY = SYSVAR_EPOCH_SCHEDULE_PUBKEY;
exports.SYSVAR_INSTRUCTIONS_PUBKEY = SYSVAR_INSTRUCTIONS_PUBKEY;
exports.SYSVAR_RECENT_BLOCKHASHES_PUBKEY = SYSVAR_RECENT_BLOCKHASHES_PUBKEY;
exports.SYSVAR_RENT_PUBKEY = SYSVAR_RENT_PUBKEY;
exports.SYSVAR_REWARDS_PUBKEY = SYSVAR_REWARDS_PUBKEY;
exports.SYSVAR_SLOT_HASHES_PUBKEY = SYSVAR_SLOT_HASHES_PUBKEY;
exports.SYSVAR_SLOT_HISTORY_PUBKEY = SYSVAR_SLOT_HISTORY_PUBKEY;
exports.SYSVAR_STAKE_HISTORY_PUBKEY = SYSVAR_STAKE_HISTORY_PUBKEY;
exports.Secp256k1Program = Secp256k1Program;
exports.SendTransactionError = SendTransactionError;
exports.SolanaJSONRPCError = SolanaJSONRPCError;
exports.SolanaJSONRPCErrorCode = SolanaJSONRPCErrorCode;
exports.StakeAuthorizationLayout = StakeAuthorizationLayout;
exports.StakeInstruction = StakeInstruction;
exports.StakeProgram = StakeProgram;
exports.Struct = Struct;
exports.SystemInstruction = SystemInstruction;
exports.SystemProgram = SystemProgram;
exports.Transaction = Transaction;
exports.TransactionExpiredBlockheightExceededError = TransactionExpiredBlockheightExceededError;
exports.TransactionExpiredTimeoutError = TransactionExpiredTimeoutError;
exports.TransactionInstruction = TransactionInstruction;
exports.VALIDATOR_INFO_KEY = VALIDATOR_INFO_KEY;
exports.VOTE_PROGRAM_ID = VOTE_PROGRAM_ID;
exports.ValidatorInfo = ValidatorInfo;
exports.VoteAccount = VoteAccount;
exports.VoteAuthorizationLayout = VoteAuthorizationLayout;
exports.VoteInit = VoteInit;
exports.VoteInstruction = VoteInstruction;
exports.VoteProgram = VoteProgram;
exports.clusterApiUrl = clusterApiUrl;
exports.sendAndConfirmRawTransaction = sendAndConfirmRawTransaction;
exports.sendAndConfirmTransaction = sendAndConfirmTransaction;
//# sourceMappingURL=index.native.js.map
