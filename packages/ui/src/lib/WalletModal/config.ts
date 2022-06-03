import WalletConnect from './WalletIcons/WC';
import MathWallet from './WalletIcons/MathWallet';
import TokenPocket from './WalletIcons/TokenPocket';
import SafePal from './WalletIcons/SafePal';
import TrustWallet from './WalletIcons/TWT';
import Metamask from './WalletIcons/Metamask';

/**
 * We have here provider : 'metamask' but actually it's 'injected' type
 * Currently there is no type 'injected' in react-moralis
 * so it's temporary
 */

const connectors = [
    {
        title: 'Metamask',
        icon: Metamask,
        provider: 'metamask',
        priority: 1,
    },
    {
        title: 'WalletConnect',
        icon: WalletConnect,
        provider: 'walletconnect',
        priority: 2,
    },
    {
        title: 'Trust Wallet',
        icon: TrustWallet,
        provider: 'metamask',
        priority: 3,
    },
    {
        title: 'MathWallet',
        icon: MathWallet,
        provider: 'metamask',
        priority: 999,
    },
    {
        title: 'TokenPocket',
        icon: TokenPocket,
        provider: 'metamask',
        priority: 999,
    },
    {
        title: 'SafePal',
        icon: SafePal,
        provider: 'metamask',
        priority: 999,
    },
];

export default connectors;
