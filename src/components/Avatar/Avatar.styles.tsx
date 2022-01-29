import styled, { css } from 'styled-components';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';
import { AvatarProps } from './types';

type TStyleProps = Pick<AvatarProps, 'image' | 'isRounded' | 'theme'>;

export const roundedEdgeValue = '20px';

const customBackgroundImage = css<TStyleProps>`
    background-position: center;
    background-size: cover;
    background-image: url(${(p) => p.image});
`;

const DivStyled = styled.div<TStyleProps>`
    background: radial-gradient(
        106.45% 108.64% at 32.33% -4.84%,
        #ecf5fc 0.52%,
        #cee4f3 100%
    );
    height: 40px;
    overflow: hidden;
    position: static;
    text-transform: uppercase;
    width: 40px;
    word-break: break-all;

    span {
        display: none;
    }

    border-radius: ${(p) => (p.isRounded ? roundedEdgeValue : '0px')};
    ${(p) => p.theme === 'image' && p.image && customBackgroundImage}
`;

const H4Styled = styled.h4`
    ${resetCSS};
    ${fonts.openSans};
    ${fonts.h4};
    ${fonts.textBold700};
    color: ${color.blue};
    left: calc(50% - 28px / 2);
    padding-top: calc(50% - 28px / 2);
    text-align: center;
`;

export { DivStyled, H4Styled };
