import { CheckboxProps } from '.';
import { Check } from '@web3uikit/icons';
import styles from './Checkbox.styles';

const { StyledInput, StyledLabel } = styles;

const Checkbox: React.FC<CheckboxProps> = ({
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
    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        onChange && onChange(event);
    };

    return (
        <StyledLabel
            checked={checked}
            data-layout={layout}
            data-testid="test-checkbox-label"
            disabled={disabled}
            layout={layout}
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
                defaultChecked={checked}
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
                value={`${checked}`}
                {...props}
            />
            <span data-testid="test-checkbox-text">
                {checked ? labelWhenChecked || label : label}
            </span>
        </StyledLabel>
    );
};

export default Checkbox;
