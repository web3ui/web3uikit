export declare class CustomError extends Error {
    name: string;
    constructor(message?: string);
}
export interface CustomErrorInterface extends Error {
}
export interface CustomErrorProperties {
    [property: string]: any;
}
export interface CustomErrorConstructor<Properties extends CustomErrorProperties> extends ErrorConstructor {
    readonly prototype: CustomErrorInterface;
    new (...args: any[]): CustomErrorInterface & Properties;
    (...args: any[]): CustomErrorInterface & Properties;
}
export declare type GenericErrorConstructor = ErrorConstructor | EvalErrorConstructor | RangeErrorConstructor | ReferenceErrorConstructor | SyntaxErrorConstructor | TypeErrorConstructor | URIErrorConstructor | CustomErrorConstructor<CustomErrorProperties>;
declare type CustomErrorFunction<Properties> = (this: Properties, ...args: any[]) => void;
export declare function customErrorFactory<Properties>(fn: CustomErrorFunction<Properties>, parent?: GenericErrorConstructor): CustomErrorConstructor<Properties>;
export {};
