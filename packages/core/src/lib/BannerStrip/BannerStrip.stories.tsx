import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react';
import BannerStrip from './BannerStrip';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { color } from '@web3uikit/styles';
import { Loading } from '../Loading';
import React, { useEffect } from 'react';

const HelperDecorator: DecoratorFn = (storyFn) => {
    const [seed, setSeed] = React.useState(1);

    return (
        <div
            key={seed}
            style={{
                transform: 'scale(1)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {storyFn()}
            {
                <Button
                    text="Show Banner"
                    theme="outline"
                    onClick={() => {
                        window?.localStorage &&
                            window.localStorage.removeItem('web3uikit-banner');
                        setSeed(Math.random());
                    }}
                />
            }
        </div>
    );
};

export default {
    title: '5.Popup/BannerStrip',
    component: BannerStrip,
    decorators: [HelperDecorator],
} as ComponentMeta<typeof BannerStrip>;

const Template: ComponentStory<typeof BannerStrip> = (args) => {
    return <BannerStrip {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
    text: 'Hey this is a notification you should check out',
    type: 'standard',
};

export const Warning = Template.bind({});
Warning.args = {
    text: 'This is not a drill... its a warning banner',
    type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
    text: '404 not the droids you are looking for',
    type: 'error',
};

export const Success = Template.bind({});
Success.args = {
    text: '😉 Looking good ',
    type: 'success',
};

export const Custom = Template.bind({});
Custom.args = {
    text: (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
            }}
        >
            <Loading fontSize={12} size={12} spinnerType="loader" />
            <Typography variant="caption14" color={color.white}>
                Your Dapp is currently loading... Full Dapp settings will be
                available shortly.
            </Typography>
        </div>
    ),
    bgColor: color.blue40,
    type: 'custom',
    position: 'relative',
    borderRadius: '12px',
};
