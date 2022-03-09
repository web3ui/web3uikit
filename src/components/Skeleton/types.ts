export type Theme = 'image' | 'text' | 'subtitle';

export interface SkeletonProps {
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
