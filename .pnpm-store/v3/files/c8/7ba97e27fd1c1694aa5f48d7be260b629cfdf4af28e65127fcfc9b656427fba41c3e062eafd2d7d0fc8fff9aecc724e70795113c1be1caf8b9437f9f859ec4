"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSigningData;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _Cloud = require("./Cloud");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Creates the data for the authentication message by extending the message
 * with a unique string with applicationId and current time
 */


async function createSigningData(message) {
  let data;

  try {
    const {
      dateTime
    } = await (0, _Cloud.run)('getServerTime');

    const applicationId = _CoreManager.default.get('APPLICATION_ID');

    data = `${message}\n\nId: ${applicationId}:${dateTime}`;
  } catch (error) {
    data = `${message}`;
  }

  return data;
}