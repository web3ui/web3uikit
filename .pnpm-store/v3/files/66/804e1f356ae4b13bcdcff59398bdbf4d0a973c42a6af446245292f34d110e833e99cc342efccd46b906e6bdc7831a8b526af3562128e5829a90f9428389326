/**
 * Node.js eccrypto implementation.
 * @module eccrypto
 */

"use strict";

const EC_GROUP_ORDER = Buffer.from('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 'hex');
const ZERO32 = Buffer.alloc(32, 0);

var promise = typeof Promise === "undefined" ?
              require("es6-promise").Promise :
              Promise;
var crypto = require("crypto");
// try to use secp256k1, fallback to browser implementation
try {
  var secp256k1 = require("secp256k1");
  var ecdh = require("./build/Release/ecdh");
} catch (e) {
  if (process.env.ECCRYPTO_NO_FALLBACK) {
    throw e;
  } else {
    console.info('secp256k1 unavailable, reverting to browser version');
    return (module.exports = require("./browser"));
  }
}

function isScalar (x) {
  return Buffer.isBuffer(x) && x.length === 32;
}

function isValidPrivateKey(privateKey) {
  if (!isScalar(privateKey))
  {
    return false;
  }
  return privateKey.compare(ZERO32) > 0 && // > 0
  privateKey.compare(EC_GROUP_ORDER) < 0; // < G
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

function sha512(msg) {
  return crypto.createHash("sha512").update(msg).digest();
}

function aes256CbcEncrypt(iv, key, plaintext) {
  var cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  var firstChunk = cipher.update(plaintext);
  var secondChunk = cipher.final();
  return Buffer.concat([firstChunk, secondChunk]);
}

function aes256CbcDecrypt(iv, key, ciphertext) {
  var cipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  var firstChunk = cipher.update(ciphertext);
  var secondChunk = cipher.final();
  return Buffer.concat([firstChunk, secondChunk]);
}

function hmacSha256(key, msg) {
  return crypto.createHmac("sha256", key).update(msg).digest();
}

// Compare two buffers in constant time to prevent timing attacks.
function equalConstTime(b1, b2) {
  if (b1.length !== b2.length) {
    return false;
  }
  var res = 0;
  for (var i = 0; i < b1.length; i++) {
    res |= b1[i] ^ b2[i];  // jshint ignore:line
  }
  return res === 0;
}

function pad32(msg){
  var buf;
  if (msg.length < 32) {
    buf = Buffer.alloc(32);
    buf.fill(0);
    msg.copy(buf, 32 - msg.length);
    return buf;
  } else {
    return msg;
  }
}

/**
 * Generate a new valid private key. Will use crypto.randomBytes as source.
 * @return {Buffer} A 32-byte private key.
 * @function
 */
exports.generatePrivate = function() {
  var privateKey = crypto.randomBytes(32);
  while (!isValidPrivateKey(privateKey)) {
    privateKey = crypto.randomBytes(32);
  }
  return privateKey;
};

/**
 * Compute the public key for a given private key.
 * @param {Buffer} privateKey - A 32-byte private key
 * @return {Buffer} A 65-byte public key.
 * @function
 */
var getPublic = exports.getPublic = function(privateKey) {
  assert(privateKey.length === 32, "Bad private key");
  assert(isValidPrivateKey(privateKey), "Bad private key");
  // See https://github.com/wanderer/secp256k1-node/issues/46
  var compressed = secp256k1.publicKeyCreate(privateKey);
  return secp256k1.publicKeyConvert(compressed, false);
};

/**
 * Get compressed version of public key.
 */
var getPublicCompressed = exports.getPublicCompressed = function(privateKey) { // jshint ignore:line
  assert(privateKey.length === 32, "Bad private key");
  assert(isValidPrivateKey(privateKey), "Bad private key");
  // See https://github.com/wanderer/secp256k1-node/issues/46
  return secp256k1.publicKeyCreate(privateKey);
};

/**
 * Create an ECDSA signature.
 * @param {Buffer} privateKey - A 32-byte private key
 * @param {Buffer} msg - The message being signed
 * @return {Promise.<Buffer>} A promise that resolves with the
 * signature and rejects on bad key or message.
 */
exports.sign = function(privateKey, msg) {
  return new promise(function(resolve) {
    assert(privateKey.length === 32, "Bad private key");
    assert(isValidPrivateKey(privateKey), "Bad private key");
    assert(msg.length > 0, "Message should not be empty");
    assert(msg.length <= 32, "Message is too long");
    msg = pad32(msg);
    var sig = secp256k1.sign(msg, privateKey).signature;
    resolve(secp256k1.signatureExport(sig));
  });
};

/**
 * Verify an ECDSA signature.
 * @param {Buffer} publicKey - A 65-byte public key
 * @param {Buffer} msg - The message being verified
 * @param {Buffer} sig - The signature
 * @return {Promise.<null>} A promise that resolves on correct signature
 * and rejects on bad key or signature.
 */
exports.verify = function(publicKey, msg, sig) {
  return new promise(function(resolve, reject) {
    assert(msg.length > 0, "Message should not be empty");
    assert(msg.length <= 32, "Message is too long");
    msg = pad32(msg);
    sig = secp256k1.signatureImport(sig);
    if (secp256k1.verify(msg, sig, publicKey)) {
     resolve(null);
    } else {
     reject(new Error("Bad signature"));
    }
  });
};

/**
 * Derive shared secret for given private and public keys.
 * @param {Buffer} privateKeyA - Sender's private key (32 bytes)
 * @param {Buffer} publicKeyB - Recipient's public key (65 bytes)
 * @return {Promise.<Buffer>} A promise that resolves with the derived
 * shared secret (Px, 32 bytes) and rejects on bad key.
 */
var derive = exports.derive = function(privateKeyA, publicKeyB) {
  return new promise(function(resolve) {
    assert(privateKeyA.length === 32, "Bad private key");
    assert(isValidPrivateKey(privateKeyA), "Bad private key");
    resolve(ecdh.derive(privateKeyA, publicKeyB));
  });
};

/**
 * Input/output structure for ECIES operations.
 * @typedef {Object} Ecies
 * @property {Buffer} iv - Initialization vector (16 bytes)
 * @property {Buffer} ephemPublicKey - Ephemeral public key (65 bytes)
 * @property {Buffer} ciphertext - The result of encryption (variable size)
 * @property {Buffer} mac - Message authentication code (32 bytes)
 */

/**
 * Encrypt message for given recepient's public key.
 * @param {Buffer} publicKeyTo - Recipient's public key (65 bytes)
 * @param {Buffer} msg - The message being encrypted
 * @param {?{?iv: Buffer, ?ephemPrivateKey: Buffer}} opts - You may also
 * specify initialization vector (16 bytes) and ephemeral private key
 * (32 bytes) to get deterministic results.
 * @return {Promise.<Ecies>} - A promise that resolves with the ECIES
 * structure on successful encryption and rejects on failure.
 */
exports.encrypt = function(publicKeyTo, msg, opts) {
  opts = opts || {};
  // Tmp variable to save context from flat promises;
  var ephemPublicKey;
  return new promise(function(resolve) {
    var ephemPrivateKey = opts.ephemPrivateKey || crypto.randomBytes(32);
    // There is a very unlikely possibility that it is not a valid key
    while(!isValidPrivateKey(ephemPrivateKey))
    {
      ephemPrivateKey = opts.ephemPrivateKey || crypto.randomBytes(32);
    }
    ephemPublicKey = getPublic(ephemPrivateKey);
    resolve(derive(ephemPrivateKey, publicKeyTo));
  }).then(function(Px) {
    var hash = sha512(Px);
    var iv = opts.iv || crypto.randomBytes(16);
    var encryptionKey = hash.slice(0, 32);
    var macKey = hash.slice(32);
    var ciphertext = aes256CbcEncrypt(iv, encryptionKey, msg);
    var dataToMac = Buffer.concat([iv, ephemPublicKey, ciphertext]);
    var mac = Buffer.from(hmacSha256(macKey, dataToMac));
    return {
      iv: iv,
      ephemPublicKey: ephemPublicKey,
      ciphertext: ciphertext,
      mac: mac,
    };
  });
};

/**
 * Decrypt message using given private key.
 * @param {Buffer} privateKey - A 32-byte private key of recepient of
 * the mesage
 * @param {Ecies} opts - ECIES structure (result of ECIES encryption)
 * @return {Promise.<Buffer>} - A promise that resolves with the
 * plaintext on successful decryption and rejects on failure.
 */
exports.decrypt = function(privateKey, opts) {
  return derive(privateKey, opts.ephemPublicKey).then(function(Px) {
    assert(privateKey.length === 32, "Bad private key");
    assert(isValidPrivateKey(privateKey), "Bad private key");
    var hash = sha512(Px);
    var encryptionKey = hash.slice(0, 32);
    var macKey = hash.slice(32);
    var dataToMac = Buffer.concat([
      opts.iv,
      opts.ephemPublicKey,
      opts.ciphertext
    ]);
    var realMac = hmacSha256(macKey, dataToMac);
    assert(equalConstTime(opts.mac, realMac), "Bad MAC"); return aes256CbcDecrypt(opts.iv, encryptionKey, opts.ciphertext);
  });
};
