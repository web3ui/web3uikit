import { TIconType } from '../../components/Icon/collection';

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
    size?: 'small' | 'regular' | 'large';

    /**
     * The text to display in the button
     */
    text?: string;

    /**
     * Set the color to show its importance to the user
     */
    theme?: 'primary' | 'outline' | 'secondary' | 'colored' | 'translucent';

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
     * import { iconTypes } from "../../components/Icon/collection"
     */
    icon?: TIconType;

    /**
     * set an icon position, or maybe show only the icon
     */
    iconLayout?: 'leading' | 'trailing' | 'icon-only';

    /**
     * set the button to be 100% width
     */
    isFullWidth?: boolean;

    /**
     * this is mostly like disabled mode except it gives the user a good visual indicator that something is loading
     */
    isLoading?: boolean;

    /**
     * loading text
     */
    loadingText?: string;
}
