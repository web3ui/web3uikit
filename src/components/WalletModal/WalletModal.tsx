import React, { FC } from 'react';
import { Button } from '../Button';
import { Icon, iconTypes } from '../Icon';
import connectors from './config';
import WalletModalStyles from './WalletModal.styles';

const {
    WrapperStyled,
    WalletCardStyled,
    GridItemStyled,
    WalletLogo,
    WalletNameStyled,
    HeaderStyled,
    GridStyled,
    ModalStyled,
    TitleStyled,
} = WalletModalStyles;

const styles = {
    account: {
        height: '42px',
        padding: '0 15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        borderRadius: '12px',
        backgroundColor: 'rgb(244, 244, 244)',
        cursor: 'pointer',
    },
    text: {
        color: '#21BF96',
    },
    connector: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px 5px',
        cursor: 'pointer',
    },
};

const WalletModal: FC = () => {
    return (
        <WrapperStyled>
            <ModalStyled>
                <HeaderStyled>
                    <TitleStyled>Connect Wallet</TitleStyled>
                    <Button>
                        <Icon svg={iconTypes.x} />
                    </Button>
                </HeaderStyled>
                <GridStyled>
                    {connectors.map(({ title, icon, connectorId }, key) => (
                        <GridItemStyled>
                            <WalletCardStyled
                                // style={styles.connector}
                                key={key}
                                // onClick={async () => {
                                //     try {
                                //         await authenticate({ provider: connectorId });
                                //         window.localStorage.setItem(
                                //             'connectorId',
                                //             connectorId,
                                //         );
                                //         setIsAuthModalVisible(false);
                                //     } catch (e) {
                                //         console.error(e);
                                //     }
                                // }}
                            >
                                {/* <img src={icon} alt={title} style={styles.icon} /> */}
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
