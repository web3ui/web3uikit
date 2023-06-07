import { variantType, TStandardWeight } from '../Typography';

export interface ICryptoAddressProps {
    typographyFontWeight?: TStandardWeight;
    typographyVariant?: variantType;
    /**
     * text to display to the users, should be some sort of status
     */
    walletAddress: string;
    walletColor?: string;
    walletUrl?: string;
}
