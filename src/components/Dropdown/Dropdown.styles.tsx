import styled from 'styled-components';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import { IDropdown } from './types';

export const StyledSelectParentDiv = styled.div<
    Pick<IDropdown, 'width' | 'isDisabled'>
>`
    ${resetCSS}
    ${fonts.text}
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    height: fit-content;
    position: relative;
    ${(props) => props.isDisabled && 'opacity: 50%;'}
`;

interface IStyledSelectedDiv {
    isOpen: boolean;
    width: string;
}

export const DivStyledSelected = styled.div<IStyledSelectedDiv>`
    width: ${(props) => props.width};
    height: 40px;
    min-width: fit-content;
    min-height: fit-content;
    border-radius: 16px;
    border: 1px solid #c5cdd9;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: 0px solid transparent;
    & > div {
        transition: all 0.3s ease;
        color: inherit;
        padding: 8px;
        display: flex;
        align-items: center;
        grid-gap: 8px;
        & :nth-child(2) {
            margin-right: auto;
        }
        & :nth-child(3) {
            margin-left: auto;
        }
    }
    &:hover {
        border-color: #9eccea;
        color: #2e7daf;
    }
    &:focus {
        border: 2px solid #9eccea;
        color: #2e7daf;
    }
    ${(props) =>
        props.isOpen &&
        `outline: 4px solid rgba(158, 204, 234, 0.3); border: 1px solid #2e7daf;
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
    padding: 8px 0px 8px 0px;
    border-radius: 16px;
    border: 2px solid #9eccea;
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
        opacity: 0.5;
    }
`;

export const DivStyledNoData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 0px;
`;
