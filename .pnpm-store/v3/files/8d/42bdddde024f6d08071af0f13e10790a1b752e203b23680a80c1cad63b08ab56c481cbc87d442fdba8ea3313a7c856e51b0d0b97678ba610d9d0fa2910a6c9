import BaseController from "../BaseController";
import { IWindow } from "../interfaces";
import { StreamWindowConfig, StreamWindowState } from "./interfaces";
declare class StreamWindow extends BaseController<StreamWindowConfig, StreamWindowState> implements IWindow {
    closed: boolean;
    constructor({ config, state, }: {
        config: Partial<StreamWindowConfig> & Pick<StreamWindowConfig, "communicationEngine" | "communicationWindowManager">;
        state?: Partial<StreamWindowState>;
    });
    open(): Promise<this>;
    close(): void;
}
export default StreamWindow;
