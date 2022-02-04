export interface ILoadingProps {
    // The size of the spinner
    size?: number;

    // Color of the spinner
    spinnerColor?: string;

    // To load text with spinner
    text?: string;

    // Where to place loaded text
    direction?: 'bottom' | 'right';
}
