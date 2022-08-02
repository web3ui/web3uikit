var AES;
var ENC;

var CryptoJS = require('react-native-crypto-js');

AES = CryptoJS.AES;
ENC = CryptoJS.enc.Utf8;
var CryptoController = {
  encrypt: function (obj, secretKey) {
    var encrypted = AES.encrypt(JSON.stringify(obj), secretKey);
    return encrypted.toString();
  },
  decrypt: function (encryptedText, secretKey) {
    var decryptedStr = AES.decrypt(encryptedText, secretKey).toString(ENC);
    return decryptedStr;
  }
};
module.exports = CryptoController;