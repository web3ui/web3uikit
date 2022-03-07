import { variantType } from '../Typography/types';

export type colorState = 'normal' | 'success' | 'warning' | 'danger';

export interface BadgeProps {
    /**
     * Set the initial state for the Badge component
     */
    state?: colorState;
    /**
     * Add Text to display in the Badge
     */
    text: string;
    /**
     * Variant of text style
     */
    textVariant?: variantType;
}
