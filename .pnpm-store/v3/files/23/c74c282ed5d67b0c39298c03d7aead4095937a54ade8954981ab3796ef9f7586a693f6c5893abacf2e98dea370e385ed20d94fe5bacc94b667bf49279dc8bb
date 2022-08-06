/* eslint-disable @typescript-eslint/no-throw-literal */
import type { SpanContext, TransactionContext } from "@sentry/types";
import merge from "lodash.merge";
import logLevel, { levels, LogLevelDesc } from "loglevel";
const log = logLevel.getLogger("http-helpers");
log.setLevel(levels.INFO);
export interface CustomOptions {
  [key: string]: unknown;
  useAPIKey?: boolean;
  isUrlEncodedData?: boolean;
  timeout?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Data {}

let apiKey = "torus-default";
let embedHost = "";

// #region API Keys
export const gatewayAuthHeader = "x-api-key";
export const gatewayEmbedHostHeader = "x-embed-host";

interface Sentry {
  startTransaction(_: TransactionContext): {
    startChild(a: SpanContext): {
      finish(): void;
    };
    finish(): void;
  };
}

let sentry: Sentry | null = null;
const tracingOrigins: string[] = [];
const tracingPaths: string[] = [];

export function enableSentryTracing(_sentry: Sentry, _tracingOrigins: string[], _tracingPaths: string[]) {
  sentry = _sentry;
  tracingOrigins.push(..._tracingOrigins);
  tracingPaths.push(..._tracingPaths);
}

export function setEmbedHost(embedHost_: string): void {
  embedHost = embedHost_;
}

export function clearEmbedHost(): void {
  embedHost = "";
}

export function getEmbedHost(): string {
  return embedHost;
}

export function setAPIKey(apiKey_: string): void {
  apiKey = apiKey_;
}

export function clearAPIKey(): void {
  apiKey = "torus-default";
}

export function getAPIKey(): string {
  return apiKey;
}

// #endregion

export function setLogLevel(level: LogLevelDesc) {
  log.setLevel(level);
}

async function fetchAndTrace(url: string, init: RequestInit): Promise<Response> {
  let _url: URL | null = null;
  try {
    _url = new URL(url);
  } catch (error) {}
  if (sentry && _url && (tracingOrigins.includes(_url.origin) || tracingPaths.includes(_url.pathname))) {
    const transaction = sentry.startTransaction({
      name: url,
    });
    const span = transaction.startChild({
      op: "http",
    }); // This function returns a Span

    const response = await fetch(url, init);
    span.finish(); // Remember that only finished spans will be sent with the transaction

    transaction.finish(); // Finishing the transaction will send it to Sentry

    return response;
  }

  return fetch(url, init);
}
function getApiKeyHeaders(): Record<string, string> {
  const headers = {};
  if (apiKey) headers[gatewayAuthHeader] = apiKey;
  if (embedHost) headers[gatewayEmbedHostHeader] = embedHost;
  return headers;
}

function debugLogResponse(response: Response) {
  log.info(`Response: ${response.status} ${response.statusText}`);
  log.info(`Url: ${response.url}`);
}

export const promiseTimeout = <T>(ms: number, promise: Promise<T>): Promise<T> => {
  const timeout = new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error(`Timed out in ${ms}ms`));
    }, ms);
  });
  return Promise.race<T>([promise, timeout]);
};

export const get = async <T>(url: string, options_: RequestInit = {}, customOptions: CustomOptions = {}) => {
  const defaultOptions = {
    mode: "cors" as RequestMode,
    headers: {},
  };
  if (customOptions.useAPIKey) {
    defaultOptions.headers = { ...defaultOptions.headers, ...getApiKeyHeaders() };
  }
  const options = merge(defaultOptions, options_, { method: "GET" });
  const response = await fetchAndTrace(url, options);
  if (response.ok) {
    return response.json() as Promise<T>;
  }
  debugLogResponse(response);
  throw response;
};

export const post = <T>(url: string, data: Data = {}, options_: RequestInit = {}, customOptions: CustomOptions = {}) => {
  const defaultOptions = {
    mode: "cors" as RequestMode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  if (customOptions.useAPIKey) {
    defaultOptions.headers = { ...defaultOptions.headers, ...getApiKeyHeaders() };
  }
  const options = merge(defaultOptions, options_, { method: "POST" });

  // deep merge changes the structure of form data and url encoded data ,
  // so we should not deepmerge body data
  if (customOptions.isUrlEncodedData) {
    // for multipart request browser/client will add multipart content type
    // along with multipart boundary , so for multipart request send
    // content-type: undefined or send with multipart boundary if already known
    options.body = data as string;
    // If url encoded data, this must not be the content type
    if (options.headers["Content-Type"] === "application/json; charset=utf-8") delete options.headers["Content-Type"];
  } else {
    options.body = JSON.stringify(data);
  }

  return promiseTimeout<T>(
    (customOptions.timeout as number) || 60000,
    fetchAndTrace(url, options).then((response) => {
      if (response.ok) {
        return response.json() as Promise<T>;
      }
      debugLogResponse(response);
      throw response;
    })
  );
};

export const patch = async <T>(url: string, data: Data = {}, options_: RequestInit = {}, customOptions: CustomOptions = {}) => {
  const defaultOptions = {
    mode: "cors" as RequestMode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  // for multipart request browser/client will add multipart content type
  // along with multipart boundary , so for multipart request send
  // content-type: undefined or send with multipart boundary if already known
  if (customOptions.useAPIKey) {
    defaultOptions.headers = { ...defaultOptions.headers, ...getApiKeyHeaders() };
  }
  const options = merge(defaultOptions, options_, { method: "PATCH" });
  // deep merge changes the structure of form data and url encoded data ,
  // so we should not deepmerge body data
  if (customOptions.isUrlEncodedData) {
    // for multipart request browser/client will add multipart content type
    // along with multipart boundary , so for multipart request send
    // content-type: undefined or send with multipart boundary if already known
    options.body = data as string;
    // If url encoded data, this must not be the content type
    if (options.headers["Content-Type"] === "application/json; charset=utf-8") delete options.headers["Content-Type"];
  } else {
    options.body = JSON.stringify(data);
  }
  const response = await fetchAndTrace(url, options);
  if (response.ok) {
    return response.json() as Promise<T>;
  }
  debugLogResponse(response);
  throw response;
};

export const remove = async <T>(url: string, data: Data = {}, options_: RequestInit = {}, customOptions: CustomOptions = {}) => {
  const defaultOptions = {
    mode: "cors" as RequestMode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  // for multipart request browser/client will add multipart content type
  // along with multipart boundary , so for multipart request send
  // content-type: undefined or send with multipart boundary if already known
  if (customOptions.useAPIKey) {
    defaultOptions.headers = { ...defaultOptions.headers, ...getApiKeyHeaders() };
  }
  const options = merge(defaultOptions, options_, { method: "DELETE" });
  if (customOptions.isUrlEncodedData) {
    // for multipart request browser/client will add multipart content type
    // along with multipart boundary , so for multipart request send
    // content-type: undefined or send with multipart boundary if already known
    options.body = data as string;
    // If url encoded data, this must not be the content type
    if (options.headers["Content-Type"] === "application/json; charset=utf-8") delete options.headers["Content-Type"];
  } else {
    options.body = JSON.stringify(data);
  }
  const response = await fetchAndTrace(url, options);
  if (response.ok) {
    return response.json() as Promise<T>;
  }
  debugLogResponse(response);
  throw response;
};

export const generateJsonRPCObject = (method: string, parameters: unknown) => ({
  jsonrpc: "2.0",
  method,
  id: 10,
  params: parameters,
});

export const promiseRace = <T>(url: string, options: RequestInit, timeout = 60000) =>
  Promise.race([
    get<T>(url, options),
    new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("timed out"));
      }, timeout);
    }),
  ]);
