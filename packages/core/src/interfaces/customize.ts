import { TStandardWeight } from '../lib';

export type TCustomize = {
    /**
     * Custom color, HEX or rgba is best
     */
    backgroundColor?: string;

    /**
     * Border styles: width style color. EG: 3px solid red
     */
    border?: string;

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
     * Custom size, number of px
     */
    fontWeight?: TStandardWeight;

    /**
     * Lighten or darken the background on hover
     */
    onHover?: 'lighten' | 'darken';

    /**
     * Custom padding, EG 10px 20px
     */
    padding?: string;
};
