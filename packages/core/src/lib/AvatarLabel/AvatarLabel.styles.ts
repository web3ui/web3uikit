import { IAvatarLabelProps } from './types';
import styled, { css } from 'styled-components';
import { color, legacyColor } from '@web3uikit/styles';

type TStyleProps = Pick<
    IAvatarLabelProps,
    'textColor' | 'textBGColor' | 'textFontSize'
>;

const DivStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
        border-radius: 50%;
        border: 1px solid rgb(56, 119, 173);
        object-fit: cover;
    }
    > div {
        margin-top: -12px;
    }
`;

const DivStyledText = styled.div<TStyleProps>`
    background: ${({ textBGColor }) =>
        textBGColor ? textBGColor : legacyColor.pink};
    border-radius: 20px;
    color: ${({ textColor }) => (textColor ? textColor : color.white)};
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 1;
    padding: 4px 8px;
`;

export const AvatarLabelStyles = {
    DivStyled,
    DivStyledText,
};
