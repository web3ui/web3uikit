/// <reference types="react" />
import MoralisType from "moralis";
import { AuthenticateOptions, Authentication, Login, Signup } from "../../hooks/core/useMoralis/_useMoralisAuth";
import { SetUserData } from "../../hooks/core/useMoralis/utils/setUserData";
import { Web3EnableOptions } from "../../hooks/core/useMoralis/_useMoralisWeb3";
import { Environment } from "../../hooks/core/useMoralis/_useMoralisInit";
export interface AuthError extends Error {
    code: number;
}
export interface MoralisContextValue {
    Moralis: MoralisType;
    environment: Environment;
    appId: string | null;
    serverUrl: string | null;
    isInitialized: boolean;
    isInitializing: boolean;
    initialize: (options?: {
        serverUrl?: string;
        appId?: string;
    }) => void;
    authenticate: (options?: AuthenticateOptions) => Promise<MoralisType.User | undefined>;
    logout: () => Promise<void>;
    signup: Signup;
    login: Login;
    auth: Authentication;
    authError: AuthError | null;
    isAuthenticated: boolean;
    isUnauthenticated: boolean;
    isAuthenticating: boolean;
    hasAuthError: boolean;
    isLoggingOut: boolean;
    isAuthUndefined: boolean;
    setUserData: (data: SetUserData) => Promise<MoralisType.User | undefined>;
    user: MoralisType.User | null;
    _setUser: (user: MoralisType.User) => void;
    userError: null | Error;
    isUserUpdating: boolean;
    refetchUserData: () => Promise<MoralisType.User | undefined>;
    enableWeb3: (options?: Web3EnableOptions) => Promise<MoralisType.Web3Provider | undefined>;
    deactivateWeb3: () => Promise<void>;
    web3: MoralisType.MoralisWeb3Provider | null;
    isWeb3Enabled: boolean;
    web3EnableError: Error | null;
    isWeb3EnableLoading: boolean;
    chainId: string | null;
    account: string | null;
    network: string | null;
    connector: unknown | null;
    connectorType: string | null;
    provider: unknown | null;
}
export declare const MoralisContext: import("react").Context<MoralisContextValue | null>;
