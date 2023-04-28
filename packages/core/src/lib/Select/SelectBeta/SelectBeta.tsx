import React, { useState, useRef, useEffect } from 'react';
import { ISelectProps, KEY, OptionProps } from '../types';
import styles from './SelectBeta.styles';
import SelectMenuList from './components/SelectMenuList';
import SelectedItemsList from './components/SelectedItemsList';
import { color } from '@web3uikit/styles';
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter';

const {
    ButtonStyledSelect,
    DivStyledDesc,
    DivStyledSelectWrapper,
    DivStyledWrapper,
    LabelStyled,
    TriangleDownIconStyled,
    TriangleUpIconStyled,
} = styles;

const SelectBeta: React.FunctionComponent<ISelectProps> = ({
    customNoDataText = 'No Data',
    customize,
    customSelect,
    defaultOptionIndex,
    description,
    disabled = false,
    errorMessage,
    height = '56px',
    id,
    isMulti = false,
    isSearch = true,
    label = 'Select',
    max = Infinity,
    menuHeight = '200px',
    menuCustomize,
    name = 'options',
    onChange,
    options = [],
    placeholder,
    prefixIcon,
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
        prefixText,
        refTraditional,
        state,
        traditionalHTML5,
        validation,
        tryBeta,
        ...rest
    } = props;
    const triggerRef = useRef<HTMLButtonElement>(null);
    const {
        isInsideElementClick: isOpen,
        outsideAlerterRef,
        setIsInsideElementClick: setIsOpen,
    } = useOutsideAlerter(false);

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
            defaultOptionIndex !== undefined &&
            defaultOptionIndex !== null &&
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
            customize={customize}
            data-testid="test-select"
            id={id}
            ref={ref}
            role="listbox"
            style={{ ...style, width }}
            {...rest}
        >
            <DivStyledSelectWrapper
                ref={!isMulti ? outsideAlerterRef : undefined}
                className="w3uik-container"
                height={height}
                customize={customize}
                menuCustomize={menuCustomize}
            >
                <ButtonStyledSelect
                    aria-controls={elementId('menu')}
                    aria-expanded={isOpen === true}
                    aria-haspopup="listbox"
                    aria-selected={value.length > 0}
                    customize={customize}
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
                    {!customSelect && (
                        <>
                            {label && (
                                <LabelStyled
                                    aria-disabled={disabled}
                                    customize={customize}
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
                                    fill={customize?.color ?? color.navy40}
                                    title="close menu"
                                />
                            ) : (
                                <TriangleDownIconStyled
                                    data-testid="test-select-icon"
                                    fontSize="20px"
                                    fill={customize?.color ?? color.navy40}
                                    title="open menu"
                                />
                            )}
                        </>
                    )}
                </ButtonStyledSelect>
                <SelectedItemsList
                    addItem={addItem}
                    customSelect={customSelect}
                    disabled={disabled}
                    elementId={elementId}
                    isMulti={isMulti}
                    isOpen={isOpen}
                    isSearch={isSearch}
                    max={max}
                    name={name}
                    options={options}
                    placeholder={placeholder}
                    prefixIcon={prefixIcon}
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
                    <SelectMenuList
                        addItem={addItem}
                        customize={customize}
                        customNoDataText={customNoDataText}
                        disabled={disabled}
                        elementId={elementId}
                        isMulti={isMulti}
                        isOpen={isOpen}
                        isSearch={isSearch}
                        max={max}
                        menuCustomize={menuCustomize}
                        menuHeight={menuHeight}
                        name={name}
                        ref={outsideAlerterRef}
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
