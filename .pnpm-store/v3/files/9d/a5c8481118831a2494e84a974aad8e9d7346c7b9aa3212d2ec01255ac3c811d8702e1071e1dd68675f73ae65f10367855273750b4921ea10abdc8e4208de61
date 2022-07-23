/// <reference types="react" />
import { BaseAdapterConfig, IWalletConnectExtensionAdapter } from "@web3auth/base";
import { ModalStatusType } from "../interfaces";
interface ExternalWalletsProps {
    hideExternalWallets: () => void;
    handleExternalWalletClick: (params: {
        adapter: string;
    }) => void;
    config: Record<string, BaseAdapterConfig>;
    walletConnectUri: string | undefined;
    showBackButton: boolean;
    modalStatus: ModalStatusType;
    wcAdapters: IWalletConnectExtensionAdapter[];
}
export default function ExternalWallet(props: ExternalWalletsProps): JSX.Element;
export {};
