import MutexInterface from './MutexInterface';
declare class Mutex implements MutexInterface {
    constructor(cancelError?: Error);
    acquire(): Promise<MutexInterface.Releaser>;
    runExclusive<T>(callback: MutexInterface.Worker<T>): Promise<T>;
    isLocked(): boolean;
    waitForUnlock(): Promise<void>;
    /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
    release(): void;
    cancel(): void;
    private _semaphore;
}
export default Mutex;
