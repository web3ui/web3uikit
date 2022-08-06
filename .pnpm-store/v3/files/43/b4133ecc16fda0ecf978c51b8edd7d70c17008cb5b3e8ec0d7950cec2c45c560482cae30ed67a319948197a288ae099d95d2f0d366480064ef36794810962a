/**
 * this is a set which automatically forgets
 * a given entry when a new entry is set and the ttl
 * of the old one is over
 */
var ObliviousSet = /** @class */ (function () {
    function ObliviousSet(ttl) {
        this.ttl = ttl;
        this.map = new Map();
        /**
         * Creating calls to setTimeout() is expensive,
         * so we only do that if there is not timeout already open.
         */
        this._to = false;
    }
    ObliviousSet.prototype.has = function (value) {
        return this.map.has(value);
    };
    ObliviousSet.prototype.add = function (value) {
        var _this = this;
        this.map.set(value, now());
        /**
         * When a new value is added,
         * start the cleanup at the next tick
         * to not block the cpu for more important stuff
         * that might happen.
         */
        if (!this._to) {
            this._to = true;
            setTimeout(function () {
                _this._to = false;
                removeTooOldValues(_this);
            }, 0);
        }
    };
    ObliviousSet.prototype.clear = function () {
        this.map.clear();
    };
    return ObliviousSet;
}());
export { ObliviousSet };
/**
 * Removes all entries from the set
 * where the TTL has expired
 */
export function removeTooOldValues(obliviousSet) {
    var olderThen = now() - obliviousSet.ttl;
    var iterator = obliviousSet.map[Symbol.iterator]();
    /**
     * Because we can assume the new values are added at the bottom,
     * we start from the top and stop as soon as we reach a non-too-old value.
     */
    while (true) {
        var next = iterator.next().value;
        if (!next) {
            return; // no more elements
        }
        var value = next[0];
        var time = next[1];
        if (time < olderThen) {
            obliviousSet.map.delete(value);
        }
        else {
            // We reached a value that is not old enough
            return;
        }
    }
}
export function now() {
    return new Date().getTime();
}
//# sourceMappingURL=index.js.map