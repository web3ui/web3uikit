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

export interface ITruncateStringProps {
    /**
     * String to replace the truncated section
     */
    replaceString?: string;
    /**
     * String to Truncate according to screen width
     */
    text: string;
    /**
     * Percentage of characters(approx) to remain after truncate
     */
    percentageOfCharsAfterTrunc?: number;
}

export type TStringTruncate = {
    /**
     * Text to truncate
     */
    text: string;
    /**
     * String to replace the truncated section
     */
    replaceString: string;
    /**
     * to store widths for calculating if text should be truncated or not
     */
    measurements: {
        /**
         * Width of text component
         */
        text: number;
        /**
         * Width of parent component (which contains text)
         */
        component: number;
        /**
         * Width of replace string component
         */
        replace: number;
    };
    /**
     * Percentage of characters from that should remain after truncate (approx)
     */
    leftPercentage: number;
};

export type TDivWrapper = {
    /**
     * text is hidden
     */
    isHidden: boolean;

    /**
     * text is multiline
     */
    isMultiline: boolean;
};
