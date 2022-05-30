import ConnectWallet from './ConnectButton';
import { IConnectWalletProps } from './types';
export default {
  title: 'UI/ConnectButton',
  component: ConnectWallet,
  argTypes: {
    onClick: {
      action: 'Button Clicked',
    },
  },
};

export const Primary = (args: IConnectWalletProps) => (
  <ConnectWallet {...args} />
);
