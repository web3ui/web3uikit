export type Theme = 'icon' | 'default' | 'visa' | 'mastercard';
export type Color = 'black' | 'white';
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
