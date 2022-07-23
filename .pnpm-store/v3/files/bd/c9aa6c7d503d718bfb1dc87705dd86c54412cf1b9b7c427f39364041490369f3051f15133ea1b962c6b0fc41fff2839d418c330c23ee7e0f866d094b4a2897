import { decrypt, Ecies, encrypt, getPublic } from "@toruslabs/eccrypto";

import MetadataStorageLayer, { PubKeyParams } from "./MetadataStorageLayer";
import { ec } from "./utils";

const WEBAUTHN_TORUS_SHARE = "webauthn_torus_share";
const WEBAUTHN_DEVICE_SHARE = "webauthn_device_share";

export type EciesHex = {
  iv: string;
  ephemPublicKey: string;
  ciphertext: string;
  mac: string;
};

export function encParamsHexToBuf(encParamsHex: EciesHex): Ecies {
  return {
    iv: Buffer.from(encParamsHex.iv, "hex"),
    ephemPublicKey: Buffer.from(encParamsHex.ephemPublicKey, "hex"),
    ciphertext: Buffer.from(encParamsHex.ciphertext, "hex"),
    mac: Buffer.from(encParamsHex.mac, "hex"),
  };
}

export function encParamsBufToHex(encParams: Ecies): EciesHex {
  return {
    iv: Buffer.from(encParams.iv).toString("hex"),
    ephemPublicKey: Buffer.from(encParams.ephemPublicKey).toString("hex"),
    ciphertext: Buffer.from(encParams.ciphertext).toString("hex"),
    mac: Buffer.from(encParams.mac).toString("hex"),
  };
}

export async function encryptData(privKeyHex: string, d: unknown): Promise<string> {
  const serializedDec = JSON.stringify(d);
  const serializedBuf = Buffer.from(serializedDec, "utf-8");
  const encParams = await encrypt(getPublic(Buffer.from(privKeyHex, "hex")), serializedBuf);
  const encParamsHex = encParamsBufToHex(encParams);
  const sData = JSON.stringify(encParamsHex);
  return sData;
}

export async function decryptData<T>(privKeyHex: string, d: string): Promise<T> {
  const encParamsHex: EciesHex = JSON.parse(d);
  const encParams = encParamsHexToBuf(encParamsHex);
  const keyPair = ec.keyFromPrivate(privKeyHex);
  const serializedBuf = await decrypt(Buffer.from(keyPair.getPrivate().toString("hex", 64), "hex"), encParams);
  const serializedDec = serializedBuf.toString("utf-8");
  const data: T = JSON.parse(serializedDec);
  return data;
}

export async function getAndDecryptData<T>(m: MetadataStorageLayer, privKeyHex: string, namespace: string): Promise<Record<string, T> | null> {
  const keyPair = ec.keyFromPrivate(privKeyHex);
  const pubKey = keyPair.getPublic();
  const serializedData = await m.getMetadata({ pub_key_X: pubKey.getX().toString(16), pub_key_Y: pubKey.getY().toString(16) }, namespace);
  if (!serializedData) {
    return null;
  }
  const data = await decryptData<T>(privKeyHex, serializedData);
  return data as Record<string, T>;
}

export async function encryptAndSetData(m: MetadataStorageLayer, privKeyHex: string, d: Record<string, unknown>, namespace: string): Promise<void> {
  const sData = await encryptData(privKeyHex, d);
  const metadataParams = m.generateMetadataParams(sData, privKeyHex);
  await m.setMetadata(metadataParams, namespace);
}

export async function setTorusShare(
  m: MetadataStorageLayer,
  webAuthnPubKey: PubKeyParams,
  webAuthnRefHex: string,
  subspace: string,
  subspaceData: unknown
): Promise<void> {
  const refKeyPair = ec.keyFromPrivate(webAuthnRefHex);
  const privKey = refKeyPair.getPrivate();
  const pubKey = ec.keyFromPublic({
    x: webAuthnPubKey.pub_key_X,
    y: webAuthnPubKey.pub_key_Y,
  });
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_TORUS_SHARE);
  let d: Record<string, unknown> = {};
  if (data) d = data;
  const serializedSubspaceData = JSON.stringify(subspaceData);
  const serializedSubspaceDataBuf = Buffer.from(serializedSubspaceData, "utf-8");
  const encSubspaceData = await encrypt(Buffer.from(pubKey.getPublic("hex"), "hex"), serializedSubspaceDataBuf);
  const encSubspaceDataHex = encParamsBufToHex(encSubspaceData);
  d[subspace] = encSubspaceDataHex;
  await encryptAndSetData(m, privKey.toString("hex", 64), d, WEBAUTHN_TORUS_SHARE);
}

export async function setDeviceShare(m: MetadataStorageLayer, webAuthnRefHex: string, subspace: string, subspaceData: unknown): Promise<void> {
  const keyPair = ec.keyFromPrivate(webAuthnRefHex);
  const privKey = keyPair.getPrivate();
  const data = await getAndDecryptData(m, webAuthnRefHex, WEBAUTHN_DEVICE_SHARE);
  let d: Record<string, unknown> = {};
  if (data) d = data;
  d[subspace] = subspaceData;
  await encryptAndSetData(m, privKey.toString("hex", 64), d, WEBAUTHN_DEVICE_SHARE);
}

export async function getTorusShare<T>(m: MetadataStorageLayer, webAuthnKeyHex: string, webAuthnRefHex: string, subspace: string): Promise<T | null> {
  const data = await getAndDecryptData<EciesHex>(m, webAuthnRefHex, WEBAUTHN_TORUS_SHARE);
  if (!data) return null;
  const encParamsHex = data[subspace];
  if (!encParamsHex) return null;
  const encParams = encParamsHexToBuf(encParamsHex);
  const keyPair = ec.keyFromPrivate(webAuthnKeyHex);
  const privKey = keyPair.getPrivate();
  const serializedSubspaceDataBuf = await decrypt(Buffer.from(privKey.toString("hex", 64), "hex"), encParams);
  const serializedSubspaceData = serializedSubspaceDataBuf.toString("utf-8");
  const subspaceData = JSON.parse(serializedSubspaceData);
  return subspaceData;
}

export async function getDeviceShare<T>(m: MetadataStorageLayer, webAuthnRefHex: string, subspace: string): Promise<T | null> {
  const data = await getAndDecryptData<T>(m, webAuthnRefHex, WEBAUTHN_DEVICE_SHARE);
  if (data) return data[subspace];
  return null;
}
