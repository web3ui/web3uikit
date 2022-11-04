import { FC } from 'react';
import { IInputBaseProps } from './types';
import { inputBaseTestValues } from './values';

const { testId } = inputBaseTestValues;

const InputBase: FC<IInputBaseProps> = ({
    autoComplete = true,
    autoFocus = false,
    disabled = false,
    defaultValue,
    id,
    name,
    onBlur,
    onChange,
    placeholder,
    type = 'text',
    max,
    min,
    maxLength,
    minLength,
    regExp,
    required,
    ...props
}) => {
    return (
        <input
            autoComplete={`${autoComplete}`}
            autoFocus={autoFocus}
            disabled={disabled}
            data-testid={testId}
            defaultValue={defaultValue}
            id={id}
            max={type === 'number' ? max : undefined}
            maxLength={maxLength}
            min={type === 'number' ? min : undefined}
            minLength={minLength}
            name={name || type + ' input'}
            onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                onBlur && onBlur(event)
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChange && onChange(event)
            }
            pattern={regExp}
            placeholder={placeholder}
            required={required}
            type={type}
            {...props}
        />
    );
};

export default InputBase;
