"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergedStore = void 0;
const ObservableStore_1 = require("./ObservableStore");
class MergedStore extends ObservableStore_1.ObservableStore {
    constructor(children = []) {
        // Typecast: Preserve existing behavior
        super({});
        this._children = children;
        // subscribe to children
        children.forEach((child) => this._addChild(child));
        this._updateWholeState();
    }
    _addChild(child) {
        child.subscribe(() => this._updateWholeState());
    }
    _updateWholeState() {
        const childStates = this._children.map((child) => child.getState());
        // apply shallow merge over states
        const state = Object.assign({}, ...childStates);
        this.putState(state);
    }
}
exports.MergedStore = MergedStore;
//# sourceMappingURL=MergedStore.js.map