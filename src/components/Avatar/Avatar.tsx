import { DivStyled, H4Styled, ImgStyled } from './Avatar.styles';
import { AvatarProps } from './types';
import React from 'react';
import guy from './images/guy';

const Avatar: React.FC<AvatarProps> = ({
    image,
    isRounded = false,
    text,
    theme,
}: AvatarProps) => {
    return (
        <DivStyled
            data-testid="test-avatar"
            rounded={isRounded}
            data-isrounded={isRounded}
            role={`Your Avatar`}
        >
            {theme === 'image' ? (
                image ? (
                    <ImgStyled src={image} data-testid="test-custom-image" />
                ) : (
                    guy()
                )
            ) : (
                <H4Styled data-testid="test-text">
                    {text && text.length > 1
                        ? (text = `${text[0]}${text[1]}`)
                        : text}
                </H4Styled>
            )}
        </DivStyled>
    );
};

export default Avatar;
