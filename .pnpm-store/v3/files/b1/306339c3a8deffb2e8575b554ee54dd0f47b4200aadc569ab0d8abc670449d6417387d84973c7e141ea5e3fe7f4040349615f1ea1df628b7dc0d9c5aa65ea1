/// <reference types="react" />
import type { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { ExternalWalletEventType, SocialLoginEventType } from "../interfaces";
interface ModalProps {
    stateListener: SafeEventEmitter;
    appLogo?: string;
    version: string;
    handleSocialLoginClick: (params: SocialLoginEventType) => void;
    handleExternalWalletClick: (params: ExternalWalletEventType) => void;
    handleShowExternalWallets: (externalWalletsInitialized: boolean) => void;
    closeModal: () => void;
}
export default function Modal(props: ModalProps): JSX.Element;
export {};
