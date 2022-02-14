import React, { useState, useEffect } from 'react';
import color from '../../styles/colors';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon';
import { Illustration } from '../Illustrations';
import SelectStyles from './Select.styles';
import type { SelectProps } from './types';

const {
    DivStyledWrapper,
    DropDownIcon,
    ErrorLabel,
    LabelStyled,
    NoDataTextStyled,
    Option,
    Options,
    PrefixIcon,
    SelectedItem,
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
    customNoDataText = 'No Data',
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
        <DivStyledWrapper
            aria-label="select"
            data-testid="test-wrapper"
            id={id}
            state={state}
            style={{ ...style, width }}
        >
            <SelectedItem
                data-testid="test-selected"
                state={state}
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
                <Options aria-label="select-options" data-testid="test-options">
                    {options?.length ? (
                        options.map(
                            (option, index) =>
                                index !== selectedOptionIndex && (
                                    <Option
                                        onClick={onOptionClicked(index)}
                                        key={option?.label}
                                        data-testid="test-option"
                                        aria-label="select-option"
                                    >
                                        <PrefixIcon>
                                            {option?.prefix}
                                        </PrefixIcon>
                                        {option?.label}
                                    </Option>
                                ),
                        )
                    ) : (
                        <>
                            <Illustration
                                logo="servers"
                                width="100%"
                                height="60px"
                            />
                            <NoDataTextStyled>
                                {customNoDataText}
                            </NoDataTextStyled>
                        </>
                    )}
                </Options>
            )}

            {errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
        </DivStyledWrapper>
    );
};

export default Select;
