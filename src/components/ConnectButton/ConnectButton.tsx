// import { getEllipsisTxt } from 'helpers';
import React from 'react';
import { useMoralis } from 'react-moralis';
// import { NativeBalance } from '../NativeBalance';
import ConnectButtonStyles from './ConnectButton.styles';
// import Blockie from 'components/Blockie';
// import { Modal } from 'web3uikit';

const {
    WrapperStyled,
    TextStyled,
    ConnectButtonStyled,
    AccountInfoStyled,
    AddressStyled,
    BalanceBlockStyled,
} = ConnectButtonStyles;

const ConnectButton: React.FC = () => {
    const { authenticate, account, isAuthenticated } = useMoralis();

    if (!account || !isAuthenticated) {
        return (
            <WrapperStyled>
                <ConnectButtonStyled onClick={() => authenticate()}>
                    <TextStyled>Connect Wallet</TextStyled>
                </ConnectButtonStyled>
            </WrapperStyled>
        );
    }

    return (
        <WrapperStyled>
            <AccountInfoStyled>
                <BalanceBlockStyled>
                    {/* <NativeBalance style={{ margin: '0 8px 0 12px' }} /> */}
                </BalanceBlockStyled>
                <AddressStyled>
                    <TextStyled style={{ marginRight: '8px' }}>
                        {account}
                        {/* {account && getEllipsisTxt(account)} */}
                    </TextStyled>
                    {/* <Blockie scale={2.5} /> */}
                </AddressStyled>
            </AccountInfoStyled>
            {/* <Modal isVisible={true}>
                <p>x</p>
                <p>x</p>
            </Modal> */}
        </WrapperStyled>
    );
};

export default ConnectButton;
