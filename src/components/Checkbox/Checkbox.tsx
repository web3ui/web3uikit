import React, { useEffect, useState } from 'react';
import { CheckboxProps } from '.';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { StyledInput, StyledLabel } from './Checkbox.styles';

const Checkbox: React.FC<CheckboxProps> = ({
    checked = false,
    disabled = false,
    id,
    label,
    labelWhenChecked,
    layout = 'box',
    name,
    onChange,
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
                disabled={disabled}
                id={id}
                layout={layout}
                name={name}
                onChange={valueChanged}
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
