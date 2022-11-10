import styled from 'styled-components';
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
    padding: 32px;
    width: ${(props) => (props.width ? props.width : 'auto')};
    ${(props) =>
        props.isActive &&
        `
      border-color: ${color.mint40};
    `};
`;
DivStyled.displayName = 'DivStyled';

const DivStyledFeatures = styled.div`
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
