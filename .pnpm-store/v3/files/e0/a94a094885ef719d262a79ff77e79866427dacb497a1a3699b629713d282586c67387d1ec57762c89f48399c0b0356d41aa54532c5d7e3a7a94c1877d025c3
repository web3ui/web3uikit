import BaseController from "../BaseController";
import { PopupHandlerConfig, PopupHandlerState } from "./interfaces";
/**
 * Handles popup window management.
 * For broadcast channel communication, use url with `instanceId` coded into state parameter.
 * This state parameter will be passed across redirects according to OAuth spec.
 */
declare class PopupHandler extends BaseController<PopupHandlerConfig, PopupHandlerState> {
    constructor({ config, state }: {
        config: Partial<PopupHandlerConfig>;
        state: Partial<PopupHandlerState> & Pick<PopupHandlerState, "url">;
    });
    open(): Promise<void>;
    close(): void;
    private _setupTimer;
}
export default PopupHandler;
