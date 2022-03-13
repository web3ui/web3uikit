import React, {useEffect, useState} from 'react';
import { useMoralis } from 'react-moralis';
import NativeBalanceStyles from './NativeBalance.styles';
import { NativeBalanceProps } from './types';

const { BalanceStyled } = NativeBalanceStyles;

const NativeBalance: React.FC<NativeBalanceProps> = ({
    style,
}) => {
    const { account, chainId, web3 } = useMoralis();
    const [balance, setBalance] = useState<{ formatted?: string, balance?: unknown }>({});

    useEffect(() => {
        if (account && chainId) {
            web3?.getBalance(account).then((result) => {
                setBalance({ formatted: String((result.toNumber() / Math.pow(10, 18)).toFixed(8)), balance: result});
            });
        }
    }, [account, chainId]);

    if (!balance?.formatted || !account) return null;

    return <BalanceStyled style={style}>{ balance.formatted }</BalanceStyled>;
};

export default NativeBalance;
