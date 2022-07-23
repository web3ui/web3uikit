/// <reference types="node" />
import { EventEmitter } from "events";
declare class PopupHandler extends EventEmitter {
    url: URL;
    target: string;
    features: string;
    window: Window;
    windowTimer: number;
    iClosedWindow: boolean;
    constructor({ url, target, features }: {
        url: URL;
        target?: string;
        features?: string;
    });
    _setupTimer(): void;
    open(): Promise<void>;
    close(): void;
    redirect(locationReplaceOnRedirect: boolean): void;
}
export default PopupHandler;
