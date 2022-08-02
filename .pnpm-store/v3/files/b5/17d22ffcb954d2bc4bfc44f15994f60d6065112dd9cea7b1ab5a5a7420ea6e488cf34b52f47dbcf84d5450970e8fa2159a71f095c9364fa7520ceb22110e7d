import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";

import { BaseConfig, BaseState, IController } from "./interfaces";

/**
 * Controller class that provides configuration, state management, and subscriptions
 */
class BaseController<C extends BaseConfig, S extends BaseState> extends SafeEventEmitter implements IController<C, S> {
  /**
   * Default options used to configure this controller
   */
  defaultConfig: C = {} as C;

  /**
   * Default state set on this controller
   */
  defaultState: S = {} as S;

  /**
   * Determines if listeners are notified of state changes
   */
  disabled = false;

  /**
   * Name of this controller used during composition
   */
  name = "BaseController";

  private readonly initialConfig: C;

  private readonly initialState: S;

  private internalConfig: C = this.defaultConfig;

  private internalState: S = this.defaultState;

  /**
   * Creates a BaseController instance. Both initial state and initial
   * configuration options are merged with defaults upon initialization.
   *
   * @param config - Initial options used to configure this controller
   * @param state - Initial state to set on this controller
   */
  constructor({ config = {} as C, state = {} as S }: { config?: Partial<C>; state?: Partial<S> }) {
    super();
    // Use assign since generics can't be spread: https://git.io/vpRhY
    this.initialState = state as S;
    this.initialConfig = config as C;
  }

  /**
   * Retrieves current controller configuration options
   *
   * @returns - Current configuration
   */
  get config(): C {
    return this.internalConfig;
  }

  /**
   * Retrieves current controller state
   *
   * @returns - Current state
   */
  get state(): S {
    return this.internalState;
  }

  /**
   * Updates controller configuration
   *
   * @param config - New configuration options
   * @param overwrite - Overwrite config instead of merging
   * @param fullUpdate - Boolean that defines if the update is partial or not
   */
  configure(config: Partial<C>, overwrite = false, fullUpdate = true): void {
    if (fullUpdate) {
      this.internalConfig = overwrite ? (config as C) : Object.assign(this.internalConfig, config);

      for (const key in this.internalConfig) {
        if (typeof this.internalConfig[key] !== "undefined") {
          this[key as string] = this.internalConfig[key];
        }
      }
    } else {
      for (const key in config) {
        /* istanbul ignore else */
        if (typeof this.internalConfig[key] !== "undefined") {
          this.internalConfig[key] = config[key];
          this[key as string] = config[key];
        }
      }
    }
  }

  /**
   * Updates controller state
   *
   * @param state - New state
   * @param overwrite - Overwrite state instead of merging
   */
  update(state: Partial<S>, overwrite = false): void {
    this.internalState = overwrite ? { ...(state as S) } : { ...this.internalState, ...state };
    this.emit("store", this.internalState);
  }

  /**
   * Enables the controller. This sets each config option as a member
   * variable on this instance and triggers any defined setters. This
   * also sets initial state and triggers any listeners.
   *
   * @returns - This controller instance
   */
  protected initialize(): this {
    this.internalState = this.defaultState;
    this.internalConfig = this.defaultConfig;
    this.configure(this.initialConfig);
    this.update(this.initialState);
    return this;
  }
}

export default BaseController;
