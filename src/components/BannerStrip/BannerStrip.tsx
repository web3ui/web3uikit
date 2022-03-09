import React from 'react';
import styled from 'styled-components';
import bannerStripStyles from './BannerStrip.styles';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import { BannerStripProps } from '.';
import { Button } from '../Button';

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

const Section = styled.section<Pick<BannerStripProps, 'type' | 'height'>>`
    ${fonts.text};
    ${bannerStripStyles.section};
    background-color: ${(p) => p.type && getBackgroundColor(p.type)};
    height: ${({ height }) => height};
`;

const BannerStrip: React.FC<BannerStripProps> = ({
    buttonConfig,
    buttonDisplayed = false,
    height = 'auto',
    text,
    type = 'standard',
}) => (
    <Section type={type} height={height} data-testid="banner-strip">
        <strong>{text}</strong>
        {buttonDisplayed && <Button {...buttonConfig} />}
    </Section>
);

export default BannerStrip;
