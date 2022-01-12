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

const coloredGreenDark = css`
    background: ${color.greenForestDark};
    color: ${color.white};
`;

const coloredRed = css`
    background: ${color.redLight};
    color: ${color.red};
`;

const coloredRedDark = css`
    background: ${color.redDark};
    color: ${color.white};
`;

const coloredGrey = css`
    background: ${color.blueSkyLight};
    color: ${color.blueDark};
`;

const coloredGrayDark = css`
    background: ${color.grey};
    color: ${color.white};
`;

const coloredYellow = css`
    background: ${color.yellowLight};
    color: ${color.yellow};
`;

const coloredYellowDark = css`
    background: ${color.yellowDark};
    color: ${color.white};
`;

const coloredBlue = css`
    background: ${color.blueCloud};
    color: ${color.blueSkyDark};
`;

const coloredBlueDark = css`
    background: ${color.blueCloudDark};
    color: ${color.white};
`;

const coloredPurple = css`
    background: ${color.purpleLight};
    color: ${color.purple};
`;

const coloredPurpleDark = css`
    background: ${color.purpleDark};
    color: ${color.white};
`;

const coloredPink = css`
    background: ${color.pinkLight};
    color: ${color.pink};
`;

const coloredPinkDark = css`
    background: ${color.pinkDark};
    color: ${color.white};
`;

export const tagStyles = {
    activeStatus,
    coloredBlue,
    coloredBlueDark,
    coloredGrey,
    coloredGrayDark,
    coloredGreen,
    coloredGreenDark,
    coloredPink,
    coloredPinkDark,
    coloredPurple,
    coloredPurpleDark,
    coloredRed,
    coloredRedDark,
    coloredYellow,
    coloredYellowDark,
    discount,
    inactiveStatus,
    initialStyles,
    regular,
};
