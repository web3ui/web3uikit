import React from 'react';
import { Icon } from '../Icon';
import { iconTypes } from '../Icon/collection';
import { TagStyled, SpanStyled } from './Tag.styles';
import { TagProps } from './types';
import colors from '../../styles/colors';

const Tag: React.FC<TagProps> = ({
    active = false,
    color,
    fontSize,
    id,
    hasCancel = false,
    onCancelClick,
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
            {hasCancel && (
                <SpanStyled onClick={onCancelClick}>
                    <Icon fill={colors.blue} size={16} svg="x" style={{ marginLeft: '8px' }} />
                </SpanStyled>
            )}
        </TagStyled>
    );
};

export default Tag;
