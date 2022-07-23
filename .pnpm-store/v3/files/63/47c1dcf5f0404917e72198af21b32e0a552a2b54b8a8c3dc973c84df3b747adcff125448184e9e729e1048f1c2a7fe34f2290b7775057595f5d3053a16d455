export declare class EventPolyfill implements Event {
    readonly AT_TARGET: number;
    readonly BUBBLING_PHASE: number;
    readonly CAPTURING_PHASE: number;
    readonly NONE: number;
    type: string;
    srcElement: EventTarget | null;
    target: EventTarget | null;
    currentTarget: EventTarget | null;
    eventPhase: number;
    timeStamp: number;
    isTrusted: boolean;
    composed: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    bubbles: boolean;
    lengthComputable: boolean;
    loaded: number;
    total: number;
    cancelBubble: boolean;
    returnValue: boolean;
    constructor(type: string, options?: {
        target: EventTarget;
        currentTarget: EventTarget;
    });
    composedPath(): EventTarget[];
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
}
