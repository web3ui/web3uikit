import SemaphoreInterface from './SemaphoreInterface';
declare class Semaphore implements SemaphoreInterface {
    private _maxConcurrency;
    private _cancelError;
    constructor(_maxConcurrency: number, _cancelError?: Error);
    acquire(): Promise<[number, SemaphoreInterface.Releaser]>;
    runExclusive<T>(callback: SemaphoreInterface.Worker<T>): Promise<T>;
    waitForUnlock(): Promise<void>;
    isLocked(): boolean;
    /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
    release(): void;
    cancel(): void;
    private _dispatch;
    private _resolveWaiters;
    private _queue;
    private _waiters;
    private _currentReleaser;
    private _value;
}
export default Semaphore;
