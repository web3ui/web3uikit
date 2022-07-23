import { SetUserData } from "./utils/setUserData";
import { AuthError } from "../../../context/MoralisContext/MoralisContext";
import MoralisType from "moralis";
import { Environment } from "./_useMoralisInit";
export declare enum AuthenticationState {
    UNDEFINED = "undefined",
    UNAUTHENTICATED = "unauthenticated",
    AUTHENTICATED = "authenticated",
    AUTHENTICATING = "authenticating",
    LOGGING_OUT = "logging_out",
    ERROR = "error"
}
export declare type Authentication = {
    state: AuthenticationState.UNDEFINED;
    error: null;
} | {
    state: AuthenticationState.UNAUTHENTICATED;
    error: null;
} | {
    state: AuthenticationState.AUTHENTICATED;
    error: null;
} | {
    state: AuthenticationState.AUTHENTICATING;
    error: null;
} | {
    state: AuthenticationState.ERROR;
    error: Error;
} | {
    state: AuthenticationState.LOGGING_OUT;
    error: null;
};
export declare type AuthenticateOptions = MoralisType.AuthenticationOptions & {
    onError?: (error: Error) => void;
    onSuccess?: (user: MoralisType.User) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
};
export interface SignupOptions {
    onError?: (error: Error) => void;
    onSuccess?: (user: MoralisType.User) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
}
export interface LoginOptions {
    onError?: (error: Error) => void;
    onSuccess?: (user: MoralisType.User) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
    usePost?: boolean;
}
export interface LogoutOptions {
    onError?: (error: Error) => void;
    onSuccess?: () => void;
    onComplete?: () => void;
    throwOnError?: boolean;
}
export declare type Login = (username: string, password: string, options?: LoginOptions) => Promise<MoralisType.User<MoralisType.Attributes> | undefined>;
export declare type Signup = (username: string, password: string, email?: string, otherFields?: SetUserData, options?: SignupOptions) => Promise<MoralisType.User<MoralisType.Attributes> | undefined>;
export declare type OnAccountChanged = (account: string) => void;
export interface UseMoralisAuthOptions {
    onAccountChanged?: OnAccountChanged;
    setUser?: (user: MoralisType.User | null) => void;
    Moralis: MoralisType;
    environment: Environment;
    _setIsWeb3Enabled?: (value: boolean) => void;
    _setIsWeb3EnableLoading?: (value: boolean) => void;
}
/**
 * Hook that handles all authentication logic and returns the correct auth state
 * and its functions
 */
export declare const _useMoralisAuth: (options: UseMoralisAuthOptions) => {
    auth: Authentication;
    authenticate: ({ onComplete, onError, onSuccess, throwOnError, ...rest }?: AuthenticateOptions) => Promise<MoralisType.User<MoralisType.Attributes> | undefined>;
    signup: Signup;
    login: Login;
    logout: ({ throwOnError, onError, onSuccess, onComplete, }?: LogoutOptions) => Promise<void>;
    authError: AuthError;
    isAuthenticated: boolean;
    isUnauthenticated: boolean;
    isAuthenticating: boolean;
    hasAuthError: boolean;
    isLoggingOut: boolean;
    isAuthUndefined: boolean;
};
