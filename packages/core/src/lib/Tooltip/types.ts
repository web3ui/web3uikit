import { TCustomize } from '../../interfaces/customize';

export type Position = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
    /**
     * Set children which should have a tooltip
     */
    children: Array<React.ReactNode> | React.ReactNode;

    /**
     * Set element/text that will be shown within the tooltip
     */
    content: JSX.Element | string;

    /**
     * Set position of tooltip
     */
    position: Position;

    /**
     * Set the max width of the tooltip
     */
    maxWidth?: number;

    /**
     * Set the min width of the tooltip
     */
    minWidth?: number;

    /**
     * Moves the arrow +/- up/down/left/right (use responsibly, arrow can move the the X / Y axis indefinitely)
     */
    move?: number;

    /**
     * Moves the body +/- up/down/left/right (use responsibly, arrow can move the the X / Y axis indefinitely)
     */
    moveBody?: number;

    /**
     * Set color of the tooltip content background
     */
    bgColor?: string;

    /**
     * to set the arrow size - use responsibly
     */
    arrowSize?: number;

    /**
     * set custom styles for tooltip
     */
    customize?: TCustomize;
}
