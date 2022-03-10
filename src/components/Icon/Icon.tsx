/* eslint-disable linebreak-style */
import React from 'react';
import collection, { TIconType } from './collection';
import { StyledIconDiv } from './Icon.styles';
import type { IconProps } from './types';

const Icon: React.FC<IconProps> = ({
    fill = 'inherit',
    size = 18,
    svg,
    style,
}) => {
    const getIcon = (
        fill: string,
        size: number,
        svg: TIconType,
        style?: React.CSSProperties,
    ) => {
        const key = (svg + 'Icon') as keyof typeof collection;
        if (!collection[key]) throw new Error(`no icon found: '${key}'`);
        return collection[key](fill, size, style);
    };

    return <StyledIconDiv>{getIcon(fill, size, svg, style)}</StyledIconDiv>;
};

export default Icon;
