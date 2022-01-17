import { ReactNode } from 'react';
import { eColorTypes } from '../../utils/getColor';

export interface TypographyProps {
    /**
     * The tooltip ID will be generated if not assigned
     */
    type?: eColorTypes;

    textType: textType;

    fontType?: ITypographyFontType;

    fontStyle?: ITypographyFontStyle;

    children: ReactNode;
}

export type ITypographyFontType =
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 'initial'
    | 'inherit'
    | number;

export type ITypographyFontStyle =
    | 'normal'
    | 'italic'
    | 'oblique'
    | 'initial'
    | 'inherit';

export enum eTextType {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    P = 'text',
    BLOCK = 'block',
}
