import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { getNativeByChain } from '../../web3utils';
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
                    ticker: getNativeByChain(chainId),
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
