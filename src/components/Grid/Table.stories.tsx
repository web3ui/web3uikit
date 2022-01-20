import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
export default {
    title: 'Ui/Grid',
    component: Table,
    argTypes: { onPageNumberChanged: { action: 'Page Number Changed' } },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const GridComponent = Template.bind({});

GridComponent.args = {}
;
