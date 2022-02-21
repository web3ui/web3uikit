import React from 'react';
import { H1Styled, PStyled } from '../../styles/StyledElements';
import { SectionStyled, DivStyled } from './Hero.styles';
import { HeroProps } from './types';

const Hero: React.FC<HeroProps> = ({
    backgroundURL,
    children,
    height = '80vh',
    subTitle,
    textColor = '#ffffff',
    title,
}) => {
    return (
        <SectionStyled
            data-testid="test-hero"
            height={height}
            style={{ backgroundImage: `url(${backgroundURL})` }}
            textColor={textColor}
        >
            <H1Styled data-testid="test-hero_title">{title}</H1Styled>
            {subTitle && (
                <PStyled data-testid="test-hero_text">
                    <strong>{subTitle}</strong>
                </PStyled>
            )}

            {children && (
                <DivStyled data-testid="test-hero_child">{children}</DivStyled>
            )}
        </SectionStyled>
    );
};
export default Hero;
