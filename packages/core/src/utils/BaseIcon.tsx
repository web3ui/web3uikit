import styled from 'styled-components';
import { resetCSS } from '@web3uikit/styles';

interface IIconProps {
    size: number;
}

const IconStyled = styled.span<IIconProps>`
    ${resetCSS};
    padding: auto;
    width: ${(p) => p.size && `${p.size}px`};
    height: ${(p) => p.size && `${p.size}px`};
`;

IconStyled.displayName = 'IconBase';
export default IconStyled;
