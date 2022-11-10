import { TypographyProps, variantType } from '../Typography/types';

export type colorState = 'normal' | 'success' | 'warning' | 'danger' | 'custom';

type TTextProps = Pick<
    TypographyProps,
    'color' | 'italic' | 'monospace' | 'weight'
>;
export interface BadgeProps extends TTextProps {
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

    /**
     * background color used when state is set to custom
     */
    bgColor?: string;

    /**
     * set custom radius of the badge
     */
    borderRadius?: number;
}
