import React from 'react';

type TInputState = 'disabled' | 'initial' | 'filled' | 'confirmed' | 'error';

type TInputType = 'text' | 'number' | 'email' | 'tel' | 'password' | 'address';

type TInputValue = Pick<React.InputHTMLAttributes<HTMLInputElement>, 'value'>;

type TInputSize = 'regular' | 'large';

type TInputProps = Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'size'
> & {
    /**
     * Will replace input div with a JSX element
     */
    customInput?: JSX.Element;

    /**
     * Description of input, Error state message overrides
     */
    description?: string;

    /**
     * please set a label, it really helps with accessibility
     */
    label?: {
        text: string;
        bgColor?: string;
    };

    /**
     * Left Prefix Icon
     */
    leftIcon?: JSX.Element;

    /**
     * Right Prefix Icon
     */
    rightIcon?: JSX.Element;

    /**
     * shows an icon to copy the value
     */
    allowCopy?: boolean;

    /**
     * to clear the input component
     */
    allowClear?: boolean;
    /**
     * types of input available
     */
    type?: TInputType;

    /**
     * input width
     */
    width?: string;

    /**
     * error message
     */
    errorMessage?: string;

    /**
     * You can validate your inputs
     * required, characterMinLength, characterMaxLength, numberMin, numberMax, regExp , regExpInvalidMessage
     */
    validation?: ValidateInput;

    /**
     * size of input
     */
    size?: TInputSize;

    /**
     * change the format of input display
     */
    formatter?: (value: string) => string;
};

interface LabelProps {
    /**
     * true if the label is defined
     */
    hasPrefix: boolean;

    /**
     * color of label background
     */
    labelBgColor?: string;
}

type ValidateInput = {
    /**
     * is the input required
     */
    required?: boolean;

    /**
     * min length of characters that can be entered
     */
    characterMinLength?: number;

    /**
     * max length of characters that can be entered
     */
    characterMaxLength?: number;

    /**
     * min number validation is only for number inputs
     */
    numberMin?: number;

    /**
     * max number validation is only for number inputs
     */
    numberMax?: number;

    /**
     * a RegExp for this input passed as a string
     * EG: [A-Za-z] to only allow letters
     */
    regExp?: string;

    /**
     * user feedback text if the RegExp fails to pass
     */
    regExpInvalidMessage?: string;
};

export type {
    TInputState,
    TInputType,
    TInputValue,
    TInputSize,
    TInputProps,
    LabelProps,
    ValidateInput,
};
