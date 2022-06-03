import ConnectWallet from "./ConnectButton";
import { IConnectWalletProps } from "./types";
export default {
  title: "1.Web3/NFT",
  component: ConnectWallet,
  argTypes: {
    onClick: {
      action: "Button Clicked",
    },
  },
};

export const Primary = (args: IConnectWalletProps) => (
  <ConnectWallet {...args} />
);
