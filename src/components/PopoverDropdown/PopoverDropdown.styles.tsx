import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import { IPopoverDropdownProps } from './types';

type TStyleProps = Pick<
    IPopoverDropdownProps,
    'backgroundColor' | 'position' | 'width'
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

const positionBottomStyles = css`
    left: 50%;
    top: calc(100% + ${halfSize});
    transform: translateX(-50%);

    &:before {
        height: ${halfSize};
        left: 0;
        top: -${halfSize};
        width: 100%;
    }

    &:after {
        left: calc(50% - ${halfSize});
        top: -6px;
    }
`;

const positionTopStyles = css`
    left: 50%;
    bottom: calc(100% + ${halfSize});
    transform: translateX(-50%);

    &:before {
        bottom: -${halfSize};
        height: ${halfSize};
        left: 0;
        width: 100%;
    }

    &:after {
        left: calc(50% - ${halfSize});
        bottom: -6px;
    }
`;

const positionRightStyles = css`
    left: calc(100% + ${halfSize});
    top: 50%;
    transform: translateY(-50%);

    &:before {
        height: 100%;
        left: -${halfSize};
        top: 0;
        width: ${halfSize};
    }

    &:after {
        top: calc(50% - ${halfSize});
        left: -2px;
    }
`;

const positionLeftStyles = css`
    right: calc(100% + ${halfSize});
    top: 50%;
    transform: translateY(-50%);

    &:before {
        height: 100%;
        right: -${halfSize};
        top: 0;
        width: ${halfSize};
    }

    &:after {
        top: calc(50% - ${halfSize});
        right: -2px;
    }
`;

const setPosition = (position: string) => {
    switch (position) {
        case 'top':
            return positionTopStyles;
        case 'bottom':
            return positionBottomStyles;
        case 'left':
            return positionLeftStyles;
        case 'right':
            return positionRightStyles;
        default:
            return positionBottomStyles;
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
    ${(p) => p.position && setPosition(p.position)}

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
