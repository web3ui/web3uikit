import { css } from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

const initialStyles = css`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    border-radius: 20px;
    font-size: 14px;
    justify-content: center;
    overflow: hidden;
    padding: 2px 20px;
    text-align: center;
    width: fit-content;
`;

const regular = css`
    background: ${color.blueLight};
`;

const activeStatus = css`
    background: ${color.greenForestLight};
    color: ${color.green};

    svg {
        padding-right: 5px;
    }
`;

const inactiveStatus = css`
    background: ${color.blueLight};
`;

const discount = css`
    align-items: center;
    background: ${color.green};
    border-radius: 30px;
    color: ${color.white};
    display: flex;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    padding: 0px 4px;
    width: 32px;
`;

const coloredGreen = css`
    background: ${color.greenForestLight};
    color: ${color.green};
`;

const coloredRed = css`
    background: ${color.redLight};
    color: ${color.red};
`;

const coloredGray = css`
    background: ${color.blueSkyLight};
    color: ${color.blueDark};
`;

const coloredYellow = css`
    background: ${color.yellowLight};
    color: ${color.yellow};
`;

const coloredBlue = css`
    background: ${color.blueCloud};
    color: ${color.blueSkyDark};
`;

const coloredPurple = css`
    background: ${color.purpleLight};
    color: ${color.purple};
`;

const coloredPink = css`
    background: ${color.pinkLight};
    color: ${color.pink};
`;

export const tagStyles = {
    activeStatus,
    coloredBlue,
    coloredGray,
    coloredGreen,
    coloredPink,
    coloredPurple,
    coloredRed,
    coloredYellow,
    discount,
    inactiveStatus,
    initialStyles,
    regular,
};
