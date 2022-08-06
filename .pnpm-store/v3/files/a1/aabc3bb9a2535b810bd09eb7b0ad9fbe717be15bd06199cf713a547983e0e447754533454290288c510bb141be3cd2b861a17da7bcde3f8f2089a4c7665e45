import MoralisType from "moralis";
export declare type ValidFileInput = number[] | {
    base64: string;
} | {
    size: number;
    type: string;
} | {
    uri: string;
};
export interface MoralisFileSaveOptions {
    type?: string;
    metadata?: Record<string, string>;
    tags?: Record<string, string>;
    saveIPFS?: boolean;
    onError?: (error: Error) => void;
    onSuccess?: (result: MoralisType.File) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
}
export declare const useMoralisFile: () => {
    error: Error | null;
    saveFile: (name: string, file: ValidFileInput, { type, metadata, tags, saveIPFS, throwOnError, onComplete, onError, onSuccess, }?: MoralisFileSaveOptions) => Promise<MoralisType.File | undefined>;
    isUploading: boolean;
    moralisFile: MoralisType.File | null;
};
