import { DefaultTheme, ThemedCssFunction } from 'styled-components';

export const layoutState = ['leading', 'trailing'] as const;
export type TLayoutState = typeof layoutState[number];

export const typeState = ['email', 'external'] as const;
export type TTypeState = typeof typeState[number];

export interface LinkToProps {
    /**
     * what is the address you are linking to
     */
    address: string;

    /**
     * You can set custom text to the link, or leave blank to see the address
     */
    text?: string;

    /**
     * set to an email link or a link to another website
     */
    type: TTypeState;

    /**
     * whether or not the icon is present
     */
    hasIcon?: boolean;

    /**
     * whether or not the link has underline
     */
    hasUnderLine?: boolean;

    /**
     * whether or not the link should react on hover
     */
    hasHoverEffect?: boolean;

    /**
     * a styled css that specify the font to use for the link
     */
    font?: any;

    /**
     * set the position of the icon, or icon only
     */
    iconLayout?: TLayoutState;
}
