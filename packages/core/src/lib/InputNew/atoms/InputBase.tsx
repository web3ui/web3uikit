import { FC } from 'react';
import { IInputBaseProps } from './types';
import styles from './styles';

const { InputStyled } = styles;

const InputBase: FC<IInputBaseProps> = ({
    autoComplete = true,
    autoFocus = false,
    characterMaxLength,
    characterMinLength,
    defaultValue,
    disabled = false,
    id,
    name,
    numberMax,
    numberMin,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    regExp,
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
            max={type === 'number' ? numberMax : undefined}
            maxLength={characterMaxLength}
            min={type === 'number' ? numberMin : undefined}
            minLength={characterMinLength}
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
            pattern={regExp}
            placeholder={placeholder}
            required={required}
            type={type}
            {...props}
        />
    );
};

export default InputBase;
