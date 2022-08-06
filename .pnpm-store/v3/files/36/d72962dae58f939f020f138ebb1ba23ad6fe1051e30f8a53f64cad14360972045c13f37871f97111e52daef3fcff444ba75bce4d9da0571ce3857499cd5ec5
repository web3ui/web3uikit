"use strict";

module.exports = class {
  constructor() {
    this.UNSENT = 0;
    this.OPENED = 1;
    this.HEADERS_RECEIVED = 2;
    this.LOADING = 3;
    this.DONE = 4;
    this.header = {};
    this.readyState = this.DONE;
    this.status = 0;
    this.response = '';
    this.responseType = '';
    this.responseText = '';
    this.responseHeader = {};
    this.method = '';
    this.url = '';

    this.onabort = () => {};

    this.onprogress = () => {};

    this.onerror = () => {};

    this.onreadystatechange = () => {};

    this.requestTask = null;
  }

  getAllResponseHeaders() {
    let header = '';

    for (const key in this.responseHeader) {
      header += `${key}:${this.getResponseHeader(key)}\r\n`;
    }

    return header;
  }

  getResponseHeader(key) {
    return this.responseHeader[key];
  }

  setRequestHeader(key, value) {
    this.header[key] = value;
  }

  open(method, url) {
    this.method = method;
    this.url = url;
  }

  abort() {
    if (!this.requestTask) {
      return;
    }

    this.requestTask.abort();
    this.status = 0;
    this.response = undefined;
    this.onabort();
    this.onreadystatechange();
  }

  send(data) {
    this.requestTask = wx.request({
      url: this.url,
      method: this.method,
      data: data,
      header: this.header,
      responseType: this.responseType,
      success: res => {
        this.status = res.statusCode;
        this.response = res.data;
        this.responseHeader = res.header;
        this.responseText = JSON.stringify(res.data);
        this.requestTask = null;
        this.onreadystatechange();
      },
      fail: err => {
        this.requestTask = null;
        this.onerror(err);
      }
    });
    this.requestTask.onProgressUpdate(res => {
      const event = {
        lengthComputable: res.totalBytesExpectedToWrite !== 0,
        loaded: res.totalBytesWritten,
        total: res.totalBytesExpectedToWrite
      };
      this.onprogress(event);
    });
  }

};