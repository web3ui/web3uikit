import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import NativeBalanceStyles from './NativeBalance.styles';
import { NativeBalanceProps } from './types';
const { BalanceStyled } = NativeBalanceStyles;

const NativeBalance: React.FC<NativeBalanceProps> = ({ style }) => {
    const { account, chainId, web3, Moralis } = useMoralis();
    const [balance, setBalance] = useState<{
        formatted?: string;
        balance?: unknown;
        ticker?: string;
    }>({});

    function ticker(chain: string) {
        switch (chain) {
            case '0x1' || '0x2a' || '0x3' || '0x4' || '0x5':
                return 'ETH';
            case '0x89' || '0x13881':
                return 'MATIC';
            case '0xa86a' || '0xa869':
                return 'AVAX';
            case '0x38' || '0x61':
                return 'BNB';
            case '0x539':
                return 'ETH';
            default:
                return '';
        }
    }

    useEffect(() => {
        if (account && chainId) {
            web3?.getBalance(account).then((result) => {
                // eslint-disable-next-line new-cap
                setBalance({
                    formatted: String(
                        Number(
                            Moralis.Units.FromWei(result.toString()),
                        ).toFixed(8),
                    ),
                    balance: result,
                    ticker: ticker(chainId),
                });
            });
        }
    }, [account, chainId]);

    if (!balance?.formatted || !account) return null;

    return (
        <BalanceStyled style={style}>
            <span style={{ margin: '0 8px 0 12px' }}>{balance.formatted}</span>
            {balance.ticker}
        </BalanceStyled>
    );
};

export default NativeBalance;
