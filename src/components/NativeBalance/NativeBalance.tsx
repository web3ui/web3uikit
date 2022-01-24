import React from 'react';
import { useNativeBalance } from 'react-moralis';
import NativeBalanceStyles from './NativeBalance.styles';
import { NativeBalanceProps } from './types';

const { BalanceStyled } = NativeBalanceStyles;

const NativeBalance: React.FC<NativeBalanceProps> = ({
    params,
    options,
    style,
}) => {
    const { data: balance } = useNativeBalance(params, options);

    if (!balance?.formatted) return null;

    return <BalanceStyled style={style}>{balance.formatted}</BalanceStyled>;
};

export default NativeBalance;
