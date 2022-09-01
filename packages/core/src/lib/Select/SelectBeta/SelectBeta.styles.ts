import styled from 'styled-components';
import { color, resetCSS } from '@web3uikit/styles';
import { TriangleDown, TriangleUp, Search, Checkmark } from '@web3uikit/icons';

const DivStyledWrapper = styled.div`
    ${resetCSS};
    --arrow-width: 2.5em;
    --checkbox-width: 2em;
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 0.88em;
    line-height: 1;
    &[aria-expanded='true'] {
        border-color: ${color.blueSky};
        & .w3uik__dropdown-wrapper {
            display: block;
        }

        .w3uik__select-overlay {
            display: block;
        }
    }
`;

const DivStyledSelectWrapper = styled.div<{ height: string }>`
    background-color: ${color.white};
    border-radius: 16px;
    cursor: pointer;
    display: flex;
    min-height: ${(p) => p.height ?? '40px'};
    padding: 8px 20px 8px 10px;
    position: relative;
    transition: all 0.1s linear;
`;

const LabelStyled = styled.label`
    ${resetCSS};
    background-color: ${color.white};
    color: ${color.blue};
    font-weight: 500;
    font-size: 14px;
    height: 24px;
    left: 12px;
    line-height: 1;
    padding: 0 4px;
    pointer-events: none;
    position: absolute;
    top: -9px;
    transition: all 0.1s ease-out;
    z-index: 10;
    &[aria-disabled='true'] {
        color: ${color.greyLight};
    }
`;

const ButtonStyledSelect = styled.button`
    appearance: none;
    background: none;
    border: 1px solid ${color.greyLight};
    border-radius: 16px;
    box-sizing: border-box;
    color: black;
    font-size: 1em;
    height: 100%;
    left: 0;
    padding: 0;
    position: absolute;
    flex-grow: 1;
    text-align: left;
    top: 0;
    transition: border-color 150ms linear;
    width: 100%;
    z-index: 3;

    &[aria-expanded='true'],
    &:focus {
        border-color: ${color.blueSky};
        outline: none;
        /* On Tab - set box shadow */
        -webkit-box-shadow: 0px 0px 0px 2px ${color.blueSky};
        -moz-box-shadow: 0px 0px 0px 2px ${color.blueSky};
        box-shadow: 0px 0px 0px 2px ${color.blueSky};
    }

    &:hover:enabled {
        border-color: ${color.blueSky};
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
    grid-gap: 0.5em;
    left: 0.5em;
    list-style: none;
    margin: 0;
    max-width: calc(100% - var(--arrow-width));
    padding-bottom: 2px;
    padding-left: 0;
    padding-top: 2px;
    position: relative;
    z-index: 10;
    &[aria-disabled='true'] {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

// ----Tag Styles
const ListItemStyledTag = styled.li`
    display: flex;
    z-index: -10;
    align-items: center;
    width: 100%;
    line-break: loose;
`;

const DivStyledPlaceholder = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: inherit;
    grid-auto-flow: column;
    grid-gap: 0.5em;
    left: 0.5em;
    list-style: none;
    margin: 0;
    max-width: calc(100% - var(--arrow-width));
    padding-bottom: 0;
    padding-left: 0;
    padding-top: 0;
    position: relative;
    top: 0.5em;
    z-index: 10;
    line-height: 1.75em;
    min-height: 1.75em;
    opacity: 0.6;
    pointer-events: none;
`;

const DivStyledOverlay = styled.div`
    bottom: 0;
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
`;

const MenuStyledWrapper = styled.menu`
    display: none;
    margin: 0;
    margin-top: 5px;
    padding: 0;
    position: relative;
    z-index: 3;
`;

const DivStyledDropdown = styled.div`
    background: ${color.blueLight};
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 20;
    border: 2px solid ${color.blueSky};
    border-radius: 16px;
`;

const InputStyledSearch = styled.input`
    background-color: ${color.blueLight};
    appearance: none;
    border: 0;
    border-bottom: 1px solid ${color.paleBlue2};
    border-radius: 16px 16px 0 0;
    color: ${color.blueDark};
    display: block;
    font-family: inherit;
    font-size: 1em;
    padding-bottom: 1em;
    padding-left: 3em;
    padding-right: 0.5em;
    padding-top: 1em;
    width: 100%;

    &[aria-hidden='true'] {
        position: absolute;
        display: none;

        & + .w3uik__search-icon {
            display: none;
        }
    }
    &:focus {
        outline: none;
    }
`;

// ------ Option List

const ListStyledDropdown = styled.ul<{ height: string }>`
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: 0 4px 8px rgba(248, 174, 174, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    list-style: none;
    margin: 0;
    max-height: ${(p) => p.height ?? '200px'};
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: 0;

    // Scrollbar in options
    &::-webkit-scrollbar {
        background: none;
        height: 0;
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${color.greyIcons};
        border-radius: 30px;
        border: 4px solid transparent;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    // For Last option in list
    :last-child,
    :last-child:hover,
    :last-child:focus {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
    // For 1st option in list - first child is input so select 2nd child
    :nth-child(2),
    :nth-child(2):hover,
    :nth-child(2):focus {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
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
    height: 24px;
    justify-content: center;
    margin: 0 4px;
    padding: 0 5px;
    width: 24px;
    // Any component(svg/img) used as icon will have a common width
    * {
        height: 100%;
        object-fit: contain;
        width: 24px !important;
    }
`;

const SpanStyledItemText = styled.span<{ noPrefix: boolean }>`
    margin-left: ${(p) => (p.noPrefix ? '10px' : '0px')};
`;

const SpanStyledItemSelected = styled.span`
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
`;

const ButtonStyledListItem = styled.button`
    align-items: center;
    appearance: none;
    background: none;
    border: none;
    color: ${color.blueDark};
    display: flex;
    padding-bottom: 0.375em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: 0.375em;
    text-align: left;
    transition-duration: 150ms;
    transition-property: background-color, color;
    transition-timing-function: linear;
    width: 100%;

    &::before {
        content: '';
        display: flex;
        height: 3em;
        justify-content: center;
    }

    // Option Selected Styles
    &[aria-selected='true'] {
        color: ${color.blueDark2};
        &::before {
            background-size: contain;
            content: '';
        }
    }

    &:hover {
        background: ${color.beauBlue};
    }

    &[data-highlighted],
    &:focus {
        background: ${color.beauBlue};
        outline: none;
    }

    &[disabled] {
        color: ${color.grey};
        cursor: not-allowed;
    }
`;
// ------------------

const SpanStyledNoResults = styled.span`
    display: block;
    color: ${color.grey};
    padding: 1em;
    text-align: center;
`;

const DivStyledDesc = styled.div`
    color: ${color.grey};
    font-size: 12px;
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
        color: ${color.red};
    }
`;

// --------Icons

const SearchIconStyled = styled(Search)`
    background-size: contain;
    height: 1em;
    pointer-events: none;
    position: absolute;
    left: 0.5em;
    top: 1em;
    transform: translateY(-50%);
    width: 1em;
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
    color: ${color.green};
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

export default {
    ButtonStyledListItem,
    ButtonStyledSelect,
    CheckmarkIconStyled,
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
