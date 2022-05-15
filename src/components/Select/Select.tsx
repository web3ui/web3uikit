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
    DivStyledDescription,
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
    description,
    disabled = false,
    errorMessage = '',
    id = String(Date.now()),
    ref,
    refTraditional,
    label,
    onChange,
    onChangeTraditional,
    onBlurTraditional,
    options = [],
    prefixIcon,
    prefixText,
    state = disabled ? 'disabled' : undefined,
    style,
    traditionalHTML5 = false,
    validation,
    value,
    width = '200px',
    ...props
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
            ref={ref}
            state={state}
            style={{ ...style, width }}
            {...props}
        >
            <SelectedItem
                aria-label="option-selected"
                data-testid="test-selected"
                onClick={toggling}
                state={state}
                hasPrefixIcon={Boolean(prefixIcon)}
            >
                {prefixIcon && (
                    <Icon
                        size={24}
                        svg={prefixIcon}
                        style={{
                            fill: 'currentColor',
                        }}
                    />
                )}

                {typeof selectedOptionIndex !== 'undefined' && (
                    <>
                        {prefixText && <PrefixSpan>{prefixText}</PrefixSpan>}
                        {options[selectedOptionIndex]?.prefix &&
                            !Boolean(prefixIcon) && (
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
                    hasPrefixIcon={Boolean(prefixIcon)}
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
                                        id={option.id.toString()}
                                        aria-label="select-option"
                                        data-testid="test-option"
                                        key={option?.label}
                                        onClick={onOptionClicked(index)}
                                    >
                                        {option.prefix && (
                                            <PrefixIcon>
                                                {option.prefix}
                                            </PrefixIcon>
                                        )}
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

            {state === 'error' && errorMessage ? (
                <ErrorLabel>{errorMessage}</ErrorLabel>
            ) : (
                description && (
                    <DivStyledDescription>{description}</DivStyledDescription>
                )
            )}
        </DivStyledWrapper>
    );

    const renderTraditionalSelect = () => (
        <DivWrapperStyled className="input_filled" style={{ ...style, width }}>
            <SelectStyled
                defaultValue="Please choose"
                id={id}
                ref={refTraditional}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    onChangeTraditional && onChangeTraditional(event)
                }
                onBlur={(event: React.FocusEvent<HTMLSelectElement>) =>
                    onBlurTraditional && onBlurTraditional(event)
                }
                required={validation?.required}
                {...props}
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
            {description && (
                <DivStyledDescription>{description}</DivStyledDescription>
            )}
        </DivWrapperStyled>
    );

    return traditionalHTML5
        ? renderTraditionalSelect()
        : renderFancySelectMode();
};

export default Select;
