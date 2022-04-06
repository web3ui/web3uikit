import color from '../../styles/colors';
import { TIconType } from '../Icon/collection';
import { Typography } from '../Typography';

export interface ICredentialsProps extends ICredentialsHeaderProps {
    /**
     * if true displays Copy Button
     */
    hasCopyButton?: boolean;

    /**
     * if true displays Hide Button
     */
    hasHideButton?: boolean;

    /**
     * replaced text in case if value is hidden
     * default is "•••••••••••••••••••••••••••••••"
     */
    hiddenText?: string;

    /**
     * is hidden state
     */
    isHidden?: boolean;

    /**
     * displayable text
     */
    text: string;

    /**
     * color of the text
     */
    textColor?: string | typeof color;

    /**
     * width of component
     * default is "auto"
     */
    width?: string;
}
export interface ICredentialsHeaderProps {
    /**
     * header text
     */
    title?: string | typeof Typography;

    /**
     * color of the title
     */
    titleColor?: string | typeof color;

    /**
     * header Icon
     */
    icon?: TIconType;

    /**
     * header Icon color
     */
    iconColor?: string | typeof color;

    /**
     * header Icon size
     */
    iconSize?: number;
}
