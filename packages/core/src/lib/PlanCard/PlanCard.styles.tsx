import styled, { css } from 'styled-components';
import { color } from '@web3uikit/styles';
import { IPlanCardProps } from './types';

type TDivStyle = Pick<
    IPlanCardProps,
    | 'isActive'
    | 'borderColor'
    | 'backgroundColor'
    | 'height'
    | 'width'
    | 'maxWidth'
>;
type THrStyled = Pick<IPlanCardProps, 'borderColor'>;
type TScrollStyled = Pick<
    IPlanCardProps,
    | 'scrollbarWidth'
    | 'scrollbarBackground'
    | 'scrollbarTrackBackground'
    | 'scrollbarHoverBackground'
>;

const scrollStyled = (props: TScrollStyled) => css`
    /* width  */
    ::-webkit-scrollbar {
        width: ${props.scrollbarWidth ? props.scrollbarWidth : '2px'};
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: ${props.scrollbarTrackBackground
            ? props.scrollbarTrackBackground
            : color.aero10};
        opacity: 0.1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${props.scrollbarBackground
            ? props.scrollbarBackground
            : color.blue20};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: ${props.scrollbarHoverBackground
            ? props.scrollbarHoverBackground
            : color.blueGray50};
    }
`;
const DivStyled = styled.div<TDivStyle>`
    background: ${(props) =>
        props.backgroundColor ? props.backgroundColor : color.white};
    border-radius: 20px;
    border: 2px solid
        ${(props) => (props.borderColor ? props.borderColor : '#C1D8E7')};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: ${(props) => (props.height ? props.height : '448px')};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : '386.67px')};
    padding: 32px 24px;
    width: ${(props) => (props.width ? props.width : 'auto')};
    ${(props) =>
        props.isActive &&
        `
      border-color: ${color.mint40};
    `};
`;
DivStyled.displayName = 'DivStyled';

const DivStyledFeatures = styled.div<TScrollStyled>`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    overflow-y: auto;
    row-gap: 8px;
    & > div {
        align-items: flex-start;
        appearance: none;
        display: flex;
        gap: 5px;
        svg {
            flex: none;
            margin-top: 5px;
        }
    }
    ${(props) =>
        (props.scrollbarBackground ||
            props.scrollbarWidth ||
            props.scrollbarTrackBackground) &&
        scrollStyled(props)}
`;

const DivStyledCardFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
`;

const HrStyled = styled.hr<THrStyled>`
    border-top: 1px solid ${(props) => props.borderColor};
    margin: 16px 0px;
`;

export default {
    DivStyled,
    DivStyledFeatures,
    DivStyledCardFooter,
    HrStyled,
};
