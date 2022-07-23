import { getPublic, sign } from "@toruslabs/eccrypto";
import { base64url, keccak, safeatob } from "@toruslabs/openlogin-utils";

import { PopupResponse } from "./constants";
import log from "./loglevel";

export async function documentReady(): Promise<void> {
  return new Promise<void>((resolve) => {
    if (document.readyState !== "loading") {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    }
  });
}

export const htmlToElement = <T extends Element>(html: string): T => {
  const template = window.document.createElement("template");
  const trimmedHtml = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = trimmedHtml;
  return template.content.firstChild as T;
};

export async function whitelistUrl(clientId: string, appKey: string, origin: string): Promise<string> {
  const appKeyBuf = Buffer.from(appKey.padStart(64, "0"), "hex");
  if (base64url.encode(getPublic(appKeyBuf)) !== clientId) throw new Error("appKey mismatch");
  const sig = await sign(appKeyBuf, Buffer.from(keccak("keccak256").update(origin).digest("hex"), "hex"));
  return base64url.encode(sig);
}

export function getHashQueryParams(replaceUrl = false): Record<string, string> {
  const result = {};

  const url = new URL(window.location.href);
  url.searchParams.forEach((value, key) => {
    if (key !== "result") {
      result[key] = value;
    }
  });
  const queryResult = url.searchParams.get("result");
  if (queryResult) {
    try {
      const queryParams = JSON.parse(safeatob(queryResult));
      Object.keys(queryParams).forEach((key) => {
        result[key] = queryParams[key];
      });
    } catch (error) {
      log.error(error);
    }
  }

  const hash = url.hash.substring(1);
  const hashUrl = new URL(`${window.location.origin}/?${hash}`);
  hashUrl.searchParams.forEach((value, key) => {
    if (key !== "result") {
      result[key] = value;
    }
  });
  const hashResult = hashUrl.searchParams.get("result");

  if (hashResult) {
    try {
      const hashParams = JSON.parse(safeatob(hashResult));
      Object.keys(hashParams).forEach((key) => {
        result[key] = hashParams[key];
      });
    } catch (error) {
      log.error(error);
    }
  }

  if (replaceUrl) {
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState(null, "", cleanUrl);
  }

  return result;
}

export function awaitReq<T>(id: string, windowRef: Window): Promise<T> {
  return new Promise((resolve, reject) => {
    if (!windowRef) reject(new Error("Unable to open window"));
    let closedByHandler = false;
    const closedMonitor = setInterval(() => {
      if (!closedByHandler && windowRef.closed) {
        clearInterval(closedMonitor);
        reject(new Error("user closed popup"));
      }
    }, 500);
    const handler = (ev: MessageEvent<PopupResponse<T & { error?: string }>>) => {
      const { pid } = ev.data;
      if (id !== pid) return;
      window.removeEventListener("message", handler);
      closedByHandler = true;
      clearInterval(closedMonitor);
      windowRef.close();
      if (ev.data.data && ev.data.data.error) {
        reject(new Error(ev.data.data.error));
      } else {
        resolve(ev.data.data);
      }
    };

    window.addEventListener("message", handler);
  });
}

export function constructURL(params: { baseURL: string; query?: Record<string, unknown>; hash?: Record<string, unknown> }): string {
  const { baseURL, query, hash } = params;

  const url = new URL(baseURL);
  if (query) {
    Object.keys(query).forEach((key) => {
      url.searchParams.append(key, query[key] as string);
    });
  }
  if (hash) {
    const h = new URL(constructURL({ baseURL, query: hash })).searchParams.toString();
    url.hash = h;
  }
  return url.toString();
}

export function storageAvailable(type: string): boolean {
  let storageExists = false;
  let storageLength = 0;
  let storage: Storage;
  try {
    storage = window[type];
    storageExists = true;
    storageLength = storage.length;
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (error) {
    return (
      error &&
      // everything except Firefox
      (error.code === 22 ||
        // Firefox
        error.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        error.name === "QuotaExceededErro r" ||
        // Firefox
        error.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storageExists &&
      storageLength !== 0
    );
  }
}

export const sessionStorageAvailable = storageAvailable("sessionStorage");
export const localStorageAvailable = storageAvailable("localStorage");

export function preloadIframe(url: string): void {
  try {
    if (typeof document === "undefined") return;
    const openloginIframeHtml = document.createElement("link");
    openloginIframeHtml.href = url;
    openloginIframeHtml.crossOrigin = "anonymous";
    openloginIframeHtml.type = "text/html";
    openloginIframeHtml.rel = "prefetch";
    if (openloginIframeHtml.relList && openloginIframeHtml.relList.supports) {
      if (openloginIframeHtml.relList.supports("prefetch")) {
        document.head.appendChild(openloginIframeHtml);
      }
    }
  } catch (error) {
    log.error(error);
  }
}

export function getPopupFeatures(): string {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const w = 1200;
  const h = 700;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;

  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const systemZoom = 1; // No reliable estimate

  const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
  const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
  const features = `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${h / systemZoom},width=${w / systemZoom},top=${top},left=${left}`;
  return features;
}
