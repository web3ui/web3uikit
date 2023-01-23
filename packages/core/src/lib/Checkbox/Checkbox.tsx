import { useEffect, useState } from 'react';
import { CheckboxProps } from '.';
import { Check } from '@web3uikit/icons';
import styles from './Checkbox.styles';

const { StyledInput, StyledLabel, SpanStyled } = styles;

const Checkbox: React.FC<CheckboxProps> = ({
    align,
    checked,
    disabled = false,
    id,
    ref,
    label,
    labelWhenChecked,
    layout = 'box',
    name = '',
    onChange,
    onBlur,
    validation,
    ...props
}) => {
    const [isChecked, setIsChecked] = useState(Boolean(checked));

    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        setIsChecked(Boolean(event.target.checked));
        onChange && onChange(event);
    };

    useEffect(() => setIsChecked(Boolean(checked)), [checked]);

    const isLabelNull = !label || label.toString().length === 0;

    return (
        <StyledLabel
            checked={isChecked}
            data-layout={layout}
            data-testid="test-checkbox-label"
            disabled={disabled}
            layout={layout}
            align={align}
        >
            {layout === 'box' && (
                <span className="after">
                    <Check
                        title="check icon"
                        titleId="checkbox check icon"
                        fill="#fff"
                    />
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
                onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
                    onBlur && onBlur(event)
                }
                required={validation?.required}
                type="checkbox"
                value={`${isChecked}`}
                checked={checked}
                {...props}
            />
            <SpanStyled data-testid="test-checkbox-text" isHidden={isLabelNull}>
                {/* DO NOT REMOVE THIS LINE:
                 * This helps to show only the box without any label
                 * Value inside this span cannot be null since all the are dependent on this
                 */}
                {isLabelNull && '.'}
                {isChecked && !isLabelNull ? labelWhenChecked || label : label}
            </SpanStyled>
        </StyledLabel>
    );
};

export default Checkbox;
