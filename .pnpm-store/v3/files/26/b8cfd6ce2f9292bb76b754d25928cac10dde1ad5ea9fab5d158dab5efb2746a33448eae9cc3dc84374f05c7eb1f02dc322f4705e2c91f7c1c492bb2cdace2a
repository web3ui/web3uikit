import { get } from "@toruslabs/http-helpers";
import { JRPCMiddleware, PendingJRPCResponse, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { ethErrors } from "eth-rpc-errors";
import { LogLevelDesc } from "loglevel";

import config from "./config";
import { IntegrityParams, PaymentParams } from "./interfaces";
import log from "./loglevel";

const { paymentProviders } = config;

type PaymentErrorParams = {
  fiatValue?: string;
  selectedCurrency?: string;
  selectedCryptoCurrency?: string;
};

type PaymentErrors = { provider?: string } & PaymentErrorParams;

export const validatePaymentProvider = (provider: string, params: PaymentParams): { errors: PaymentErrors; isValid: boolean } => {
  const errors: PaymentErrors = {};

  if (!provider) {
    return { errors, isValid: true };
  }

  if (provider && !paymentProviders[provider]) {
    errors.provider = "Invalid Provider";
    return { errors, isValid: Object.keys(errors).length === 0 };
  }

  const selectedProvider = paymentProviders[provider];
  const selectedParams = params || {};

  // set default values
  // if (!selectedParams.selectedCurrency) [selectedParams.selectedCurrency] = selectedProvider.validCurrencies
  // if (!selectedParams.fiatValue) selectedParams.fiatValue = selectedProvider.minOrderValue
  // if (!selectedParams.selectedCryptoCurrency) [selectedParams.selectedCryptoCurrency] = selectedProvider.validCryptoCurrencies

  // validations
  if (selectedParams.fiatValue) {
    const requestedOrderAmount = +parseFloat(selectedParams.fiatValue.toString()) || 0;
    if (requestedOrderAmount < selectedProvider.minOrderValue) errors.fiatValue = "Requested amount is lower than supported";
    if (requestedOrderAmount > selectedProvider.maxOrderValue && selectedProvider.enforceMax)
      errors.fiatValue = "Requested amount is higher than supported";
  }
  if (selectedParams.selectedCurrency && !selectedProvider.validCurrencies.includes(selectedParams.selectedCurrency)) {
    errors.selectedCurrency = "Unsupported currency";
  }
  if (selectedParams.selectedCryptoCurrency && !selectedProvider.validCryptoCurrencies.includes(selectedParams.selectedCryptoCurrency)) {
    errors.selectedCryptoCurrency = "Unsupported cryptoCurrency";
  }
  return { errors, isValid: Object.keys(errors).length === 0 };
};

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
      log.error(`MetaMask - RPC Error: ${error.message}`, error);
      return done();
    });
  };
}

// resolve response.result or response, reject errors
export const getRpcPromiseCallback =
  (resolve: (value?: any) => void, reject: (error?: Error) => void, unwrapResult = true) =>
  (error: Error, response: PendingJRPCResponse<unknown>): void => {
    if (error || response.error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      reject(error || response.error);
    } else {
      resolve(!unwrapResult || Array.isArray(response) ? response : response.result);
    }
  };

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
  let warningMsg = `MetaMask: Lost connection to "${remoteLabel}".`;
  if (error?.stack) {
    warningMsg += `\n${error.stack}`;
  }
  log.warn(warningMsg);
  if (emitter && emitter.listenerCount("error") > 0) {
    emitter.emit("error", warningMsg);
  }
}

export const getPreopenInstanceId = () => Math.random().toString(36).slice(2);

export const getTorusUrl = async (buildEnv: string, integrity: IntegrityParams): Promise<{ torusUrl: string; logLevel: LogLevelDesc }> => {
  let torusUrl: string;
  let logLevel: LogLevelDesc;
  // Do not change this line
  const version = process.env.TORUS_EMBED_VERSION;
  let versionUsed = integrity.version || version;
  try {
    if ((buildEnv === "binance" || buildEnv === "production") && !integrity.version) {
      let response: { data: string };
      if (!config.prodTorusUrl)
        response = await get(`${config.api}/latestversion?name=@toruslabs/torus-embed&version=${version}`, {}, { useAPIKey: true });
      else response = { data: config.prodTorusUrl };
      versionUsed = response.data;
      // eslint-disable-next-line require-atomic-updates
      config.prodTorusUrl = response.data;
    }
  } catch (error) {
    log.error(error, "unable to fetch latest version");
  }
  log.info("version used: ", versionUsed);
  switch (buildEnv) {
    case "binance":
      torusUrl = `https://binance.tor.us/v${versionUsed}`;
      logLevel = "info";
      break;
    case "testing":
      torusUrl = "https://testing.tor.us";
      logLevel = "debug";
      break;
    case "lrc":
      torusUrl = "https://lrc.tor.us";
      logLevel = "debug";
      break;
    case "beta":
      torusUrl = "https://beta.tor.us";
      logLevel = "debug";
      break;
    case "development":
      torusUrl = "http://localhost:4050";
      logLevel = "debug";
      break;
    default:
      torusUrl = `https://app.tor.us/v${versionUsed}`;
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

export const EMITTED_NOTIFICATIONS = [
  "eth_subscription", // per eth-json-rpc-filters/subscriptionManager
];

export const NOOP = (): void => {
  // empty function
};

export const FEATURES_PROVIDER_CHANGE_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375";
export const FEATURES_DEFAULT_WALLET_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315";
export const FEATURES_DEFAULT_POPUP_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=1200";
export const FEATURES_CONFIRM_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";

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
