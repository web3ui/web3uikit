import { JRPCMiddleware, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { LogLevelDesc } from "loglevel";
import { NetworkInterface, NetworkLabel } from "./interfaces";
/**
 * json-rpc-engine middleware that logs RPC errors and and validates req.method.
 *
 * @param log - The logging API to use.
 * @returns  json-rpc-engine middleware function
 */
export declare function createErrorMiddleware(): JRPCMiddleware<unknown, unknown>;
/**
 * Logs a stream disconnection error. Emits an 'error' if given an
 * EventEmitter that has listeners for the 'error' event.
 *
 * @param log - The logging API to use.
 * @param remoteLabel - The label of the disconnected stream.
 * @param error - The associated error to log.
 * @param emitter - The logging API to use.
 */
export declare function logStreamDisconnectWarning(remoteLabel: string, error: Error, emitter: SafeEventEmitter): void;
export declare const getWindowId: () => string;
export declare const getTorusUrl: (buildEnv: string) => Promise<{
    torusUrl: string;
    logLevel: LogLevelDesc;
}>;
export declare const getUserLanguage: () => string;
export declare const NOOP: () => void;
export declare const FEATURES_PROVIDER_CHANGE_WINDOW: {
    height: number;
    width: number;
};
export declare const FEATURES_DEFAULT_WALLET_WINDOW: {
    height: number;
    width: number;
};
export declare const FEATURES_DEFAULT_POPUP_WINDOW: {
    height: number;
    width: number;
};
export declare const FEATURES_CONFIRM_WINDOW: {
    height: number;
    width: number;
};
export declare function storageAvailable(type: "localStorage" | "sessionStorage"): boolean;
/**
 * popup handler utils
 */
export declare function getPopupFeatures({ width: w, height: h }: {
    width: number;
    height: number;
}): string;
export declare const getNetworkConfig: (label: NetworkLabel) => NetworkInterface | undefined;
