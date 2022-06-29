export type Position = 'top' | 'bottom' | 'left' | 'right';

export interface IPopoverDropdownProps {
    /**
     * Set a custom background color
     */
    backgroundColor?: string;

    /**
     * Pass elements as an array to be rendered inside the popover
     */
    children: React.ReactNode[];

    /**
     * You can set and ID for your element
     */
    id?: string;

    /**
     * The parent element that triggers the popover to show on hover
     */
    parent: React.ReactNode;

    /**
     * Set position of tooltip
     */
    position?: Position;

    /**
     * Set a width value, it will grow if needed
     */
    width?: string;

    /**
     * This prop has been depreciated and will be fully removed soon, do not use
     */
    move?: number;

    /**
     * This prop has been depreciated and will be fully removed soon, do not use
     */
    moveBody?: number;
}
