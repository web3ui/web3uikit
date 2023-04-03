import { color } from '@web3uikit/styles';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { IPlanCardProps } from './types';

export default {
    success: {
        title: 'Starter',
        price: <Typography variant="h1" weight="700" color={color.blue70}>$257</Typography>,
        description: (
            <Typography
                variant="caption14"
                weight="550"
                color={color.aero50}
            >
                Free to get started
            </Typography>
        ),

                features: [
            'Unlimited ideas',
            'Unlimited Plugins',
            'Community Support',
            'IPFS Gateway',
        ],
        ctaButton: <Button theme='primary' isFullWidth={true} text="Your Current Plan"></Button>,
        height: '606px',
        width: '285px',
        horizontalLine: true,
        isCurrentPlan: true,
        isCurrentBillingPeriod: true,
        themeColor: color.mint40,
        backgroundColor: color.aero10,
        featuresIconColor: color.gray40,
    } as IPlanCardProps,
};
