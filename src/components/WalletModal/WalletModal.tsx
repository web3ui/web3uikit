import Moralis from 'moralis/types';
import React, { FC, useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { Button } from '../Button';
import { iconTypes } from '../Icon';
import connectors from './config';
import { WalletModalProps } from './types';
import WalletModalStyles from './WalletModal.styles';

const {
    GridItemStyled,
    GridStyled,
    HeaderStyled,
    ModalStyled,
    TitleStyled,
    WalletCardStyled,
    WalletLogo,
    WalletNameStyled,
    WrapperStyled,
} = WalletModalStyles;

const WalletModal: FC<WalletModalProps> = ({ isOpened = true }) => {
    const { authenticate } = useMoralis();
    const [isOpenedState, setIsOpenedState] = useState(isOpened);

    useEffect(() => setIsOpenedState(isOpened), [isOpened]);

    function connectWallet(connectorId: Moralis.Web3ProviderType) {
        // to avoid problems in Next.JS apps because of localStorage
        if (typeof window == 'undefined') return;

        authenticate({
            provider: connectorId,
            onSuccess: () => {
                window.localStorage.setItem('connectorId', connectorId);
                setIsOpenedState(false);
            },
        });
    }

    if (!isOpenedState) return null;

    return (
        <WrapperStyled>
            <ModalStyled>
                <HeaderStyled>
                    <TitleStyled>Connect Wallet</TitleStyled>
                    <Button
                        icon={iconTypes.x}
                        iconLayout="icon-only"
                        theme="outline"
                        onClick={() => setIsOpenedState(!isOpenedState)}
                    />
                </HeaderStyled>
                <GridStyled>
                    {connectors.map(({ title, icon, connectorId }, key) => (
                        <GridItemStyled key={key}>
                            <WalletCardStyled
                                onClick={() =>
                                    connectWallet(
                                        connectorId as Moralis.Web3ProviderType,
                                    )
                                }
                            >
                                <WalletLogo src={icon} alt={title} />
                                <WalletNameStyled>{title}</WalletNameStyled>
                            </WalletCardStyled>
                        </GridItemStyled>
                    ))}
                </GridStyled>
            </ModalStyled>
        </WrapperStyled>
    );
};

export default WalletModal;
