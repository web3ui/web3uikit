import type { SpanContext, TransactionContext } from "@sentry/types";
import { LogLevelDesc } from "loglevel";
export interface CustomOptions {
    [key: string]: unknown;
    useAPIKey?: boolean;
    isUrlEncodedData?: boolean;
    timeout?: number;
}
export interface Data {
}
export declare const gatewayAuthHeader = "x-api-key";
export declare const gatewayEmbedHostHeader = "x-embed-host";
interface Sentry {
    startTransaction(_: TransactionContext): {
        startChild(a: SpanContext): {
            finish(): void;
        };
        finish(): void;
    };
}
export declare function enableSentryTracing(_sentry: Sentry, _tracingOrigins: string[], _tracingPaths: string[]): void;
export declare function setEmbedHost(embedHost_: string): void;
export declare function clearEmbedHost(): void;
export declare function getEmbedHost(): string;
export declare function setAPIKey(apiKey_: string): void;
export declare function clearAPIKey(): void;
export declare function getAPIKey(): string;
export declare function setLogLevel(level: LogLevelDesc): void;
export declare const promiseTimeout: <T>(ms: number, promise: Promise<T>) => Promise<T>;
export declare const get: <T>(url: string, options_?: RequestInit, customOptions?: CustomOptions) => Promise<T>;
export declare const post: <T>(url: string, data?: Data, options_?: RequestInit, customOptions?: CustomOptions) => Promise<T>;
export declare const patch: <T>(url: string, data?: Data, options_?: RequestInit, customOptions?: CustomOptions) => Promise<T>;
export declare const remove: <T>(url: string, data?: Data, options_?: RequestInit, customOptions?: CustomOptions) => Promise<T>;
export declare const generateJsonRPCObject: (method: string, parameters: unknown) => {
    jsonrpc: string;
    method: string;
    id: number;
    params: unknown;
};
export declare const promiseRace: <T>(url: string, options: RequestInit, timeout?: number) => Promise<Awaited<T>>;
export {};
