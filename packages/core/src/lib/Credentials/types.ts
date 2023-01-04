import { color } from '@web3uikit/styles';
import { TCustomize } from '../../interfaces/customize';
import { Typography } from '../Typography';
import { CopyButtonProps } from '../CopyButton';

type TCopyButtonProps = Pick<CopyButtonProps, 'onCopy'>;

export interface ICredentialsProps
    extends ICredentialsHeaderProps,
        TCopyButtonProps {
    /**
     * Customize the credentials
     */
    customize?: TCustomize;

    /**
     * if true displays Copy Button
     */
    hasCopyButton?: boolean;

    /**
     * if true displays Hide Button
     */
    hasHideButton?: boolean;

    /**
     * credentials copy and hide icon has tooltips
     */
    hasIconTooltip?: boolean;

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
     * This event will fire when hideButton clicked to reveal hidden text only
     */
    onReveal?: () => void;

    /**
     * displayable text
     */
    text: string;

    /**
     * color of the text
     */
    textColor?: string;

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
    icon?: JSX.Element;
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

    /**
     * color of text
     */
    textColor: string;

    /**
     * size of font
     */
    fontSize: string;
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
