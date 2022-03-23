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
     * this is a string to set the border radius of the hero container eg: '0px', '20px', '10rem' etc 
     * the default is undefined
     */
    rounded?: string | undefined;

    /**
     * this is used to set the position for the content of the hero
     * the default is center
     */
    align?: 'left' | 'right' | 'center';

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
