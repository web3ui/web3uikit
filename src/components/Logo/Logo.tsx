import { LogoProps } from './types';
import React from 'react';
import { getMoralisLogo } from './images/moralisLogoIcon';
import { getMoralisDefault } from './images/moralisLogoDefault';
import { getVisaLogo } from './images/visaLogo';
import { getMastercardLogo } from './images/mastercardLogo';
import { getAmexLogo } from './images/amexLogo';
import { getDinersLogo } from './images/dinersLogo';

const Logo: React.FC<LogoProps> = ({ theme, color, size }: LogoProps) => {
    switch (theme) {
        case 'amex':
            return (
                <div data-testid="test-logo-amex">
                    {getAmexLogo(size || 'regular')}
                </div>
            );
        case 'default':
            return (
                <div data-testid="test-logo-default">
                    {getMoralisDefault(color || 'white')}
                </div>
            );
        case 'diners':
            return (
                <div data-testid="test-logo-diners">
                    {getDinersLogo(size || 'regular')}
                </div>
            );
        case 'mastercard':
            return (
                <div data-testid="test-logo-mastercard">
                    {getMastercardLogo(size || 'regular')}
                </div>
            );
        case 'icon':
            return (
                <div data-testid="test-logo-icon">
                    {getMoralisLogo(color || 'white')}
                </div>
            );
        case 'visa':
            return (
                <div data-testid="test-logo-visa">
                    {getVisaLogo(size || 'regular')}
                </div>
            );
    }
};

export default Logo;
