import React from 'react';
import styled from 'styled-components';
import bannerStripStyles from './BannerStrip.styles';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import { BannerStripProps } from '.';

const getBackgroundColor = (type: string) => {
    switch (type) {
        case 'success':
            return color.green;
        case 'warning':
            return color.yellow;
        case 'error':
            return color.red;
        default:
            return color.blue;
    }
};

const Section = styled.section<Pick<BannerStripProps, 'type'>>`
    ${fonts.text}
    ${bannerStripStyles.section}
  background-color: ${(p) => p.type && getBackgroundColor(p.type)};
`;

const Button = styled.button`
    ${fonts.textBold}
    ${bannerStripStyles.button}
`;

const BannerStrip: React.FC<BannerStripProps> = ({
    buttonClickEvent,
    buttonDisplayed = false,
    buttonText = 'ok',
    text,
    type = 'standard',
}) => (
    <Section type={type} data-testid="banner-strip">
        <strong>{text}</strong>
        {buttonDisplayed && (
            <Button onClick={() => buttonClickEvent && buttonClickEvent()}>
                {buttonText}
            </Button>
        )}
    </Section>
);

export default BannerStrip;
