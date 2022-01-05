import React, { useState } from 'react';
import styled from 'styled-components';
import { CheckboxProps } from '.';
import {
  boxCheckedStyles,
  boxStyles,
  inputStyles,
  labelDisabled,
  labelStyles,
  switchOnStyles,
  switchStyles,
} from './Checkbox.styles';

const StyledInput = styled.input<Pick<CheckboxProps, 'layout'>>`
  ${inputStyles}
`;

const StyledLabel = styled.label<
  Pick<CheckboxProps, 'layout' | 'checked' | 'disabled'>
>`
  ${labelStyles}
  ${(p) => p.disabled && labelDisabled}
	${(p) => p.layout === 'box' && boxStyles}
  ${(p) => p.layout === 'box' && p.checked && boxCheckedStyles}
	${(p) => p.layout === 'switch' && switchStyles}
  ${(p) => p.layout === 'switch' && p.checked && switchOnStyles}
`;

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  id = String(Date.now()),
  label,
  layout = 'box',
  name,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(Boolean(event.target.checked));
    onChange(event);
  };

  return (
    <StyledLabel
      checked={isChecked}
      data-layout={layout}
      data-testid="test-checkbox-label"
      disabled={disabled}
      layout={layout}
    >
      <StyledInput
        data-testid="test-checkbox-input"
        disabled={disabled}
        id={id}
        layout={layout}
        name={name}
        onChange={valueChanged}
        type="checkbox"
        value={`${isChecked}`}
      />
      {label}
    </StyledLabel>
  );
};

export default Checkbox;
