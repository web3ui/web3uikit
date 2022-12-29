import { Typography } from '../Typography';
import { color } from '@web3uikit/styles';
import styles from './Hero.styles';
import { IHeroProps } from './types';

const {
    ImageStyled,
    LeftContainerDiv,
    RightContainerDiv,
    SectionStyled,
} = styles;

const Hero: React.FC<IHeroProps> = ({
    align = 'center',
    backgroundColor = `${color.gray30}`,
    backgroundURL = '',
    children,
    customImage = {
        url: null,
        align: 'center',
        styles: {},
    },
    height = '100%',
    linearGradient,
    padding,
    rounded = '20px',
    subTitle,
    textColor = `${color.blue70}`,
    title,
    ...props
}) => {
    return (
        <SectionStyled
            backgroundColor={backgroundColor}
            linearGradient={linearGradient}
            backgroundURL={backgroundURL}
            data-testid="test-hero"
            height={height}
            rounded={rounded}
            textColor={textColor}
            {...props}
        >
            <LeftContainerDiv padding={padding}>
                {title && (
                    <Typography
                        color={textColor}
                        data-testid="test-hero-title"
                        variant="h1"
                    >
                        {title}
                    </Typography>
                )}
                {subTitle && (
                    <Typography
                        color={textColor}
                        data-testid="test-hero-text"
                        variant="body16"
                        weight="regular"
                    >
                        <strong>{subTitle}</strong>
                    </Typography>
                )}
                {children && children}
            </LeftContainerDiv>
            {customImage?.url && (
                <RightContainerDiv>
                    <ImageStyled
                        align={align}
                        loading="lazy"
                        src={customImage.url}
                        alt="Hero-image"
                        style={customImage?.styles}
                    />
                </RightContainerDiv>
            )}
        </SectionStyled>
    );
};
export default Hero;
