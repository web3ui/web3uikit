import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from './Table';
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
import styled from 'styled-components';
export default {
    title: '3.Layout/Table',
    component: Table,
    argTypes: {
        onPageNumberChanged: { action: 'Page Number Changed' },
        onRowClick: { action: 'Row Clicked' },
    },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const DefaultTable = Template.bind({});

DefaultTable.args = {
    columnsConfig,
    header,
    data: data,
    pageSize,
    maxPages,
    isColumnSortable: [false, true, false, false],
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
    columnsConfig: '80px 450px 450px 450px 80px',
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

export const LoadingTable = Template.bind({});

LoadingTable.args = {
    columnsConfig,
    header,
    data: data,
    pageSize,
    maxPages,
    isLoading: true,
    isColumnSortable: [true, true],
};

export const CustomLoader = Template.bind({});

CustomLoader.args = {
    columnsConfig,
    header,
    data: data,
    pageSize,
    maxPages,
    isLoading: true,
    customLoadingContent: (
        <div>
            <Loading size={30} text="Fetching..." spinnerColor={color.blue} />
        </div>
    ),
};

export const SyncTableExample = Template.bind({});

SyncTableExample.args = {
    columnsConfig: syncColumnsConfig,
    header: syncHeader,
    data: syncData,
    pageSize,
    maxPages,
    alignCellItems: 'center',
    isColumnSortable: [false, true, true, false],
};

export const CustomTable: ComponentStory<typeof Table> = (args) => (
    <DivStyled>
        <Table {...args} />
    </DivStyled>
);

CustomTable.args = {
    columnsConfig,
    header,
    pageSize: 1,
    maxPages,
    isColumnSortable: [false, true, false, false],
    data: customTableMockData,
    columnGapSize: 0,
    tableBackgroundColor: 'lightblue',
    isScrollableOnOverflow: false,
};

const DivStyled = styled.div`
    height: 350px;
    overflow-x: auto;
    div[role='table-header'] {
        &:nth-child(1) {
            border-top-left-radius: 19px;
        }
        &:nth-child(5) {
            border-top-right-radius: 19px;
        }
        background-color: white;
    }
`;
