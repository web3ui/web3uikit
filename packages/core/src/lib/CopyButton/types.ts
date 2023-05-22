import { TCustomize } from '../../interfaces/customize';

export interface CopyButtonProps {
    fill?: string;
    iconSize?: number;
    onCopy?: (e?: React.BaseSyntheticEvent) => void;
    revertIn?: number;
    text?: string | number;
    hasTooltip?: boolean;
    customize?: TCustomize;
}
export interface CopyButtonIconProps {
    fill?: string;
    iconSize?: number;
    copied: boolean;
}

export type CopiedValue = string | null;
export type CopyFn = (text: string) => Promise<boolean>;
