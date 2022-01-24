import Metamask from './WalletIcons/Metamask.svg';
import WalletConnect from './WalletIcons/wallet-connect.svg';
import MathWallet from './WalletIcons/MathWallet.svg';
import TokenPocket from './WalletIcons/TokenPocket.svg';
import SafePal from './WalletIcons/SafePal.svg';

export const connectors = [
    {
        title: 'Metamask',
        icon: Metamask,
        connectorId: 'injected',
        priority: 1,
    },
    {
        title: 'WalletConnect',
        icon: WalletConnect,
        connectorId: 'walletconnect',
        priority: 2,
    },
    {
        title: 'MathWallet',
        icon: MathWallet,
        connectorId: 'injected',
        priority: 999,
    },
    {
        title: 'TokenPocket',
        icon: TokenPocket,
        connectorId: 'injected',
        priority: 999,
    },
    {
        title: 'SafePal',
        icon: SafePal,
        connectorId: 'injected',
        priority: 999,
    },
];
