import { FC } from 'react';
import { IInputBaseProps } from './types';
import styles from './styles';

const { InputStyled } = styles;

const InputBase: FC<IInputBaseProps> = ({
    autoComplete = true,
    autoFocus = false,
    disabled = false,
    id,
    max,
    maxLength,
    min,
    minLength,
    name,
    onBlur,
    onChange,
    onFocus,
    pattern,
    placeholder,
    required,
    testid,
    type = 'text',
    value,
    ...props
}) => {
    return (
        <InputStyled
            autoComplete={`${autoComplete}`}
            autoFocus={autoFocus}
            disabled={disabled}
            data-testid={testid}
            id={id || 'input-base'}
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
            onFocus={(event: React.FocusEvent<HTMLInputElement>) =>
                onFocus && onFocus(event)
            }
            pattern={pattern}
            placeholder={placeholder}
            required={required}
            type={type}
            value={value}
            {...props}
        />
    );
};

export default InputBase;
