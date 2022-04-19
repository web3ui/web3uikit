import styled from 'styled-components';
import color from '../../styles/colors';
import { IPlanCardProps } from './types';

type TDivStyle = Pick<IPlanCardProps, 'isActive'>;

const DivStyled = styled.div<TDivStyle>`
    width: 386.67px;
    height: 448px;
    background: #ffffff;
    border: 2px solid #c1d8e7;
    border-radius: 20px;
    padding: 32px;
    display: flex;
    flex-direction: column;
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
    row-gap: 8px;
    overflow-y: auto;
    margin-bottom: 8px;
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
