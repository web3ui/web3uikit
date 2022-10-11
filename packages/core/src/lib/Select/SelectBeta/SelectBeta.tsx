import React, { useState, useRef, useEffect } from 'react';
import { ISelectProps, KEY, OptionProps } from '../types';
import styles from './SelectBeta.styles';
import SelectMenuList from './components/SelectMenuList';
import SelectedItemsList from './components/SelectedItemsList';
import { color } from '@web3uikit/styles';

const {
    ButtonStyledSelect,
    DivStyledDesc,
    DivStyledOverlay,
    DivStyledSelectWrapper,
    DivStyledWrapper,
    LabelStyled,
    TriangleDownIconStyled,
    TriangleUpIconStyled,
} = styles;

const SelectBeta: React.FunctionComponent<ISelectProps> = ({
    customNoDataText = 'No Data',
    defaultOptionIndex,
    description,
    disabled = false,
    errorMessage,
    height = '40px',
    id,
    isMulti = false,
    isSearch = true,
    label = 'Select',
    max = Infinity,
    menuHeight = '200px',
    name = 'options',
    onChange,
    options = [],
    placeholder,
    ref,
    style,
    value = [],
    width = '100%',
    ...props
}) => {
    //unused variables that are not need to be passed to div
    const {
        onBlurTraditional,
        onChangeTraditional,
        prefixIcon,
        prefixText,
        refTraditional,
        state,
        traditionalHTML5,
        validation,
        tryBeta,
        ...rest
    } = props;
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const elementId = (component: string) => {
        if (component === undefined) return;
        // Replace all space with '-' : to fix no scroll issue
        const newName = name.replace(/ /g, '-');
        return `w3uik-${newName}-${component}`;
    };

    const addItem = (option: string | undefined) => {
        if (!option) return;
        // multi selection
        if (isMulti === true) {
            const selected = [...value];
            const index = selected.findIndex((item) => item === option);
            if (index !== -1) {
                selected.splice(index, 1); // if existing, remove
            } else if (selected.length < max) {
                selected.push(option); // if new, add unless we’re at max
            }

            onChange?.(selected);
            return;
        }

        // single selection
        onChange?.(options.find((item) => item.id === option) as OptionProps);
        setIsOpen(false);
    };

    // to set default value from options at first render
    useEffect(() => {
        if (
            defaultOptionIndex &&
            options &&
            defaultOptionIndex >= 0 &&
            defaultOptionIndex < options?.length
        ) {
            addItem(options[defaultOptionIndex]?.id as string);
        }
    }, []);

    return (
        <DivStyledWrapper
            aria-expanded={isOpen === true}
            aria-label="select"
            className="w3uik-select-component"
            data-testid="test-select"
            id={id}
            ref={ref}
            role="listbox"
            style={{ ...style, width }}
            {...rest}
        >
            <DivStyledSelectWrapper className="w3uik_container" height={height}>
                <ButtonStyledSelect
                    aria-controls={elementId('menu')}
                    aria-expanded={isOpen === true}
                    aria-haspopup="listbox"
                    aria-selected={value.length > 0}
                    data-testid="test-select-button"
                    disabled={disabled}
                    onClick={() => {
                        if (!disabled) setIsOpen((prev) => !prev);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === KEY.DOWN) {
                            setIsOpen(true);
                        }
                    }}
                    ref={triggerRef}
                    type="button"
                >
                    {label && (
                        <LabelStyled
                            aria-disabled={disabled}
                            data-testid="test-select-label"
                            htmlFor={name}
                        >
                            {label}
                        </LabelStyled>
                    )}
                    {isOpen ? (
                        <TriangleUpIconStyled
                            data-testid="test-select-icon"
                            fontSize="20px"
                            fill={color.navy40}
                            title="triangle up icon"
                        />
                    ) : (
                        <TriangleDownIconStyled
                            data-testid="test-select-icon"
                            fontSize="20px"
                            fill={color.navy40}
                            title="triangle down icon"
                        />
                    )}
                </ButtonStyledSelect>
                <SelectedItemsList
                    addItem={addItem}
                    disabled={disabled}
                    elementId={elementId}
                    isMulti={isMulti}
                    isOpen={isOpen}
                    isSearch={isSearch}
                    max={max}
                    name={name}
                    options={options}
                    placeholder={placeholder}
                    setIsOpen={setIsOpen}
                    value={value}
                />
                {(description || errorMessage) && (
                    <DivStyledDesc aria-invalid={state === 'error'}>
                        {state === 'error'
                            ? errorMessage
                            : description && description}
                    </DivStyledDesc>
                )}
            </DivStyledSelectWrapper>
            {!disabled && (
                <>
                    <DivStyledOverlay
                        aria-label="Close Dropdown"
                        className="w3uik__select-overlay"
                        onClick={() => setIsOpen(false)}
                    />
                    <SelectMenuList
                        addItem={addItem}
                        customNoDataText={customNoDataText}
                        disabled={disabled}
                        elementId={elementId}
                        isMulti={isMulti}
                        isOpen={isOpen}
                        isSearch={isSearch}
                        max={max}
                        menuHeight={menuHeight}
                        name={name}
                        options={options}
                        placeholder={placeholder}
                        setIsOpen={setIsOpen}
                        value={value}
                    />
                </>
            )}
            <input
                name={name}
                type="hidden"
                value={isMulti ? (value as string[]).join(',') : value}
            />
        </DivStyledWrapper>
    );
};

export default SelectBeta;
