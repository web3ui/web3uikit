import { CustomError } from "ts-custom-error";

// @flow
export interface IWeb3AuthError extends CustomError {
  code: number;
  message: string;
  toString(): string;
}

export type ErrorCodes = {
  [key: number]: string;
};

export abstract class Web3AuthError extends CustomError implements IWeb3AuthError {
  code: number;

  message: string;

  public constructor(code: number, message?: string) {
    // takes care of stack and proto
    super(message);

    this.code = code;
    this.message = message || "";
    // Set name explicitly as minification can mangle class names
    Object.defineProperty(this, "name", { value: "Web3AuthError" });
  }

  toJSON(): IWeb3AuthError {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJSON());
  }
}

export class WalletInitializationError extends Web3AuthError {
  protected static messages: ErrorCodes = {
    5000: "Custom",
    5001: "Wallet is not found",
    5002: "Wallet is not installed",
    5003: "Wallet is not ready yet",
    5004: "Wallet window is blocked",
    5005: "Wallet window has been closed by the user",
    5006: "Incompatible chain namespace provided",
    5007: "Adapter has already been included",
    5008: "Invalid provider Config",
    5009: "Provider is not ready yet",
    5010: "Failed to connect with rpc url",
    5011: "Invalid params passed in",
    5013: "Invalid network provided",
  };

  public constructor(code: number, message?: string) {
    // takes care of stack and proto
    super(code, message);

    // Set name explicitly as minification can mangle class names
    Object.defineProperty(this, "name", { value: "WalletInitializationError" });
  }

  public static fromCode(code: number, extraMessage = ""): IWeb3AuthError {
    return new WalletInitializationError(code, `${WalletInitializationError.messages[code]}, ${extraMessage}`);
  }

  // Custom methods
  public static notFound(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5001, extraMessage);
  }

  public static notInstalled(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5002, extraMessage);
  }

  public static notReady(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5003, extraMessage);
  }

  public static windowBlocked(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5004, extraMessage);
  }

  public static windowClosed(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5005, extraMessage);
  }

  public static incompatibleChainNameSpace(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5006, extraMessage);
  }

  public static duplicateAdapterError(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5007, extraMessage);
  }

  public static invalidProviderConfigError(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5008, extraMessage);
  }

  public static providerNotReadyError(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5009, extraMessage);
  }

  public static rpcConnectionError(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5010, extraMessage);
  }

  public static invalidParams(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5011, extraMessage);
  }

  public static invalidNetwork(extraMessage = ""): IWeb3AuthError {
    return WalletInitializationError.fromCode(5013, extraMessage);
  }
}

/**
 * wallet login errors
 */

export class WalletLoginError extends Web3AuthError {
  protected static messages: ErrorCodes = {
    5000: "Custom",
    5111: "Failed to connect with wallet",
    5112: "Failed to disconnect from wallet",
    5113: "Wallet is not connected",
    5114: "Wallet popup has been closed by the user",
  };

  public constructor(code: number, message?: string) {
    // takes care of stack and proto
    super(code, message);

    // Set name explicitly as minification can mangle class names
    Object.defineProperty(this, "name", { value: "WalletLoginError" });
  }

  public static fromCode(code: number, extraMessage = ""): IWeb3AuthError {
    return new WalletLoginError(code, `${WalletLoginError.messages[code]}${extraMessage}`);
  }

  public static connectionError(extraMessage = ""): IWeb3AuthError {
    return WalletLoginError.fromCode(5111, extraMessage);
  }

  public static disconnectionError(extraMessage = ""): IWeb3AuthError {
    return WalletLoginError.fromCode(5112, extraMessage);
  }

  public static notConnectedError(extraMessage = ""): IWeb3AuthError {
    return WalletLoginError.fromCode(5113, extraMessage);
  }

  public static popupClosed(extraMessage = ""): IWeb3AuthError {
    return WalletLoginError.fromCode(5114, extraMessage);
  }
}
