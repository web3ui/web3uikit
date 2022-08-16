import React, { useState, useRef, useEffect } from 'react';
import { ISelectProps, KEY, OptionProps } from '../types';
import styles from './SelectBeta.styles';
import SelectMenuList from './components/SelectMenuList';
import SelectedItemsList from './components/SelectedItemsList';

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
    defaultOptionIndex,
    disabled = false,
    id,
    isMulti = false,
    isSearch = true,
    label = 'Select',
    max = Infinity,
    name = 'options',
    onChange,
    options = [],
    placeholder,
    style,
    value = [],
    width = '100%',
    ...props
}) => {
    const {
        customNoDataText,
        description,
        errorMessage,
        onBlurTraditional,
        onChangeTraditional,
        prefixIcon,
        prefixText,
        refTraditional,
        state,
        traditionalHTML5,
        validation,
        ...rest
    } = props;
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    function elId(component: string) {
        if (component === undefined) return;
        // Replace all space with '-' : to fix no scroll issue
        return `w3uik-${name.replaceAll(' ', '-')}-${component}`;
    }

    function addItem(option: string | undefined) {
        if (!option) return;
        // multi selection
        if (isMulti === true) {
            let selected = [...value];
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
    }

    return (
        <DivStyledWrapper
            aria-expanded={isOpen === true}
            aria-label="select"
            className="w3uik"
            data-testid="test-select"
            id={id}
            role="listbox"
            style={{ ...style, width }}
            {...rest}
        >
            <DivStyledSelectWrapper className="w3uik_container">
                <LabelStyled
                    aria-disabled={disabled}
                    data-testid="test-select-label"
                    htmlFor={name}
                >
                    {label}
                </LabelStyled>
                <ButtonStyledSelect
                    aria-controls={elId('menu')}
                    aria-expanded={isOpen === true}
                    aria-haspopup="listbox"
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
                    {isOpen ? (
                        <TriangleUpIconStyled
                            data-testid="test-select-icon"
                            fontSize="20px"
                            title="triangle up icon"
                        />
                    ) : (
                        <TriangleDownIconStyled
                            data-testid="test-select-icon"
                            fontSize="20px"
                            title="triangle down icon"
                        />
                    )}
                </ButtonStyledSelect>
                <SelectedItemsList
                    addItem={addItem}
                    elId={elId}
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
                        elId={elId}
                        isOpen={isOpen}
                        isMulti={isMulti}
                        isSearch={isSearch}
                        max={max}
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
