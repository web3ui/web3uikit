import { JRPCMiddleware } from "@toruslabs/openlogin-jrpc";
import { WalletMiddlewareOptions } from "./walletMidddleware";
export declare type IProviderHandlers = WalletMiddlewareOptions;
export declare function createEthMiddleware(providerHandlers: IProviderHandlers): JRPCMiddleware<unknown, unknown>;
export interface AddEthereumChainParameter {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: 18;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
}
export interface IChainSwitchHandlers {
    addChain: (params: AddEthereumChainParameter) => Promise<void>;
    switchChain: (params: {
        chainId: string;
    }) => Promise<void>;
}
export declare function createChainSwitchMiddleware({ addChain, switchChain }: IChainSwitchHandlers): JRPCMiddleware<unknown, unknown>;
export interface IAccountHandlers {
    updatePrivatekey: (params: {
        privateKey: string;
    }) => Promise<void>;
}
export declare function createAccountMiddleware({ updatePrivatekey }: IAccountHandlers): JRPCMiddleware<unknown, unknown>;
