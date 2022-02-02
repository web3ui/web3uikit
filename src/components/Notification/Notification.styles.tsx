import { css } from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import styled, { keyframes } from 'styled-components';
import type { INotificationStyled } from './types';
import getNotificationTheme from './styles/themes';

const moveOpen = keyframes`
   from {
       transform: translateX(-100%);
    }
  70% {transform: translateX(10px);}
  to {transform: translateX(0);}
`;

// const getNotificationPosition = (position: IPosition) => {
//     switch (position) {
//         case 'bottomL':
//             return css`
//                 left: 0;
//                 bottom: 0;
//             `;
//         case 'bottomR':
//             return css`
//                 right: 0;
//                 bottom: 0;
//             `;
//         case 'topL':
//             return css`
//                 left: 0;
//                 top: 0;
//             `;
//         case 'topR':
//         default:
//             return css`
//                 right: 0;
//                 top: 0;
//             `;
//     }
// };
// ${({ position }) => getNotificationPosition(position)}
const NotificationStyled = styled.div<INotificationStyled>`
    ${resetCSS}
    ${fonts.text}
    ${({ type }) => getNotificationTheme(type)}
    border-radius: 20px;
    color: ${color.white};
    display: flex;
    /* left: 18px; */
    margin: 18px;
    max-width: 320px;
    padding: 16px 48px 16px 16px;
    /* position: fixed; */
    /* right: 0; */

    animation: ${moveOpen} 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    ${(props) =>
        !props.isVisible &&
        css`
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s 0.5s, opacity 0.5s ease-out;
        `}
`;

const TextContentStyled = styled.div`
    display: flex;
    margin-left: 10px;
    width: 100%;
    flex-wrap: wrap;
`;

const SpanStyled = styled.span`
    ${fonts.ibm}
    color: ${color.white};
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

const IconWrapperStyled = styled.div`
    ${resetCSS}
    align-items: center;
    background: ${color.white};
    border-radius: 100%;
    display: flex;
    height: 30px;
    justify-content: center;
    margin-top: 9px;
    padding: 4px;
    width: 30px;
`;

const CloseWrapperStyled = styled.div`
    ${resetCSS}
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
`;

const NotificationStyles = {
    CloseWrapperStyled,
    IconWrapperStyled,
    NotificationStyled,
    SpanStyled,
    TextContentStyled,
    TitleStyled,
};

export default NotificationStyles;
