import { Duplex } from "readable-stream";
export default class BasePostMessageStream extends Duplex {
    _init: boolean;
    _haveSyn: boolean;
    _name: string;
    _target: string;
    _targetWindow: Window;
    _targetOrigin: string;
    _onMessage: any;
    _synIntervalId: number;
    constructor({ name, target, targetWindow, targetOrigin, }: {
        name: string;
        target: string;
        targetWindow?: Window;
        targetOrigin?: string;
    });
    _break(): void;
    _handShake(): void;
    _onData(data: unknown): void;
    _postMessage(data: unknown): void;
    onMessage(event: MessageEvent): void;
    _read(): void;
    _write(data: unknown, _: any, cb: () => void): void;
    _destroy(): void;
}
