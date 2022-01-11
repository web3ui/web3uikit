import { AvatarStyled, DivTextStyled, ImgStyled } from './Avatar.styles';
import { AvatarProps } from './types';
import React from 'react';
import guy from './images/guy';

const Avatar: React.FC<AvatarProps> = ({ theme, image, text }: AvatarProps) => {
    return (
        <AvatarStyled data-testid="test-avatar">
            {theme === 'image' ? (
                image ? (
                    <ImgStyled src={image} data-testid="test-custom-image" />
                ) : (
                    guy()
                )
            ) : (
                <DivTextStyled data-testid="test-text">{text}</DivTextStyled>
            )}
        </AvatarStyled>
    );
};

export default Avatar;
