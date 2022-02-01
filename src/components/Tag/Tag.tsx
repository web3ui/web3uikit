import React from 'react';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { TagStyled } from './Tag.styles';
import { TagProps } from './types';

const Tag: React.FC<TagProps> = ({
    active = false,
    color,
    id,
    text = 'Tag',
    theme = 'regular',
    tone = 'light',
}: TagProps) => {
    return (
        <TagStyled
            active={active}
            role="status"
            color={color}
            data-testid="test-tag-id"
            id={id}
            theme={theme}
            tone={tone}
        >
            {theme === 'status' && active && (
                <Icon fill="inherit" size={16} svg={iconTypes.checkmark} />
            )}
            <strong data-testid="test-tag-text">{text}</strong>
        </TagStyled>
    );
};

export default Tag;
