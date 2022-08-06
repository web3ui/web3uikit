import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { BaseConfig, BaseState, IController } from "./interfaces";
/**
 * Controller class that provides configuration, state management, and subscriptions
 */
declare class BaseController<C extends BaseConfig, S extends BaseState> extends SafeEventEmitter implements IController<C, S> {
    /**
     * Default options used to configure this controller
     */
    defaultConfig: C;
    /**
     * Default state set on this controller
     */
    defaultState: S;
    /**
     * Determines if listeners are notified of state changes
     */
    disabled: boolean;
    /**
     * Name of this controller used during composition
     */
    name: string;
    private readonly initialConfig;
    private readonly initialState;
    private internalConfig;
    private internalState;
    /**
     * Creates a BaseController instance. Both initial state and initial
     * configuration options are merged with defaults upon initialization.
     *
     * @param config - Initial options used to configure this controller
     * @param state - Initial state to set on this controller
     */
    constructor({ config, state }: {
        config?: Partial<C>;
        state?: Partial<S>;
    });
    /**
     * Retrieves current controller configuration options
     *
     * @returns - Current configuration
     */
    get config(): C;
    /**
     * Retrieves current controller state
     *
     * @returns - Current state
     */
    get state(): S;
    /**
     * Updates controller configuration
     *
     * @param config - New configuration options
     * @param overwrite - Overwrite config instead of merging
     * @param fullUpdate - Boolean that defines if the update is partial or not
     */
    configure(config: Partial<C>, overwrite?: boolean, fullUpdate?: boolean): void;
    /**
     * Updates controller state
     *
     * @param state - New state
     * @param overwrite - Overwrite state instead of merging
     */
    update(state: Partial<S>, overwrite?: boolean): void;
    /**
     * Enables the controller. This sets each config option as a member
     * variable on this instance and triggers any defined setters. This
     * also sets initial state and triggers any listeners.
     *
     * @returns - This controller instance
     */
    protected initialize(): this;
}
export default BaseController;
