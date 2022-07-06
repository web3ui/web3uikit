export const colorState = ['greenLight', 'redLight'] as const;
export type TColorState = typeof colorState[number];
export interface UploadProps {
    /**
     * Set theme  either 'textOnly' or 'withIcon'
     */
    theme?: 'textOnly' | 'withIcon';

    /**
     * The callback function to be called onChange
     */

    onChange?: (file: Blob | null) => void;
}

export interface DivStyledProps {
    isFileSelected: boolean;
}
