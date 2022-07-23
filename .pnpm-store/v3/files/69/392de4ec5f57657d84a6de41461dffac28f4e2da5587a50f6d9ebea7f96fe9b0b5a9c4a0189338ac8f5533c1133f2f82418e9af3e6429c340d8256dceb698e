import { serializeError } from "eth-rpc-errors";
import { Duplex } from "readable-stream";

import { JRPCEngineEndCallback, JRPCEngineNextCallback, JRPCEngineReturnHandler, JRPCMiddleware, JRPCRequest, JRPCResponse } from "./jrpc";
import SafeEventEmitter from "./safeEventEmitter";
import SerializableError from "./serializableError";

/**
 * A JSON-RPC request and response processor.
 * Give it a stack of middleware, pass it requests, and get back responses.
 */
export class JRPCEngine extends SafeEventEmitter {
  private _middleware: JRPCMiddleware<unknown, unknown>[];

  constructor() {
    super();
    this._middleware = [];
  }

  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */
  private static async _runAllMiddleware(
    req: JRPCRequest<unknown>,
    res: JRPCResponse<unknown>,
    middlewareStack: JRPCMiddleware<unknown, unknown>[]
  ): Promise<
    [
      unknown, // error
      boolean, // isComplete
      JRPCEngineReturnHandler[]
    ]
  > {
    const returnHandlers: JRPCEngineReturnHandler[] = [];
    let error = null;
    let isComplete = false;

    // Go down stack of middleware, call and collect optional returnHandlers
    for (const middleware of middlewareStack) {
      [error, isComplete] = await JRPCEngine._runMiddleware(req, res, middleware, returnHandlers);
      if (isComplete) {
        break;
      }
    }
    return [error, isComplete, returnHandlers.reverse()];
  }

  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware exection,
   * and a boolean indicating whether the request should end.
   */
  private static _runMiddleware(
    req: JRPCRequest<unknown>,
    res: JRPCResponse<unknown>,
    middleware: JRPCMiddleware<unknown, unknown>,
    returnHandlers: JRPCEngineReturnHandler[]
  ): Promise<[unknown, boolean]> {
    return new Promise((resolve) => {
      const end: JRPCEngineEndCallback = (err?: unknown) => {
        const error = err || res.error;
        if (error) {
          res.error = serializeError(error);
        }
        // True indicates that the request should end
        resolve([error, true]);
      };

      const next: JRPCEngineNextCallback = (returnHandler?: JRPCEngineReturnHandler) => {
        if (res.error) {
          end(res.error);
        } else {
          if (returnHandler) {
            if (typeof returnHandler !== "function") {
              end(new SerializableError({ code: -32603, message: "JRPCEngine: 'next' return handlers must be functions" }));
            }
            returnHandlers.push(returnHandler);
          }

          // False indicates that the request should not end
          resolve([null, false]);
        }
      };

      try {
        middleware(req, res, next, end);
      } catch (error) {
        end(error);
      }
    });
  }

  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */
  private static async _runReturnHandlers(handlers: JRPCEngineReturnHandler[]): Promise<void> {
    for (const handler of handlers) {
      await new Promise<void>((resolve, reject) => {
        handler((err) => (err ? reject(err) : resolve()));
      });
    }
  }

  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */
  private static _checkForCompletion(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>, isComplete: boolean): void {
    if (!("result" in res) && !("error" in res)) {
      throw new SerializableError({ code: -32603, message: "Response has no error or result for request" });
    }
    if (!isComplete) {
      throw new SerializableError({ code: -32603, message: "Nothing ended request" });
    }
  }

  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push<T, U>(middleware: JRPCMiddleware<T, U>): void {
    this._middleware.push(middleware as JRPCMiddleware<unknown, unknown>);
  }

  /**
   * Handle a JSON-RPC request, and return a response.
   *
   * @param request - The request to handle.
   * @param callback - An error-first callback that will receive the response.
   */
  handle<T, U>(request: JRPCRequest<T>, callback: (error: unknown, response: JRPCResponse<U>) => void): void;

  /**
   * Handle an array of JSON-RPC requests, and return an array of responses.
   *
   * @param request - The requests to handle.
   * @param callback - An error-first callback that will receive the array of
   * responses.
   */
  handle<T, U>(requests: JRPCRequest<T>[], callback: (error: unknown, responses: JRPCResponse<U>[]) => void): void;

  /**
   * Handle a JSON-RPC request, and return a response.
   *
   * @param request - The request to handle.
   * @returns A promise that resolves with the response, or rejects with an
   * error.
   */
  handle<T, U>(request: JRPCRequest<T>): Promise<JRPCResponse<U>>;

  /**
   * Handle an array of JSON-RPC requests, and return an array of responses.
   *
   * @param request - The requests to handle.
   * @returns A promise that resolves with the array of responses, or rejects
   * with an error.
   */
  handle<T, U>(requests: JRPCRequest<T>[]): Promise<JRPCResponse<U>[]>;

  handle(req: unknown, cb?: any) {
    if (cb && typeof cb !== "function") {
      throw new Error('"callback" must be a function if provided.');
    }

    if (Array.isArray(req)) {
      if (cb) {
        return this._handleBatch(req, cb);
      }
      return this._handleBatch(req);
    }

    if (cb) {
      return this._handle(req as JRPCRequest<unknown>, cb);
    }
    return this._promiseHandle(req as JRPCRequest<unknown>);
  }

  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware(): JRPCMiddleware<unknown, unknown> {
    return async (req, res, next, end) => {
      try {
        const [middlewareError, isComplete, returnHandlers] = await JRPCEngine._runAllMiddleware(req, res, this._middleware);

        if (isComplete) {
          await JRPCEngine._runReturnHandlers(returnHandlers);
          return end(middlewareError as Error);
        }

        return next(async (handlerCallback) => {
          try {
            await JRPCEngine._runReturnHandlers(returnHandlers);
          } catch (error) {
            return handlerCallback(error);
          }
          return handlerCallback();
        });
      } catch (error) {
        return end(error);
      }
    };
  }

  /**
   * Like _handle, but for batch requests.
   */
  private _handleBatch(reqs: JRPCRequest<unknown>[]): Promise<JRPCResponse<unknown>[]>;

  /**
   * Like _handle, but for batch requests.
   */
  private _handleBatch(reqs: JRPCRequest<unknown>[], cb: (error: unknown, responses?: JRPCResponse<unknown>[]) => void): Promise<void>;

  private async _handleBatch(
    reqs: JRPCRequest<unknown>[],
    cb?: (error: unknown, responses?: JRPCResponse<unknown>[]) => void
  ): Promise<JRPCResponse<unknown>[] | void> {
    // The order here is important
    try {
      // 2. Wait for all requests to finish, or throw on some kind of fatal
      // error
      const responses = await Promise.all(
        // 1. Begin executing each request in the order received
        reqs.map(this._promiseHandle.bind(this))
      );

      // 3. Return batch response
      if (cb) {
        return cb(null, responses);
      }
      return responses;
    } catch (error) {
      if (cb) {
        return cb(error);
      }

      throw error;
    }
  }

  /**
   * A promise-wrapped _handle.
   */
  private _promiseHandle(req: JRPCRequest<unknown>): Promise<JRPCResponse<unknown>> {
    return new Promise((resolve) => {
      this._handle(req, (_err, res) => {
        // There will always be a response, and it will always have any error
        // that is caught and propagated.
        resolve(res);
      });
    });
  }

  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */
  private async _handle(callerReq: JRPCRequest<unknown>, cb: (error: unknown, response: JRPCResponse<unknown>) => void): Promise<void> {
    if (!callerReq || Array.isArray(callerReq) || typeof callerReq !== "object") {
      const error = new SerializableError({ code: -32603, message: "request must be plain object" });
      return cb(error, { id: undefined, jsonrpc: "2.0", error });
    }

    if (typeof callerReq.method !== "string") {
      const error = new SerializableError({ code: -32603, message: "method must be string" });
      return cb(error, { id: callerReq.id, jsonrpc: "2.0", error });
    }

    const req: JRPCRequest<unknown> = { ...callerReq };
    const res: JRPCResponse<unknown> = {
      id: req.id,
      jsonrpc: req.jsonrpc,
    };
    let error: Error = null;

    try {
      await this._processRequest(req, res);
    } catch (_error) {
      // A request handler error, a re-thrown middleware error, or something
      // unexpected.
      error = _error;
    }

    if (error) {
      // Ensure no result is present on an errored response
      delete res.result;
      if (!res.error) {
        res.error = serializeError(error);
      }
    }

    return cb(error, res as JRPCResponse<unknown>);
  }

  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */
  private async _processRequest(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    const [error, isComplete, returnHandlers] = await JRPCEngine._runAllMiddleware(req, res, this._middleware);

    // Throw if "end" was not called, or if the response has neither a result
    // nor an error.
    JRPCEngine._checkForCompletion(req, res, isComplete);

    // The return handlers should run even if an error was encountered during
    // middleware processing.
    await JRPCEngine._runReturnHandlers(returnHandlers);

    // Now we re-throw the middleware processing error, if any, to catch it
    // further up the call chain.
    if (error) {
      throw error;
    }
  }
}

export function mergeMiddleware(middlewareStack: JRPCMiddleware<unknown, unknown>[]): JRPCMiddleware<unknown, unknown> {
  const engine = new JRPCEngine();
  middlewareStack.forEach((middleware) => engine.push(middleware));
  return engine.asMiddleware();
}

export interface EngineStreamOptions {
  engine: JRPCEngine;
}

export function createEngineStream(opts: EngineStreamOptions): Duplex {
  if (!opts || !opts.engine) {
    throw new Error("Missing engine parameter!");
  }

  const { engine } = opts;
  // eslint-disable-next-line prefer-const
  let stream: Duplex;

  function read() {
    return undefined;
  }

  function write(req: JRPCRequest<unknown>, _encoding: unknown, cb: (error?: Error | null) => void) {
    engine.handle(req, (_err, res) => {
      stream.push(res);
    });
    cb();
  }

  stream = new Duplex({ objectMode: true, read, write });

  // forward notifications
  if (engine.on) {
    engine.on("notification", (message) => {
      stream.push(message);
    });
  }
  return stream;
}
