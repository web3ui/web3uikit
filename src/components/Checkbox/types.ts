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
     * The ID will generated if not assigned
     */
    id?: string;

    /**
     * A label to show the boxes meaning
     */
    label: string;

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
}
