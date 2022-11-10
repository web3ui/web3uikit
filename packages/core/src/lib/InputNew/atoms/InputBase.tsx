import { FC } from 'react';
import { IInputBaseProps } from './types';
import styles from './styles';

const { InputStyled } = styles;

const InputBase: FC<IInputBaseProps> = ({
    autoComplete = true,
    autoFocus = false,
    maxLength,
    minLength,
    defaultValue,
    disabled = false,
    id,
    name,
    max,
    min,
    onBlur,
    onChange,
    onFocus,
    pattern,
    placeholder,
    required,
    testid,
    type = 'text',
    ...props
}) => {
    return (
        <InputStyled
            autoComplete={`${autoComplete}`}
            autoFocus={autoFocus}
            disabled={disabled}
            data-testid={testid}
            defaultValue={defaultValue}
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
            {...props}
        />
    );
};

export default InputBase;
