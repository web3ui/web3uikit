
/**
 * this is a set which automatically forgets
 * a given entry when a new entry is set and the ttl
 * of the old one is over
 */
export class ObliviousSet<T = any> {
    public readonly map = new Map();

    /**
     * Creating calls to setTimeout() is expensive,
     * so we only do that if there is not timeout already open.
     */
    public _to: boolean = false;
    constructor(
        public readonly ttl: number
    ) { }

    has(value: T): boolean {
        return this.map.has(value);
    }

    add(value: T): void {
        this.map.set(value, now());

        /**
         * When a new value is added,
         * start the cleanup at the next tick
         * to not block the cpu for more important stuff
         * that might happen.
         */
        if (!this._to) {
            this._to = true;
            setTimeout(() => {
                this._to = false;
                removeTooOldValues(this);
            }, 0);
        }
    }

    clear() {
        this.map.clear();
    }
}


/**
 * Removes all entries from the set
 * where the TTL has expired
 */
export function removeTooOldValues(
    obliviousSet: ObliviousSet
) {
    const olderThen = now() - obliviousSet.ttl;
    const iterator = obliviousSet.map[Symbol.iterator]();

    /**
     * Because we can assume the new values are added at the bottom,
     * we start from the top and stop as soon as we reach a non-too-old value.
     */
    while (true) {

        const next = iterator.next().value;

        if (!next) {
            return; // no more elements
        }
        const value = next[0];
        const time = next[1];
        if (time < olderThen) {
            obliviousSet.map.delete(value);
        } else {
            // We reached a value that is not old enough
            return;
        }
    }
}

export function now(): number {
    return new Date().getTime();
}


