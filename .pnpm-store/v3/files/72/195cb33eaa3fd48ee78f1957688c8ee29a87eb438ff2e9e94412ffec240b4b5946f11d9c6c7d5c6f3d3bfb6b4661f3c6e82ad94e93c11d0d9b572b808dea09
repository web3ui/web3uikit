export declare class InvariantError extends Error {
    readonly message: string;
    name: string;
    constructor(message: string, ...positionals: any[]);
}
export interface InvariantFunction {
    (predicate: unknown, message: string, ...positionals: unknown[]): asserts predicate;
}
export interface CustomErrorConstructor {
    new (message: string): Error;
}
export interface CustomErrorFactory {
    (message: string): Error;
}
export declare type CustomError = CustomErrorConstructor | CustomErrorFactory;
export declare function createInvariantWith(ErrorConstructor: CustomError): InvariantFunction;
declare function polymorphicInvariant(ErrorClass: CustomError, ...args: Parameters<InvariantFunction>): ReturnType<InvariantFunction>;
export declare const invariant: InvariantFunction & {
    as: typeof polymorphicInvariant;
};
export {};
