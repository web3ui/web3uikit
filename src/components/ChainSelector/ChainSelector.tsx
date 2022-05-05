import { Card } from '../Card';
import { chainIdType, IChainSelectorProps, OptionType } from './types';
import { CryptoLogos } from '../CryptoLogos';
import { Loading } from '../Loading';
import { Typography } from '../Typography';
import ChainSelectStyles, { getChainLogoName } from './ChainSelector.styles';
import color from '../../styles/colors';
import React, { FC, useMemo } from 'react';

const { GridStyled, CardContentStyled, GridElementStyled } = ChainSelectStyles;

const ChainSelector: FC<IChainSelectorProps> = ({
    IsMultipleAllowed,
    providers,
    values,
    setValue,
    isCompatibilityChecked,
    ...props
}) => {
    const getChainNameById = (chainId: string) =>
        providers.find((provider) => provider.chainId === chainId)?.chain;

    const isAllSelected = useMemo(() => {
        let availableChains: (string | undefined)[] = [];
        if (!isCompatibilityChecked) {
            availableChains = providers.map((o) => getChainNameById(o.chainId));
        } else {
            providers.forEach((provider) => {
                if (
                    isCompatibilityChecked &&
                    availableChains.includes(provider.chain)
                ) {
                    return;
                } else availableChains.push(provider.chain);
            });
        }
        const selectedChains = values.map((o) => getChainNameById(o.chainId));
        return availableChains.every((elem) => selectedChains.includes(elem));
    }, [providers, values, isCompatibilityChecked]);

    const checkIncompatibleChains = (providerOption: OptionType) => {
        if (!isCompatibilityChecked) return;
        return !!providers
            .filter(
                (o) =>
                    values.map((x) => x.chainId).includes(o.chainId) &&
                    o.chainId !== providerOption.chainId,
            )
            .some((c) => c.chain === providerOption.chain);
    };

    const toggleEvm = (chain: string) => {
        if (values.map((x) => x.chainId).includes(chain)) {
            // toggling same element
            const newArray = values.filter((e) => e.chainId !== chain);
            setValue(newArray);
        } else if (IsMultipleAllowed) {
            // adding if multiple elements are allowed
            const newArray = [
                ...values,
                {
                    chainId: chain,
                    maxRecordsPerCategory: 50,
                    userSync: true,
                },
            ];
            setValue(newArray);
        } else {
            // one card selection case
            setValue([
                {
                    chainId: chain,
                    maxRecordsPerCategory: 50,
                    userSync: true,
                },
            ]);
        }
    };

    const handleBatchSelect = () => {
        if (isAllSelected) setValue([]);
        else {
            const newArray: {
                chainId: string;
                maxRecordsPerCategory: number;
            }[] = [];
            const addedChains: (string | undefined)[] = [];
            providers.forEach((provider) => {
                if (
                    isCompatibilityChecked &&
                    addedChains.includes(provider.chain)
                ) {
                    return;
                }
                addedChains.push(provider.chain);
                newArray.push({
                    chainId: provider.chainId,
                    maxRecordsPerCategory: 50,
                });
            });
            setValue(newArray);
        }
    };

    return (
        <div data-testid={'test-chain-selector'} {...props}>
            {providers?.length > 0 ? (
                <GridStyled>
                    {providers.map((option) => (
                        <GridElementStyled
                            key={`crypto_card-${option.chainId}`}
                        >
                            <Card
                                title={option.chain}
                                description={option.name}
                                onClick={() => toggleEvm(option.chainId)}
                                isSelected={values
                                    .map((x) => x.chainId)
                                    .includes(option.chainId)}
                                isDisabled={checkIncompatibleChains(option)}
                            >
                                <CardContentStyled>
                                    <CryptoLogos
                                        chain={getChainLogoName(
                                            option.chainId as chainIdType,
                                        )}
                                    />
                                </CardContentStyled>
                            </Card>
                        </GridElementStyled>
                    ))}
                    {IsMultipleAllowed && (
                        <GridElementStyled>
                            <Card onClick={handleBatchSelect}>
                                <CardContentStyled>
                                    <Typography
                                        variant="subtitle2"
                                        color={color.blue}
                                    >
                                        {isAllSelected
                                            ? 'Deselect all'
                                            : 'Select all'}
                                    </Typography>
                                </CardContentStyled>
                            </Card>
                        </GridElementStyled>
                    )}
                </GridStyled>
            ) : (
                <Loading spinnerColor={color.blue} />
            )}
        </div>
    );
};

export default ChainSelector;
