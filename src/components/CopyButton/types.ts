export interface CopyButtonProps {
    text?: string | number;
    onCopy?: (e?: React.BaseSyntheticEvent) => void;
}
export type CopiedValue = string | null;
export type CopyFn = (text: string) => Promise<boolean>;
