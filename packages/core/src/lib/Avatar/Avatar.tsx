import styles from './Avatar.styles';
import { AvatarProps } from './types';

import renderAvatarSVG from './images/guy';
import { color } from '@web3uikit/styles';
const { DivStyled, H4Styled } = styles;

const avatarColors = ['#FEB7B7', '#E1B5F6', '#A7D6F9', '#AADCD6', '#F0DC7D'];

const Avatar: React.FC<AvatarProps> = ({
    avatarBackground,
    borderRadius,
    characterAmount = 2,
    fontSize = 15,
    image,
    isRounded = false,
    size = 40,
    text,
    textColor = color.white,
    theme,
    avatarKey = 1,
    ...props
}: AvatarProps) => {
    const getRandomColor = (): string => {
        if (avatarBackground) {
            return avatarBackground;
        }
        if (theme == 'image' || image) {
            return 'transparent';
        }
        const pos = avatarKey % avatarColors.length;
        return avatarColors[pos - 1] || '#FEB7B7';
    };

    const truncateText = (fullText: string): string => {
        const trimmedText = fullText.slice(0, characterAmount);
        return trimmedText;
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
            {...props}
        >
            {theme === 'image' ? (
                !image && renderAvatarSVG()
            ) : (
                <H4Styled data-testid="test-avatar-title" textColor={textColor}>
                    {text && truncateText(text)}
                </H4Styled>
            )}
        </DivStyled>
    );
};

export default Avatar;
