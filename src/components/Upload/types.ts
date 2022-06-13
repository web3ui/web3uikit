export const colorState = ['greenLight', 'redLight'] as const;
export type TColorState = typeof colorState[number];

// NOTE: the comment strings are very important
// Storybook pulls them to make our docs

export interface UploadProps {
    /**
     * Set theme  either 'textOnly' or 'withIcon'
     */
    theme: string;

    /**
     * The callback function to be called on click
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

    /**
     * boolean
     */
    pressed?: boolean;
}
