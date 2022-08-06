var expect = require("chai").expect;
var createHash = require("crypto").createHash;
var bufferEqual = require("buffer-equal");
var eccrypto = require("./");
var assert = require('assert'); // deleteme

var msg = createHash("sha256").update("test").digest();
var otherMsg = createHash("sha256").update("test2").digest();
var shortMsg = createHash("sha1").update("test").digest();

var privateKey = Buffer.alloc(32);
privateKey.fill(1);
var publicKey = eccrypto.getPublic(privateKey);
var publicKeyCompressed = eccrypto.getPublicCompressed(privateKey);

var privateKeyA = Buffer.alloc(32);
privateKeyA.fill(2);
var publicKeyA = eccrypto.getPublic(privateKeyA);
var publicKeyACompressed = eccrypto.getPublicCompressed(privateKeyA);

var privateKeyB = Buffer.alloc(32);
privateKeyB.fill(3);
var publicKeyB = eccrypto.getPublic(privateKeyB);
var publicKeyBCompressed = eccrypto.getPublicCompressed(privateKeyB);

describe("Key conversion", function() {
  it("should allow to convert private key to public", function() {
    expect(Buffer.isBuffer(publicKey)).to.be.true;
    expect(publicKey.toString("hex")).to.equal("041b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f70beaf8f588b541507fed6a642c5ab42dfdf8120a7f639de5122d47a69a8e8d1");
  });

  it("shouwld allow to convert private key to compressed public", function() {
	expect(Buffer.isBuffer(publicKeyCompressed)).to.be.true;
	expect(publicKeyCompressed.toString("hex")).to.equal("031b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f");
  });

  it("should throw on invalid private key", function() {
    expect(eccrypto.getPublic.bind(null, Buffer.from("00", "hex"))).to.throw(Error);
    expect(eccrypto.getPublic.bind(null, Buffer.from("test"))).to.throw(Error);
  });
});

describe("ECDSA", function() {
  it("should allow to sign and verify message", function() {
    return eccrypto.sign(privateKey, msg).then(function(sig) {
      expect(Buffer.isBuffer(sig)).to.be.true;
      expect(sig.toString("hex")).to.equal("3044022078c15897a34de6566a0d396fdef660698c59fef56d34ee36bef14ad89ee0f6f8022016e02e8b7285d93feafafbe745702f142973a77d5c2fa6293596357e17b3b47c");
      return eccrypto.verify(publicKey, msg, sig);
    });
  });

  it("should allow to sign and verify message using a compressed public key", function() {
    return eccrypto.sign(privateKey, msg).then(function(sig) {
      expect(Buffer.isBuffer(sig)).to.be.true;
      expect(sig.toString("hex")).to.equal("3044022078c15897a34de6566a0d396fdef660698c59fef56d34ee36bef14ad89ee0f6f8022016e02e8b7285d93feafafbe745702f142973a77d5c2fa6293596357e17b3b47c");
      return eccrypto.verify(publicKeyCompressed, msg, sig);
    });
  });

  it("shouldn't verify incorrect signature", function(done) {
    eccrypto.sign(privateKey, msg).then(function(sig) {
      expect(Buffer.isBuffer(sig)).to.be.true;
      eccrypto.verify(publicKey, otherMsg, sig).catch(function() {
        done();
      });
    });
  });

  it("should reject promise on invalid key when signing", function(done) {
    var k4 = Buffer.from("test");
    var k192 = Buffer.from("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "hex");
    var k384 = Buffer.from("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "hex");
    eccrypto.sign(k4, msg).catch(function() {
      eccrypto.sign(k192, msg).catch(function() {
        eccrypto.sign(k384, msg).catch(function() {
          done();
        });
      });
    });
  });

  it("should reject promise on invalid key when verifying", function(done) {
    eccrypto.sign(privateKey, msg).then(function(sig) {
      expect(Buffer.isBuffer(sig)).to.be.true;
      eccrypto.verify(Buffer.from("test"), msg, sig).catch(function() {
        var badKey = Buffer.alloc(65);
        publicKey.copy(badKey);
        badKey[0] ^= 1;
        eccrypto.verify(badKey, msg, sig).catch(function() {
          done();
        });
      });
    });
  });

  it("should reject promise on invalid sig when verifying", function(done) {
    eccrypto.sign(privateKey, msg).then(function(sig) {
      expect(Buffer.isBuffer(sig)).to.be.true;
      sig[0] ^= 1;
      eccrypto.verify(publicKey, msg, sig).catch(function() {
        done();
      });
    });
  });

  it("should allow to sign and verify messages less than 32 bytes", function() {
    return eccrypto.sign(privateKey, shortMsg).then(function(sig) {
      expect(Buffer.isBuffer(sig)).to.be.true;
      expect(sig.toString("hex")).to.equal("304402204737396b697e5a3400e3aedd203d8be89879f97708647252bd0c17752ff4c8f302201d52ef234de82ce0719679fa220334c83b80e21b8505a781d32d94a27d9310aa");
      return eccrypto.verify(publicKey, shortMsg, sig);
    });
  });

  it("shouldn't sign and verify messages longer than 32 bytes", function(done) {
    var longMsg = Buffer.alloc(40);
    var someSig = Buffer.from("304402204737396b697e5a3400e3aedd203d8be89879f97708647252bd0c17752ff4c8f302201d52ef234de82ce0719679fa220334c83b80e21b8505a781d32d94a27d9310aa", "hex");
    eccrypto.sign(privateKey, longMsg).catch(function() {
      eccrypto.verify(privateKey, longMsg, someSig).catch(function(e) {
        expect(e.message).to.not.match(/bad signature/i);
        done();
      });
    });
  });

  it("shouldn't sign and verify empty messages", function(done) {
    var emptyMsg = Buffer.alloc(0);
    var someSig = Buffer.from("304402204737396b697e5a3400e3aedd203d8be89879f97708647252bd0c17752ff4c8f302201d52ef234de82ce0719679fa220334c83b80e21b8505a781d32d94a27d9310aa", "hex");
    eccrypto.sign(privateKey, emptyMsg).catch(function() {
      eccrypto.verify(publicKey, emptyMsg, someSig).catch(function(e) {
        expect(e.message).to.not.match(/bad signature/i);
        done();
      });
    });
  });
});

describe("ECDH", function() {
  it("should derive shared secret from privkey A and pubkey B", function() {
    return eccrypto.derive(privateKeyA, publicKeyB).then(function(Px) {
      expect(Buffer.isBuffer(Px)).to.be.true;
      expect(Px.length).to.equal(32);
      expect(Px.toString("hex")).to.equal("aca78f27d5f23b2e7254a0bb8df128e7c0f922d47ccac72814501e07b7291886");
      return eccrypto.derive(privateKeyB, publicKeyA).then(function(Px2) {
        expect(Buffer.isBuffer(Px2)).to.be.true;
        expect(Px2.length).to.equal(32);
        expect(bufferEqual(Px, Px2)).to.be.true;
      });
    });
  });

  it("should derive shared secret from  privkey A and compressed pubkey B", function() {
    return eccrypto.derive(privateKeyA, publicKeyBCompressed).then(function(Px) {
      expect(Buffer.isBuffer(Px)).to.be.true;
      expect(Px.length).to.equal(32);
      expect(Px.toString("hex")).to.equal("aca78f27d5f23b2e7254a0bb8df128e7c0f922d47ccac72814501e07b7291886");
      return eccrypto.derive(privateKeyB, publicKeyA).then(function(Px2) {
        expect(Buffer.isBuffer(Px2)).to.be.true;
        expect(Px2.length).to.equal(32);
        expect(bufferEqual(Px, Px2)).to.be.true;
      });
    });
  });

  it("should reject promise on bad keys", function(done) {
    eccrypto.derive(Buffer.from("test"), publicKeyB).catch(function() {
      eccrypto.derive(publicKeyB, publicKeyB).catch(function() {
        eccrypto.derive(privateKeyA, privateKeyA).catch(function() {
          eccrypto.derive(privateKeyB, Buffer.from("test")).catch(function() {
            done();
          });
        });
      });
    });
  });

  it("should reject promise on bad arguments", function(done) {
    eccrypto.derive({}, {}).catch(function(e) {
      expect(e.message).to.match(/Bad private key/i);
      done();
    });
  });
});

describe("ECIES", function() {
  var ephemPrivateKey = Buffer.alloc(32);
  ephemPrivateKey.fill(4);
  var ephemPublicKey = eccrypto.getPublic(ephemPrivateKey);
  var iv = Buffer.alloc(16);
  iv.fill(5);
  var ciphertext = Buffer.from("bbf3f0e7486b552b0e2ba9c4ca8c4579", "hex");
  var mac = Buffer.from("dbb14a9b53dbd6b763dba24dc99520f570cdf8095a8571db4bf501b535fda1ed", "hex");
  var encOpts = {ephemPrivateKey: ephemPrivateKey, iv: iv};
  var decOpts = {iv: iv, ephemPublicKey: ephemPublicKey, ciphertext: ciphertext, mac: mac};

  it("should encrypt", function() {
    return eccrypto.encrypt(publicKeyB, Buffer.from("test"), encOpts)
    .then(function(enc) {
      expect(bufferEqual(enc.iv, iv)).to.be.true;
      expect(bufferEqual(enc.ephemPublicKey, ephemPublicKey)).to.be.true;
      expect(bufferEqual(enc.ciphertext, ciphertext)).to.be.true;
      expect(bufferEqual(enc.mac, mac)).to.be.true;
    });
  });

  it("should decrypt", function() {
    return eccrypto.decrypt(privateKeyB, decOpts)
    .then(function(msg) {
      expect(msg.toString()).to.equal("test");
    });
  });

  it("should encrypt and decrypt", function() {
    return eccrypto.encrypt(publicKeyA, Buffer.from("to a")).then(function(enc) {
      return eccrypto.decrypt(privateKeyA, enc);
    }).then(function(msg) {
      expect(msg.toString()).to.equal("to a");
    });
  });

  it("should encrypt and decrypt", function() {
    return eccrypto.encrypt(publicKeyA, Buffer.from("to a")).then(function(enc) {
      return eccrypto.decrypt(privateKeyA, enc);
    }).then(function(msg) {
      expect(msg.toString()).to.equal("to a");
    });
  });

  it("should encrypt and decrypt with message size > 15", function() {
    return eccrypto.encrypt(publicKeyA, Buffer.from("message size that is greater than 15 for sure =)")).then(function(enc) {
      return eccrypto.decrypt(privateKeyA, enc);
    }).then(function(msg) {
      expect(msg.toString()).to.equal("message size that is greater than 15 for sure =)");
    });
  });

  it("should encrypt with compressed public key", function() {
    return eccrypto.encrypt(publicKeyBCompressed, Buffer.from("test"), encOpts)
    .then(function(enc) {
      expect(bufferEqual(enc.iv, iv)).to.be.true;
      expect(bufferEqual(enc.ephemPublicKey, ephemPublicKey)).to.be.true;
      expect(bufferEqual(enc.ciphertext, ciphertext)).to.be.true;
      expect(bufferEqual(enc.mac, mac)).to.be.true;
    });
  });

  it("should encrypt and decrypt with compressed public key", function() {
    return eccrypto.encrypt(publicKeyACompressed, Buffer.from("to a")).then(function(enc) {
      return eccrypto.decrypt(privateKeyA, enc);
    }).then(function(msg) {
      expect(msg.toString()).to.equal("to a");
    });
  });

  it("should encrypt and decrypt with generated private and public key", function () {
    var privateKey = eccrypto.generatePrivate();
    var publicKey = eccrypto.getPublic(privateKey);
    return eccrypto.encrypt(publicKey, Buffer.from("generated private key"))
        .then(function(enc) { return eccrypto.decrypt(privateKey, enc); })
        .then(function(msg) {
          expect(msg.toString()).to.equal("generated private key");
        });
  });


  it("should reject promise on bad private key when decrypting", function(done) {
    eccrypto.encrypt(publicKeyA, Buffer.from("test")).then(function(enc) {
      eccrypto.decrypt(privateKeyB, enc).catch(function() {
        done();
      });
    });
  });

  it("should reject promise on bad IV when decrypting", function(done) {
    eccrypto.encrypt(publicKeyA, Buffer.from("test")).then(function(enc) {
      enc.iv[0] ^= 1;
      eccrypto.decrypt(privateKeyA, enc).catch(function() {
        done();
      });
    });
  });

  it("should reject promise on bad R when decrypting", function(done) {
    eccrypto.encrypt(publicKeyA, Buffer.from("test")).then(function(enc) {
      enc.ephemPublicKey[0] ^= 1;
      eccrypto.decrypt(privateKeyA, enc).catch(function() {
        done();
      });
    });
  });

  it("should reject promise on bad ciphertext when decrypting", function(done) {
    eccrypto.encrypt(publicKeyA, Buffer.from("test")).then(function(enc) {
      enc.ciphertext[0] ^= 1;
      eccrypto.decrypt(privateKeyA, enc).catch(function() {
        done();
      });
    });
  });

  it("should reject promise on bad MAC when decrypting", function(done) {
    eccrypto.encrypt(publicKeyA, Buffer.from("test")).then(function(enc) {
      var origMac = enc.mac;
      enc.mac = mac.slice(1);
      eccrypto.decrypt(privateKeyA, enc).catch(function() {
        enc.mac = origMac;
        enc.mac[10] ^= 1;
        eccrypto.decrypt(privateKeyA, enc).catch(function() {
          done();
        });
      });
    });
  });
});
