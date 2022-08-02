import BaseController from "../BaseController";
import { BaseConfig } from "../interfaces";
import { hashMessage, signMessage } from "../utils";
import { KeyringControllerState } from "./IKeyringController";
export class BaseKeyringController<C extends BaseConfig, S extends KeyringControllerState> extends BaseController<C, S> {
  constructor({ config = {}, state }: { config: Partial<C>; state?: Partial<S> }) {
    super({ config, state });
    this.defaultState = {
      wallets: state.wallets ?? [],
    } as S;
    this.initialize();
  }

  // for signing auth message
  signAuthMessage(address: string, message: string): string {
    const keyring = this.state.wallets.find((x) => x.address === address);
    if (!keyring) {
      throw new Error("key does not exist");
    }
    const hashedMessage = hashMessage(message).toString("hex");
    const rawMessageSig = signMessage(keyring.privateKey, hashedMessage);
    return rawMessageSig;
  }
}
