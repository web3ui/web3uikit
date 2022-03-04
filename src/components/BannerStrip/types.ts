import { ButtonProps } from '../Button';

export interface BannerStripProps {
    /**
     * do you want to display a button
     */
    buttonDisplayed?: boolean;

    /**
     * set Button props
     */
    buttonConfig?: ButtonProps;

    /**
     * set custom height
     */
    height?: string;

    /**
     * please add the text you want to show in the banner
     */
    text: string;

    /**
     * you can set the type of banner which changes its color
     */
    type?: 'error' | 'standard' | 'success' | 'warning';
}
