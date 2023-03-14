import { color, fonts, getShade, resetCSS } from '@web3uikit/styles';
import styled, { css } from 'styled-components';
import { INotificationContainer, INotificationStyled } from './types';
import {
    getNotificationAnimation,
    getNotificationColor,
    getNotificationPosition,
    getNotificationTheme,
} from './themes/themes';

type TCustomStyles = Pick<INotificationStyled, 'customize'>;

const NotificationContainerStyled = styled.div<INotificationContainer>`
    position: fixed;
    z-index: 30;
    ${(p) => getNotificationPosition(p.position)}
`;

const IconWrapperStyled = styled.div<TCustomStyles>`
    ${resetCSS}
    align-items: center;
    border-radius: 100%;
    display: flex;
    height: 24px;
    justify-content: center;
    width: 24px;
    ${(p) => p.customize?.onHover && onHoverStylesForText};
`;

const onHoverStylesForText = css<TCustomStyles>`
    position: relative;
    z-index: 2;
`;

const TextContentStyled = styled.div<TCustomStyles>`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-left: 10px;
    width: 100%;
    ${(p) => p.customize?.onHover && onHoverStylesForText};
`;

const SpanStyled = styled.span`
    ${fonts.ibm}
    color: ${color.blueGray50};
    display: inline-block;
    white-space: pre-wrap;
    word-break: break-word;
`;

const TitleStyled = styled.h5<TCustomStyles>`
    ${fonts.h5};
    display: inline-block;
    font-weight: 700;
    line-height: 24px;
    margin: ${(p) => p.customize?.margin || 0};
    font-weight: ${(p) => p.customize?.fontWeight || 700};
    font-size: ${(p) => p.customize?.fontSize || '16px'};
    word-break: break-word;
    ${(p) => p.customize?.onHover && onHoverStylesForText};
`;

const CloseWrapperStyled = styled.div`
    ${resetCSS}
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
`;

const BarStyled = styled.div`
    background-color: rgba(158, 204, 234, 0.3);
    bottom: 0;
    height: 6px;
    left: 0;
    position: absolute;
`;

const NotificationStyled = styled.div<INotificationStyled>`
    ${resetCSS}
    ${fonts.text}
    animation-fill-mode: forwards;
    background-color: ${(p) => p.customize?.backgroundColor || color.white};
    border-radius: ${(p) => p.customize?.borderRadius || '20px'};
    border: ${(p) => p.customize?.border || 'unset'};
    box-shadow: 0px 4px 10px rgba(48, 71, 105, 0.1);
    color: ${color.blueGray50};
    display: flex;
    margin: 18px;
    overflow: hidden;
    padding: ${(p) => p.customize?.padding || '16px 48px 16px 16px'};
    position: relative;
    width: 320px;
    z-index: 9999;

    ${(p) => getNotificationAnimation(p.position, p.isClosing)}

    & > ${IconWrapperStyled} {
        ${(p) => p.customize?.color || getNotificationTheme(p.type)}
    }
    & > ${TextContentStyled} > ${TitleStyled} {
        color: ${(p) => p.customize?.color || getNotificationColor(p.type)};
    }

    ${(p) => p.customize?.onHover && onHoverStyled};
`;

const onHoverStyled = css<TCustomStyles>`
    transition: all 0.1s ease-in-out;
    :hover {
        &:after {
            background-color: ${(p) =>
                p.customize?.onHover === 'lighten'
                    ? getShade('light', 20)
                    : getShade('dark', 20)};
            content: '';
            display: block;
            height: 100%;
            left: 0;
            pointer-events: none;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 1;
        }
    }
`;

const NotificationStyles = {
    CloseWrapperStyled,
    IconWrapperStyled,
    NotificationStyled,
    SpanStyled,
    TextContentStyled,
    TitleStyled,
    NotificationContainerStyled,
    BarStyled,
};

export default NotificationStyles;
