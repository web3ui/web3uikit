import { FC } from 'react';
import { IInputBaseProps } from './types';
import { inputBaseTestValues } from './values';
import styles from './styles';

const { InputStyled } = styles;
const { testid } = inputBaseTestValues;

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
    state,
    ...props
}) => {
    return (
        <InputStyled
            autoComplete={`${autoComplete}`}
            autoFocus={autoFocus}
            disabled={disabled}
            data-testid={testid}
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
            state={state}
            type={type}
            {...props}
        />
    );
};

export default InputBase;
