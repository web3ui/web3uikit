import SafeEventEmitter from '@metamask/safe-event-emitter';
export declare class ObservableStore<T> extends SafeEventEmitter {
    private _state;
    constructor(initState: T);
    getState(): T;
    putState(newState: T): void;
    updateState(partialState: Partial<T>): void;
    subscribe(handler: (state: T) => void): void;
    unsubscribe(handler: (state: T) => void): void;
    protected _getState(): T;
    protected _putState(newState: T): void;
}
