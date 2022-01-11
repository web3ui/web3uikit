export interface CreditCardProps {
    /**
     * set the id of credit-card
     */
    id?: string;

    /**
     * set date of expiration MM/YY
     */
    expiresAt: string;

    /**
     * set if credit-card is expired
     */
    isExpired: boolean;

    /**
     * last 4 digits of credit-card-number
     */
    lastDigits: string | number;

    /**
     * set full-name of credit-card holder
     */
    name: string;

    /**
     * run function when remove icon is clicked
     */
    onRemove?: () => void;

    /**
     * set pressed
     */
    pressed?: boolean;

    /**
     * set type
     */
    type: "mastercard" | "visa"
}