export declare type PubKeyParams = {
    pub_key_X: string;
    pub_key_Y: string;
};
export declare type MetadataParams = PubKeyParams & {
    set_data: {
        data: string;
        timestamp: string;
    };
    signature: string;
};
declare class MetadataStorageLayer {
    metadataHost: string;
    serverTimeOffset: number;
    constructor(metadataHost?: string, serverTimeOffset?: number);
    static setAPIKey(apiKey: string): void;
    static setEmbedHost(embedHost: string): void;
    generateMetadataParams(message: string, privateKeyHex: string): MetadataParams;
    generatePubKeyParams(privateKeyHex: string): PubKeyParams;
    setMetadata(data: MetadataParams, namespace: string | null, options?: RequestInit): Promise<string>;
    getMetadata(pubKey: PubKeyParams, namespace: string | null, options?: RequestInit): Promise<string>;
}
export default MetadataStorageLayer;
