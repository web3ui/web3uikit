export type ValidateRadios = {
    required?: boolean;
};

export interface RadiosProps {
    /**
     * this collection of radio buttons needs an ID to group them
     */
    id: string;

    /**
     * you must supply radio button items, each of these should be a string
     */
    items: string[];

    /**
     * you can supply a title for the radio group, it will return a HTML legend tag stayed as an H3
     */
    title?: string;

    /**
     * standard onChange that returns the entire event, as normal you can access event.target
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * you can have a radio checked by default, it always checks the first (position 0) unless you pass a valid array position to setWhichIsChecked
     */
    checked?: boolean;

    /**
     * if checked is set to true but you don't want to check the first radio, you can pass an array position number here. Note this should not be greater or less than the array.length
     */
    setWhichIsChecked?: number;

    /**
     * You can validate your radios
     */
    validation?: ValidateRadios;
}
