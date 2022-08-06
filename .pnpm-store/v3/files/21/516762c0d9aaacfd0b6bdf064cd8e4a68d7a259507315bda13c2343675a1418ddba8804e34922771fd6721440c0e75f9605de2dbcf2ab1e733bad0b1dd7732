import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
declare class PopupHandler extends SafeEventEmitter {
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
