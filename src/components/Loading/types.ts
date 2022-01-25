export interface ILoadingProps {
    // The size of the spinner
    size?: number;

    // The color of the spinner's ring
    ringColor?: string;

    // The color of the spinner's ball
    ballColor?: string;

    // Text to be displayed underneath loader
    text?: string;

    // To place text component in column format or row format
    layout?: 'column' | 'row';
}
