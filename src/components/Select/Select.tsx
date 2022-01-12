import React, { useState, useEffect } from 'react';
import SelectStyles from './Select.styles';
import type { SelectProps } from './types';

const {
    ErrorLabel,
    SelectStyled,
    SelectWrapper,
    LabelStyled,
    Option,
    Options,
} = SelectStyles;

const Select: React.FC<SelectProps> = ({
    disabled = false,
    errorMessage = '',
    id = String(Date.now()),
    label,
    onOptionChange,
    placeholder = '',
    prefix,
    state = disabled ? "disabled" : undefined,
    style,
    value = '',
    width = '320px',
    options = [],
    defaultOptionIndex = 0
}: SelectProps) => {
    // const [currentValue, setCurrentValue] = useState(value);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptionIndex, setSelectedOptionIndex] =
        useState(defaultOptionIndex);

    // const valueChanged = (event: React.ChangeEvent<any>) => {
    //     setCurrentValue(event.target.value);
    //     onChange(event);
    // };

    const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsOpen(!isOpen);
        event.stopPropagation();
    };

    const onOptionClicked = (selectedIndex: number) => () => {
        setSelectedOptionIndex(selectedIndex);
        setIsOpen(false);

        if (onOptionChange) {
            onOptionChange(options[selectedIndex]);
        }
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setIsOpen(false);
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <SelectWrapper
            state={state}
            // className={`input input_${currentValue.length > 0 ? 'filled' : 'empty'
            //     }`}
            data-testid="test-div"
            style={{ ...style, width }}
        >
            <SelectStyled
                data-testid="test-input"
                // disabled={state == 'disabled'}
                id={id}
                placeholder={placeholder}
                onClick={toggling}
            // className={isOpen ? "actived" : ""}
            >
                {options[selectedOptionIndex]?.label}
            </SelectStyled>
            {label && (
                <LabelStyled
                    data-testid="test-label"
                    htmlFor={id}
                    hasPrefix={typeof prefix !== 'undefined'}
                >
                    {label}
                </LabelStyled>
            )}
            {isOpen && (
                <Options>
                    {options.map((option, index) =>
                        index !== selectedOptionIndex ? (
                            <Option
                                onClick={onOptionClicked(index)}
                                key={option.label}
                            >
                                {option.label}
                            </Option>
                        ) : null
                    )}
                </Options>
            )}

            {/* {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>} */}
        </SelectWrapper>
    );
};

export default Select;
