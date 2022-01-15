export type Position = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    /**
     * The tooltip ID will be generated if not assigned
     */
    id?: string;

    /**
     * Set text to show in tooltip
     */
    text: string;

    /**
     * Set position of tooltip
     */
    position: Position;

    /**
     * Set children which should have a tooltip
     */
    children: Array<React.ReactNode>;
}
