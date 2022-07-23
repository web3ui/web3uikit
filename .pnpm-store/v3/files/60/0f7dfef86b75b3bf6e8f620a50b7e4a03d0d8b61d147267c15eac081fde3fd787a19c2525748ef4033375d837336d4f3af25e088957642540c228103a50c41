const E_TIMEOUT = new Error('timeout while waiting for mutex to become available');
const E_ALREADY_LOCKED = new Error('mutex already locked');
const E_CANCELED = new Error('request for lock canceled');

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Semaphore {
    constructor(_maxConcurrency, _cancelError = E_CANCELED) {
        this._maxConcurrency = _maxConcurrency;
        this._cancelError = _cancelError;
        this._queue = [];
        this._waiters = [];
        if (_maxConcurrency <= 0) {
            throw new Error('semaphore must be initialized to a positive value');
        }
        this._value = _maxConcurrency;
    }
    acquire() {
        const locked = this.isLocked();
        const ticketPromise = new Promise((resolve, reject) => this._queue.push({ resolve, reject }));
        if (!locked)
            this._dispatch();
        return ticketPromise;
    }
    runExclusive(callback) {
        return __awaiter$2(this, void 0, void 0, function* () {
            const [value, release] = yield this.acquire();
            try {
                return yield callback(value);
            }
            finally {
                release();
            }
        });
    }
    waitForUnlock() {
        return __awaiter$2(this, void 0, void 0, function* () {
            if (!this.isLocked()) {
                return Promise.resolve();
            }
            const waitPromise = new Promise((resolve) => this._waiters.push({ resolve }));
            return waitPromise;
        });
    }
    isLocked() {
        return this._value <= 0;
    }
    /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
    release() {
        if (this._maxConcurrency > 1) {
            throw new Error('this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead');
        }
        if (this._currentReleaser) {
            const releaser = this._currentReleaser;
            this._currentReleaser = undefined;
            releaser();
        }
    }
    cancel() {
        this._queue.forEach((ticket) => ticket.reject(this._cancelError));
        this._queue = [];
    }
    _dispatch() {
        const nextTicket = this._queue.shift();
        if (!nextTicket)
            return;
        let released = false;
        this._currentReleaser = () => {
            if (released)
                return;
            released = true;
            this._value++;
            this._resolveWaiters();
            this._dispatch();
        };
        nextTicket.resolve([this._value--, this._currentReleaser]);
    }
    _resolveWaiters() {
        this._waiters.forEach((waiter) => waiter.resolve());
        this._waiters = [];
    }
}

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Mutex {
    constructor(cancelError) {
        this._semaphore = new Semaphore(1, cancelError);
    }
    acquire() {
        return __awaiter$1(this, void 0, void 0, function* () {
            const [, releaser] = yield this._semaphore.acquire();
            return releaser;
        });
    }
    runExclusive(callback) {
        return this._semaphore.runExclusive(() => callback());
    }
    isLocked() {
        return this._semaphore.isLocked();
    }
    waitForUnlock() {
        return this._semaphore.waitForUnlock();
    }
    /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
    release() {
        this._semaphore.release();
    }
    cancel() {
        return this._semaphore.cancel();
    }
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function withTimeout(sync, timeout, timeoutError = E_TIMEOUT) {
    return {
        acquire: () => new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let isTimeout = false;
            const handle = setTimeout(() => {
                isTimeout = true;
                reject(timeoutError);
            }, timeout);
            try {
                const ticket = yield sync.acquire();
                if (isTimeout) {
                    const release = Array.isArray(ticket) ? ticket[1] : ticket;
                    release();
                }
                else {
                    clearTimeout(handle);
                    resolve(ticket);
                }
            }
            catch (e) {
                if (!isTimeout) {
                    clearTimeout(handle);
                    reject(e);
                }
            }
        })),
        runExclusive(callback) {
            return __awaiter(this, void 0, void 0, function* () {
                let release = () => undefined;
                try {
                    const ticket = yield this.acquire();
                    if (Array.isArray(ticket)) {
                        release = ticket[1];
                        return yield callback(ticket[0]);
                    }
                    else {
                        release = ticket;
                        return yield callback();
                    }
                }
                finally {
                    release();
                }
            });
        },
        /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
        release() {
            sync.release();
        },
        cancel() {
            return sync.cancel();
        },
        waitForUnlock: () => sync.waitForUnlock(),
        isLocked: () => sync.isLocked(),
    };
}

// eslint-disable-next-lisne @typescript-eslint/explicit-module-boundary-types
function tryAcquire(sync, alreadyAcquiredError = E_ALREADY_LOCKED) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return withTimeout(sync, 0, alreadyAcquiredError);
}

export { E_ALREADY_LOCKED, E_CANCELED, E_TIMEOUT, Mutex, Semaphore, tryAcquire, withTimeout };
