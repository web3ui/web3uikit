import { JRPCEngineNextCallback, JRPCRequest, JRPCResponse } from "@toruslabs/openlogin-jrpc";
import log from "loglevel";

export interface LoggerMiddlewareOptions {
  origin: string;
}

export function createLoggerMiddleware(options: LoggerMiddlewareOptions) {
  return function loggerMiddleware(request: JRPCRequest<unknown>, response: JRPCResponse<unknown>, next: JRPCEngineNextCallback): void {
    next((callback) => {
      if (response.error) {
        log.warn("Error in RPC response:\n", response);
      }
      if ((request as unknown as { isTorusInternal: boolean }).isTorusInternal) return;
      log.info(`RPC (${options.origin}):`, request, "->", response);
      callback();
    });
  };
}
