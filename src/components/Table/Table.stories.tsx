import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
import { columnsConfig, header, data, pageSize, maxPages } from './MockData';
export default {
    title: '3.Layout/Table',
    component: Table,
    argTypes: { onPageNumberChanged: { action: 'Page Number Changed' } },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const DefaultTable = Template.bind({});

DefaultTable.args = {
    columnsConfig,
    header,
    data: data,
    pageSize,
    maxPages,
};

export const NoPagination = Template.bind({});
NoPagination.args = {
    columnsConfig,
    header,
    data,
    pageSize,
    maxPages,
    noPagination: true,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
    columnsConfig: `80px 450px 450px 450px 80px`,
    header,
    data,
    pageSize,
    maxPages,
};

export const NoData = Template.bind({});
NoData.args = {
    columnsConfig,
    header,
    data: [],
    pageSize,
    maxPages,
};

export const NoDataCustomText = Template.bind({});
NoDataCustomText.args = {
    columnsConfig,
    header,
    data: [],
    pageSize,
    maxPages,
    customNoDataText: 'This is Custom Text',
};

export const NoDataCustomComponent = Template.bind({});
NoDataCustomComponent.args = {
    columnsConfig,
    header,
    data: [],
    pageSize,
    maxPages,
    customNoDataComponent: <p>P tag passed as custom component</p>,
};

export const FrozenPageTable = Template.bind({});

FrozenPageTable.args = {
    columnsConfig,
    header,
    data: data,
    pageSize,
    maxPages,
    customPageNumber: 1,
};
export const OutOfRangeFrozenTable = Template.bind({});

OutOfRangeFrozenTable.args = {
    columnsConfig,
    header,
    data: data,
    pageSize,
    maxPages,
    customPageNumber: 6,
};
