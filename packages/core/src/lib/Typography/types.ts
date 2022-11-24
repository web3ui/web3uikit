import { color } from '@web3uikit/styles';
import { CSSProperties } from 'react';

export interface TypographyProps {
    /**
     * Fontsize of the text, if provided it will override the native fontsize of the variant
     */
    fontSize?: string;

    /**
     * Variant of text style
     */

    variant?: variantType;

    /**
     * Font weight
     */
    weight?: weightType;

    /**
     * Monospace style if true
     */
    monospace?: boolean;

    /**
     * Italic style if true
     */
    italic?: boolean;

    /**
     * Color of the text
     */
    color?: typeof color | string;

    /**
     * Children text
     */
    children?: React.ReactNode;

    /**
     * Copies text to clipboard
     */
    copyable?: boolean;

    /**
     * To control the size of copy icon's
     */
    iconSize?: number;

    /**
     * On Clipboard copy if typography type is copyable
     */
    onCopy?: (e?: React.BaseSyntheticEvent) => void;

    /**
     * Can help with readability & accessibility if text spills over container or is truncated
     */
    title?: string;

    /**
     * Optional custom CSS
     */
    style?: CSSProperties;
}

export type variantType =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'subtitle1'
    | 'subtitle2'
    | 'body16'
    | 'body18'
    | 'caption14'
    | 'caption12'
    | 'caption10';

export type TStandardWeight =
    | 'semibold'
    | 'bold'
    | 'regular'
    | '600'
    | '400'
    | 'medium'
    | '500'
    | '550'
    | '700';

export type TCustomWeight = string & {};

export type weightType = TStandardWeight | TCustomWeight;
