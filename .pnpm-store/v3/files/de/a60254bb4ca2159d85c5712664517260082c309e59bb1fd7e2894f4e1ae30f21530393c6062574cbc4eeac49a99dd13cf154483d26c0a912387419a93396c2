import React from "react";
import { OnAccountChanged } from "../../hooks/core/useMoralis/_useMoralisAuth";
import { Environment, GetMoralis, PluginSpecs } from "../../hooks/core/useMoralis/_useMoralisInit";
interface MoralisProviderOptions {
    onAccountChanged?: OnAccountChanged;
}
export interface MoralisProviderCommonProps {
    children: React.ReactNode;
    jsKey?: string;
    dangerouslyUseOfMasterKey?: string;
    plugins?: PluginSpecs[];
    options?: MoralisProviderOptions;
    environment?: Environment;
    getMoralis?: GetMoralis;
}
export interface MoralisProviderInitializedProps extends MoralisProviderCommonProps {
    appId: string;
    serverUrl: string;
    initializeOnMount?: true;
}
export interface MoralisProviderNonInitializedProps extends MoralisProviderCommonProps {
    appId?: null | string;
    serverUrl?: null | string;
    initializeOnMount: false;
}
declare type MoralisProviderProps = MoralisProviderNonInitializedProps | MoralisProviderInitializedProps;
export declare const MoralisProvider: ({ children, appId: _appId, serverUrl: _serverUrl, jsKey, dangerouslyUseOfMasterKey, plugins, environment, getMoralis, options: { onAccountChanged }, initializeOnMount, }: MoralisProviderProps) => JSX.Element;
export {};
