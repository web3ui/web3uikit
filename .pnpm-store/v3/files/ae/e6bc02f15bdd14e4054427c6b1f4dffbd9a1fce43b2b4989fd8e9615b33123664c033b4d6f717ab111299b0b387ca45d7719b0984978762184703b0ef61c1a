"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeAsStream = void 0;
const stream_1 = require("stream");
class ObservableStoreStream extends stream_1.Duplex {
    constructor(obsStore) {
        super({
            // pass values, not serializations
            objectMode: true,
        });
        // dont buffer outgoing updates
        this.resume();
        // save handler so we can unsubscribe later
        this.handler = (state) => this.push(state);
        // subscribe to obsStore changes
        this.obsStore = obsStore;
        this.obsStore.subscribe(this.handler);
    }
    // emit current state on new destination
    pipe(dest, options) {
        const result = super.pipe(dest, options);
        dest.write(this.obsStore.getState());
        return result;
    }
    // write from incoming stream to state
    _write(chunk, _encoding, callback) {
        this.obsStore.putState(chunk);
        callback();
    }
    // noop - outgoing stream is asking us if we have data we arent giving it
    _read(_size) {
        return undefined;
    }
    // unsubscribe from event emitter
    _destroy(err, callback) {
        this.obsStore.unsubscribe(this.handler);
        super._destroy(err, callback);
    }
}
function storeAsStream(obsStore) {
    return new ObservableStoreStream(obsStore);
}
exports.storeAsStream = storeAsStream;
//# sourceMappingURL=asStream.js.map