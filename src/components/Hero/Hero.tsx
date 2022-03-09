import React from 'react';
import { Typography } from '../Typography';
import color from '../../styles/colors';
import { SectionStyled, DivStyled } from './Hero.styles';
import { HeroProps } from './types';

const Hero: React.FC<HeroProps> = ({
    backgroundColor = `${color.greyLight}`,
    backgroundURL,
    children,
    height = '80vh',
    subTitle,
    textColor = `${color.greyDark}`,
    title,
}) => {
    return (
        <SectionStyled
            backgroundColor={backgroundColor}
            data-testid="test-hero"
            height={height}
            style={{ backgroundImage: `url(${backgroundURL})` }}
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

            {children && (
                <DivStyled data-testid="test-hero_child">{children}</DivStyled>
            )}
        </SectionStyled>
    );
};
export default Hero;
