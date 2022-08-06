import { LoginConfig, ObjectMultiplex, Substream, WhiteLabelData } from "@toruslabs/openlogin-jrpc";
export declare const handleStream: (handle: Substream, eventName: string, handler: (chunk: unknown) => void) => void;
export declare class Modal {
    modalUrl: string;
    iframeElem: HTMLIFrameElement;
    initialized: boolean;
    modalZIndex: number;
    mux: ObjectMultiplex;
    verifierStream: Substream;
    constructor(modalUrl: string);
    init(): Promise<void>;
    setupStream(): void;
    initIFrame(src: string): Promise<void>;
    _showModal(): void;
    _hideModal(): void;
    _prompt(clientId: string, whiteLabel: WhiteLabelData, loginConfig: LoginConfig, cb: (chunk: unknown) => Promise<void>): Promise<void>;
    cleanup(): Promise<void>;
}
