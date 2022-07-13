import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useMoralis } from 'react-moralis';
import { Typography, TypographyProps } from '@web3uikit/core';

const BlockNumber: React.FC<TypographyProps> = (props) => {
    const { chainId, web3 } = useMoralis();

    const [{ chainID, block }, setChainBlock] = useState<{
        chainID?: string;
        block?: number;
    }>({ chainID: String(chainId) });

    const onBlock = useCallback(
        (block: number) => {
            setChainBlock((chainBlock) => {
                if (chainBlock.chainID === chainId) {
                    if (!chainBlock.block || chainBlock.block < block) {
                        return { chainID: chainId, block };
                    }
                }
                return chainBlock;
            });
        },
        [chainId, setChainBlock],
    );

    useEffect(() => {
        if (chainId && web3) {
            setChainBlock((chainBlock) =>
                chainBlock.chainID === chainId
                    ? chainBlock
                    : { chainID: chainId },
            );

            web3?.getBlockNumber()
                .then(onBlock)
                .catch((error) => {
                    console.error(
                        `Failed to get block number for chainId ${chainId}`,
                        error,
                    );
                });

            web3?.on('block', onBlock);
            return () => {
                web3?.removeListener('block', onBlock);
            };
        }

        return undefined;
    }, [chainId, web3, onBlock, setChainBlock]);

    const value = useMemo(
        () => ({
            value: chainID === chainId ? block : undefined,
            fastForward: (block: number) =>
                setChainBlock({ chainID: String(chainId), block }),
        }),
        [chainId, block, chainID],
    );

    return (
        <>
            <Typography {...props}>{value.value}</Typography>
        </>
    );
};

export default BlockNumber;
