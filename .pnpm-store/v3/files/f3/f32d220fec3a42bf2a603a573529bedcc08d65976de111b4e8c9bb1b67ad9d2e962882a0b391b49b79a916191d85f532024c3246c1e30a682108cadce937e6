"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _promiseUtils = require("./promiseUtils");
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */


var TaskQueue = /*#__PURE__*/function () {
  function TaskQueue() {
    (0, _classCallCheck2.default)(this, TaskQueue);
    (0, _defineProperty2.default)(this, "queue", void 0);
    this.queue = [];
  }

  (0, _createClass2.default)(TaskQueue, [{
    key: "enqueue",
    value: function (task
    /*: () => Promise*/
    )
    /*: Promise*/
    {
      var _this = this;

      var taskComplete = new _promiseUtils.resolvingPromise();
      this.queue.push({
        task: task,
        _completion: taskComplete
      });

      if (this.queue.length === 1) {
        task().then(function () {
          _this._dequeue();

          taskComplete.resolve();
        }, function (error) {
          _this._dequeue();

          taskComplete.reject(error);
        });
      }

      return taskComplete;
    }
  }, {
    key: "_dequeue",
    value: function () {
      var _this2 = this;

      this.queue.shift();

      if (this.queue.length) {
        var next = this.queue[0];
        next.task().then(function () {
          _this2._dequeue();

          next._completion.resolve();
        }, function (error) {
          _this2._dequeue();

          next._completion.reject(error);
        });
      }
    }
  }]);
  return TaskQueue;
}();

module.exports = TaskQueue;