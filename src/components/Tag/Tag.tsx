import React from 'react';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { TagStyled } from './Tag.styles';
import { TagProps } from './types';

const Tag: React.FC<TagProps> = ({
    active = false,
    color,
    fontSize,
    id,
    text = 'Tag',
    theme = 'regular',
    tone = 'light',
    width = 'fit-content',
}: TagProps) => {
    return (
        <TagStyled
            active={active}
            color={color}
            data-testid="test-tag-id"
            fontSize={fontSize}
            id={id}
            role="status"
            theme={theme}
            tone={tone}
            width={width}
        >
            {theme === 'status' && active && (
                <Icon fill="inherit" size={16} svg={iconTypes.checkmark} />
            )}
            <strong data-testid="test-tag-text">{text}</strong>
        </TagStyled>
    );
};

export default Tag;
