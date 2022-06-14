import React from 'react';
import { TInputState, TInputType, ValidateInput } from '../types';

const getType = (type: TInputType) => {
    switch (type) {
        case 'email':
        case 'number':
        case 'tel':
        case 'password':
        case 'text':
            return type;
        default:
            return 'text';
    }
};

const initializeState = (
    disabled: boolean | undefined,
    value: string | number | readonly string[] | undefined,
): TInputState => {
    if (disabled) return 'disabled';
    else if (Boolean(value && value.toString().length > 0)) return 'filled';
    return 'initial';
};

const validate = (
    currentState: TInputState,
    currentValue: string | number | readonly string[] | undefined,
    errorMessage: string,
    event: React.FocusEvent<HTMLInputElement>,
    setCurrentState: (value: React.SetStateAction<TInputState>) => void,
    setInvalidMessage: (value: React.SetStateAction<string>) => void,
    type: TInputType,
    validation: ValidateInput | undefined,
) => {
    // check for the value passes the custom RegExp
    if (validation?.regExp) {
        const re = new RegExp(validation?.regExp);
        if (!re.test(event?.target.value)) {
            setInvalidMessage(
                validation?.regExpInvalidMessage ||
                    event?.target.validationMessage ||
                    errorMessage,
            );
            setCurrentState('error');
            return;
        }
    }

    // check for HTML validation
    if (!event?.target.checkValidity()) {
        setInvalidMessage(event?.target.validationMessage || errorMessage);
        setCurrentState('error');
        return;
    }

    const isFilled = Boolean(
        currentValue && currentValue?.toString()?.length > 0,
    );
    // finally if all pass but the Input is in error state
    if (validation) {
        setCurrentState('confirmed');
        setTimeout(
            () => setCurrentState(isFilled ? 'filled' : 'initial'),
            3000,
        );
    } else {
        setCurrentState(isFilled ? 'filled' : 'initial');
    }
};

export { getType, initializeState, validate };
