import { ComponentStory, ComponentMeta } from '@storybook/react';
import Widget from './Widget';
import React from 'react';

export default {
    title: '4.UI/Widget',
    component: Widget,
    decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Widget>;

const Template: ComponentStory<typeof Widget> = (args) => <Widget {...args} />;

const Row: ComponentStory<typeof Widget> = () => (
    <div style={{ display: 'grid', gap: '20px', padding: '40px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
            <Widget info="Mainnet" topic="ENVIRONMENT" />
            <Widget info="233,182" topic="NUMBER OF USERS">
                <div>CHART COMING SOON</div>
            </Widget>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
            <Widget info="72%" topic="CPU" />
            <Widget info="0 Bytes" topic="NETWORK" />
            <Widget info="24%" topic="RAM" />
            <Widget info="24%" topic="DISK" />
        </div>
    </div>
);

export const Demo = Template.bind({});
Demo.args = {
    info: 'Mainnet',
    topic: 'ENVIRONMENT',
};

export const Multiple = Row.bind({});
