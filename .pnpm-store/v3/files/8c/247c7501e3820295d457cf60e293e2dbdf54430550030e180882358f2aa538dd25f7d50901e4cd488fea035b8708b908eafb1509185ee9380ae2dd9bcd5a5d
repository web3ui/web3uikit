var EventEmitter = require('../../../react-native/Libraries/vendor/emitter/EventEmitter');

if (EventEmitter.default) {
  EventEmitter = EventEmitter.default;
}

EventEmitter.prototype.on = EventEmitter.prototype.addListener;
module.exports = EventEmitter;