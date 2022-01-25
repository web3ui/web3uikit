import { css } from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import styled, { keyframes } from 'styled-components';
import { IPositionRelativeConfig } from './types';

const initialStyles = css`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    background: #112f5c;
    border-radius: 20px;
    color: white;
    display: flex;
    height: 5%;
    max-width: 25%;
    min-width: 270px;
    padding: 16px;
`;

const box = css`
    display: grid;
    margin-left: 10px;
    width: 100%;
`;

const message = css`
    ${fonts.ibm}
    ${fonts.textSmall}
    color: ${color.grey};
`;

const title = css`
    ${fonts.textBold}
    margin: 0;
`;

const flex = css`
    display: flex;
    justify-content: space-between;
`;

export const moveOpen = keyframes`
   from {
       transform: translate(0,-100px);
    }
  10% {transform: translate(0,20px);}
  12% {transform: translate(0,22px);}
  16% {transform: translate(0,20px);}
  to {transform: translate(0,20px);}
`;

interface INotificationStyled {
    isVisible: boolean;
    isPositionRelative: boolean;
    positionRelativeConfig: IPositionRelativeConfig;
}

export const NotificationStyled = styled.div<INotificationStyled>`
    ${initialStyles}
    ${(props) =>
        props.isPositionRelative &&
        `position: absolute; top:${
            props.positionRelativeConfig.top
                ? props.positionRelativeConfig.top
                : '0px'
        }; left:${
            props.positionRelativeConfig.left
                ? props.positionRelativeConfig.left
                : '0px'
        }; height: ${
            props.positionRelativeConfig.height
                ? props.positionRelativeConfig.height
                : 'fit-content'
        }; width: ${
            props.positionRelativeConfig.width
                ? props.positionRelativeConfig.width
                : 'fit-content'
        };`}
    animation:${moveOpen} 4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    ${(props) =>
        !props.isVisible &&
        `
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 0.5s, opacity 0.5s ease-out;
        `}
`;

export const BoxStyled = styled.div`
    ${box}
`;

export const SpanStyled = styled.span`
    ${message}
`;

export const ParagraphStyled = styled.p`
    ${title}
`;

export const FlexStyled = styled.div`
    ${flex}
`;
