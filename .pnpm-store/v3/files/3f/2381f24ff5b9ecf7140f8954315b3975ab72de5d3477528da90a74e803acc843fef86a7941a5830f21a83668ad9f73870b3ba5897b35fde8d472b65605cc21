import BaseController from "../BaseController";
import { BaseBlockTrackerConfig, BaseBlockTrackerState } from "./IBlockTrackerController";
export declare class BaseBlockTracker<T extends {
    idempotencyKey: string;
}, C extends BaseBlockTrackerConfig, S extends BaseBlockTrackerState<T>> extends BaseController<C, S> {
    name: string;
    private _blockResetTimeout?;
    constructor({ config, state }: {
        config: Partial<C>;
        state: Partial<S>;
    });
    isRunning(): boolean;
    getCurrentBlock(): T;
    getLatestBlock(): Promise<T>;
    removeAllListeners(eventName?: string): this;
    /**
     * To be implemented in subclass.
     */
    protected _start(): void;
    /**
     * To be implemented in subclass.
     */
    protected _end(): void;
    protected _newPotentialLatest(newBlock: T): void;
    private _setupInternalEvents;
    private _onNewListener;
    private _onRemoveListener;
    private _maybeStart;
    private _maybeEnd;
    private _getBlockTrackerEventCount;
    private _setCurrentBlock;
    private _setupBlockResetTimeout;
    private _cancelBlockResetTimeout;
    private _resetCurrentBlock;
}
