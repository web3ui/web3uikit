import { css } from 'styled-components';
import color from '../../../styles/colors';

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

const coloredBlueLight = css`
    background: ${color.blueLight3};
    color: ${color.blue};
`;

export default {
    coloredBlue,
    coloredBlueDark,
    coloredGrayDark,
    coloredGreen,
    coloredGreenDark,
    coloredGrey,
    coloredPink,
    coloredPinkDark,
    coloredPurple,
    coloredPurpleDark,
    coloredRed,
    coloredRedDark,
    coloredYellow,
    coloredYellowDark,
    coloredBlueLight,
};
