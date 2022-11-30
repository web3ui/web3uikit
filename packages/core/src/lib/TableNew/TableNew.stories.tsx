import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    columnsConfig,
    syncColumnsConfig,
    header,
    syncHeader,
    data,
    syncData,
    pageSize,
    maxPages,
    customTableMockData,
} from './MockData';
import { Loading } from '../Loading';
import { color } from '@web3uikit/styles';

import TableNew from './TableNew';
export default {
    title: 'Layout/TableNew',
    component: TableNew,
    argTypes: {
        onPageNumberChanged: { action: 'Page Number Changed' },
        onRowClick: { action: 'Row Clicked' },
    },
} as ComponentMeta<typeof TableNew>;

const Template: ComponentStory<typeof TableNew> = (args) => (
    <TableNew {...args} />
);

export const Default = Template.bind({});
Default.args = {
    header,
    data: data,
    pageSize,
    maxPages,
};

export const NoPagination = Template.bind({});
NoPagination.args = {
    header,
    data,
    pageSize,
    maxPages,
    noPagination: true,
};

export const Scrolling = Template.bind({});
Scrolling.args = {
    header,
    data,
    pageSize,
    maxPages,
};

export const NoData = Template.bind({});
NoData.args = {
    header,
    data: [],
    pageSize,
    maxPages,
};

export const NoDataCustomText = Template.bind({});
NoDataCustomText.args = {
    header,
    data: [],
    pageSize,
    maxPages,
    customNoDataText: 'This is Custom Text',
};

export const NoDataCustomComponent = Template.bind({});
NoDataCustomComponent.args = {
    header,
    data: [],
    pageSize,
    maxPages,
    customNoDataComponent: <p>P tag passed as custom component</p>,
};

export const FrozenPageTable = Template.bind({});
FrozenPageTable.args = {
    header,
    data: data,
    pageSize,
    maxPages,
    customPageNumber: 1,
};

export const OutOfRangeFrozenTable = Template.bind({});
OutOfRangeFrozenTable.args = {
    header,
    data: data,
    pageSize,
    maxPages,
    customPageNumber: 6,
};

export const LoadingTable = Template.bind({});
LoadingTable.args = {
    header,
    data: data,
    pageSize,
    maxPages,
    isLoading: true,
    isColumnSortable: [true, true],
};

export const CustomLoader = Template.bind({});
CustomLoader.args = {
    header,
    data: data,
    pageSize,
    maxPages,
    isLoading: true,
    customLoadingContent: (
        <div>
            <Loading size={30} text="Fetching..." spinnerColor={color.navy40} />
        </div>
    ),
};

export const HighlightTableRow = Template.bind({});
HighlightTableRow.args = {
    header,
    data: data,
    pageSize,
    maxPages,
    hover: true,
    hoverBackgroundColor: color.navy20,
};
