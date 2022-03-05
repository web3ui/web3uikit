export type Position = 'top' | 'bottom' | 'left' | 'right';

export interface PopoverDropdownProps {
    /**
     * Set children which should have a tooltip
     */
    children: Array<React.ReactNode>;

    /**
     * The dropdown ID should be assigned
     */
    id?: string;

    /**
     * Moves the arrow +/- up/down/left/right (use responsibly, arrow can move the the X / Y axis indefinitely)
     */
    move?: number;

    /**
     * The parent element that triggers the dropdown selection
     */
    parent: React.ReactNode;

    /**
     * Set position of tooltip
     */
    position: Position;
}
