export type Theme =
    | 'icon'
    | 'default'
    | 'visa'
    | 'mastercard'
    | 'amex'
    | 'diners';
export type Color = 'black' | 'white' | 'blue';
export type Size = 'small' | 'regular';

export interface LogoProps {
    /**
     * The logo theme
     */
    theme: Theme;

    /**
     * The color of the Moralis logo
     */
    color?: Color;

    /**
     * The size of the payment logo
     */
    size?: Size;
}
