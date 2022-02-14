import WalletConnect from './WalletIcons/WC';
import MathWallet from './WalletIcons/MathWallet';
import TokenPocket from './WalletIcons/TokenPocket';
import SafePal from './WalletIcons/SafePal';
import TrustWallet from './WalletIcons/TWT';
import Metamask from './WalletIcons/Metamask';

/**
 * We have here connectorId : 'metamask' but actually it's 'injected' type
 * Currently there is no type 'injected' in react-moralis
 * so it's temporary
 */

const connectors = [
    {
        title: 'Metamask',
        icon: Metamask,
        connectorId: 'metamask',
        priority: 1,
    },
    {
        title: 'WalletConnect',
        icon: WalletConnect,
        connectorId: 'walletconnect',
        priority: 2,
    },
    {
        title: 'Trust Wallet',
        icon: TrustWallet,
        connectorId: 'metamask',
        priority: 3,
    },
    {
        title: 'MathWallet',
        icon: MathWallet,
        connectorId: 'metamask',
        priority: 999,
    },
    {
        title: 'TokenPocket',
        icon: TokenPocket,
        connectorId: 'metamask',
        priority: 999,
    },
    {
        title: 'SafePal',
        icon: SafePal,
        connectorId: 'metamask',
        priority: 999,
    },
];

export default connectors;
