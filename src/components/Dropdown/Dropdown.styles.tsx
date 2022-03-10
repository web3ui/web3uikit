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
    width: ${(props) => props.width};
    height: 40px;
    min-width: fit-content;
    min-height: fit-content;
    border-radius: 16px;
    border: 1px solid ${(p) => (p.hasOutline ? color.greyLight : 'transparent')};
    cursor: pointer;
    transition: all 0.3s ease;
    outline: 0px solid transparent;
    color: ${color.blue};
    & > div {
        transition: all 0.3s ease;
        color: inherit;
        padding: 8px;
        padding-right: 2px;
        display: flex;
        align-items: center;
        & :nth-child(2) {
            margin-right: auto;
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

export const DivStyledOptionsContainer = styled.div<Pick<IDropdown, 'width'>>`
    transition: all 0.3s ease;
    position: absolute;
    top: 56px;
    display: flex;
    flex-direction: column;
    background-color: #f2f6ff;
    width: ${(props) => props.width};
    padding: 8px;
    border-radius: 16px;
    border: 2px solid ${color.blueSky};
    z-index: 999;
`;

export const DivStyledOptionItem = styled.div`
    transition: all 0.3s ease;
    padding: 6px 16px 6px 16px;
    cursor: pointer;
    color: #041836;
    display: flex;
    grid-gap: 8px;
    &:hover {
        background-color: #ebeff9;
        border-radius: 8px;
    }
`;

export const DivStyledNoData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 0px;
`;
