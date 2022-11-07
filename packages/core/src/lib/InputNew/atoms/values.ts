import { IInputBaseProps, TValidateInput, ILabelBaseProps } from './types';

export const inputBaseTestValidation: TValidateInput = {
    characterMaxLength: 10,
    characterMinLength: 0,
    numberMax: 10,
    numberMin: 0,
    required: true,
} as const;

export const inputBaseTestValues: IInputBaseProps = {
    autoComplete: true,
    autoFocus: true,
    defaultValue: 'default value',
    disabled: true,
    id: 'input-base',
    name: 'input base',
    placeholder: 'placeholder text',
    regExp: '[A-Za-z]',
    required: true,
    testid: 'test-input-base',
    type: 'email',
} as const;

export const labelBaseTestValues: ILabelBaseProps = {
    id: 'label-base',
    required: true,
    testid: 'test-label-base',
    text: 'Labels are good for accessibility and UX',
} as const;
