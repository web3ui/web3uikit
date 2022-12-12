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
    id,
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
    const [selectedOptionIndex, setSelectedOptionIndex] =
        useState(defaultOptionIndex);

    useEffect(() => {
        if (value) {
            const valueOptionItem = options.find(
                (optionItem) => optionItem.id == value,
            );
            setSelectedOptionIndex(
                valueOptionItem ? options.indexOf(valueOptionItem) : 0,
            );
        }
    }, [selectedOptionIndex, value]);

    return (
        <DivWrapperStyled
            className="input_filled"
            data-testid="test-select"
            style={{ ...style, width }}
            {...props}
        >
            <SelectStyled
                data-testid="test-select-select"
                defaultValue={placeholder || 'Please choose'}
                id={id}
                ref={refTraditional}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    onChangeTraditional && onChangeTraditional(event)
                }
                onBlur={(event: React.FocusEvent<HTMLSelectElement>) =>
                    onBlurTraditional && onBlurTraditional(event)
                }
                required={validation?.required}
            >
                <option disabled>Please choose</option>
                {options.map(
                    (option, i) =>
                        i !== selectedOptionIndex && (
                            <option
                                data-testid={`test-select-option-${i}`}
                                id={String(option?.id)}
                                key={option?.id}
                            >
                                {option?.label}
                            </option>
                        ),
                )}
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
