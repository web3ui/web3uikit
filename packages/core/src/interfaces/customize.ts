export type TCustomize = {
    /**
     * Custom color, HEX or rgba is best
     */
    backgroundColor?: string;

    /**
     * Border radius, any valid value
     */
    borderRadius?: string;

    /**
     * Custom color, will change text color and icon fill
     */
    color?: string;

    /**
     * Custom size, number of px
     */
    fontSize?: string;

    /**
     * Lighten or darken the background on hover
     */
    onHover?: 'lighten' | 'darken';

    /**
     * Custom padding, EG 10px 20px
     */
    padding?: string;
};
