export const colorState = ['greenLight', 'redLight'] as const;
export type TColorState = typeof colorState[number];

// NOTE: the comment strings are very important
// Storybook pulls them to make our docs

export interface NewCompProps {
    /**
     * The New Component needs text for its green light state
     */
    textOn: string;

    /**
     * The New Component needs text for its red light state
     */
    textOff: string;

    /**
     * Set the initial state from the New Component
     */
    state?: TColorState;

    /**
     * Set the text to have an underline
     */
    hasUnderline?: boolean;

    /**
     * The callback function to be called on click
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
