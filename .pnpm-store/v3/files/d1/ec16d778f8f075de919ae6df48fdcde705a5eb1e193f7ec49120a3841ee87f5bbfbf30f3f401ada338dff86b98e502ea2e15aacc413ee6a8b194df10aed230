export default class SerializableError<T> extends Error {
    code: number;
    data: T;
    constructor({ code, message, data }: {
        code: number;
        message: string;
        data?: T;
    });
    toString(): string;
}
