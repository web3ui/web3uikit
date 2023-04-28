import React from 'react';
import { CSSProperties } from 'styled-components';
import { TCustomize } from '../../interfaces/customize';
import { ButtonProps } from '../Button';
import { TSlots } from '../InputNew/types';

export interface IBannerStripProps {
    /**
     * customize the banner
     */
    customize?: TCustomize;

    /**
     * set IDs to differentiate between different banners on your page
     */
    id: string;

    /**
     * to display close button
     */
    isCloseBtnVisible?: boolean;

    /**
     * specify the number of days you want to hide the component after close button is clicked (Uses local storage)
     */
    noOfDaysToHide?: number | null;

    /**
     * close button callback function
     */
    onCloseBtnClick?: () => void;

    /**
     * to set position of the banner strip
     */
    position?: 'fixed' | 'absolute' | 'relative';

    /**
     * slot content in, before or after this element
     */
    slots?: TSlots;

    /**
     * add CSS styles to the outer container, good for margin
     */
    style?: CSSProperties;

    /**
     * please add the text or any custom component you want to show in the banner
     */
    text: string | React.ReactNode;

    /**
     * set the type of banner which changes its color
     */
    type?: TBannerStripTypes;
}

export type TBannerStripTypes = 'error' | 'standard' | 'success' | 'warning';
