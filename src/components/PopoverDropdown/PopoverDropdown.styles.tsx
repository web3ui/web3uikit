import styled, { css } from 'styled-components';
import color from '../../styles/colors';
import { PopoverDropdownProps, Position } from './types';
type TStyleProps = Pick<PopoverDropdownProps, 'position' | 'move' | 'moveBody'>;

const arrowSize = '10px';

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

const bottom = css<TStyleProps>`
    background: ${color.blueDark};
    bottom: -0.25rem;
    left: 50%;
    position: absolute;
    transform: translateX(${(p) => `${p.moveBody}%`}) translateY(100%);
    &:after {
        position: absolute;
        content: '';
        bottom: 100%;
        transform: translateX(${(p) => `${p.move}%`}) translateY(0%);
        border: ${arrowSize} solid transparent;
        border-bottom-color: ${color.blueDark};
    }
`;

const left = css<TStyleProps>`
    left: -0.5rem;
    position: absolute;
    top: 50%;
    transform: translateX(-100%) translateY(${(p) => `${p.moveBody}%`});
    &:after {
        position: absolute;
        content: '';
        left: 100%;
        transform: translateY(${(p) => `${p.move}%`});
        border: ${arrowSize} solid transparent;
        border-left-color: ${color.blueDark};
    }
`;

const right = css<TStyleProps>`
    position: absolute;
    right: -0.5rem;
    top: 50%;
    transform: translateX(100%) translateY(${(p) => `${p.moveBody}%`});
    &:after {
        position: absolute;
        content: '';
        right: 100%;
        transform: translateY(${(p) => `${p.move}%`});
        border: ${arrowSize} solid transparent;
        border-right-color: ${color.blueDark};
    }
`;

const top = css<TStyleProps>`
    left: 50%;
    position: absolute;
    top: -0.5rem;
    transform: translateX(${(p) => `${p.moveBody}%`}) translateY(-100%);
    &:after {
        position: absolute;
        content: '';
        bottom: 0;
        transform: translateX(${(p) => `${p.move}%`}) translateY(100%);
        border: ${arrowSize} solid transparent;
        border-top-color: ${color.blueDark};
    }
`;

export const DivStyledArrow = styled.div<TStyleProps>`
    z-index: 999;
    ${(p) => (p.position ? getContainerStyleByPosition(p.position) : '')}
`;

export const DivStyledFlex = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: max-content;
`;

export const DivStyledDropdown = styled.div<TStyleProps>`
    background: ${color.blueDark};
    border-radius: 20px;
    height: auto;
    overflow: hidden;
    position: absolute;
    width: max-content;
    z-index: 999;
    ${(p) => getContainerStyleByPosition(p.position)}
`;

export const DivStyledChild = styled.div`
    cursor: pointer;
    height: auto;
    width: 100%;

    :hover {
        background: ${color.blueDark2};
    }
`;
