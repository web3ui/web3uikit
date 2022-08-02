import BaseController from "../BaseController";
import { BaseConfig } from "../interfaces";
import { KeyringControllerState } from "./IKeyringController";
export declare class BaseKeyringController<C extends BaseConfig, S extends KeyringControllerState> extends BaseController<C, S> {
    constructor({ config, state }: {
        config: Partial<C>;
        state?: Partial<S>;
    });
    signAuthMessage(address: string, message: string): string;
}
