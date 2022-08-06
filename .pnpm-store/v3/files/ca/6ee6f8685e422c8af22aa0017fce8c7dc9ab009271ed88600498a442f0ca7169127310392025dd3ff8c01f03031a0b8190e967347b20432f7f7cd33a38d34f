import MoralisType from "moralis";
export interface MoralisObjectSaveOptions {
    cascadeSave?: boolean;
    context?: unknown;
    onError?: (error: Error) => void;
    onSuccess?: (result: MoralisType.Object) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
}
export declare type MoralisObjectSaveData = Record<string, unknown>;
/**
 * A hook for making/saving new Moralis Objects
 */
export declare const useNewMoralisObject: (objectClassName: string) => {
    isSaving: boolean;
    object: MoralisType.Object<MoralisType.Attributes> | null;
    error: Error | null;
    save: (data?: MoralisObjectSaveData, { cascadeSave, throwOnError, context, onSuccess, onComplete, onError, }?: MoralisObjectSaveOptions) => Promise<any>;
};
