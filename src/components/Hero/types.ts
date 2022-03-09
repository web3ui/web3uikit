export interface HeroProps {
    /**
     * the URL of a background image is needed
     */
    backgroundURL: string;

    /**
     * every hero needs to make a statement
     */
    title: string;

    /**
     * Batman needs a Robin
     */
    subTitle?: string;

    /**
     * a Hero element can take any content (like a call to action button)
     */
    children?: JSX.Element | JSX.Element[];

    /**
     * pass a color HEX or the background will be dark grey
     */
    backgroundColor?: string;

    /**
     * pass a color HEX or the text will be light grey
     */
    textColor?: string;

    /**
     * you can set an exact height for the hero, vh unit is advised for nice responsive results
     */
    height?: string;
}
