export type ValidateCheckbox = {
    required?: boolean;
};

export interface CheckboxProps {
    /**
     * The checkbox can be ticked by default
     */
    checked?: boolean;

    /**
     * Set as not interactive
     */
    disabled?: boolean;

    /**
     * you should assign an ID for your own validation
     */
    id?: string;

    /**
     * A label to show the boxes meaning
     */
    label: string;

    /**
     * A label to show the boxes meaning
     */
    labelWhenChecked?: string;

    /**
     * How the user will see the checkbox element
     */
    layout?: 'box' | 'switch';

    /**
     * a name attribute to group checkboxes
     */
    name: string;

    /**
     * The normal onChange event
     */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * You can validate your checkbox and switches
     */
    validation?: ValidateCheckbox;
}
