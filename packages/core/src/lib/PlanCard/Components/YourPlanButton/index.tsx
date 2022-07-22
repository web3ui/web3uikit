
import { color } from '@test_kit_3/styles';
import { Typography } from '../../../Typography';
import styles from './YourPlanButton.styles';

const { StyledDiv } = styles;

const YourPlanButton = () => {
  return (
    <StyledDiv>
      <Typography color={color.grey} weight='600' variant='body16'>
        Your Plan
      </Typography>
    </StyledDiv>
  );
};

export default YourPlanButton;