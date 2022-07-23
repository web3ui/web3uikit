import { CHAIN_NAMESPACES, IWeb3Auth, SafeEventEmitterProvider, UserInfo } from "@web3auth/base";

export const PLUGIN_NAMESPACES = {
  ...CHAIN_NAMESPACES,
  MULTICHAIN: "multichain",
} as const;

export type PluginNamespace = typeof PLUGIN_NAMESPACES[keyof typeof PLUGIN_NAMESPACES];

export interface IPlugin {
  name: string;
  pluginNamespace: PluginNamespace;
  initWithProvider(provider: SafeEventEmitterProvider, userInfo: UserInfo): Promise<void>;
  initWithWeb3Auth(web3auth: IWeb3Auth): Promise<void>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
