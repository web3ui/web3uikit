import styled from 'styled-components';
import resetCSS from '../../styles/reset';
import { ENSAvatarProps } from './types';

const AvatarImg = styled.img<Pick<ENSAvatarProps, 'size'>>`
    ${resetCSS};
    border-radius: 50%;
    height: ${({ size }) => size && size}px;
    width: ${({ size }) => size && size}px;
`;

const DivStyled = styled.div`
    ${resetCSS}
    border-radius: 50%;
    display: inline-flex;
    overflow: hidden;
`;

export default {
    AvatarImg,
    DivStyled,
};
