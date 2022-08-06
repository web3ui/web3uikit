import { JRPCMiddleware, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { ethErrors } from "eth-rpc-errors";
import { LogLevelDesc } from "loglevel";

import config from "./config";
import { NetworkInterface, NetworkLabel } from "./interfaces";
import log from "./loglevel";

// utility functions

/**
 * json-rpc-engine middleware that logs RPC errors and and validates req.method.
 *
 * @param log - The logging API to use.
 * @returns  json-rpc-engine middleware function
 */
export function createErrorMiddleware(): JRPCMiddleware<unknown, unknown> {
  return (req, res, next) => {
    // json-rpc-engine will terminate the request when it notices this error
    if (typeof req.method !== "string" || !req.method) {
      res.error = ethErrors.rpc.invalidRequest({
        message: `The request 'method' must be a non-empty string.`,
        data: req,
      });
    }

    next((done) => {
      const { error } = res;
      if (!error) {
        return done();
      }
      log.error(`Torus - RPC Error: ${error.message}`, error);
      return done();
    });
  };
}

/**
 * Logs a stream disconnection error. Emits an 'error' if given an
 * EventEmitter that has listeners for the 'error' event.
 *
 * @param log - The logging API to use.
 * @param remoteLabel - The label of the disconnected stream.
 * @param error - The associated error to log.
 * @param emitter - The logging API to use.
 */
export function logStreamDisconnectWarning(remoteLabel: string, error: Error, emitter: SafeEventEmitter): void {
  let warningMsg = `Torus: Lost connection to "${remoteLabel}".`;
  if (error?.stack) {
    warningMsg += `\n${error.stack}`;
  }
  log.warn(warningMsg);
  if (emitter && emitter.listenerCount("error") > 0) {
    emitter.emit("error", warningMsg);
  }
}

export const getWindowId = (): string => Math.random().toString(36).slice(2);

export const getTorusUrl = async (buildEnv: string): Promise<{ torusUrl: string; logLevel: LogLevelDesc }> => {
  let torusUrl: string;
  let logLevel: LogLevelDesc;
  // const versionUsed = version;
  // log.info("solana embed version used: ", versionUsed);
  switch (buildEnv) {
    case "testing":
      torusUrl = "https://solana-testing.tor.us";
      logLevel = "debug";
      break;
    case "development":
      torusUrl = "http://localhost:8080";
      logLevel = "debug";
      break;
    default:
      torusUrl = `https://solana.tor.us`;
      logLevel = "error";
      break;
  }
  return { torusUrl, logLevel };
};

export const getUserLanguage = (): string => {
  let userLanguage = window.navigator.language || "en-US";
  const userLanguages = userLanguage.split("-");
  userLanguage = Object.prototype.hasOwnProperty.call(config.translations, userLanguages[0]) ? userLanguages[0] : "en";
  return userLanguage;
};

export const NOOP = (): void => {
  // empty function
};

export const FEATURES_PROVIDER_CHANGE_WINDOW = { height: 660, width: 375 };
export const FEATURES_DEFAULT_WALLET_WINDOW = { height: 740, width: 1315 };
export const FEATURES_DEFAULT_POPUP_WINDOW = { height: 700, width: 1200 };
export const FEATURES_CONFIRM_WINDOW = { height: 600, width: 400 };

export function storageAvailable(type: "localStorage" | "sessionStorage"): boolean {
  let storage: Storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

/**
 * popup handler utils
 */
export function getPopupFeatures({ width: w, height: h }: { width: number; height: number }): string {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

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

export const getNetworkConfig = (label: NetworkLabel): NetworkInterface | undefined => {
  switch (label) {
    case "mainnet-beta":
      return {
        blockExplorerUrl: "https://explorer.solana.com",
        chainId: "0x1",
        displayName: "Solana Mainnet",
        logo: "solana.svg",
        rpcTarget: "https://green-dark-sky.solana-mainnet.quiknode.pro/0b4b99540b7930cf590dc7fb0a2d1c9a906fd53c/",
        ticker: "SOL",
        tickerName: "Solana Token",
      } as NetworkInterface;

    case "testnet":
      return {
        blockExplorerUrl: "https://explorer.solana.com",
        chainId: "0x2",
        displayName: "Solana Testnet",
        logo: "solana.svg",
        rpcTarget: "https://spring-black-waterfall.solana-testnet.quiknode.pro/89830c37acd15df105b23742d37f33dc85b5eff8/",
        ticker: "SOL",
        tickerName: "Solana Token",
      } as NetworkInterface;

    case "devnet":
      return {
        blockExplorerUrl: "https://explorer.solana.com",
        chainId: "0x3",
        displayName: "Solana Devnet",
        logo: "solana.svg",
        rpcTarget: "https://api.devnet.solana.com",
        ticker: "SOL",
        tickerName: "Solana Token",
      } as NetworkInterface;

    default:
      return undefined;
  }
};
