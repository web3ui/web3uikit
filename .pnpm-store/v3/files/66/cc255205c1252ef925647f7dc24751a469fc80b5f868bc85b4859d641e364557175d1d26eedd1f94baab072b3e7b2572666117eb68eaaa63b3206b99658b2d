import { createAsyncMiddleware, JRPCEngineNextCallback, JRPCMiddleware, JRPCRequest, JRPCResponse } from "@toruslabs/openlogin-jrpc";
import { ethErrors } from "eth-rpc-errors";

import { Block, Payload } from "./INetworkController";

export interface FetchMiddlewareOptions {
  rpcTarget: string;
  originHttpHeaderKey?: string;
}

export interface PayloadwithOrgin extends Payload {
  origin?: string;
}
export interface FetchMiddlewareFromReqOptions extends FetchMiddlewareOptions {
  req: PayloadwithOrgin;
}

export interface FetchConfig {
  fetchUrl: string;
  fetchParams: Record<string, unknown>;
}

const RETRIABLE_ERRORS: string[] = [
  // ignore server overload errors
  "Gateway timeout",
  "ETIMEDOUT",
  // ignore server sent html error pages
  // or truncated json responses
  "failed to parse response body",
  // ignore errors where http req failed to establish
  "Failed to fetch",
];

function checkForHttpErrors(fetchRes: Response): void {
  // check for errors
  switch (fetchRes.status) {
    case 405:
      throw ethErrors.rpc.methodNotFound();

    case 418:
      throw ethErrors.rpc.internal({ message: `Request is being rate limited.` });

    case 503:
    case 504:
      throw ethErrors.rpc.internal({
        message: `Gateway timeout. The request took too long to process.` + `This can happen when querying over too wide a block range.`,
      });

    default:
      break;
  }
}

function timeout(duration: number): Promise<number> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

function parseResponse(fetchRes: Response, body: Record<string, Block>): Block {
  // check for error code
  if (fetchRes.status !== 200) {
    throw ethErrors.rpc.internal({
      message: `Non-200 status code: '${fetchRes.status}'`,
      data: body,
    });
  }
  // check for rpc error
  if (body.error) {
    throw ethErrors.rpc.internal({
      data: body.error,
    });
  }
  // return successful result
  return body.result;
}

export function createFetchConfigFromReq({ req, rpcTarget, originHttpHeaderKey }: FetchMiddlewareFromReqOptions): FetchConfig {
  const parsedUrl: URL = new URL(rpcTarget);

  // prepare payload
  // copy only canonical json rpc properties
  const payload: Payload = {
    id: req.id,
    jsonrpc: req.jsonrpc,
    method: req.method,
    params: req.params,
  };

  // extract 'origin' parameter from request
  const originDomain: string | undefined = req.origin;

  // serialize request body
  const serializedPayload: string = JSON.stringify(payload);

  // configure fetch params
  const fetchParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: serializedPayload,
  };

  // optional: add request origin as header
  if (originHttpHeaderKey && originDomain) {
    fetchParams.headers[originHttpHeaderKey] = originDomain;
  }

  return { fetchUrl: parsedUrl.href, fetchParams };
}

export function createFetchMiddleware({ rpcTarget, originHttpHeaderKey }: FetchMiddlewareOptions): JRPCMiddleware<string[], Block> {
  return createAsyncMiddleware(async (req: JRPCRequest<string[]>, res: JRPCResponse<unknown>, _next: JRPCEngineNextCallback) => {
    const { fetchUrl, fetchParams } = createFetchConfigFromReq({
      req,
      rpcTarget,
      originHttpHeaderKey,
    });

    // attempt request multiple times
    const maxAttempts = 5;
    const retryInterval = 1000;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const fetchRes: Response = await fetch(fetchUrl, fetchParams);
        // check for http errrors
        checkForHttpErrors(fetchRes);
        // parse response body
        const fetchBody: Record<string, Block> = await fetchRes.json();
        const result: Block = parseResponse(fetchRes, fetchBody);
        // set result and exit retry loop
        res.result = result;
        return;
      } catch (err) {
        const errMsg: string = err.toString();
        const isRetriable: boolean = RETRIABLE_ERRORS.some((phrase) => errMsg.includes(phrase));
        // re-throw error if not retriable
        if (!isRetriable) {
          throw err;
        }
      }
      // delay before retrying
      await timeout(retryInterval);
    }
  });
}
