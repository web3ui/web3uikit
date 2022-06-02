export type ValidateDatePicker = {
    /**
     * is the input required
     */
    required?: boolean;

    /**
     * The maximum date selectable by user
     * YYYY/MM/DD
     */
    max?: string;

    /**
     * The minimum date selectable by user
     * YYYY/MM/DD
     */
    min?: string;
};

export interface DatePickerProps {
    /**
     * Every datePicker needs a unique ID
     */
    id: string;

    /**
     * The date picker can be disabled
     */
    disabled?: boolean;

    /**
     * Giving a name will help with accessibility
     */
    label?: string;

    /**
     * The maximum date selectable by user
     * YYYY/MM/DD
     */
    max?: string;

    /**
     * The minimum date selectable by user
     * YYYY/MM/DD
     */
    min?: string;

    /**
     * Giving a name will help with validation
     */
    name?: string;

    /**
     * The onChange returns data with its event and date
     */
    onChange?: (data: {
        event: React.ChangeEvent<HTMLInputElement>;
        date: Date;
    }) => void;

    /**
     * the input can use state to react to user interaction
     */
    state?: 'initial' | 'error' | 'confirmed' | 'disabled';

    /**
     * The change from date to month picker
     */
    type?: 'date' | 'month';

    /**
     * The initial date value or todays date is default
     * YYYY/MM/DD
     */
    value?: string;

    /**
     * The initial date value
     * YYYY/MM/DD
     */
    validation?: ValidateDatePicker;
}
