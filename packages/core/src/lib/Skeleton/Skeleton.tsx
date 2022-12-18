import { DivStyled } from './Skeleton.styles';
import { SkeletonProps, Theme } from './types';

const getDefault = (theme: Theme) => {
    switch (theme) {
        case 'image':
            return { width: '60px', height: '60px' };
        case 'subtitle':
            return { width: '100%', height: '10px' };
        case 'text':
            return { width: '100%', height: '20px' };
        default:
            return { width: '100%', height: '20px' };
    }
};

const Skeleton: React.FC<SkeletonProps> = ({
    animationColor,
    backgroundColor,
    borderRadius = '10px',
    theme,
    height = getDefault(theme).height,
    width = getDefault(theme).width,
    ...props
}) => {
    return (
        <DivStyled
            animationColor={animationColor}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            data-testid="test-skeleton"
            height={height}
            theme={theme}
            width={width}
            {...props}
        />
    );
};

export default Skeleton;
