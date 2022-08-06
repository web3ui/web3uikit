var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _promiseUtils = require("./promiseUtils");

var TaskQueue = function () {
  function TaskQueue() {
    (0, _classCallCheck2.default)(this, TaskQueue);
    this.queue = [];
  }

  (0, _createClass2.default)(TaskQueue, [{
    key: "enqueue",
    value: function (task) {
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