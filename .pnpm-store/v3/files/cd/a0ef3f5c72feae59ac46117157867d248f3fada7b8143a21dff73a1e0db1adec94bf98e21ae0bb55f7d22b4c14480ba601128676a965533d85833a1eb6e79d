import { post, setAPIKey, setEmbedHost } from "@toruslabs/http-helpers";
import stringify from "json-stable-stringify";

import { ec, keccak256 } from "./utils";

export type PubKeyParams = {
  pub_key_X: string;
  pub_key_Y: string;
};

export type MetadataParams = PubKeyParams & {
  set_data: {
    data: string;
    timestamp: string;
  };
  signature: string;
};

class MetadataStorageLayer {
  public metadataHost: string;

  public serverTimeOffset: number; // ms

  constructor(metadataHost = "https://metadata.tor.us", serverTimeOffset = 0) {
    this.metadataHost = metadataHost;
    this.serverTimeOffset = serverTimeOffset;
  }

  static setAPIKey(apiKey: string): void {
    setAPIKey(apiKey);
  }

  static setEmbedHost(embedHost: string): void {
    setEmbedHost(embedHost);
  }

  generateMetadataParams(message: string, privateKeyHex: string): MetadataParams {
    const key = ec.keyFromPrivate(privateKeyHex, "hex");
    const setData = {
      data: message,
      timestamp: Math.floor(this.serverTimeOffset + Date.now() / 1000).toString(16),
    };
    const sig = key.sign(keccak256(stringify(setData)));
    return {
      pub_key_X: key.getPublic().getX().toString("hex"),
      pub_key_Y: key.getPublic().getY().toString("hex"),
      set_data: setData,
      signature: Buffer.from(
        sig.r.toString(16, 64) + sig.s.toString(16, 64) + sig.recoveryParam?.toString(16).padStart(2, "0").slice(-2) ?? "00",
        "hex"
      ).toString("base64"),
    };
  }

  generatePubKeyParams(privateKeyHex: string): PubKeyParams {
    const key = ec.keyFromPrivate(privateKeyHex, "hex");
    return {
      pub_key_X: key.getPublic().getX().toString("hex"),
      pub_key_Y: key.getPublic().getY().toString("hex"),
    };
  }

  async setMetadata(data: MetadataParams, namespace: string | null, options?: RequestInit): Promise<string> {
    const params = namespace !== null ? { ...data, namespace } : data;
    const metadataResponse = await post<{ message: string }>(`${this.metadataHost}/set`, params, options, { useAPIKey: true });
    return metadataResponse.message;
  }

  async getMetadata(pubKey: PubKeyParams, namespace: string | null, options?: RequestInit): Promise<string> {
    const params = namespace !== null ? { ...pubKey, namespace } : pubKey;
    const metadataResponse = await post<{ message: string }>(`${this.metadataHost}/get`, params, options, { useAPIKey: true });
    return metadataResponse.message;
  }
}

export default MetadataStorageLayer;
