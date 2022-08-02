import type { INodePub } from "@toruslabs/fetch-node-details";
import BN from "bn.js";
import { ec as EC } from "elliptic";
import { GetOrSetNonceResult, MetadataParams, RetrieveSharesResponse, SetCustomKeyOptions, TorusCtorOptions, TorusPublicKey, V1UserTypeAndAddress, V2UserTypeAndAddress, VerifierParams } from "./interfaces";
declare class Torus {
    metadataHost: string;
    allowHost: string;
    serverTimeOffset: number;
    enableOneKey: boolean;
    signerHost: string;
    network: string;
    protected ec: EC;
    constructor({ enableOneKey, metadataHost, allowHost, signerHost, serverTimeOffset, network, }?: TorusCtorOptions);
    static enableLogging(v?: boolean): void;
    static setAPIKey(apiKey: string): void;
    static setEmbedHost(embedHost: string): void;
    static isGetOrSetNonceError(err: unknown): boolean;
    /**
     * Note: use this function only for openlogin tkey account lookups.
     */
    getUserTypeAndAddress(endpoints: string[], torusNodePubs: INodePub[], { verifier, verifierId }: {
        verifier: string;
        verifierId: string;
    }, doesKeyAssign?: boolean): Promise<V1UserTypeAndAddress | V2UserTypeAndAddress>;
    setCustomKey({ privKeyHex, metadataNonce, torusKeyHex, customKeyHex }: SetCustomKeyOptions): Promise<void>;
    retrieveShares(endpoints: string[], indexes: number[], verifier: string, verifierParams: VerifierParams, idToken: string, extraParams?: Record<string, unknown>): Promise<RetrieveSharesResponse>;
    getMetadata(data: Omit<MetadataParams, "set_data" | "signature">, options?: RequestInit): Promise<BN>;
    generateMetadataParams(message: string, privateKey: BN): MetadataParams;
    setMetadata(data: MetadataParams, options?: RequestInit): Promise<string>;
    lagrangeInterpolation(shares: BN[], nodeIndex: BN[]): BN | null;
    generateAddressFromPrivKey(privateKey: BN): string;
    generateAddressFromPubKey(publicKeyX: BN, publicKeyY: BN): string;
    /**
     * Note: use this function only with custom auth, don't use to lookup openlogin accounts.
     */
    getPublicAddress(endpoints: string[], torusNodePubs: INodePub[], { verifier, verifierId }: {
        verifier: string;
        verifierId: string;
    }, isExtended?: boolean): Promise<string | TorusPublicKey>;
    /**
     * Internal functions for OneKey (OpenLogin v2), only call these functions if you know what you're doing
     */
    getOrSetNonce(X: string, Y: string, privKey?: BN, getOnly?: boolean): Promise<GetOrSetNonceResult>;
    getNonce(X: string, Y: string, privKey?: BN): Promise<GetOrSetNonceResult>;
    getPostboxKeyFrom1OutOf1(privKey: string, nonce: string): string;
}
export default Torus;
