import styled, { css } from 'styled-components';
import { color, resetCSS } from '@web3uikit/styles';
import { TriangleDown, TriangleUp, Search, Checkmark } from '@web3uikit/icons';
import { ISelectProps } from '../types';

const hoverStyles = css<Pick<ISelectProps, 'customize'>>`
    ${(p) =>
        p.customize?.onHover &&
        p.customize?.onHover === 'lighten' &&
        'filter: brightness(1.1)'}
    ${(p) =>
        p.customize?.onHover &&
        p.customize?.onHover === 'darken' &&
        'filter: brightness(0.9)'}
`;

const DivStyledWrapper = styled.div<Pick<ISelectProps, 'customize'>>`
    ${resetCSS};
    --arrow-width: 51px;
    --checkbox-width: 42px;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: ${(props) => props.customize?.fontSize ?? '14px'};
    line-height: 24px;
    color: ${(props) => props.customize?.color ?? color.blue70};
    &[aria-expanded='true'] {
        border-color: ${color.navy30};
        & .w3uik-dropdown-wrapper {
            display: block;
        }

        .w3uik-select-overlay {
            display: block;
        }
    }
    ${(p) =>
        p.customize?.margin
            ? `margin: ${p.customize.margin}`
            : `margin-bottom: 5px`}
`;

const DivStyledSelectWrapper = styled.div<Partial<ISelectProps>>`
    background-color: ${(p) => p.customize?.backgroundColor ?? color.white};
    border-radius: ${(p) => p.customize?.borderRadius ?? '15px'};
    cursor: pointer;
    display: flex;
    min-height: ${(p) => p.height ?? '56px'};
    padding: ${(p) => p.customize?.padding ?? '8px 20px 8px 10px'};
    position: relative;
    transition: all 0.1s linear;
`;

const LabelStyled = styled.label<Partial<ISelectProps>>`
    ${resetCSS};
    background-color: ${(p) => p.customize?.backgroundColor ?? color.white};
    color: ${(p) => p.customize?.color ?? color.blueGray50};
    font-weight: 500;
    font-size: 14px;
    height: max-content;
    left: 12px;
    padding: 0 4px;
    pointer-events: none;
    position: absolute;
    top: -9px;
    transition: all 0.1s ease-out;

    &[aria-disabled='true'] {
        color: ${color.gray30};
    }
`;

const ButtonStyledSelect = styled.button<Pick<ISelectProps, 'customize'>>`
    appearance: none;
    background: none;
    border: ${(p) => p.customize?.border ?? `1px solid ${color.gray30}`};
    border-radius: ${(p) => p.customize?.borderRadius ?? '15px'};
    box-sizing: border-box;
    height: 100%;
    left: 0;
    padding: 0;
    position: absolute;
    flex-grow: 1;
    text-align: left;
    top: 0;
    transition: border-color 150ms linear;
    width: 100%;

    &[aria-expanded='true'],
    &:focus:enabled {
        border-color: ${color.navy30};
        outline: none;
        /* On Tab - set box shadow */
        -webkit-box-shadow: 0px 0px 0px 2px ${color.navy30};
        -moz-box-shadow: 0px 0px 0px 2px ${color.navy30};
        box-shadow: 0px 0px 0px 2px ${color.navy30};
        label {
            color: ${color.navy40};
        }
    }

    &:hover:enabled {
        border-color: ${color.navy30};
        label {
            color: ${color.navy40};
        }
        ${hoverStyles};
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const ListStyledSelected = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-family: inherit;
    grid-auto-flow: column;
    gap: 4px;
    left: 8px;
    list-style: none;
    margin: 0;
    max-width: calc(100% - var(--arrow-width));
    padding-bottom: 2px;
    padding-left: 0;
    padding-top: 2px;
    position: relative;
    &[aria-disabled='true'] {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

// ----Tag Styles
const ListItemStyledTag = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 5px;
    line-break: loose;
`;

const DivStyledPlaceholder = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-family: inherit;
    grid-auto-flow: column;
    left: 8px;
    list-style: none;
    margin: 0;
    max-width: calc(100% - var(--arrow-width));
    opacity: 0.6;
    padding-bottom: 0;
    padding-left: 0;
    padding-top: 0;
    pointer-events: none;
    position: relative;
    &[aria-disabled='true'] {
        opacity: 0.5;
    }
`;

const DivStyledOverlay = styled.div`
    bottom: 0;
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
`;

const MenuStyledWrapper = styled.menu<Pick<ISelectProps, 'menuCustomize'>>`
    display: none;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 2;
    ${(p) =>
        p.menuCustomize?.margin
            ? `margin:${p.menuCustomize.margin}`
            : 'margin-top: 5px'}
`;

type TStyleProps = Pick<ISelectProps, 'customize' | 'menuCustomize'>;
const DivStyledDropdown = styled.div<TStyleProps>`
    background: ${(p) => p.menuCustomize?.backgroundColor ?? color.aero10};
    border-radius: ${(p) => p.menuCustomize?.borderRadius ?? '16px'};
    border: ${(p) => p.menuCustomize?.border ?? `2px solid ${color.navy30}`};
    left: 0;
    position: absolute;
    top: 0;
    width: ${(p) => p.menuCustomize?.width ?? '100%'};
`;

const InputStyledSearch = styled.input<TStyleProps>`
    appearance: none;
    background-color: ${(p) =>
        p.menuCustomize?.backgroundColor ?? color.aero10};
    border: 0;
    border-bottom: 1px solid ${color.navy20};
    border-radius: 14px 14px 0 0;
    color: ${(p) => p.menuCustomize?.color ?? color.blue70};
    display: block;
    font-family: inherit;
    font-size: inherit;
    padding: 14px 12px 14px 42px;
    width: 100%;
    &[aria-hidden='true'] {
        // Use position to hide input - this helps to make arrow keys functional
        position: absolute;
        right: 200vw;
        & + .w3uik-search-icon {
            display: none;
        }
    }
    &:focus {
        outline: none;
    }
`;

// ------ Option List
type IListProps = Pick<ISelectProps, 'height' | 'customize' | 'menuCustomize'>;
const ListStyledDropdown = styled.ul<IListProps>`
    border-bottom-left-radius: ${(p) =>
        p.menuCustomize?.borderRadius ?? '14px'};
    border-bottom-right-radius: ${(p) =>
        p.menuCustomize?.borderRadius ?? '14px'};
    box-shadow: 0 4px 8px rgba(248, 174, 174, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    list-style: none;
    margin: 0;
    max-height: ${(p) => p.menuCustomize?.height ?? p.height ?? '200px'};
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: ${(p) => p.menuCustomize?.padding ?? '0px'};
    z-index: 2;
    // Scrollbar in options
    &::-webkit-scrollbar {
        background: none;
        height: 0;
        width: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${(p) =>
            p.menuCustomize?.scrollbarColor ?? color.gray40};
        border-radius: 30px;
        border: 2.5px solid transparent;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    // For 1st option in list - first child is input so select 2nd child
    :nth-child(2),
    :nth-child(2):hover,
    :nth-child(2):focus {
        border-top-left-radius: ${(p) =>
            p.menuCustomize?.borderRadius ?? '14px'};
        border-top-right-radius: ${(p) =>
            p.menuCustomize?.borderRadius ?? '14px'};
    }

    // For Last option in list
    :last-child,
    :last-child:hover,
    :last-child:focus {
        border-bottom-left-radius: ${(p) =>
            p.menuCustomize?.borderRadius ?? '14px'};
        border-bottom-right-radius: ${(p) =>
            p.menuCustomize?.borderRadius ?? '14px'};
    }
`;

const ListItemStyledDropdown = styled.li`
    display: block;
    margin: 0;
    padding: 0;
    background-color: transparent;
`;

const SpanStyledItemIcon = styled.span`
    align-items: center;
    display: flex;
    justify-content: center;
`;

const SpanStyledItemText = styled.span<{ noPrefix: boolean }>`
    margin-left: ${(p) => (p.noPrefix ? '10px' : '0px')};
`;

const SpanStyledItemSelected = styled.span`
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
    padding: 1px 0;
`;

const ButtonStyledListItem = styled.button<TStyleProps>`
    align-items: center;
    appearance: none;
    background: none;
    border: none;
    color: ${(p) => p.menuCustomize?.color ?? color.blue70};
    display: flex;
    padding: 5px 10px;
    gap: 5px;
    text-align: left;
    transition-duration: 150ms;
    transition-property: background-color, color;
    transition-timing-function: linear;
    width: 100%;

    &::before {
        content: '';
        display: flex;
        height: 40px;
        justify-content: center;
    }

    // Option Selected Styles
    &[aria-selected='true'] {
        color: ${(p) => p.menuCustomize?.color ?? color.blue40};
        &::before {
            background-size: contain;
            content: '';
        }
    }

    &:hover {
        background: ${(p) => p.menuCustomize?.bgColorOnHover ?? color.navy20};
    }

    &[data-highlighted='true'],
    &:focus {
        background: ${(p) => p.menuCustomize?.bgColorOnHover ?? color.navy20};
        outline: none;
    }

    &[disabled] {
        color: ${color.blueGray50};
        cursor: not-allowed;
    }
`;
// ------------------

const SpanStyledNoResults = styled.span<Pick<ISelectProps, 'menuCustomize'>>`
    display: block;
    color: ${(p) => p.menuCustomize?.color ?? color.blueGray50};
    padding: 14px;
    text-align: center;
`;

const DivStyledDesc = styled.div`
    color: ${color.blueGray50};
    font-size: 12px;
    line-height: 12px;
    font-style: normal;
    font-weight: 400;
    overflow: hidden;
    padding: 4px 4px;
    position: absolute;
    text-overflow: ellipsis;
    top: 100%;
    white-space: nowrap;
    width: 90%;
    &:hover {
        overflow: visible;
        white-space: normal;
    }
    &[aria-invalid='true'] {
        color: ${color.red40};
    }
`;

// --------Icons

const SearchIconStyled = styled(Search)`
    background-size: contain;
    height: 24px;
    pointer-events: none;
    position: absolute;
    left: 8px;
    top: 22px;
    transform: translateY(-50%);
    width: 24px;
`;

const TriangleDownIconStyled = styled(TriangleDown)`
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: var(--arrow-width);
`;

const TriangleUpIconStyled = styled(TriangleUp)`
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: var(--arrow-width);
`;

const CheckmarkIconStyled = styled(Checkmark)`
    color: ${color.mint40};
    margin-left: auto;
    flex-shrink: 0;
    display: none;
    height: 12px;
    width: 12px;
    &[aria-selected='true'] {
        display: block;
    }
`;
// -------------

const DivStyledCustomSelect = styled.div`
    ${resetCSS};
    height: 100%;
    width: 100%;
`;

export default {
    ButtonStyledListItem,
    ButtonStyledSelect,
    CheckmarkIconStyled,
    DivStyledCustomSelect,
    DivStyledDesc,
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
    SpanStyledItemSelected,
    SpanStyledItemText,
    SpanStyledNoResults,
    TriangleDownIconStyled,
    TriangleUpIconStyled,
};
