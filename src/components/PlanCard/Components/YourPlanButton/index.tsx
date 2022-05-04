import React from 'react';
import color from '../../../../styles/colors';
import { Typography } from '../../../Typography';
import styles from './YourPlanButton.styles';

const { StyledDiv } = styles;

const YourPlanButton = () => {
    return (
        <StyledDiv>
            <Typography color={color.grey} weight="600" variant="body16">
                Your Plan
            </Typography>
        </StyledDiv>
    );
};

export default YourPlanButton;
