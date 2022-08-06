"use strict";

var EC = require("elliptic").ec;

var ec = new EC("secp256k1");
var browserCrypto = global.crypto || global.msCrypto || {};
var subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;

var nodeCrypto = require('crypto');

const EC_GROUP_ORDER = Buffer.from('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 'hex');
const ZERO32 = Buffer.alloc(32, 0);

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
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

/* This must check if we're in the browser or
not, since the functions are different and does
not convert using browserify */
function randomBytes(size) {
  var arr = new Uint8Array(size);
  if (typeof browserCrypto.getRandomValues === 'undefined') {
    return Buffer.from(nodeCrypto.randomBytes(size));
  } else {
    browserCrypto.getRandomValues(arr);
  }
  return Buffer.from(arr);
}

function sha512(msg) {
  return new Promise(function(resolve) {
    var hash = nodeCrypto.createHash('sha512');
    var result = hash.update(msg).digest();
    resolve(new Uint8Array(result));
  });
}

function getAes(op) {
  return function(iv, key, data) {
    return new Promise(function(resolve) {
      if (subtle) {
        var importAlgorithm = {name: "AES-CBC"};
        var keyp = subtle.importKey("raw", key, importAlgorithm, false, [op]);
        return keyp.then(function(cryptoKey) {
          var encAlgorithm = {name: "AES-CBC", iv: iv};
          return subtle[op](encAlgorithm, cryptoKey, data);
        }).then(function(result) {
          resolve(Buffer.from(new Uint8Array(result)));
        });
      } else {
        if (op === 'encrypt') {
          var cipher = nodeCrypto.createCipheriv('aes-256-cbc', key, iv);
          let firstChunk = cipher.update(data);
          let secondChunk = cipher.final();
          resolve(Buffer.concat([firstChunk, secondChunk]));
        }
        else if (op === 'decrypt') {
          var decipher = nodeCrypto.createDecipheriv('aes-256-cbc', key, iv);
          let firstChunk = decipher.update(data);
          let secondChunk = decipher.final();
          resolve(Buffer.concat([firstChunk, secondChunk]));
        }
      }
    });
  };
}

var aesCbcEncrypt = getAes("encrypt");
var aesCbcDecrypt = getAes("decrypt");

function hmacSha256Sign(key, msg) {
  return new Promise(function(resolve) {
    var hmac = nodeCrypto.createHmac('sha256', Buffer.from(key));
    hmac.update(msg);
    var result = hmac.digest();
    resolve(result);
  });
}

function hmacSha256Verify(key, msg, sig) {
  return new Promise(function(resolve) {
    var hmac = nodeCrypto.createHmac('sha256', Buffer.from(key));
    hmac.update(msg);
    var expectedSig = hmac.digest();
    resolve(equalConstTime(expectedSig, sig));
  });
}

/**
  * Generate a new valid private key. Will use the window.crypto or window.msCrypto as source
  * depending on your browser.
  * @return {Buffer} A 32-byte private key.
  * @function
  */
exports.generatePrivate = function () {
  var privateKey = randomBytes(32);
  while (!isValidPrivateKey(privateKey)) {
    privateKey = randomBytes(32);
  }
  return privateKey;
};

var getPublic = exports.getPublic = function(privateKey) {
  // This function has sync API so we throw an error immediately.
  assert(privateKey.length === 32, "Bad private key");
  assert(isValidPrivateKey(privateKey), "Bad private key");
  // XXX(Kagami): `elliptic.utils.encode` returns array for every
  // encoding except `hex`.
  return Buffer.from(ec.keyFromPrivate(privateKey).getPublic("arr"));
};

/**
 * Get compressed version of public key.
 */
var getPublicCompressed = exports.getPublicCompressed = function(privateKey) { // jshint ignore:line
  assert(privateKey.length === 32, "Bad private key");
  assert(isValidPrivateKey(privateKey), "Bad private key");
  // See https://github.com/wanderer/secp256k1-node/issues/46
  let compressed = true;
  return Buffer.from(ec.keyFromPrivate(privateKey).getPublic(compressed, "arr"));
};

// NOTE(Kagami): We don't use promise shim in Browser implementation
// because it's supported natively in new browsers (see
// <http://caniuse.com/#feat=promises>) and we can use only new browsers
// because of the WebCryptoAPI (see
// <http://caniuse.com/#feat=cryptography>).
exports.sign = function(privateKey, msg) {
  return new Promise(function(resolve) {
    assert(privateKey.length === 32, "Bad private key");
    assert(isValidPrivateKey(privateKey), "Bad private key");
    assert(msg.length > 0, "Message should not be empty");
    assert(msg.length <= 32, "Message is too long");
    resolve(Buffer.from(ec.sign(msg, privateKey, {canonical: true}).toDER()));
  });
};

exports.verify = function(publicKey, msg, sig) {
  return new Promise(function(resolve, reject) {
    assert(publicKey.length === 65 || publicKey.length === 33, "Bad public key");
    if (publicKey.length === 65)
    {
      assert(publicKey[0] === 4, "Bad public key");
    }
    if (publicKey.length === 33)
    {
      assert(publicKey[0] === 2 || publicKey[0] === 3, "Bad public key");
    }
    assert(msg.length > 0, "Message should not be empty");
    assert(msg.length <= 32, "Message is too long");
    if (ec.verify(msg, sig, publicKey)) {
      resolve(null);
    } else {
      reject(new Error("Bad signature"));
    }
  });
};

var derive = exports.derive = function(privateKeyA, publicKeyB) {
  return new Promise(function(resolve) {
    assert(Buffer.isBuffer(privateKeyA), "Bad private key");
    assert(Buffer.isBuffer(publicKeyB), "Bad public key");
    assert(privateKeyA.length === 32, "Bad private key");
    assert(isValidPrivateKey(privateKeyA), "Bad private key");
    assert(publicKeyB.length === 65 || publicKeyB.length === 33, "Bad public key");
    if (publicKeyB.length === 65)
    {
      assert(publicKeyB[0] === 4, "Bad public key");
    }
    if (publicKeyB.length === 33)
    {
      assert(publicKeyB[0] === 2 || publicKeyB[0] === 3, "Bad public key");
    }
    var keyA = ec.keyFromPrivate(privateKeyA);
    var keyB = ec.keyFromPublic(publicKeyB);
    var Px = keyA.derive(keyB.getPublic());  // BN instance
    resolve(Buffer.from(Px.toArray()));
  });
};

exports.encrypt = function(publicKeyTo, msg, opts) {
  opts = opts || {};
  // Tmp variables to save context from flat promises;
  var iv, ephemPublicKey, ciphertext, macKey;
  return new Promise(function(resolve) {
    var ephemPrivateKey = opts.ephemPrivateKey || randomBytes(32);
    // There is a very unlikely possibility that it is not a valid key
    while(!isValidPrivateKey(ephemPrivateKey))
    {
      ephemPrivateKey = opts.ephemPrivateKey || randomBytes(32);
    }
    ephemPublicKey = getPublic(ephemPrivateKey);
    resolve(derive(ephemPrivateKey, publicKeyTo));
  }).then(function(Px) {
    return sha512(Px);
  }).then(function(hash) {
    iv = opts.iv || randomBytes(16);
    var encryptionKey = hash.slice(0, 32);
    macKey = hash.slice(32);
    return aesCbcEncrypt(iv, encryptionKey, msg);
  }).then(function(data) {
    ciphertext = data;
    var dataToMac = Buffer.concat([iv, ephemPublicKey, ciphertext]);
    return hmacSha256Sign(macKey, dataToMac);
  }).then(function(mac) {
    return {
      iv: iv,
      ephemPublicKey: ephemPublicKey,
      ciphertext: ciphertext,
      mac: mac,
    };
  });
};

exports.decrypt = function(privateKey, opts) {
  // Tmp variable to save context from flat promises;
  var encryptionKey;
  return derive(privateKey, opts.ephemPublicKey).then(function(Px) {
    return sha512(Px);
  }).then(function(hash) {
    encryptionKey = hash.slice(0, 32);
    var macKey = hash.slice(32);
    var dataToMac = Buffer.concat([
      opts.iv,
      opts.ephemPublicKey,
      opts.ciphertext
    ]);
    return hmacSha256Verify(macKey, dataToMac, opts.mac);
  }).then(function(macGood) {
    assert(macGood, "Bad MAC");
    return aesCbcDecrypt(opts.iv, encryptionKey, opts.ciphertext);
  }).then(function(msg) {
    return Buffer.from(new Uint8Array(msg));
  });
};

