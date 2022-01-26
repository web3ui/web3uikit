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
    description?: string;

    /**
     * set if card is selected
     */
    selected?: boolean;

    /**
     * set title of card
     */
    title?: string;

    /**
     * set text inside tooltip
     */
    tooltipText: string;

    /**
     * Is disabled
     */
    isDisabled?: boolean;
}
