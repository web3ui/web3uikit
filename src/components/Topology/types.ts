import { eColorTypes } from '../../utils/getColor';

export interface TypographyProps {
    /**
     * The color type of the text
     */
    type?: eColorTypes;

    /**
     * The type of the text
     */
    textType?: eTextType;

    /**
     * The font weight of the text,
     * For more infromation visit
     * https://www.w3schools.com/cssref/pr_font_weight.asp
     */
    fontType?: ITypographyFontType;

    /**
     * Specifies the font style for a text.
     */
    fontStyle?: ITypographyFontStyle;

    /**
     * The text you want to render
     */
    children: React.ReactNode;
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
    TEXT = 'text',
    BLOCK = 'block',
}
