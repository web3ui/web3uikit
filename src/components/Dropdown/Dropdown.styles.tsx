import styled, { css } from 'styled-components';
import color from '../../styles/colors';
import { DropdownProps, Position } from './types';

const arrowSize = '10px';

const borderRadius = '20px';

const bottom = css<Pick<DropdownProps, 'move'>>`
    background: ${color.blueDark};
    bottom: -0.25rem;
    left: 50%;
    position: absolute;
    transform: translateX(-50%) translateY(100%);
    &:after {
        position: absolute;
        content: '';
        bottom: 100%;
        transform: translateX(${(p) => (p.move ? `${p.move}%` : '-50%')})
            translateY(0%);
        border: ${arrowSize} solid transparent;
        border-bottom-color: ${color.blueDark};
    }
`;

const DivArrowStyled = styled.div<Pick<DropdownProps, 'position' | 'move'>>`
    ${(p) => (p.position ? getContainerStyleByPosition(p.position) : '')}
`;

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: max-content;
`;

const DivDropdownElementStyled = styled.div<Pick<DropdownProps, 'position'>>`
    background: ${color.blueDark};
    border-radius: ${borderRadius};
    height: auto;
    overflow: hidden;
    position: absolute;
    width: max-content;
    ${(p) => getContainerStyleByPosition(p.position)}
`;

const ElementDiv = styled.div`
    cursor: pointer;
    height: auto;
    width: 100%;
    :hover {
        background: ${color.blueDark2};
    }
`;

const getContainerStyleByPosition = (position: Position) => {
    switch (position) {
        case 'top':
            return top;
        case 'bottom':
            return bottom;
        case 'left':
            return left;
        case 'right':
            return right;
    }
};

const left = css<Pick<DropdownProps, 'move'>>`
    background: ${color.blueDark};
    left: -0.5rem;
    position: absolute;
    top: 50%;
    transform: translateX(-100%) translateY(-50%);
    &:after {
        position: absolute;
        content: '';
        left: 100%;
        transform: translateY(${(p) => (p.move ? `${p.move}%` : '-50%')});
        border: ${arrowSize} solid transparent;
        border-left-color: ${color.blueDark};
    }
`;

const right = css<Pick<DropdownProps, 'move'>>`
    background: ${color.blueDark};
    position: absolute;
    right: -0.5rem;
    top: 50%;
    transform: translateX(100%) translateY(-50%);
    &:after {
        position: absolute;
        content: '';
        right: 100%;
        transform: translateY(${(p) => (p.move ? `${p.move}%` : '-50%')});
        border: ${arrowSize} solid transparent;
        border-right-color: ${color.blueDark};
    }
`;

const top = css<Pick<DropdownProps, 'move'>>`
    background: ${color.blueDark};
    left: 50%;
    position: absolute;
    top: -0.5rem;
    transform: translateX(-50%) translateY(-100%);
    &:after {
        position: absolute;
        content: '';
        bottom: 0;
        transform: translateX(${(p) => (p.move ? `${p.move}%` : '-50%')})
            translateY(100%);
        border: ${arrowSize} solid transparent;
        border-top-color: ${color.blueDark};
    }
`;

export const DropdownStyles = {
    DivArrowStyled,
    DivContainer,
    DivDropdownElementStyled,
    ElementDiv,
};
