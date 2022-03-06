import { variantType } from '../Typography/types';

export type colorState = 'normal' | 'success' | 'warning' | 'danger';

export interface BadgeProps {
    /**
     * Add Text to display in the Badge
     */
    text: string;

    /**
     * Variant of text style
     */
    textVariant?: variantType;

    /**
     * Set the initial state for the Badge component
     */
    state?: colorState;
}
