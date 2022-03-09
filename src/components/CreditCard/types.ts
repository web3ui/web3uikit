export interface CreditCardProps {
    /**
     * set the unique fingerprint for each
     */
    fingerprint: string;

    /**
     * set credit card issuer
     */
    brand: creditCardBrands;

    /**
     * set the id of credit-card
     */
    id?: string;

    /**
     * set date of expiration { month: 'MM', year: 'YY' }  MM/YY
     */
    expiresAt: {
        /**
         * 01 -> Jan, 02 -> Feb, ..., 12 -> Dec
         */
        month: string;
        /**
         * 22 -> 2022 , 23 -> 2023 ..., 40 -> 2040
         */
        year: string;
    };

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
}

export type creditCardBrands = 'mastercard' | 'visa' | 'amex' | 'diners';
