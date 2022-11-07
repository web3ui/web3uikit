import React from 'react';
import type { TInputStates, TValidateInput, TResponse } from './types';

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
    if (validation?.regExp) {
        const re = new RegExp(validation?.regExp);
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
    } else {
        response.result = 'confirmed';
        return response;
    }
};
