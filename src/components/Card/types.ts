export interface CardProps {
    
    /**
     * id will be generated automatically if not set
     */
    id?: string;

    /**
     * set the content of the card
     */
    children: Array<React.ReactNode>;

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
    tooltipText?: string;
}