import React from 'react';
import type { TResponse } from './types';
import type { TInputStates, TValidateInput } from './atoms/types';

export const inputValidation = (
    event: React.ChangeEvent<HTMLInputElement>,
    errorMessage: string,
    currentState?: TInputStates,
    validation?: TValidateInput,
) => {
    const response: TResponse = {
        message: '',
        result: 'initial',
    };

    // check for the value passes the custom RegExp
    if (validation?.pattern) {
        const re = new RegExp(validation?.pattern);
        if (!re.test(event?.target.value)) {
            response.message = `${
                validation?.regExpInvalidMessage ||
                event?.target?.validationMessage ||
                errorMessage
            }`;
            response.result = 'error';
            return response;
        }
    }

    if (!event?.target.checkValidity()) {
        response.message = event?.target.validationMessage || errorMessage;
        response.result = 'error';
        return response;
    }

    // finally if all pass but the Input is in error state
    if (currentState === 'error') {
        response.message = '';
        response.result = 'confirmed';
        return response;
    }

    return response;
};
