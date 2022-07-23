import stringify from "fast-safe-stringify";

export default class SerializableError<T> extends Error {
  public code: number;

  public data: T;

  constructor({ code, message, data }: { code: number; message: string; data?: T }) {
    if (!Number.isInteger(code)) {
      throw new Error("code must be an integer");
    }
    if (!message || typeof message !== "string") {
      throw new Error("message must be string");
    }

    super(message);
    this.code = code;
    if (data !== undefined) {
      this.data = data;
    }
  }

  toString(): string {
    return stringify({
      code: this.code,
      message: this.message,
      data: this.data,
      stack: this.stack,
    });
  }
}
