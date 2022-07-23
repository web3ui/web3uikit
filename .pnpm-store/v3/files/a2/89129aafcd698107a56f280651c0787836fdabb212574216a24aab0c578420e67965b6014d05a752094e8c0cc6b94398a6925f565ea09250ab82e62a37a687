import { Ecies } from "@toruslabs/eccrypto";
import MetadataStorageLayer, { PubKeyParams } from "./MetadataStorageLayer";
export declare type EciesHex = {
    iv: string;
    ephemPublicKey: string;
    ciphertext: string;
    mac: string;
};
export declare function encParamsHexToBuf(encParamsHex: EciesHex): Ecies;
export declare function encParamsBufToHex(encParams: Ecies): EciesHex;
export declare function encryptData(privKeyHex: string, d: unknown): Promise<string>;
export declare function decryptData<T>(privKeyHex: string, d: string): Promise<T>;
export declare function getAndDecryptData<T>(m: MetadataStorageLayer, privKeyHex: string, namespace: string): Promise<Record<string, T> | null>;
export declare function encryptAndSetData(m: MetadataStorageLayer, privKeyHex: string, d: Record<string, unknown>, namespace: string): Promise<void>;
export declare function setTorusShare(m: MetadataStorageLayer, webAuthnPubKey: PubKeyParams, webAuthnRefHex: string, subspace: string, subspaceData: unknown): Promise<void>;
export declare function setDeviceShare(m: MetadataStorageLayer, webAuthnRefHex: string, subspace: string, subspaceData: unknown): Promise<void>;
export declare function getTorusShare<T>(m: MetadataStorageLayer, webAuthnKeyHex: string, webAuthnRefHex: string, subspace: string): Promise<T | null>;
export declare function getDeviceShare<T>(m: MetadataStorageLayer, webAuthnRefHex: string, subspace: string): Promise<T | null>;
