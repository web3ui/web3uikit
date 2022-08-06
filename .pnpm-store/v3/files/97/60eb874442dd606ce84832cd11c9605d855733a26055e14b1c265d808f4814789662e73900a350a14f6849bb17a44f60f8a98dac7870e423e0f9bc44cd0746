"use strict";

module.exports = class {
  constructor(serverURL) {
    this.onopen = () => {};

    this.onmessage = () => {};

    this.onclose = () => {};

    this.onerror = () => {};

    wx.onSocketOpen(() => {
      this.onopen();
    });
    wx.onSocketMessage(msg => {
      this.onmessage(msg);
    });
    wx.onSocketClose(() => {
      this.onclose();
    });
    wx.onSocketError(error => {
      this.onerror(error);
    });
    wx.connectSocket({
      url: serverURL
    });
  }

  send(data) {
    wx.sendSocketMessage({
      data
    });
  }

  close() {
    wx.closeSocket();
  }

};