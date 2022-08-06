"use strict";

var _promiseUtils = require("./promiseUtils");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class TaskQueue {
  constructor() {
    _defineProperty(this, "queue", void 0);

    this.queue = [];
  }

  enqueue(task
  /*: () => Promise*/
  )
  /*: Promise*/
  {
    const taskComplete = new _promiseUtils.resolvingPromise();
    this.queue.push({
      task: task,
      _completion: taskComplete
    });

    if (this.queue.length === 1) {
      task().then(() => {
        this._dequeue();

        taskComplete.resolve();
      }, error => {
        this._dequeue();

        taskComplete.reject(error);
      });
    }

    return taskComplete;
  }

  _dequeue() {
    this.queue.shift();

    if (this.queue.length) {
      const next = this.queue[0];
      next.task().then(() => {
        this._dequeue();

        next._completion.resolve();
      }, error => {
        this._dequeue();

        next._completion.reject(error);
      });
    }
  }

}

module.exports = TaskQueue;