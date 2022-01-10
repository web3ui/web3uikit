export interface FormProps {
    /**
     * A title for the form hat will render an H3
     */
    title: string;

    /**
     * Pass an array of DataInput type objects to power the form
     */
    data: DataInput[];

    /**
     * The ID will generated if not assigned
     */
    id?: string;
}

export type DataInput = {
    /**
     * Give a name to inputs to group them
     */
    name: string;

    /**
     * This collection of input types are available
     */
    type:
        | 'box'
        | 'email'
        | 'number'
        | 'password'
        | 'radios'
        | 'switch'
        | 'tel'
        | 'text'
        | 'textarea';

    /**
     * You pass a default value if you need to, this value will be returned when the form is submitted for strings
     */
    value: string;

    /**
     * If you want radios you will need to pass an array of options here
     */
    options?: string[];

    /**
     * If you radios you will need to pass an array to return your options
     */
    selected?: string[];
};
