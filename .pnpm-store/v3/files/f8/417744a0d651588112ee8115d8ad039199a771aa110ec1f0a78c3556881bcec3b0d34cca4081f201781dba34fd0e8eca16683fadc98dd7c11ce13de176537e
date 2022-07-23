import { JRPCEngine, JRPCRequest, ObjectMultiplex, PostMessageStream, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
export default class Provider extends SafeEventEmitter {
    iframeElem: HTMLIFrameElement | null;
    rpcStream: PostMessageStream;
    iframeUrl: string;
    rpcEngine: JRPCEngine;
    initialized: boolean;
    mux: ObjectMultiplex;
    init({ iframeElem, iframeUrl }: {
        iframeElem: HTMLIFrameElement;
        iframeUrl: string;
    }): void;
    setupStream(): void;
    cleanup(): void;
    _rpcRequest(payload: JRPCRequest<unknown>, callback: (...args: unknown[]) => void): void;
}
