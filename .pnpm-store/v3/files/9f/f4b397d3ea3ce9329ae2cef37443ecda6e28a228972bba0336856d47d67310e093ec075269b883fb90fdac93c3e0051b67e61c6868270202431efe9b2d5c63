export declare class SomeError<T> extends Error {
    errors: Error[];
    responses: T[];
    predicate: string;
    constructor({ errors, responses, predicate }: {
        errors: Error[];
        responses: T[];
        predicate: string;
    });
}
export declare const Some: <K, T>(promises: Promise<K>[], predicate: (resultArr: K[], { resolved }: {
    resolved: boolean;
}) => Promise<T>) => Promise<T>;
