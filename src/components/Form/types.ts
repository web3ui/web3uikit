import { ValidateInput } from '../Input/types';
import { ButtonProps } from '../Button';

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
     * Every form should have a unique ID
     */
    id: string;

    /**
     * Pass all the props a button could use
     */
    buttonConfig: ButtonProps;

    /**
     * when the form passes validation the data is returned
     * { id: string, data: [{inputName: string; inputResult: string[] | string;}]}
     */
    onSubmit?: (data: FormDataReturned) => FormDataReturned;
}

export type FormDataReturned = {
    /**
     * The forms unique ID
     */
    id: string;

    /**
     * The data collected from the form
     */
    data: InputDataReturned[];
};

export type InputDataReturned = {
    /**
     * The name of the input
     */
    inputName: string;

    /**
     * The data collected from the input
     */
    inputResult: string[] | string;
};

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

    /**
     * You can validate your inputs
     */
    validation?: ValidateInput;
};
