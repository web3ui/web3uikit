import { DivStyled, H4Styled } from './Avatar.styles';
import { AvatarProps } from './types';
import React from 'react';
import renderAvatarSVG from './images/guy';
import color from '../../styles/colors';

const Avatar: React.FC<AvatarProps> = ({
    image,
    isRounded = false,
    text,
    theme,
    avatarBackground,
    textColor = '#fff',
    borderRadius,
}: AvatarProps) => {
    const getRandomColor = (): string => {
        if (avatarBackground) {
            return avatarBackground;
        }
        if (theme == 'image' || image) {
            return 'transparent';
        }
        const colorArr: string[] = Object.values(color);
        return colorArr[Math.floor(Math.random() * colorArr.length)];
    };

    return (
        <DivStyled
            aria-label="users avatar"
            data-testid="test-avatar"
            image={image}
            isRounded={isRounded}
            role={theme === 'image' ? 'img' : 'generic'}
            theme={theme}
            avatarBackground={getRandomColor()}
            textColor={textColor}
            borderRadius={borderRadius}
        >
            {theme === 'image' ? (
                !image && renderAvatarSVG()
            ) : (
                <H4Styled data-testid="test-text" textColor={textColor}>
                    {text && text.length > 1
                        ? (`${text[0]}${text[1]}`)
                        : text}
                </H4Styled>
            )}
        </DivStyled>
    );
};

export default Avatar;
