import React, { useState, useRef, useEffect } from 'react';
import { color } from '@web3uikit/styles';
import { ISelectExtendedProps, KEY, OptionProps } from '../../types';
import styles from '../SelectBeta.styles';
import { Illustration } from '../../../Illustrations';
import { escapeRegex } from '../../../../utils/const';

const {
    ButtonStyledListItem,
    CheckmarkIconStyled,
    DivStyledDropdown,
    InputStyledSearch,
    ListItemStyledDropdown,
    ListStyledDropdown,
    MenuStyledWrapper,
    SearchIconStyled,
    SpanStyledItemIcon,
    SpanStyledItemText,
    SpanStyledNoResults,
} = styles;

const SelectMenuList: React.FunctionComponent<ISelectExtendedProps> = ({
    addItem,
    customNoDataText,
    customize,
    elementId,
    isMulti,
    isOpen,
    isSearch = true,
    max,
    menuHeight = '200px',
    menuCustomize,
    options = [],
    setIsOpen,
    value = [],
}) => {
    const listRef = useRef<HTMLUListElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    // Active descendant. Numbers are easier to manipulate than element IDs.
    const [activeDescendantIndex, setActiveDescendantIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    // computed
    const visibleIndices: number[] = [];
    const visibleOptions: OptionProps[] = [];
    options.forEach((option, index) => {
        if (
            new RegExp(escapeRegex(searchTerm), 'i').test(
                option.label as string,
            )
        ) {
            // filter results in one pass
            visibleOptions.push(option);
            visibleIndices.push(index);
        }
    });

    const shouldDisplaySearch = isSearch === true && options.length > 4;
    const isMaxed = value.length === max;

    //-----For Scrolling listbox on Key press-----
    const optionId = (option: number | undefined) => {
        if (option === undefined) return;
        return elementId(`option-${option}`);
    };

    const scrollTo = (wrapper: HTMLElement | null, selector: string): void => {
        if (wrapper) {
            const el = wrapper.querySelector(selector);
            if (el) {
                el.scrollIntoView(false);
            }
        }
    };

    const onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
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
    };
    //--------------------------------

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
        <MenuStyledWrapper
            id={elementId('menu')}
            className="w3uik-dropdown-wrapper"
            aria-label="select-options"
            data-testid="test-select-options"
            menuCustomize={menuCustomize}
        >
            <DivStyledDropdown
                customize={customize}
                menuCustomize={menuCustomize}
            >
                <InputStyledSearch
                    aria-activedescendant={optionId(activeDescendantIndex)}
                    aria-hidden={shouldDisplaySearch === false || undefined}
                    aria-label="Filter Options"
                    customize={customize}
                    menuCustomize={menuCustomize}
                    data-testid="test-select-search-input"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={onKeyDown}
                    ref={searchRef}
                    type="search"
                    value={searchTerm}
                    placeholder="Search"
                />
                {shouldDisplaySearch && (
                    <SearchIconStyled
                        className="w3uik-search-icon"
                        fontSize={22}
                        fill={menuCustomize?.color ?? color.navy40}
                    />
                )}
                <ListStyledDropdown
                    ref={listRef}
                    height={menuHeight}
                    customize={customize}
                    menuCustomize={menuCustomize}
                >
                    {visibleOptions.map((option, index) => {
                        const isSelected = isMulti
                            ? value.indexOf(option.id as string) !== -1
                            : value === option.id;
                        let ariaSelected: boolean | undefined = isSelected;
                        if (ariaSelected === false && isMaxed === true) {
                            ariaSelected = undefined;
                        }
                        return (
                            <ListItemStyledDropdown
                                key={option.id}
                                aria-label="select-option"
                                data-testid={`test-select-option-${index}`}
                            >
                                <ButtonStyledListItem
                                    aria-selected={ariaSelected}
                                    customize={customize}
                                    data-highlighted={
                                        activeDescendantIndex ===
                                            visibleIndices[index] || undefined
                                    }
                                    disabled={isMaxed && !isSelected}
                                    id={optionId(visibleIndices[index])}
                                    menuCustomize={menuCustomize}
                                    onClick={() => addItem(option.id as string)}
                                    role="option"
                                    type="button"
                                >
                                    {option.prefix && (
                                        <SpanStyledItemIcon>
                                            {option.prefix}
                                        </SpanStyledItemIcon>
                                    )}
                                    <SpanStyledItemText
                                        noPrefix={!Boolean(option.prefix)}
                                    >
                                        {option.label}
                                    </SpanStyledItemText>
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
                            <SpanStyledNoResults menuCustomize={menuCustomize}>
                                {options.length === 0
                                    ? customNoDataText
                                    : `No results for “${searchTerm}”`}
                            </SpanStyledNoResults>
                        </>
                    )}
                </ListStyledDropdown>
            </DivStyledDropdown>
        </MenuStyledWrapper>
    );
};

export default SelectMenuList;
