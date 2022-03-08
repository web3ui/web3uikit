import { DivStyled, H4Styled } from './Avatar.styles';
import { AvatarProps } from './types';
import React, { useEffect, useState } from 'react';
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
    const [bgColor, setBgColor] = useState<string>();
    useEffect(() => {
        if (avatarBackground) {
            setBgColor(avatarBackground);
            return;
        }
        if (theme == 'image' || image) {
            setBgColor('transparent');
        }
        const colorArr: string[] = Object.values(color);
        const randomColor =
            colorArr[Math.floor(Math.random() * colorArr.length)];
        setBgColor(randomColor);
        console.log(randomColor);
    }, [avatarBackground]);

    return (
        <DivStyled
            aria-label="users avatar"
            data-testid="test-avatar"
            image={image}
            isRounded={isRounded}
            role={theme === 'image' ? 'img' : 'generic'}
            theme={theme}
            avatarBackground={bgColor}
            textColor={textColor}
            borderRadius={borderRadius}
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
