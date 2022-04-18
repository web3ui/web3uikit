import { CreditCardProps } from '../CreditCard';

type ValidateRadios = {
    required?: boolean;
};

type TRadioLayouts = {
    isCreditCardMode?: boolean;
};

interface RadiosProps {
    /**
     * If Radio group is disabled
     */
    disabled?: boolean;

    /**
     * this collection of radio buttons needs an ID to group them
     */
    id: string;

    /**
     * you must supply radio button items, each of these should be a string
     */
    items: string[] | CreditCardProps[];

    /**
     * to keep radio button in same row
     */
    isRow?: boolean;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * if using CreditCardProps to power your checkboxes you can use this event to catch the onRemove event
     */
    onCreditCardRemoved?: (arrayIndex: number) => void;

    /**
     * set default checked radio. Pass the array position number. EG: 0 is first.
     */
    setWhichIsChecked?: number;

    /**
     * you can supply a title for the radio group, it will return a HTML legend tag stayed as an H3
     */
    title?: string;

    /**
     * You can validate your radios
     */
    validation?: ValidateRadios;
}

export { ValidateRadios, TRadioLayouts, RadiosProps };
