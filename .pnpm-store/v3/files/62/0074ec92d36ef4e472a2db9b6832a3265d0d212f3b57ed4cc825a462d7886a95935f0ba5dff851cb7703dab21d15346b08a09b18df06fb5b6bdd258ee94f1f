import { JRPCMiddleware, PendingJRPCResponse, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { LogLevelDesc } from "loglevel";
import { IntegrityParams, PaymentParams } from "./interfaces";
declare type PaymentErrorParams = {
    fiatValue?: string;
    selectedCurrency?: string;
    selectedCryptoCurrency?: string;
};
declare type PaymentErrors = {
    provider?: string;
} & PaymentErrorParams;
export declare const validatePaymentProvider: (provider: string, params: PaymentParams) => {
    errors: PaymentErrors;
    isValid: boolean;
};
/**
 * json-rpc-engine middleware that logs RPC errors and and validates req.method.
 *
 * @param log - The logging API to use.
 * @returns  json-rpc-engine middleware function
 */
export declare function createErrorMiddleware(): JRPCMiddleware<unknown, unknown>;
export declare const getRpcPromiseCallback: (resolve: (value?: any) => void, reject: (error?: Error) => void, unwrapResult?: boolean) => (error: Error, response: PendingJRPCResponse<unknown>) => void;
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
export declare const getPreopenInstanceId: () => string;
export declare const getTorusUrl: (buildEnv: string, integrity: IntegrityParams) => Promise<{
    torusUrl: string;
    logLevel: LogLevelDesc;
}>;
export declare const getUserLanguage: () => string;
export declare const EMITTED_NOTIFICATIONS: string[];
export declare const NOOP: () => void;
export declare const FEATURES_PROVIDER_CHANGE_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375";
export declare const FEATURES_DEFAULT_WALLET_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315";
export declare const FEATURES_DEFAULT_POPUP_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=1200";
export declare const FEATURES_CONFIRM_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";
export declare function storageAvailable(type: "localStorage" | "sessionStorage"): boolean;
export declare function getPopupFeatures(): string;
export {};
