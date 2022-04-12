import Metamask from './WalletIcons/Metamask.svg';
import WalletConnect from './WalletIcons/wallet-connect.svg';
import MathWallet from './WalletIcons/MathWallet.svg';
import TokenPocket from './WalletIcons/TokenPocket.svg';
import SafePal from './WalletIcons/SafePal.svg';

export const connectors = [
    {
        title: 'Metamask',
        icon: Metamask,
        provider: 'injected',
        priority: 1,
    },
    {
        title: 'WalletConnect',
        icon: WalletConnect,
        provider: 'walletconnect',
        priority: 2,
    },
    {
        title: 'MathWallet',
        icon: MathWallet,
        provider: 'injected',
        priority: 999,
    },
    {
        title: 'TokenPocket',
        icon: TokenPocket,
        provider: 'injected',
        priority: 999,
    },
    {
        title: 'SafePal',
        icon: SafePal,
        provider: 'injected',
        priority: 999,
    },
];
