import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IpfsInput from './IpfsInput';
import { moralisContext } from '../../decorators';
import { IpfsInputprops } from './types';

export default {
    title: '1.Web3/IpfsInput',
    component: IpfsInput,
    decorators: [moralisContext],
    parameters: {
        docs: {
            source: {
                excludeDecorators: true,
            },
        },
    },
} as ComponentMeta<typeof IpfsInput>;

const Template: ComponentStory<typeof IpfsInput> = (args: IpfsInputprops) => (
    <IpfsInput {...args} />
);

export const Default = Template.bind({});
