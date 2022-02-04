import { DivStyled, H4Styled } from './Avatar.styles';
import { AvatarProps } from './types';
import React from 'react';
import renderAvatarSVG from './images/guy';

const Avatar: React.FC<AvatarProps> = ({
    image,
    isRounded = false,
    text,
    theme,
}: AvatarProps) => (
    <DivStyled
        aria-label="users avatar"
        data-testid="test-avatar"
        image={image}
        isRounded={isRounded}
        role={theme === 'image' ? 'img' : 'generic'}
        theme={theme}
    >
        {theme === 'image' ? (
            !image && renderAvatarSVG()
        ) : (
            <H4Styled data-testid="test-text">
                {text && text.length > 1
                    ? (text = `${text[0]}${text[1]}`)
                    : text}
            </H4Styled>
        )}
    </DivStyled>
);

export default Avatar;
