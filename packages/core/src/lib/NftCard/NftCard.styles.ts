import styled, { css } from 'styled-components';
import { breakpoints, color, resetCSS } from '@web3uikit/styles';
import { INftCardProps } from './types';

const DivStyled = styled.div`
    overflow: auto;
    padding-bottom: 10px;
`;

const DivStyledContainer = styled.div<Partial<INftCardProps>>`
    ${resetCSS};
    background-color: ${color.white};
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(48, 71, 105, 0.1);
    height: min(830px, auto);
    margin: auto;
    overflow: auto;
    padding: 24px 35px 50px;
    text-align: center;

    .nft-image > * {
        border-radius: 20px;
        margin-bottom: 16px;
        max-width: 370px;
        object-fit: contain;
        width: 100%;
    }
    .nft-card-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    @media screen and (max-width: ${breakpoints.lg}) {
        padding: 20px;
    }
    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `}
`;

const FieldsetStyled = styled.fieldset`
    border: 2px solid ${color.navy30};
    border-radius: 16px;
    margin-top: 40px;
    padding: 12px 24px;
    text-align: left;
    legend {
        color: ${color.navy40};
        font-size: 14px;
        font-weight: 550;
        line-height: 24px;
    }
    table,
    tr {
        text-align: left;
        width: 100%;
        max-width: 370px;
        overflow: hidden;
    }
    th,
    td {
        color: ${color.blueGray50};
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }
    td {
        max-width: 140px;
        text-overflow: ellipsis;
    }
    .address {
        color: ${color.navy40};
    }
`;

export default {
    DivStyled,
    DivStyledContainer,
    FieldsetStyled,
};
