import React, { useEffect, useState } from 'react';
import { CheckboxProps } from '.';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import styles from './Checkbox.styles';

const { StyledInput, StyledLabel } = styles;

const Checkbox: React.FC<CheckboxProps> = ({
    checked = false,
    disabled = false,
    id,
    ref,
    label,
    labelWhenChecked,
    layout = 'box',
    name,
    onChange,
    onBlur,
    validation,
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(Boolean(event.target.checked));
        if (disabled) return;
        onChange(event);
    };

    useEffect(() => setIsChecked(checked), [checked]);

    return (
        <StyledLabel
            checked={isChecked}
            data-layout={layout}
            data-testid="test-checkbox-label"
            disabled={disabled}
            layout={layout}
        >
            {layout === 'box' && (
                <span className="after">
                    <Icon svg={iconTypes.check} fill="white" />
                </span>
            )}

            <StyledInput
                data-testid="test-checkbox-input"
                defaultChecked={isChecked}
                disabled={disabled}
                id={id}
                ref={ref}
                layout={layout}
                name={name}
                onChange={valueChanged}
                onBlur={(event: React.FocusEvent<HTMLInputElement>) => onBlur && onBlur(event)}
                required={validation?.required}
                type="checkbox"
                value={`${isChecked}`}
            />
            <span data-testid="test-checkbox-text">
                {isChecked ? labelWhenChecked || label : label}
            </span>
        </StyledLabel>
    );
};

export default Checkbox;
