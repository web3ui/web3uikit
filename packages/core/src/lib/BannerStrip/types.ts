import React from 'react';
import { CSSProperties } from 'styled-components';
import { ButtonProps } from '../Button';

export interface IBannerStripProps {
    /**
     * @deprecated do you want to display a button
     */
    buttonDisplayed?: boolean;

    /**
     * @deprecated set Button props
     */
    buttonConfig?: ButtonProps;

    /**
     * set id to differentiate between different banner on your page
     */
    id: string;

    /**
     * set custom border radius
     */
    borderRadius: string;

    /**
     * set custom height
     */
    height?: string;

    /**
     * set custom width
     */
    width?: string;

    /**
     * please add the text or any custom component you want to show in the banner
     */
    text: React.ReactNode;

    /**
     * you can set the type of banner which changes its color
     */
    type?: TBannerStripTypes;

    /**
     * set custom color only when type = custom
     */
    bgColor?: string;

    /**
     * to display close button
     */
    isCloseBtnVisible?: boolean;

    /**
     * close button callback function
     */
    onCloseBtnClick?: () => void;

    /**
     * to set position of the banner strip
     */
    position?: 'fixed' | 'absolute' | 'relative';

    /**
     * specify the number of days you want to hide the component after close button is clicked (Uses local storage)
     */
    noOfDaysToHide?: number | null;

    /**
     * add CSS styles, good for margin
     */
    style?: CSSProperties;
}

export type TBannerStripTypes =
    | 'error'
    | 'standard'
    | 'success'
    | 'warning'
    | 'custom';
