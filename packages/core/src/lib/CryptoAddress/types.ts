import { variantType, TStandardWeight } from '../Typography';

export interface ICryptoAddressProps {
    typographyFontWeight?: TStandardWeight;
    typographyVariant?: variantType;
    walletAddress: string;
    walletColor?: string;
    walletUrl?: string;
}
