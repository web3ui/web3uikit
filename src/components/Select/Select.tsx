import React, { useState, useEffect } from 'react';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import SelectStyles from './Select.styles';
import type { SelectProps } from './types';

const {
    DropDownIcon,
    ErrorLabel,
    LabelStyled,
    Option,
    Options,
    PrefixIcon,
    SelectedItem,
    SelectWrapper,
} = SelectStyles;

const Select: React.FC<SelectProps> = ({
    defaultOptionIndex,
    disabled = false,
    errorMessage = '',
    id = String(Date.now()),
    label,
    onChange,
    options = [],
    state = disabled ? 'disabled' : undefined,
    style,
    width = '200px',
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptionIndex, setSelectedOptionIndex] =
        useState(defaultOptionIndex);

    const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
        if (disabled) return;
        setIsOpen(!isOpen);
        event.stopPropagation();
    };

    const onOptionClicked = (selectedIndex: number) => () => {
        setSelectedOptionIndex(selectedIndex);
        setIsOpen(false);

        if (onChange) {
            onChange(options[selectedIndex]);
        }
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setIsOpen(false);
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <SelectWrapper
            data-testid="test-div"
            state={state}
            style={{ ...style, width }}
            aria-label="select"
        >
            <SelectedItem
                data-testid="test-input"
                state={state}
                id={id}
                onClick={toggling}
                aria-label="option-selected"
            >
                {typeof selectedOptionIndex !== 'undefined' && (
                    <>
                        <PrefixIcon>
                            {options[selectedOptionIndex]?.prefix}
                        </PrefixIcon>
                        {options[selectedOptionIndex]?.label}
                    </>
                )}

                <DropDownIcon>
                    <Icon
                        svg={
                            isOpen
                                ? iconTypes.triangleUp
                                : iconTypes.triangleDown
                        }
                        fill={color.grey}
                    />
                </DropDownIcon>
            </SelectedItem>
            {label && (
                <LabelStyled
                    data-testid="test-label"
                    htmlFor={id}
                    hasSelectedIndex={
                        typeof selectedOptionIndex !== 'undefined'
                    }
                >
                    {label}
                </LabelStyled>
            )}
            {isOpen && (
                <Options aria-label="select-options">
                    {options.map(
                        (option, index) =>
                            index !== selectedOptionIndex && (
                                <Option
                                    onClick={onOptionClicked(index)}
                                    key={option?.label}
                                    aria-label="select-option"
                                >
                                    <PrefixIcon>{option?.prefix}</PrefixIcon>
                                    {option?.label}
                                </Option>
                            ),
                    )}
                </Options>
            )}

            {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
        </SelectWrapper>
    );
};

export default Select;
