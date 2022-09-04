import React from 'react';
import type { TInputStates, ValidateInput, TResponse } from './types';

export const inputValidation = (
    event: React.ChangeEvent<HTMLInputElement>,
    errorMessage: string,
    currentState?: TInputStates,
    validation?: ValidateInput,
) => {
    const response: TResponse = {
        message: '',
        result: 'initial',
    };
    // check for the value passes the custom RegExp
    if (validation?.regExp) {
        const re = new RegExp(validation?.regExp);
        if (!re.test(event?.target.value)) {
            response.message = `${
                validation?.regExpInvalidMessage ||
                event?.target?.validationMessage ||
                errorMessage
            }`;
            response.result = 'error';
        }
    }

    // check for HTML validation
    if (!event?.target.checkValidity()) {
        response.message = event?.target.validationMessage || errorMessage;
        response.result = 'error';
    }

    // finally if all pass but the Input is in error state
    if (currentState === 'error') {
        response.message = '';
        response.result = 'confirmed';
    }

    return response;
};
