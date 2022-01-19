import styled from 'styled-components';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';

interface IAvatarStyeldProps {
    rounded: boolean;
}
const DivStyled = styled.div<IAvatarStyeldProps>`
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
    border-radius: ${(props) => (props.rounded ? '20px' : '0px')}; ;
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

const ImgStyled = styled.img`
    height: 40px;
    width: 40px;
`;

export { DivStyled, H4Styled, ImgStyled };
