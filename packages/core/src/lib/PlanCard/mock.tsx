import { color } from '@web3uikit/styles';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { IPlanCardProps } from './types';

export default {
    success: {
        description: [
            'Unlimited ideas',
            'Unlimited Plugins',
            'Community Support',
            'IPFS Gateway',
        ],
        footer: (
            <Button text="Talk to Sales" theme="primary" isFullWidth={true} />
        ),
        title: (
            <h1 style={{ fontSize: '64px', color: color.blue70 }}>
                <strong>FREE</strong>
            </h1>
        ),
        subTitle: (
            <Typography variant="subtitle1" weight="600" color={color.blue70}>
                Starter Plan
            </Typography>
        ),
        isActive: true,
        descriptionTitle: (
            <Typography
                variant="caption14"
                weight="semibold"
                color={color.blue70}
            >
                Free Access To
            </Typography>
        ),
    } as IPlanCardProps,
};
