export interface BannerStripProps {
    /**
     * please add the text you want to show in the banner
     */
    text: string;

    /**
     * you can set the type of banner which changes its color
     */
    type?: 'error' | 'standard' | 'success' | 'warning';

    /**
     * do you want to display a button
     */
    buttonDisplayed?: boolean;

    /**
     * a function that will be called if the button is clicked
     */
    buttonClickEvent?: () => void;

    /**
     * if you are showing a button, you can set the text of the button in the banner
     */
    buttonText?: string;
}
