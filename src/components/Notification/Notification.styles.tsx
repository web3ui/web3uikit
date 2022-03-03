import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import styled from 'styled-components';
import { INotificationContainer, INotificationStyled } from './types';
import {
    getNotificationAnimation,
    getNotificationColor,
    getNotificationPosition,
    getNotificationTheme,
} from './themes/themes';

const NotificationContainerStyled = styled.div<INotificationContainer>`
    position: fixed;
    z-index: 30;

    ${(p) => getNotificationPosition(p.position)}
`;

const IconWrapperStyled = styled.div`
    ${resetCSS}
    align-items: center;
    border-radius: 100%;
    display: flex;
    height: 24px;
    justify-content: center;
    width: 24px;
`;

const TextContentStyled = styled.div`
    display: flex;
    margin-left: 10px;
    width: 100%;
    flex-wrap: wrap;
`;

const SpanStyled = styled.span`
    ${fonts.ibm}
    color: ${color.grey};
    display: inline-block;
    word-break: break-word;
`;

const TitleStyled = styled.h5`
    ${fonts.h5};
    display: inline-block;
    font-weight: 700;
    line-height: 24px;
    margin: 0;
    word-break: break-word;
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
    background-color: ${color.white};
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(48, 71, 105, 0.1);
    color: ${color.grey};
    display: flex;
    margin: 18px;
    padding: 16px 48px 16px 16px;
    position: relative;
    width: 320px;
    overflow: hidden;
    z-index: 9999;

    ${(p) => getNotificationAnimation(p.position, p.isClosing)}

    & > ${IconWrapperStyled} {
        ${(p) => getNotificationTheme(p.type)}
    }
    & > ${TextContentStyled} > ${TitleStyled} {
        color: ${(p) => getNotificationColor(p.type)};
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
