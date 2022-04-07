import React from 'react';
import { BannerStripProps } from '.';
import { Button } from '../Button';
import styles from './BannerStrip.styles';

const { SectionStyled } = styles;

const BannerStrip: React.FC<BannerStripProps> = ({
    buttonConfig,
    buttonDisplayed = false,
    height = 'auto',
    text,
    type = 'standard',
}) => (
    <SectionStyled type={type} height={height} data-testid="banner-strip">
        <strong>{text}</strong>
        {buttonDisplayed && <Button {...buttonConfig} />}
    </SectionStyled>
);

export default BannerStrip;
