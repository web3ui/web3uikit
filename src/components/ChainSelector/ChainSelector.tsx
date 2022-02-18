import React, { FC, useEffect, useState } from 'react';
import { useChain, useMoralis } from 'react-moralis';
import { Select } from '../Select';
import defaultChainList from './defaultChainList';

const ChainSelector: FC = () => {
    const { switchNetwork, chainId, chain } = useChain();
    const { enableWeb3, isWeb3Enabled } = useMoralis();
    const [selectedIndex, setSelectedIndex] = useState<any>();

    const handleChainClick = async (e: any) => {
        console.log('switch to: ', e.id);
        if (!isWeb3Enabled) await enableWeb3();
        switchNetwork(e.id);
    };

    useEffect(() => {
        if (!chainId) return;
        for (let i = 0; i < defaultChainList.length; i++) {
            if (defaultChainList[i].id === chainId) setSelectedIndex(i);
        }
        console.log('current chainId: ', chainId);
    }, [chainId]);

    console.log('selectedIndex: ', selectedIndex);

    return (
        <div>
            <Select
                width="max-content"
                options={defaultChainList}
                onChange={handleChainClick}
                defaultOptionIndex={selectedIndex}
            />
        </div>
    );
};

export default ChainSelector;
