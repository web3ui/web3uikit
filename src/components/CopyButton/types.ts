export interface CopyButtonProps {
    text?: string | number;
    onCopy?: (e?: React.BaseSyntheticEvent) => void;
    revertIn?: number;
}
export type CopiedValue = string | null;
export type CopyFn = (text: string) => Promise<boolean>;
