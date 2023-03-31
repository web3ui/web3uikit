import { ComponentStory, ComponentMeta } from '@storybook/react';
import { color } from '@web3uikit/styles';
import Toggle from './Toggle';

export default {
    title: '2.Forms/Toggle',
    component: Toggle,
    parameters: {
        actions: {
            handles: ['onChange', 'changed', 'onBlur'],
        },
    },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
    return <Toggle {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {};

export const Customize = Template.bind({});
Customize.args = {
    labelOn: 'Yearly',
    labelOff: 'Monthly',
    name: 'Test toggle input',
    id: 'test-toggle',
    customize: {
        backgroundColor: color.mint40,
        border: `4px solid ${color.navy40}`,
        color: color.navy40,
        fontSize: '20px',
        fontWeight: '700',
        onHover: 'darken',
        padding: '8px 12px',
        margin: '20px',
    },
};
