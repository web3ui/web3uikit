import React, { useState, useRef, useEffect } from 'react';
import { color } from '@web3uikit/styles';
import { ISelectProps, KEY, OptionProps } from '../types';
import styles from './SelectBeta.styles';
import { Tag } from '../../Tag';
import { ColorProps } from '../../Todo/types';
import { Illustration } from '../../Illustrations';

const {
    ButtonStyledListItem,
    ButtonStyledSelect,
    CheckmarkIconStyled,
    DivStyledDropdown,
    DivStyledOverlay,
    DivStyledPlaceholder,
    DivStyledSelectWrapper,
    DivStyledWrapper,
    InputStyledSearch,
    LabelStyled,
    ListItemStyledDropdown,
    ListItemStyledTag,
    ListStyledDropdown,
    ListStyledSelected,
    MenuStyledWrapper,
    SearchIconStyled,
    SpanStyledItemIcon,
    SpanStyledNoResults,
    TriangleDownIconStyled,
    TriangleUpIconStyled,
} = styles;

const colors: ColorProps[] = [
    'blue',
    'green',
    'grey',
    'yellow',
    'purple',
    'blueLight',
    'pink',
];

const SelectBeta: React.FunctionComponent<ISelectProps> = ({
    max = Infinity,
    isMulti = false,
    name = 'select',
    isSearch = true,
    disabled = false,
    onChange,
    options = [],
    label = 'Select',
    id,
    placeholder,
    value = [],
    width = '100%',
    style,
    ...rest
}) => {
    const listRef = useRef<HTMLUListElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const [activeDescendantIndex, setActiveDescendantIndex] = useState(0); // Active descendant. Numbers are easier to manipulate than element IDs.
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    // computed
    const visibleIndices: number[] = [];
    const visibleOptions: OptionProps[] = [];
    options.forEach((option, index) => {
        if (
            option.label
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        ) {
            // filter results in one pass
            visibleOptions.push(option);
            visibleIndices.push(index);
        }
    });

    const shouldDisplaySearch = isSearch === true && options.length > 4;

    const isMaxed = value.length === max;

    // methods
    //-----For Scrolling listbox-----
    function elId(component: string) {
        if (component === undefined) return;
        // Replace all space with '-' : to fix no scroll issue
        return `w3uik-${name.replaceAll(' ', '-')}-${component}`;
    }

    function optionId(option: number | undefined) {
        if (option === undefined) return;
        return elId(`option-${option}`);
    }

    function scrollTo(wrapper: HTMLElement | null, selector: string): void {
        if (wrapper) {
            const el = wrapper.querySelector(selector);
            if (el) {
                el.scrollIntoView(false);
            }
        }
    }
    //--------------------------------

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
            // if (options.indexOf(option) !== -1) {
            //     selected = options.filter(
            //         (order) => selected.indexOf(order) !== -1,
            //     ); // if existing option, keep original order
            // }

            onChange?.(selected);
            return;
        }

        // single
        onChange?.([option]);
        setIsOpen(false);
    }

    function onKeyDown(evt: React.KeyboardEvent<HTMLInputElement>): void {
        const first = visibleIndices[0];
        const last = visibleIndices[visibleIndices.length - 1];

        switch (evt.key) {
            // select active item
            case KEY.ENTER: {
                evt.preventDefault();
                addItem(options[activeDescendantIndex]?.id as string);
                break;
            }
            // move down / up
            case KEY.DOWN:
            case KEY.UP: {
                evt.preventDefault();
                const sum = evt.key === KEY.UP ? -1 : 1;
                // if at beginning, loop around to end, and vice-versa
                const fallback = evt.key === KEY.UP ? last : first;
                const nextIndex =
                    visibleIndices.indexOf(activeDescendantIndex) + sum;
                const next =
                    (visibleIndices[nextIndex] !== undefined
                        ? visibleIndices[nextIndex]
                        : fallback) ?? 0;
                // set to last index if at beginning of list
                setActiveDescendantIndex(next);
                scrollTo(listRef.current, `#${optionId(next)}`);
                break;
            }
            // move to start / end
            case KEY.END:
            case KEY.HOME: {
                const next = (evt.key === KEY.HOME ? first : last) ?? 0;
                setActiveDescendantIndex(next);
                scrollTo(listRef.current, `#${optionId(next)}`);
                break;
            }
            // close on Escape
            case KEY.ESC:
                setIsOpen(false);
                break;
            // close if tabbing away
            case KEY.TAB:
                setIsOpen(false);
                break;
            // prevent typing if search hidden
            default:
                if (!isSearch) {
                    evt.preventDefault();
                }
                break;
        }
    }

    // effect 1. maintain focus
    useEffect(() => {
        if (searchRef.current && isOpen) {
            searchRef.current.focus();
        }
    });

    // effect 2. active descendant
    useEffect(() => {
        if (visibleIndices.indexOf(activeDescendantIndex) === -1) {
            setActiveDescendantIndex(visibleIndices[0] ?? 0);
        }
    }, [activeDescendantIndex, visibleIndices]);

    return (
        <DivStyledWrapper
            id={id}
            aria-expanded={isOpen === true}
            role="listbox"
            className="w3uik"
            data-testid="test-select"
            aria-label="select"
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
                    aria-haspopup="listbox"
                    onClick={() => setIsOpen(true)}
                    aria-expanded={isOpen === true}
                    onKeyDown={(e) => {
                        if (e.key === KEY.DOWN) {
                            setIsOpen(true);
                        }
                    }}
                    ref={triggerRef}
                    type="button"
                    disabled={disabled}
                >
                    {isOpen ? (
                        <TriangleUpIconStyled
                            title="triangle up icon"
                            fontSize="20px"
                        />
                    ) : (
                        <TriangleDownIconStyled
                            title="triangle down icon"
                            fontSize="20px"
                        />
                    )}
                </ButtonStyledSelect>
                {value.length > 0 ? (
                    <ListStyledSelected
                        aria-disabled={disabled}
                        onClick={(e) => {
                            if (!disabled) setIsOpen((prev) => !prev);
                        }}
                    >
                        {isMulti ? (
                            (value as string[]).map((option, i) => (
                                <ListItemStyledTag
                                    key={option}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Tag
                                        text={option}
                                        theme="chips"
                                        tone="light"
                                        color={
                                            i < colors.length
                                                ? colors[i]
                                                : colors[i % colors.length]
                                        }
                                        onCancelClick={() => {
                                            if (!disabled) addItem(option);
                                        }}
                                        active={false}
                                        hasCancel={isMulti}
                                    />
                                </ListItemStyledTag>
                            ))
                        ) : (
                            <ListItemStyledTag style={{ margin: 'auto' }}>
                                <SpanStyledItemIcon>
                                    {
                                        options.find(
                                            (option) => option.id === value[0],
                                        )?.prefix
                                    }
                                </SpanStyledItemIcon>

                                {
                                    options.find(
                                        (option) => option.id === value[0],
                                    )?.label as string
                                }
                            </ListItemStyledTag>
                        )}
                    </ListStyledSelected>
                ) : (
                    <DivStyledPlaceholder>
                        {placeholder || `Select ${name}`}
                    </DivStyledPlaceholder>
                )}
            </DivStyledSelectWrapper>
            <DivStyledOverlay
                aria-label="Close Dropdown"
                className="w3uik__select-overlay"
                onClick={() => setIsOpen(false)}
            />
            <MenuStyledWrapper
                id={elId('menu')}
                className="w3uik__dropdown-wrapper"
            >
                <DivStyledDropdown>
                    <InputStyledSearch
                        aria-activedescendant={optionId(activeDescendantIndex)}
                        aria-hidden={shouldDisplaySearch === false || undefined}
                        aria-label="Filter Options"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={onKeyDown}
                        ref={searchRef}
                        type="search"
                        value={searchTerm}
                    />
                    {isSearch && (
                        <>
                            <SearchIconStyled
                                className="w3uik__search-icon"
                                fontSize={22}
                                fill={color.blue}
                            />
                        </>
                    )}
                    <ListStyledDropdown ref={listRef}>
                        {visibleOptions.map((option, index) => {
                            const isSelected =
                                value.indexOf(option.id as string) !== -1;
                            let ariaSelected: boolean | undefined = isSelected;
                            if (ariaSelected === false && isMaxed === true) {
                                ariaSelected = undefined;
                            }
                            return (
                                <ListItemStyledDropdown key={option.id}>
                                    <ButtonStyledListItem
                                        aria-selected={ariaSelected}
                                        data-highlighted={
                                            activeDescendantIndex ===
                                                visibleIndices[index] ||
                                            undefined
                                        }
                                        disabled={isMaxed && !isSelected}
                                        id={optionId(visibleIndices[index])}
                                        onClick={() =>
                                            addItem(option.id as string)
                                        }
                                        role="option"
                                        type="button"
                                    >
                                        <SpanStyledItemIcon>
                                            {option.prefix}
                                        </SpanStyledItemIcon>
                                        <span>{option.label}</span>
                                        <CheckmarkIconStyled
                                            aria-selected={ariaSelected}
                                        />
                                    </ButtonStyledListItem>
                                </ListItemStyledDropdown>
                            );
                        })}
                        {options.length >= 0 && visibleOptions.length === 0 && (
                            <>
                                <Illustration
                                    height="60px"
                                    logo="servers"
                                    width="100%"
                                />
                                <SpanStyledNoResults>
                                    {options.length === 0
                                        ? 'No Data'
                                        : `No results for “${searchTerm}”`}
                                </SpanStyledNoResults>
                            </>
                        )}
                    </ListStyledDropdown>
                </DivStyledDropdown>
            </MenuStyledWrapper>
            <input
                type="hidden"
                name={name}
                value={(value as string[]).join(',')}
            />
        </DivStyledWrapper>
    );
};

export default SelectBeta;
