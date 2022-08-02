export declare type Environment = "browser" | "native";
export interface PluginSpecs {
    name: string;
    functions: string[];
}
export declare type GetMoralis = () => any;
/**
 * Hook that handles the initialization of Moralis
 */
export declare const _useMoralisInit: ({ appId, serverUrl, jsKey, dangerouslyUseOfMasterKey, plugins, environment, getMoralis, initializeOnMount, setAppId, setServerUrl, }: {
    appId?: string | null | undefined;
    serverUrl?: string | null | undefined;
    jsKey?: string | undefined;
    dangerouslyUseOfMasterKey?: string | undefined;
    plugins?: PluginSpecs[] | undefined;
    environment?: "browser" | "native" | undefined;
    getMoralis?: GetMoralis | undefined;
    initializeOnMount: boolean;
    setAppId: (appId: string) => void;
    setServerUrl: (serverUrl: string) => void;
}) => {
    isInitialized: boolean;
    isInitializing: boolean;
    initialize: ({ appId: newAppId, serverUrl: newServerUrl, }?: {
        appId?: string | undefined;
        serverUrl?: string | undefined;
    }) => void;
    Moralis: any;
    environment: "browser" | "native";
};
