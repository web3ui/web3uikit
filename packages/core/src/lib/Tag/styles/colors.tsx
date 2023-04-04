import { css } from 'styled-components';
import { color } from '@web3uikit/styles';

const coloredGreen = css`
    background: ${color.mint05};
    color: ${color.mint40};
`;

const coloredGreenDark = css`
    background: ${color.mint40};
    color: ${color.white};
`;

const coloredRed = css`
    background: ${color.red10};
    color: ${color.red40};
`;

const coloredRedDark = css`
    background: ${color.red60};
    color: ${color.white};
`;

const coloredGrey = css`
    background: ${color.blue05};
    color: ${color.blue70};
`;

const coloredGrayDark = css`
    background: ${color.blueGray50};
    color: ${color.white};
`;

const coloredYellow = css`
    background: ${color.yellow10};
    color: ${color.yellow50};
`;

const coloredYellowDark = css`
    background: ${color.yellow50};
    color: ${color.white};
`;

const coloredBlue = css`
    background: ${color.aero10};
    color: ${color.blue30};
`;

const coloredBlueDark = css`
    background: ${color.navy40};
    color: ${color.white};
`;

const coloredPurple = css`
    background: ${color.purple10};
    color: ${color.purple50};
`;

const coloredPurpleDark = css`
    background: ${color.purple50};
    color: ${color.white};
`;

const coloredPink = css`
    background: ${color.fuchsia10};
    color: ${color.fuchsia40};
`;

const coloredPinkDark = css`
    background: ${color.fuchsia40};
    color: ${color.white};
`;

const coloredBlueLight = css`
    background: ${color.aero20};
    color: ${color.navy40};
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
