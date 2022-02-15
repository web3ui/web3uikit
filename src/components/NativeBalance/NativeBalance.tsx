import React, { useEffect } from 'react';
import { useNativeBalance, useMoralis } from 'react-moralis';
import NativeBalanceStyles from './NativeBalance.styles';
import { NativeBalanceProps } from './types';

const { BalanceStyled } = NativeBalanceStyles;

const NativeBalance: React.FC<NativeBalanceProps> = ({
    params,
    options,
    style,
}) => {
    const { account, chainId } = useMoralis();
    const { data: balance, getBalances } = useNativeBalance(params, {
        autoFetch: false,
        ...options,
    });

    useEffect(() => {
        if (account && chainId) getBalances();
    }, [account, chainId]);

    if (!balance?.formatted || !account) return null;

    return <BalanceStyled style={style}>{balance.formatted}</BalanceStyled>;
};

export default NativeBalance;
