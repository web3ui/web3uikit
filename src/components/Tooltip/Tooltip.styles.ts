import styled, { css } from 'styled-components';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';
import { TooltipProps } from './types';
import { Position } from './types';

const borderRadius = '4px';

const bottom = css<Pick<TooltipProps, 'maxWidth'>>`
    &:after {
        --translate-y: calc(1 * var(--arrow-size));
        border: var(--arrow-size) solid transparent;
        border-bottom-color: ${color.blueDark2};
        content: '';
    }

    &:before {
        --translate-y: calc(100% + var(--arrow-size));
        background-color: ${color.blueDark2};
        border-radius: ${borderRadius};
        color: white;
        content: attr(data-tooltip);
        max-width: ${(p) => (p.maxWidth ? `${p.maxWidth}px` : '')};
        padding: 0.3rem;
        text-align: center;
        width: max-content;
        word-wrap: break-word;
    }
    &:before,
    &:after {
        --arrow-size: 6px;
        bottom: -0.25rem;
        left: 50%;
        position: absolute;
        transform: translateX(-50%) translateY(var(--translate-y, 0));
    }
`;

const container = css`
    font-size: 12px;
    font-style: normal;
    ${fonts.openSans}
    ${fonts.openSans}
    line-height: 16px;
    position: relative;
    ${resetCSS}
`;

const left = css<Pick<TooltipProps, 'maxWidth'>>`
    &:after {
        --translate-x: calc(-1 * var(--arrow-size));
        border: var(--arrow-size) solid transparent;
        border-left-color: ${color.blueDark2};
        color: ${color.blueDark2};
        content: '';
    }
    &:before {
        --translate-x: calc(-100% - var(--arrow-size));
        background: ${color.blueDark2};
        border-radius: ${borderRadius};
        color: white;
        content: attr(data-tooltip);
        max-width: ${(p) => (p.maxWidth ? `${p.maxWidth}px` : '')};
        padding: 0.3rem;
        text-align: center;
        width: max-content;
        word-wrap: break-word;
    }
    &:before,
    &:after {
        --arrow-size: 6px;
        left: -0.25rem;
        position: absolute;
        top: 50%;
        transform: translateX(var(--translate-x, 0)) translateY(-50%);
    }
`;

const right = css<Pick<TooltipProps, 'maxWidth'>>`
    &:after {
        --translate-x: calc(1 * var(--arrow-size));
        border: var(--arrow-size) solid transparent;
        border-right-color: ${color.blueDark2};
        content: '';
    }
    &:before {
        --translate-x: calc(100% + var(--arrow-size));
        background: ${color.blueDark2};
        border-radius: ${borderRadius};
        color: white;
        content: attr(data-tooltip);
        max-width: ${(p) => (p.maxWidth ? `${p.maxWidth}px` : '')};
        padding: 0.3rem;
        text-align: center;
        width: max-content;
        word-wrap: break-word;
    }
    &:before,
    &:after {
        --arrow-size: 6px;
        position: absolute;
        right: -0.25rem;
        top: 50%;
        transform: translateX(var(--translate-x, 0)) translateY(-50%);
    }
`;

const top = css<Pick<TooltipProps, 'maxWidth'>>`
    &:after {
        --translate-y: calc(-1 * var(--arrow-size));
        border: var(--arrow-size) solid transparent;
        border-top-color: ${color.blueDark2};
        content: '';
    }
    &:before {
        --translate-y: calc(-100% - var(--arrow-size));
        background-color: ${color.blueDark2};
        border-radius: ${borderRadius};
        color: white;
        content: attr(data-tooltip);
        max-width: ${(p) => (p.maxWidth ? `${p.maxWidth}px` : '')};
        padding: 0.3rem;
        text-align: center;
        width: max-content;
        word-wrap: break-word;
    }
    &:before,
    &:after {
        --arrow-size: 6px;
        left: 50%;
        position: absolute;
        top: -0.25rem;
        transform: translateX(-50%) translateY(var(--translate-y, 0));
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

export default styled.div<Pick<TooltipProps, 'position' | 'maxWidth'>>`
    ${container}
    &:hover {
        ${(p) => getContainerStyleByPosition(p.position)}
    }
`;
