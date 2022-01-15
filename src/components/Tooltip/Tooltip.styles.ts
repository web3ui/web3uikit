import styled, { css } from 'styled-components';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';
import { TooltipProps } from './types';
import { Position } from './types';

const borderRadius = '4px';

const container = css`
    ${resetCSS}
    position: absolute;
    ${fonts.openSans}
    font-size: 12px;
    line-height: 16px;
    font-style: normal;
    --tooltip-text: 'hello';
`;

const top = css`
    &:before,
    &:after {
        --arrow-size: 6px;
        position: absolute;
        top: -0.25rem;
        left: 50%;
        transform: translateX(-50%) translateY(var(--translate-y, 0));
    }

    &:before {
        --translate-y: calc(-100% - var(--arrow-size));
        padding: 0.3rem;
        width: max-content;
        content: attr(data-tooltip);
        color: white;
        background-color: ${color.blueDark2};
        border-radius: ${borderRadius};
        text-align: center;
    }

    &:after,
    &:hover {
        --translate-y: calc(-1 * var(--arrow-size));
        content: '';
        border: var(--arrow-size) solid transparent;
        border-top-color: ${color.blueDark2};
    }
`;

const bottom = css`
    &:before,
    &:after {
        --arrow-size: 6px;
        position: absolute;
        bottom: -0.25rem;
        left: 50%;
        transform: translateX(-50%) translateY(var(--translate-y, 0));
    }

    &:before {
        --translate-y: calc(100% + var(--arrow-size));
        padding: 0.3rem;
        width: max-content;
        content: attr(data-tooltip);
        color: white;
        background-color: ${color.blueDark2};
        border-radius: ${borderRadius};
        text-align: center;
    }

    &:after,
    &:hover {
        --translate-y: calc(1 * var(--arrow-size));
        content: '';
        border: var(--arrow-size) solid transparent;
        border-bottom-color: ${color.blueDark2};
    }
`;

const left = css`
    &:before,
    &:after {
        --arrow-size: 6px;
        position: absolute;
        left: -0.25rem;
        top: 50%;
        transform: translateX(var(--translate-x, 0)) translateY(-50%);
    }

    &:before {
        --translate-x: calc(-100% - var(--arrow-size));
        content: attr(data-tooltip);
        color: white;
        width: max-content;
        padding: 0.3rem;
        border-radius: ${borderRadius};
        background: ${color.blueDark2};
        text-align: center;
    }

    &:after,
    &:hover {
        --translate-x: calc(-1 * var(--arrow-size));
        content: '';
        color: ${color.blueDark2};
        border: var(--arrow-size) solid transparent;
        border-left-color: ${color.blueDark2};
    }
`;

const right = css`
    &:before,
    &:after {
        --arrow-size: 6px;
        position: absolute;
        right: -0.25rem;
        top: 50%;
        transform: translateX(var(--translate-x, 0)) translateY(-50%);
    }

    &:before {
        --translate-x: calc(100% + var(--arrow-size));
        content: attr(data-tooltip);
        color: white;
        width: max-content;
        padding: 0.3rem;
        border-radius: ${borderRadius};
        background: ${color.blueDark2};
        text-align: center;
    }

    &:after,
    &:hover {
        --translate-x: calc(1 * var(--arrow-size));
        content: '';
        border: var(--arrow-size) solid transparent;
        border-right-color: ${color.blueDark2};
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

export default styled.div<Pick<TooltipProps, 'position'>>`
    ${container}
    &:hover {
        ${(p) => getContainerStyleByPosition(p.position)}
    }
`;
