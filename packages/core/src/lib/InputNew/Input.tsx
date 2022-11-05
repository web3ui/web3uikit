import React, { useState } from 'react';
import { IInputProps } from './types';
import styles from './Input.styles';

const { DivStyled, InputStyled, LabelStyled } = styles;

const Input: React.FC<IInputProps> = ({
    id,
    label,
    onChange,
    placeholder,
    value,
}) => {
    const [currentValue, setCurrentValue] = useState(value);

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.currentTarget.value);
        onChange && onChange(event);
    };

    return (
        <DivStyled className={Boolean(currentValue) ? 'filled' : 'blank'}>
            <InputStyled
                defaultValue={value}
                id={id || 'web3uiKit-input'}
                onChange={(e) => onValueChange(e)}
                placeholder={placeholder}
                testId="test-input-input"
            />
            <LabelStyled
                id={id || 'web3uiKit-input'}
                testId="test-input-label"
                text={label}
            />
        </DivStyled>
    );
};

export default Input;
