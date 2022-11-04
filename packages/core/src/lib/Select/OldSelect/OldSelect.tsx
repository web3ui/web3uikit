import { useEffect, useState } from 'react';
import { color } from '@web3uikit/styles';
import { TriangleDown, TriangleUp } from '@web3uikit/icons';
import { Illustration } from '../../Illustrations';
import SelectStyles from './OldSelect.styles';
import type { OptionProps, ISelectProps } from '../types';

const {
    DivStyledDescription,
    DivStyledWrapper,
    DropDownIcon,
    ErrorLabel,
    LabelStyled,
    NoDataTextStyled,
    Option,
    Options,
    PrefixIcon,
    PrefixSpan,
    SelectedItem,
} = SelectStyles;

const Select: React.FC<ISelectProps> = ({
    customNoDataText = 'No Data',
    defaultOptionIndex,
    description,
    disabled = false,
    errorMessage = '',
    id = String(Date.now()),
    label,
    onBlurTraditional,
    onChange,
    onChangeTraditional,
    options = [],
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
            onChange(options[selectedIndex] as OptionProps);
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

    return (
        <DivStyledWrapper
            aria-label="select"
            data-testid="test-select"
            id={id}
            ref={ref}
            state={state}
            style={{ ...style, width }}
            {...props}
        >
            <SelectedItem
                aria-label="option-selected"
                data-testid="test-select-selected"
                onClick={toggling}
                state={state}
                hasPrefixIcon={Boolean(prefixIcon)}
            >
                {prefixIcon && prefixIcon}

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

                <DropDownIcon data-testid="test-select-icon">
                    {isOpen ? (
                        <TriangleUp
                            title="triangle up icon"
                            titleId="select triangle up icon"
                            fill={color.blueGray50}
                        />
                    ) : (
                        <TriangleDown
                            title="triangle down icon"
                            titleId="select triangle down icon"
                            fill={color.blueGray50}
                        />
                    )}
                </DropDownIcon>
            </SelectedItem>
            {label && (
                <LabelStyled
                    data-testid="test-select-label"
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
                <Options
                    aria-label="select-options"
                    data-testid="test-select-options"
                >
                    {options?.length ? (
                        options.map(
                            (option, i) =>
                                i !== selectedOptionIndex && (
                                    <Option
                                        aria-label="select-option"
                                        data-testid={`test-seclect-option-${i}`}
                                        id={option.id.toString()}
                                        key={option?.label}
                                        onClick={onOptionClicked(i)}
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
};
export default Select;
