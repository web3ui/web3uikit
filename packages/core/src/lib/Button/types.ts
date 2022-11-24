import React from 'react';
import { TCustomize } from '../../interfaces/customize';
import { ILoadingProps } from '../Loading';

export interface ButtonProps {
    /**
     * The button ID will generated if not assigned
     */
    id?: string;

    /**
     * the function to be called on click
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

    /**
     * set the button to be interactive, or not
     */
    disabled?: boolean;

    /**
     * What size should the button be
     */
    size?: 'small' | 'regular' | 'large' | 'xl';

    /**
     * The text to display in the button
     */
    text?: string;

    /**
     * Set the color to show its importance to the user
     */
    theme?:
        | 'colored'
        | 'custom'
        | 'link'
        | 'outline'
        | 'primary'
        | 'secondary'
        | 'text'
        | 'translucent';

    /**
     * If 'theme' is set to 'colored', you can choose the color from these options
     */
    color?: 'blue' | 'green' | 'yellow' | 'red';

    /**
     * Set the HTML button type for form interaction
     */
    type?: 'button' | 'submit' | 'reset';

    /**
     * set an icon to show inside the button
     */
    icon?: JSX.Element;

    /**
     * set an icon position, or maybe show only the icon
     */
    iconLayout?: 'leading' | 'trailing' | 'icon-only';

    /**
     * set the icon color
     */
    iconColor?: string;

    /**
     * set the button to be 100% width
     */
    isFullWidth?: boolean;

    /**
     * this is mostly like disabled mode except it gives the user a good visual indicator that something is loading
     */
    isLoading?: boolean;

    /**
     * Text to display when button is in loading state
     */
    loadingText?: string;

    /**
     * Loading Props, the props to send to the loading component
     */
    loadingProps?: ILoadingProps;

    /**
     * Border radius prop, allows a button to have a custom border radius
     */
    radius?: number;

    /**
     * The background color is set to `transparent` and the hover effect is disabled
     */
    isTransparent?: boolean;

    /**
     * Customize the button
     */
    customize?: TCustomize;

    /**
     * Optional custom CSS
     */
    style?: React.CSSProperties;
}
