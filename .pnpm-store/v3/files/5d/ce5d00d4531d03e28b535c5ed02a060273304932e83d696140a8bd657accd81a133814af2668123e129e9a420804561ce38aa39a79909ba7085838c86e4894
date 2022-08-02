/// <reference types="node" />
import { KeyAssignInput, KeyLookupResult } from "./interfaces";
export declare class GetOrSetNonceError extends Error {
}
export declare const kCombinations: (s: number | number[], k: number) => number[][];
export declare const thresholdSame: <T>(arr: T[], t: number) => T;
export declare const keyLookup: (endpoints: string[], verifier: string, verifierId: string) => Promise<KeyLookupResult>;
export declare const waitKeyLookup: (endpoints: string[], verifier: string, verifierId: string, timeout: number) => Promise<KeyLookupResult>;
export declare const keyAssign: ({ endpoints, torusNodePubs, lastPoint, firstPoint, verifier, verifierId, signerHost, network, }: KeyAssignInput) => Promise<void>;
export declare function keccak256(a: string | Buffer): string;
