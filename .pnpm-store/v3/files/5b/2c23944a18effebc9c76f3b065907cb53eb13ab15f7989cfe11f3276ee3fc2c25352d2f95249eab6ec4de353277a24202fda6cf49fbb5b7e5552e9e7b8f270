/// <reference types="react" />
import MoralisType from "moralis";
import { SetUserData } from "./utils/setUserData";
export interface MoralisSetUserDataOptions {
    onError?: (error: Error) => void;
    onSuccess?: (user: MoralisType.User) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
}
export interface RefetchUserOptions {
    onError?: (error: Error) => void;
    onSuccess?: (user: MoralisType.User) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
}
export declare const _useMoralisUser: (Moralis: MoralisType) => {
    setUserData: (data: SetUserData, { throwOnError, onComplete, onError, onSuccess, }?: MoralisSetUserDataOptions) => Promise<MoralisType.User<MoralisType.Attributes> | undefined>;
    setUser: import("react").Dispatch<import("react").SetStateAction<MoralisType.User<MoralisType.Attributes> | null>>;
    refetchUserData: ({ throwOnError, onComplete, onError, onSuccess, }?: RefetchUserOptions) => Promise<MoralisType.User<MoralisType.Attributes> | undefined>;
    user: MoralisType.User<MoralisType.Attributes> | null;
    _setUser: import("react").Dispatch<import("react").SetStateAction<MoralisType.User<MoralisType.Attributes> | null>>;
    isUserUpdating: boolean;
    userError: Error | null;
};
