"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var AES;
var ENC;
AES = require('crypto-js/aes');
ENC = require('crypto-js/enc-utf8');
var CryptoJS;
var CryptoController = {
  encrypt: function (obj
  /*: any*/
  , secretKey
  /*: string*/
  )
  /*: ?string*/
  {
    var encrypted = AES.encrypt((0, _stringify.default)(obj), secretKey);
    return encrypted.toString();
  },
  decrypt: function (encryptedText
  /*: string*/
  , secretKey
  /*: string*/
  )
  /*: ?string*/
  {
    var decryptedStr = AES.decrypt(encryptedText, secretKey).toString(ENC);
    return decryptedStr;
  }
};
module.exports = CryptoController;