import MoralisType from "moralis/types";
import { UseMoralisWeb3ApiCallOptions } from "../../core/useMoralisWeb3Api";
export interface ApiContractParams extends Omit<Parameters<typeof MoralisType.Web3API["native"]["runContractFunction"]>[0], "address" | "function_name" | "params" | "abi"> {
    address?: string;
    functionName: string;
    abi: any;
    params?: any;
}
export declare const useApiContract: ({ functionName, address, abi, chain, params }: ApiContractParams, options?: UseMoralisWeb3ApiCallOptions) => {
    runContractFunction: ({ throwOnError, onComplete, onError, onSuccess, params: fetchParams, }?: import("../../internal/_useResolveAsyncCall").ResolveCallOptions<string | null, {
        chain?: "eth" | "0x1" | "ropsten" | "0x3" | "rinkeby" | "0x4" | "goerli" | "0x5" | "kovan" | "0x2a" | "polygon" | "0x89" | "mumbai" | "0x13881" | "bsc" | "0x38" | "bsc testnet" | "0x61" | "avalanche" | "0xa86a" | "avalanche testnet" | "0xa869" | "fantom" | "0xfa" | undefined;
        subdomain?: string | undefined;
        providerUrl?: string | undefined;
        function_name: string;
    } & {
        address: string;
    }>) => Promise<string | null | undefined>;
    data: string | null;
    error: Error | null;
    isLoading: boolean;
    isFetching: boolean;
};
