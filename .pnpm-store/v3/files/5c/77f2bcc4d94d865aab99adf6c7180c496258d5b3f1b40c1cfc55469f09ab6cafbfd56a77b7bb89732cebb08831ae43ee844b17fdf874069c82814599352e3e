export declare type AnyFunction = (...args: any[]) => any;
export declare type LazyCallbackReturnType<FnType extends AnyFunction> = Parameters<FnType> | [];
export interface LazyCallback<FnType extends AnyFunction> {
    (...args: Parameters<FnType>): void;
    invoked(): Promise<LazyCallbackReturnType<FnType>>;
}
export interface LazyCallbackOptions {
    maxCalls?: number;
    maxCallsCallback?(): void;
}
export declare function createLazyCallback<FnType extends AnyFunction>(options?: LazyCallbackOptions): LazyCallback<FnType>;
