export interface ILoadingProps {
    // Font size of loading text, by default it is half the size of the loader
    fontSize?: number;

    // Where to place loaded text
    direction?: 'bottom' | 'right';

    // Type of spinner
    spinnerType?: 'loader' | 'wave';

    // Color of the spinner
    spinnerColor?: string;

    // The size of the spinner
    size?: number;

    // To load text with spinner
    text?: string;
}
