export interface CopyButtonProps {
    iconSize?: number;
    onCopy?: (e?: React.BaseSyntheticEvent) => void;
    revertIn?: number;
    text?: string | number;
}
export type CopiedValue = string | null;
export type CopyFn = (text: string) => Promise<boolean>;
