import { CreditCardProps } from '../CreditCard';

export type ValidateRadios = {
    required?: boolean;
};

export type TRadioLayouts = {
    isCreditCardMode?: boolean;
};

export interface RadiosProps {
    /**
     * this collection of radio buttons needs an ID to group them
     */
    id: string;

    /**
     * you must supply radio button items, each of these should be a string
     */
    items: string[] | CreditCardProps[];

    /**
     * you can supply a title for the radio group, it will return a HTML legend tag stayed as an H3
     */
    title?: string;

    /**
     * set default checked radio. Pass the array position number. EG: 0 is first.
     */
    setWhichIsChecked?: number;

    /**
     * You can validate your radios
     */
    validation?: ValidateRadios;

    /**
     * If Radio group is disabled
     */
    disabled?: boolean;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * if using CreditCardProps to power your checkboxes you can use this event to catch the onRemove event
     */
    onCreditCardRemoved?: (arrayIndex: number) => void;
}
