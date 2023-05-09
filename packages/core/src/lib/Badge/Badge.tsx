import { BadgeProps } from './types';
import styles from './Badge.styles';
import { Typography } from '../Typography';
import { color as allColors, colorTheme } from '@web3uikit/styles';
const { DivStyled } = styles;

const Badge: React.FC<BadgeProps> = ({
    color = allColors.white,
    italic,
    monospace,
    state = 'normal',
    text,
    textVariant = 'body16',
    theme = 'light',
    weight = 'bold',
    ...props
}) => {
    return (
        <DivStyled
            data-testid="test-badge"
            state={state}
            theme={theme}
            {...props}
        >
            <Typography
                color={color}
                italic={italic}
                monospace={monospace}
                data-testid="test-badge-text"
                variant={textVariant}
                weight={weight}
            >
                {text}
            </Typography>
        </DivStyled>
    );
};

export default Badge;
