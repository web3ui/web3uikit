import { DivStyled, H4Styled } from './Avatar.styles';
import { AvatarProps } from './types';
import React from 'react';
import renderAvatarSVG from './images/guy';
import color from '../../styles/colors';

const Avatar: React.FC<AvatarProps> = ({
    avatarBackground,
    borderRadius,
    fontSize = 15,
    image,
    isRounded = false,
    size = 40,
    text,
    textColor = color.white,
    theme,
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
            avatarBackground={getRandomColor()}
            borderRadius={borderRadius}
            data-testid="test-avatar"
            fontSize={fontSize}
            image={image}
            isRounded={isRounded}
            role={theme === 'image' ? 'img' : 'generic'}
            size={size}
            textColor={textColor}
            theme={theme}
        >
            {theme === 'image' ? (
                !image && renderAvatarSVG()
            ) : (
                <H4Styled data-testid="test-text" textColor={textColor}>
                    {text && text.length > 1
                        ? (text = `${text[0]}${text[1]}`)
                        : text}
                </H4Styled>
            )}
        </DivStyled>
    );
};

export default Avatar;
