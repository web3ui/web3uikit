"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableStore = void 0;
const safe_event_emitter_1 = __importDefault(require("@metamask/safe-event-emitter"));
class ObservableStore extends safe_event_emitter_1.default {
    constructor(initState) {
        super();
        if (initState) {
            this._state = initState;
        }
        else {
            // Typecast/default state: Preserve existing behavior
            this._state = {};
        }
    }
    // wrapper around internal getState
    getState() {
        return this._getState();
    }
    // wrapper around internal putState
    putState(newState) {
        this._putState(newState);
        this.emit('update', newState);
    }
    updateState(partialState) {
        // if non-null object, merge
        if (partialState && typeof partialState === 'object') {
            const state = this.getState();
            this.putState(Object.assign(Object.assign({}, state), partialState));
            // if not object, use new value
        }
        else {
            this.putState(partialState);
        }
    }
    // subscribe to changes
    subscribe(handler) {
        this.on('update', handler);
    }
    // unsubscribe to changes
    unsubscribe(handler) {
        this.removeListener('update', handler);
    }
    //
    // private
    //
    // read from persistence
    _getState() {
        return this._state;
    }
    // write to persistence
    _putState(newState) {
        this._state = newState;
    }
}
exports.ObservableStore = ObservableStore;
//# sourceMappingURL=ObservableStore.js.map