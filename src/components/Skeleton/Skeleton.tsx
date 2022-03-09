import React from 'react';
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
    borderRadius = '10px',
    theme,
    height = getDefault(theme).height,
    width = getDefault(theme).width,
}) => {
    return (
        <DivStyled
            borderRadius={borderRadius}
            data-testid="test-skeleton-id"
            height={height}
            theme={theme}
            width={width}
        />
    );
};

export default Skeleton;
