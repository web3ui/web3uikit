import { color } from '@web3uikit/styles';
import { Skeleton } from '../Skeleton';
import { Typography } from '../Typography';
import { IWidgetProps } from './types';
import styles from './Widget.styles';

const { DivStyled } = styles;

const Widget: React.FC<IWidgetProps> = ({
    children,
    info,
    title,
    isLoading,
    ...props
}) => {
    return (
        <DivStyled data-testid="test-widget" {...props}>
            <div>
                <Typography
                    color={color.blueDark}
                    data-testid="test-widget-title"
                    variant="caption12"
                    weight="400"
                >
                    {title}
                </Typography>
                <Typography
                    color={color.blueDark}
                    data-testid="test-widget-info"
                    variant="h3"
                    weight="400"
                >
                    {isLoading ? (
                        <Skeleton height="24px" width="100%" theme="subtitle" />
                    ) : (
                        info
                    )}
                </Typography>
            </div>

            {children}
        </DivStyled>
    );
};

export default Widget;
