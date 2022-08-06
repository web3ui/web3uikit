"use strict";

var _ethers = require("ethers");

class UnitConverter {
  static ETH(value) {
    return _ethers.ethers.utils.parseEther(`${value}`).toString();
  }

  static Token(value, decimals = 18) {
    return _ethers.ethers.utils.parseUnits(`${value}`, +decimals).toString();
  }

  static FromWei(value, decimals = 18) {
    const result = _ethers.ethers.utils.formatUnits(value, decimals); // formatUnits will always add a trailing 0, remove this as we want to return "1" instead of "1.0"


    const splitResult = result.split('.');

    if (splitResult[1] === '0') {
      return splitResult[0];
    }

    return result;
  }

}

module.exports = UnitConverter;