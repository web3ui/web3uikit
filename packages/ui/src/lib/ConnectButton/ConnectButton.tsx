import { IConnectWalletProps } from './types';
import Moralis from 'moralis';
import { Button } from '@web3uikit/core';
const ConnectWallet = ({
  text = 'Connect Wallet',
  authType: provider,
}: IConnectWalletProps) => {
  return (
    <Button
      theme="secondary"
      text={text}
      onClick={() => Moralis.enableWeb3({ provider })}
    />
  );
};

export default ConnectWallet;
