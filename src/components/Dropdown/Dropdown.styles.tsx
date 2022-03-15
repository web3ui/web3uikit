import styled, { css } from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { IDropdown } from './types';

export const StyledSelectParentDiv = styled.div<
    Pick<IDropdown, 'width' | 'isDisabled'>
>`
    ${resetCSS}
    display: flex;
    fill: ${color.grey};
    flex-direction: column;
    height: fit-content;
    position: relative;
    row-gap: 16px;
    ${(props) => props.isDisabled && 'opacity: 50%;'}
`;

interface IStyledSelectedDiv {
    isOpen: boolean;
    width: string;
    hasOutline: boolean;
}

export const DivStyledSelected = styled.div<IStyledSelectedDiv>`
    border-radius: 16px;
    border: 1px solid ${(p) => (p.hasOutline ? color.greyLight : 'transparent')};
    color: ${color.blue};
    cursor: pointer;
    height: 40px;
    min-height: fit-content;
    min-width: fit-content;
    outline: 0px solid transparent;
    transition: all 0.3s ease;
    width: ${(props) => props.width};
    & > div {
        align-items: center;
        color: inherit;
        display: flex;
        gap: 2px;
        padding: 8px;
        transition: all 0.3s ease;
        & :nth-child(2) {
            margin-right: auto;
            white-space: nowrap;
        }
        & :nth-child(3) {
            margin-left: auto;
        }
    }
    &:hover {
        border-color: ${(p) => (p.hasOutline ? color.blueSky : 'transparent')};
    }
    &:focus {
        border: 2px solid ${color.blueSky};
    }
    ${(props) =>
        props.isOpen &&
        css`
            ${props.hasOutline &&
            'outline: 4px solid rgba(158, 204, 234, 0.3)'};
            border-color: ${props.hasOutline ? color.blue : 'transparent'};
        `};
`;

interface IDivStyledOptionsContainer extends Pick<IDropdown, 'width'> {
    isOpen: boolean;
}

export const DivStyledOptionsContainer = styled.div<IDivStyledOptionsContainer>`
    background-color: #f2f6ff;
    border-radius: 16px;
    border: 2px solid ${color.blueSky};
    display: flex;
    flex-direction: column;
    margin-top: -8px;
    overflow: hidden;
    position: absolute;
    top: 56px;
    transition: all 0.3s ease;
    width: ${(props) => props.width};
    z-index: 999;
    display: ${(props) => (!props.isOpen ? 'none' : 'block')};
`;

export const DivInnerStyledOptionsContainer = styled.div`
    padding: 8px;
`;

export const DivStyledOptionItem = styled.div`
    color: #041836;
    cursor: pointer;
    display: flex;
    grid-gap: 8px;
    padding: 6px 16px 6px 16px;
    transition: all 0.3s ease;
    &:hover {
        border-radius: 8px;
        background-color: #ebeff9;
    }
`;

export const DivStyledNoData = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 0px;
`;
