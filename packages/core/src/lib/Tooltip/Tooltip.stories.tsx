import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';
import { HelpCircle } from '@web3uikit/icons';
import { color } from '@web3uikit/styles';

export default {
    title: '5.Popup/Tooltip',
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            minHeight: '100vh',
        }}
    >
        <Tooltip {...args} />
    </div>
);

const TooltipText = () => <span>This is tooltip text</span>;

export const Top = Template.bind({});
Top.args = {
    position: 'top',
    content: <TooltipText />,
    children: [<HelpCircle key="4" fill={color.blueGray50} fontSize={50} />],
};

export const Bottom = Template.bind({});
Bottom.args = {
    position: 'bottom',
    content: <TooltipText />,
    children: [<HelpCircle key="4" fill={color.blueGray50} fontSize={50} />],
};

export const Left = Template.bind({});
Left.args = {
    position: 'left',
    content: <TooltipText />,
    children: [<HelpCircle key="4" fill={color.blueGray50} fontSize={50} />],
};

export const Right = Template.bind({});
Right.args = {
    position: 'right',
    content: <TooltipText />,
    children: [<HelpCircle key="4" fill={color.blueGray50} fontSize={50} />],
};
