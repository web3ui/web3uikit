export { expect } from "chai";
declare type Done = (err?: any) => void;
/** Callback function used for tests and hooks. */
declare type Func = (done: Done) => void;
/** Async callback function used for tests and hooks. */
declare type AsyncFunc = () => PromiseLike<any>;
declare global {
    function describe(name: string, fn: () => void): void;
    function it(name: string, fn: Func | AsyncFunc): void;
    function before(fn: Func | AsyncFunc): void;
    function beforeEach(fn: Func | AsyncFunc): void;
    function after(fn: Func | AsyncFunc): void;
    function afterEach(fn: Func | AsyncFunc): void;
}
