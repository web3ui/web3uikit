import { color } from '@web3uikit/styles';
import { Typography } from '../../../Typography';
import styles from './YourPlanButton.styles';

const { StyledDiv } = styles;

const YourPlanButton = () => {
    return (
        <StyledDiv>
            <Typography color={color.blueGray50} weight="600" variant="body16">
                Your Plan
            </Typography>
        </StyledDiv>
    );
};

export default YourPlanButton;
