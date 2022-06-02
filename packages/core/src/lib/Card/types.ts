import { ReactNode } from 'react';
export interface CardProps {
    /**
     * set the ID of Card
     */
    id?: string;

    /**
     * set the content of the card
     */
    children: JSX.Element[] | JSX.Element;

    /**
     * set the description of the card
     */
    description?: string | ReactNode;

    /**
     * set if card is selected
     */
    isSelected?: boolean;

    /**
     * set title of card
     */
    title?: string | ReactNode;

    /**
     * set text inside tooltip
     */
    tooltipText?: JSX.Element | string;

    /**
     * Set the state disabled state of the cart
     */
    isDisabled?: boolean;

    /**
     * Style of the cursor
     */
    cursorType?: 'pointer' | 'default';

    /**
     * Sets isSelected state
     */

    setIsSelected?: (value: boolean) => void;

    /**
     * Runs a function when clicked
     */
    onClick?: () => void;

    /**
     * Moves the tooltip arrow +/- up/down/left/right (use responsibly, arrow can move the the X / Y axis indefinitely)
     */
    tooltipMove?: number;

    /**
     * Moves the tooltip body +/- up/down/left/right (use responsibly, arrow can move the the X / Y axis indefinitely)
     */
    tooltipMoveBody?: number;
}

export interface AbsoluteIconStyledProps {
    position: 'topR' | 'topL';
}
