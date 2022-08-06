import BaseController from "../BaseController";
import { BaseBlockTrackerConfig, BaseBlockTrackerState } from "./IBlockTrackerController";

const sec = 1000;

const calculateSum = (accumulator: number, currentValue: number) => accumulator + currentValue;
const blockTrackerEvents: string[] = ["sync", "latest"];

export class BaseBlockTracker<
  T extends { idempotencyKey: string },
  C extends BaseBlockTrackerConfig,
  S extends BaseBlockTrackerState<T>
> extends BaseController<C, S> {
  name = "BaseBlockTracker";

  private _blockResetTimeout?: ReturnType<typeof setTimeout>;

  constructor({ config = {}, state = {} }: { config: Partial<C>; state: Partial<S> }) {
    super({ config, state });

    // config

    this.defaultState = {
      _currentBlock: { idempotencyKey: "" },
      _isRunning: false,
    } as S;

    this.defaultConfig = {
      blockResetDuration: 20 * sec,
    } as C;

    this.initialize();

    // bind functions for internal use
    this._onNewListener = this._onNewListener.bind(this);
    this._onRemoveListener = this._onRemoveListener.bind(this);
    this._resetCurrentBlock = this._resetCurrentBlock.bind(this);

    // listen for handler changes
    this._setupInternalEvents();
  }

  isRunning(): boolean {
    return this.state._isRunning;
  }

  getCurrentBlock(): T {
    return this.state._currentBlock;
  }

  async getLatestBlock(): Promise<T> {
    // return if available
    if (this.state._currentBlock) {
      return this.state._currentBlock;
    }
    // wait for a new latest block
    const latestBlock = await new Promise((resolve: (state: T) => void) =>
      this.once("latest", (newState: BaseBlockTrackerState<T>) => {
        if (newState._currentBlock) {
          resolve(newState._currentBlock);
        }
      })
    );
    // return newly set current block
    return latestBlock;
  }

  // dont allow module consumer to remove our internal event listeners
  removeAllListeners(eventName?: string): this {
    if (eventName) {
      super.removeAllListeners(eventName);
    } else {
      super.removeAllListeners();
    }
    // re-add internal events
    this._setupInternalEvents();
    // trigger stop check just in case
    this._onRemoveListener();
    return this;
  }

  /**
   * To be implemented in subclass.
   */
  protected _start(): void {
    // default behavior is noop
  }

  /**
   * To be implemented in subclass.
   */
  protected _end(): void {
    // default behavior is noop
  }

  protected _newPotentialLatest(newBlock: T): void {
    const currentBlock = this.state._currentBlock;
    // only update if blok number is higher
    if (currentBlock && newBlock.idempotencyKey === currentBlock.idempotencyKey) {
      return;
    }
    this._setCurrentBlock(newBlock);
  }

  private _setupInternalEvents(): void {
    // first remove listeners for idempotency
    this.removeListener("newListener", this._onNewListener);
    this.removeListener("removeListener", this._onRemoveListener);
    // then add them
    this.on("removeListener", this._onRemoveListener);
    this.on("newListener", this._onNewListener);
  }

  private _onNewListener(): void {
    this._maybeStart();
  }

  private _onRemoveListener(): void {
    // `removeListener` is called *after* the listener is removed
    if (this._getBlockTrackerEventCount() > 0) {
      return;
    }
    this._maybeEnd();
  }

  private _maybeStart(): void {
    if (this.state._isRunning) {
      return;
    }
    this.state._isRunning = true;
    // cancel setting latest block to stale
    this._cancelBlockResetTimeout();
    this._start();
  }

  private _maybeEnd(): void {
    if (!this.state._isRunning) {
      return;
    }
    this.state._isRunning = false;
    this._setupBlockResetTimeout();
    this._end();
  }

  private _getBlockTrackerEventCount(): number {
    return blockTrackerEvents.map((eventName) => this.listenerCount(eventName)).reduce(calculateSum);
  }

  private _setCurrentBlock(newBlock: T): void {
    const oldBlock = this.state._currentBlock;
    this.update({
      _currentBlock: newBlock,
    } as S);
    this.emit("latest", newBlock);
    this.emit("sync", { oldBlock, newBlock });
  }

  private _setupBlockResetTimeout(): void {
    // clear any existing timeout
    this._cancelBlockResetTimeout();
    // clear latest block when stale
    this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this.config.blockResetDuration);

    // nodejs - dont hold process open
    if (this._blockResetTimeout.unref) {
      this._blockResetTimeout.unref();
    }
  }

  private _cancelBlockResetTimeout(): void {
    if (this._blockResetTimeout) {
      clearTimeout(this._blockResetTimeout);
    }
  }

  private _resetCurrentBlock(): void {
    this.update({ _currentBlock: { idempotencyKey: "" } } as Partial<S>);
  }
}
