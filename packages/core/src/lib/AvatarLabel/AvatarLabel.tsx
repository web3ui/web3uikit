import { IAvatarLabelProps } from './types';
import { AvatarLabelStyles } from './AvatarLabel.styles';

const { DivStyled, DivStyledText } = AvatarLabelStyles;

const AvatarLabel: React.FC<IAvatarLabelProps> = ({
    image,
    imageBorderColor = '#213853',
    imageBorderRadius = '50%',
    imageSize = '80px',
    text = 'Level 0',
    textColor = '#FFFFFF',
    textBGColor = '#DA51BE',
    textFontSize = '10px',
    ...props
}) => {
    const renderContent = () => (
        <>
            {text && (
                <DivStyledText
                    textColor={textColor}
                    textBGColor={textBGColor}
                    data-testid="test-avatarLabelText"
                    style={{
                        fontSize: `${textFontSize}px`,
                    }}
                    {...props}
                >
                    {text}
                </DivStyledText>
            )}
        </>
    );

    return (
        <DivStyled data-testid="test-avatarLabel" {...props}>
            <img
                alt={`Moralis Money User ${text}`}
                aria-label="users avatar"
                height={`${imageSize}px`}
                role="img"
                src={
                    image
                        ? `${image}`
                        : 'https://moralis.io/wp-content/uploads/2023/05/defaultAvatar.jpg'
                }
                style={{
                    borderRadius: `${imageBorderRadius}%`,
                    borderColor: `${imageBorderColor}`,
                }}
                width={`${imageSize}px`}
            />
            {renderContent()}
        </DivStyled>
    );
};

export default AvatarLabel;
