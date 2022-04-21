import React, { useEffect, useState } from 'react';
import color from '../../styles/colors';
import { Icon, iconTypes } from '../Icon';
import { Illustration } from '../Illustrations';
import SelectStyles from './Select.styles';
import type { SelectProps } from './types';
import InputStyles from '../Input/Input.styles';
const { DivWrapperStyled, LabelStyled: LabelStyledTrad } = InputStyles;

const {
    DivStyledWrapper,
    DropDownIcon,
    ErrorLabel,
    LabelStyled,
    NoDataTextStyled,
    Option,
    Options,
    PrefixIcon,
    PrefixSpan,
    SelectStyled,
    SelectedItem,
} = SelectStyles;

const Select: React.FC<SelectProps> = ({
    customNoDataText = 'No Data',
    defaultOptionIndex,
    disabled = false,
    errorMessage = '',
    id = String(Date.now()),
    label,
    onChange,
    onChangeTraditional,
    options = [],
    prefixText,
    state = disabled ? 'disabled' : undefined,
    style,
    traditionalHTML5 = false,
    validation,
    value,
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

    const renderFancySelectMode = () => (
        <DivStyledWrapper
            aria-label="select"
            data-testid="test-wrapper"
            id={id}
            state={state}
            style={{ ...style, width }}
        >
            <SelectedItem
                aria-label="option-selected"
                data-testid="test-selected"
                onClick={toggling}
                state={state}
            >
                {typeof selectedOptionIndex !== 'undefined' && (
                    <>
                        {prefixText && <PrefixSpan>{prefixText}</PrefixSpan>}
                        {options[selectedOptionIndex]?.prefix && (
                            <PrefixIcon>
                                {options[selectedOptionIndex]?.prefix}
                            </PrefixIcon>
                        )}

                        {options[selectedOptionIndex]?.label}
                    </>
                )}

                <DropDownIcon>
                    <Icon
                        fill={color.grey}
                        svg={
                            isOpen
                                ? iconTypes.triangleUp
                                : iconTypes.triangleDown
                        }
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
                                        aria-label="select-option"
                                        data-testid="test-option"
                                        key={option?.label}
                                        onClick={onOptionClicked(index)}
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
                                height="60px"
                                logo="servers"
                                width="100%"
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

    const renderTraditionalSelect = () => (
        <DivWrapperStyled className="input_filled" style={{ ...style, width }}>
            <SelectStyled
                defaultValue="Please choose"
                id={id}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    onChangeTraditional && onChangeTraditional(event)
                }
                required={validation?.required}
            >
                <option disabled>Please choose</option>
                {options.map(
                    (option, index) =>
                        index !== selectedOptionIndex && (
                            <option id={String(option?.id)} key={option?.id}>
                                {option?.label}
                            </option>
                        ),
                )}
            </SelectStyled>
            {label && (
                <LabelStyledTrad hasPrefix={false} htmlFor={id}>
                    {label}
                </LabelStyledTrad>
            )}
        </DivWrapperStyled>
    );

    return traditionalHTML5
        ? renderTraditionalSelect()
        : renderFancySelectMode();
};

export default Select;
