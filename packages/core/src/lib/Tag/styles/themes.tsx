import { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { TagProps } from '../types';

type TStyleProps = Pick<TagProps, 'width'>;

const initialStyles = css`
    ${resetCSS}
    ${fonts.text}
    ${fonts.textBold700};
    align-items: center;
    border-radius: 20px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    overflow: hidden;
    padding: 2px 20px;
    text-align: center;
    width: 100%;
`;

const regular = css`
    background: ${color.aero10};
`;

const activeStatus = css`
    background: ${color.mint05};
    color: ${color.mint40};
    display: flex;

    svg {
        fill: ${color.mint40};
        margin-right: 5px;
    }
`;

const inactiveStatus = css`
    background: ${color.aero10};
`;

const discount = css<TStyleProps>`
    align-items: center;
    background: ${color.mint40};
    border-radius: 30px;
    color: ${color.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 0 4px;
    width: 32px;
`;

const chips = css<TStyleProps>`
    align-items: center;
    background: ${color.mint40};
    border-left: 5px solid;
    border-radius: 5px;
    color: ${color.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 6px 12px;
    width: 32px;
`;

export default {
    activeStatus,
    chips,
    discount,
    inactiveStatus,
    initialStyles,
    regular,
};
