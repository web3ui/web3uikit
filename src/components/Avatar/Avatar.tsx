import { AvatarStyled, DivTextStyled, ImgStyled } from './Avatar.styles';
import { AvatarProps } from './types';
import React from 'react';
import guy from './images/guy';

const Avatar: React.FC<AvatarProps> = ({
    theme,
    image,
    text,
    rounded = false,
}: AvatarProps) => {
    return (
        <AvatarStyled
            data-testid="test-avatar"
            rounded={rounded}
            role={`rounded_${rounded}`}
        >
            {theme === 'image' ? (
                image ? (
                    <ImgStyled src={image} data-testid="test-custom-image" />
                ) : (
                    guy()
                )
            ) : (
                <DivTextStyled data-testid="test-text">
                    {text && text.length > 1
                        ? (text = `${text[0]}${text[1]}`)
                        : text}
                </DivTextStyled>
            )}
        </AvatarStyled>
    );
};

export default Avatar;
