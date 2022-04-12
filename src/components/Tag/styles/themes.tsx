import { css } from 'styled-components';
import color from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import resetCSS from '../../../styles/reset';
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
    background: ${color.blueLight};
`;

const activeStatus = css`
    background: ${color.greenForestLight};
    color: ${color.green};
    display: flex;

    svg {
        fill: ${color.green};
        padding-right: 5px;
    }
`;

const inactiveStatus = css`
    background: ${color.blueLight};
`;

const discount = css<TStyleProps>`
    align-items: center;
    background: ${color.green};
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
    background: ${color.green};
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
