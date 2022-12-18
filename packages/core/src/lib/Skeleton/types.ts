export type Theme = 'image' | 'text' | 'subtitle';

export interface SkeletonProps {
    /**
     * Set the animation color for the 'shine'
     */
    animationColor?: string;

    /**
     * Set the background color of the skeleton element
     */
    backgroundColor?: string;

    /**
     * Border Radius of the element
     */
    borderRadius?: string;

    /**
     * Height of the element
     */
    height?: string;

    /**
     * Theme of the element
     */
    theme: Theme;

    /**
     * Width of the element
     */
    width?: string;
}
