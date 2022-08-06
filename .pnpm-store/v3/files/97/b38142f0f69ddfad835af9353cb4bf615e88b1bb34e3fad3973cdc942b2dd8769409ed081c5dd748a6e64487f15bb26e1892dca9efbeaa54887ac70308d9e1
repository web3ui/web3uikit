interface SemaphoreInterface {
    acquire(): Promise<[number, SemaphoreInterface.Releaser]>;
    runExclusive<T>(callback: SemaphoreInterface.Worker<T>): Promise<T>;
    waitForUnlock(): Promise<void>;
    isLocked(): boolean;
    /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
    release(): void;
    cancel(): void;
}
declare namespace SemaphoreInterface {
    interface Releaser {
        (): void;
    }
    interface Worker<T> {
        (value: number): Promise<T> | T;
    }
}
export default SemaphoreInterface;
