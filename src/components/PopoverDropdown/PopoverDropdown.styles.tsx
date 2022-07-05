import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import { IPopoverDropdownProps } from './types';

type TStyleProps = Pick<
    IPopoverDropdownProps,
    'backgroundColor' | 'move' | 'position' | 'width'
>;

const sizeValue = 20;
const halfSizeValue = sizeValue / 2;
const size = `${sizeValue}px`;
const halfSize = `${halfSizeValue}px`;

const DivStyled = styled.div`
    ${resetCSS};
    position: relative;

    &:hover {
        ul {
            display: block;
        }
    }
`;

const positionBottomStyles = (move?: number) => css`
    left: 50%;
    top: calc(100% + ${halfSize});
    transform: translateX(calc(-50% + ${move || 0}px));

    &:before {
        height: ${halfSize};
        left: 0;
        top: -${halfSize};
        width: 100%;
    }

    &:after {
        left: calc((50% - ${halfSize}) - ${move || 0}px);
        top: -6px;
    }
`;

const positionTopStyles = (move?: number) => css`
    left: 50%;
    bottom: calc(100% + ${halfSize});
    transform: translateX(calc(-50% + ${move || 0}px));

    &:before {
        bottom: -${halfSize};
        height: ${halfSize};
        left: 0;
        width: 100%;
    }

    &:after {
        left: calc((50% - ${halfSize}) - ${move || 0}px);
        bottom: -6px;
    }
`;

const positionRightStyles = (move?: number) => css`
    left: calc(100% + ${halfSize});
    top: 50%;
    transform: translateY(calc(-50% + ${move || 0}px));

    &:before {
        height: 100%;
        left: -${halfSize};
        top: 0;
        width: ${halfSize};
    }

    &:after {
        top: calc((50% - ${halfSize}) - ${move || 0}px);
        left: -2px;
    }
`;

const positionLeftStyles = (move?: number) => css`
    right: calc(100% + ${halfSize});
    top: 50%;
    transform: translateY(calc(-50% + ${move || 0}px));

    &:before {
        height: 100%;
        right: -${halfSize};
        top: 0;
        width: ${halfSize};
    }

    &:after {
        top: calc((50% - ${halfSize}) - ${move || 0}px);
        right: -2px;
    }
`;

const setPosition = (position: string, move?: number) => {
    switch (position) {
        case 'top':
            return positionTopStyles(move);
        case 'left':
            return positionLeftStyles(move);
        case 'right':
            return positionRightStyles(move);
        default:
            return positionBottomStyles(move);
    }
};

const ListStyled = styled.ul<TStyleProps>`
    ${resetCSS};
    background-color: ${(p) => `${p.backgroundColor}`};
    border-radius: ${size};
    display: none;
    list-style: none;
    min-width: ${(p) => `${p.width}`};
    padding: 8px;
    position: absolute;
    ${(p) => p.position && setPosition(p.position, p.move)}

    &:hover {
        display: block;
    }

    li {
        ${resetCSS};
        display: block;
        list-style: none;
        position: relative;
        z-index: 2;
    }

    &:before {
        // dead-zone buffer to prevent off-hover bug
        background-color: transparent;
        content: '';
        display: block;
        position: absolute;
        // dynamic values come from setPosition()
    }

    &:after {
        // the tail of the popover box
        background-color: ${(p) => `${p.backgroundColor}`};
        content: '';
        display: block;
        height: ${size};
        position: absolute;
        transform: rotate(45deg);
        width: ${size};
        z-index: 1;
        // dynamic values come from setPosition()
    }
`;

export default {
    DivStyled,
    ListStyled,
    halfSize,
};
