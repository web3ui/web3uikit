import { useEffect, useState } from 'react';
import TraditionalSelectStyles from './TraditionalSelect.styles';
import { ISelectProps } from '../types';
import InputStyles from '../../Input/Input.styles';
const { DivWrapperStyled, LabelStyled: LabelStyledTrad } = InputStyles;
const { DivStyledDescription, SelectStyled } = TraditionalSelectStyles;

const TraditionalSelect: React.FC<ISelectProps> = ({
    customNoDataText = 'No Data',
    defaultOptionIndex,
    description,
    disabled = false,
    errorMessage = '',
    id = 'web3uikit-select',
    label,
    onBlurTraditional,
    onChange,
    onChangeTraditional,
    options = [],
    placeholder,
    prefixIcon,
    prefixText,
    ref,
    refTraditional,
    state = disabled ? 'disabled' : undefined,
    style,
    traditionalHTML5 = false,
    validation,
    value,
    width = '200px',
    ...props
}: ISelectProps) => {
    const [currentValue, setCurrentValue] = useState('');

    useEffect(() => {
        if (!value) return;
        const dayObject = options.find((item) => item.label === value);
        typeof dayObject?.label === 'string' &&
            setCurrentValue(dayObject?.label);
    }, [value]);

    useEffect(() => {
        if (Number(defaultOptionIndex) < 0) return;
        if (Number(defaultOptionIndex) > options.length) return;

        const value = options[Number(defaultOptionIndex)]?.label;
        typeof value === 'string' && setCurrentValue(value);
    }, [defaultOptionIndex]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentValue(event.currentTarget.value);
        onChangeTraditional && onChangeTraditional(event);
    };

    return (
        <DivWrapperStyled
            className="input_filled select"
            data-testid="test-select"
            state={state}
            style={{ ...style, width }}
            {...props}
        >
            <SelectStyled
                data-testid="test-select-select"
                disabled={disabled}
                id={id}
                ref={refTraditional}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    handleChange(event)
                }
                onBlur={(event: React.FocusEvent<HTMLSelectElement>) =>
                    onBlurTraditional && onBlurTraditional(event)
                }
                required={validation?.required}
                value={currentValue || placeholder || 'Please choose'}
            >
                <option disabled>{placeholder || 'Please choose'}</option>

                {options.map((option, i) => (
                    <option
                        data-testid={`test-select-option-${i}`}
                        disabled={option.disabled || false}
                        id={String(option?.id)}
                        key={option?.id}
                        value={option?.label}
                    >
                        {option?.prefix}
                        {option?.label}
                    </option>
                ))}
            </SelectStyled>

            {label && (
                <LabelStyledTrad
                    data-testid="test-select-label"
                    hasPrefix={false}
                    htmlFor={id}
                >
                    {label}
                </LabelStyledTrad>
            )}
            {description && (
                <DivStyledDescription data-testid="test-select-description">
                    {description}
                </DivStyledDescription>
            )}
        </DivWrapperStyled>
    );
};
export default TraditionalSelect;
