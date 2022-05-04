import styled from 'styled-components';
import color from '../../styles/colors';
import { IPlanCardProps } from './types';

type TDivStyle = Pick<IPlanCardProps, 'isActive'>;

const DivStyled = styled.div<TDivStyle>`
    background: #ffffff;
    border-radius: 20px;
    border: 2px solid #c1d8e7;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 448px;
    max-width: 386.67px;
    padding: 32px;
    ${(props) =>
        props.isActive &&
        `
      border-color: ${color.green};
    `}
`;
DivStyled.displayName = 'DivStyled';

const DivStyledFeatures = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    overflow-y: auto;
    row-gap: 8px;
    & > div {
        display: flex;
        align-items: center;
    }
`;

const DivStyledCardFooter = styled.div`
    margin-top: auto;
`;

export default {
    DivStyled,
    DivStyledFeatures,
    DivStyledCardFooter,
};
