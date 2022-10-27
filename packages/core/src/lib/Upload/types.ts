import { CSSProperties } from "react";

export const colorState = ['greenLight', 'redLight'] as const;
export type TColorState = typeof colorState[number];
export interface IUploadProps {
    /**
     * Set theme  either 'textOnly' or 'withIcon'
     */
    theme?: 'textOnly' | 'withIcon';

    /**
     * The callback function to be called onChange
     */
    onChange?: (file: Blob | undefined | null) => void;

    /**
     * Accepted file types (default: all)
     */
    acceptedFiles?: string;

    /**
     * Description text (default: Recommendation: minimum of 350px by 350px)
     */
    descriptionText?: string;

    /**
     * Optional custom CSS
     */
    style?: CSSProperties;
}

export interface DivStyledProps {
    isFileSelected: boolean;
}
