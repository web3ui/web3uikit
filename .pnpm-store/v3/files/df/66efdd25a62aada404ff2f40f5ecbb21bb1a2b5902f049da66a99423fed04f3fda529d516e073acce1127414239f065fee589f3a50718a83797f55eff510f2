import { AbiType, StateMutabilityType } from "web3-utils";
export interface INodePub {
    X: string;
    Y: string;
}
export interface INodeDetails {
    currentEpoch: string;
    nodeListAddress: string;
    torusNodeEndpoints: string[];
    torusNodePub: INodePub[];
    torusIndexes: number[];
    updated: boolean;
}
export declare const ETHEREUM_NETWORK: {
    readonly ROPSTEN: "ropsten";
    readonly MAINNET: "mainnet";
    readonly POLYGON: "polygon-mainnet";
};
export declare type ETHEREUM_NETWORK_TYPE = typeof ETHEREUM_NETWORK[keyof typeof ETHEREUM_NETWORK];
export declare type NodeDetailManagerParams = {
    network?: ETHEREUM_NETWORK_TYPE | string;
    proxyAddress?: string;
};
export declare const abi: {
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    stateMutability: StateMutabilityType;
    type: AbiType;
}[];
