
import { color } from '@web3uikit/styles';
import { Skeleton } from '../Skeleton';
import { Typography } from '../Typography';
import { IWidgetProps } from './types';
import styles from './Widget.styles';

const { DivStyled } = styles;

const Widget: React.FC<IWidgetProps> = ({ children, info, title, isLoading, ...props }) => {
  return (
    <DivStyled data-testid='widget-container' {...props}>
      <div>
        <Typography data-testid='widget-title' color={color.blueDark} variant='caption12' weight='400'>
          {title}
        </Typography>
        <Typography data-testid='widget-info' variant='h3' weight='400' color={color.blueDark}>
          {isLoading ? <Skeleton height='24px' width='100%' theme='subtitle' /> : info}
        </Typography>
      </div>

      {children}
    </DivStyled>
  );
};

export default Widget;
