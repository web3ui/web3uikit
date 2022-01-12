import { LogoProps } from './types';
import React from 'react';
import { getMoralisLogo } from './images/moralisLogoIcon';
import { getMoralisDefault } from './images/moralisLogoDefault';
import { getVisaLogo } from './images/visaLogo';
import { getMastercardLogo } from './images/mastercardLogo';

const Logo: React.FC<LogoProps> = ({ theme, color, size }: LogoProps) => {
    return (
        <>
            {theme === 'icon' ? (
                <div data-testid="test-logo-icon">
                    {getMoralisLogo(color || 'white')}
                </div>
            ) : theme === 'default' ? (
                <div data-testid="test-logo-default">
                    {getMoralisDefault(color || 'white')}
                </div>
            ) : theme === 'visa' ? (
                <div data-testid="test-logo-visa">
                    {getVisaLogo(size || 'regular')}
                </div>
            ) : (
                <div data-testid="test-logo-mastercard">
                    {getMastercardLogo(size || 'regular')}
                </div>
            )}
        </>
    );
};

export default Logo;
