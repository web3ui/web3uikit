export interface IChainSelectorProps {
    IsMultipleAllowed: boolean;
    providers: OptionType[];
    setValue: (value: DappConfig[]) => void;
    values: DappConfig[];

    /**
     * prevents the use of networks
     * with the same name
     */
    isCompatibilityChecked?: boolean;
}

export type OptionType = {
    chain?: string;
    chainId: string;
    name?: string;
    network?: string;
};

export type DappConfig = {
    chainId: string;
    maxRecordsPerCategory?: number;
    userSync?: boolean;
};

export type chainIdType =
    | '0x1'
    | '0x2a'
    | '0x3'
    | '0x4'
    | '0x5'
    | '0x539'
    | '0x89'
    | '0x13881'
    | '0x38'
    | '0x61'
    | '0x66eeb'
    | '0xa4b1'
    | '0xfa'
    | '0xa869'
    | '0xa86a';
