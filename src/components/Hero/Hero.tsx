import React from 'react';
import { Typography } from '../Typography';
import color from '../../styles/colors';
import { SectionStyled, DivStyled } from './Hero.styles';
import { HeroProps } from './types';

const Hero: React.FC<HeroProps> = ({
    align = 'center',
    backgroundColor = `${color.greyLight}`,
    backgroundURL,
    children,
    customImage = null,
    height = '80vh',
    linearGradient,
    rounded,
    subTitle,
    textColor = `${color.greyDark}`,
    title,
}) => {
    return (
        <SectionStyled
            backgroundColor={backgroundColor}
            linearGradient={linearGradient}
            backgroundURL={backgroundURL}
            data-testid="test-hero"
            height={height}
            rounded={rounded}
            align={align}
        >
            <Typography
                color={textColor}
                data-testid="test-hero_title"
                variant="h1"
            >
                {title}
            </Typography>
            {subTitle && (
                <Typography
                    color={textColor}
                    data-testid="test-hero_text"
                    variant="body16"
                    weight="regular"
                >
                    <strong>{subTitle}</strong>
                </Typography>
            )}

            {customImage?.url && <img src={customImage.url} alt='Hero-image' style={customImage?.styles} />}

            {children && (
                <DivStyled data-testid="test-hero_child">{children}</DivStyled>
            )}
        </SectionStyled>
    );
};
export default Hero;
