import { JRPCMiddleware } from "@toruslabs/openlogin-jrpc";
import { Block, Payload } from "./INetworkController";
export interface FetchMiddlewareOptions {
    rpcTarget: string;
    originHttpHeaderKey?: string;
}
export interface PayloadwithOrgin extends Payload {
    origin?: string;
}
export interface FetchMiddlewareFromReqOptions extends FetchMiddlewareOptions {
    req: PayloadwithOrgin;
}
export interface FetchConfig {
    fetchUrl: string;
    fetchParams: Record<string, unknown>;
}
export declare function createFetchConfigFromReq({ req, rpcTarget, originHttpHeaderKey }: FetchMiddlewareFromReqOptions): FetchConfig;
export declare function createFetchMiddleware({ rpcTarget, originHttpHeaderKey }: FetchMiddlewareOptions): JRPCMiddleware<string[], Block>;
