import { TypographyProps } from '../Typography';

export const layoutState = ['leading', 'trailing', 'none'] as const;
export type TLayoutState = typeof layoutState[number];

export const typeState = ['email', 'external', 'internal'] as const;
export type TTypeState = typeof typeState[number];

type TTextProps = Pick<
    TypographyProps,
    | 'color'
    | 'variant'
    | 'italic'
    | 'monospace'
    | 'weight'
    | 'fontSize'
    | 'style'
>;

export interface LinkToProps extends TTextProps {
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
    type?: TTypeState;

    /**
     * set the position of the icon, or icon only
     */
    iconLayout?: TLayoutState;

    /**
     * Is link underlined
     */
    isUnderlined?: boolean;

    /**
     * set the icon color
     */
    iconColor?: string;

    /**
     * A function that will be called if the link is clicked
     */

    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;

    /**
     * set a custom icon
     */
    icon?: JSX.Element;
}
