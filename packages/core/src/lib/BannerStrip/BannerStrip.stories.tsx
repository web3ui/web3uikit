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
                    text="Click to Show Banner(if hidden)"
                    theme="outline"
                    onClick={() => {
                        window?.localStorage &&
                            window.localStorage.removeItem('web3uikit-banner');
                        setSeed(Math.random());
                    }}
                    style={{ marginTop: '60px' }}
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
    customize: {
        backgroundColor: color.fuchsia40,
        borderRadius: '50px',
        border: `4px solid ${color.sky40}`,
        color: color.fuchsia10,
        fontSize: '20px',
        fontWeight: '700',
        padding: '16px 12px',
        margin: '20px',
    },
    position: 'relative',
    text: 'You can make your banner very customized, with the standard "customize" prop',
};

export const Slots = Template.bind({});
Slots.args = {
    customize: {
        backgroundColor: color.mint60,
        color: color.mint10,
        fontSize: '14px',
        fontWeight: '700',
        padding: '4px 12px',
    },
    slots: {
        slotBefore: [<Loading spinnerColor={color.mint10} size={10} />],
        slotAfter: [<>🤩</>, <>👌</>],
    },
    text: 'you can add content before and after the text in slots',
};
