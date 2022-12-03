import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
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
import { Skeleton } from '../Skeleton';

import TableNew from './TableNew';
export default {
    title: '3.Layout/TableNew',
    component: TableNew,
    argTypes: {
        onPageNumberChanged: { action: 'Page Number Changed' },
        onRowClick: { action: 'Row Clicked' },
    },
} as ComponentMeta<typeof TableNew>;

const Template: ComponentStory<typeof TableNew> = (args) => (
    <TableNew {...args} />
);

export const DefaultTable = Template.bind({});
DefaultTable.args = {
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
    customPageNumber: 2,
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
    hoverBackgroundColor: color.navy20,
};

export const CustomLoadingSkeleton = Template.bind({});
const EmptyRowsForSkeletonTable = () => (
    <div style={{ width: '100%', height: '100%' }}>
        {[...Array(6)].map((el, i) => (
            <Skeleton theme="subtitle" width="30%" />
        ))}
    </div>
);
CustomLoadingSkeleton.args = {
    header,
    data: data,
    pageSize,
    maxPages,
    isLoading: true,
    customLoadingContent: (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
            }}
        >
            <EmptyRowsForSkeletonTable />
            <EmptyRowsForSkeletonTable />
            <EmptyRowsForSkeletonTable />
        </div>
    ),
};

export const SyncTableExample = Template.bind({});

SyncTableExample.args = {
    header: syncHeader,
    data: syncData,
    pageSize,
    maxPages,
    alignCellItems: 'center',
    isColumnSortable: [false, true, true, false],
};

export const CustomTable: ComponentStory<typeof TableNew> = (args) => (
    <TableNew {...args} />
);

CustomTable.args = {
    header,
    pageSize: 5,
    maxPages,
    isColumnSortable: [false, true, false, false],
    data: customTableMockData,
    tableBackgroundColor: 'lightblue',
    headerTextColor: 'orange',
    headerBgColor: 'blue',
    isScrollableOnOverflow: false,
    rowsLineWidth: '2px',
    rowsLineWidthColor: color.blue70,
    customDataComponent: (
        <div
            style={{
                background: 'white',
                width: '100%',
                height: '200px',
                textAlign: 'center',
                display: 'flex',
            }}
        >
            <h1 style={{ margin: 'auto' }}>Some Cool Image</h1>
        </div>
    ),
};

export const SingleColumnTable = Template.bind({});

const TextStyled = styled.div`
    width: 100%;
    padding: 10px;
    background-color: ${color.aero20};
`;
SingleColumnTable.args = {
    header: ['Address'],
    data: [
        [<TextStyled>0xe922879D89E3a8D2f2D51EC8590AEF13216f9E7a</TextStyled>],
        [<TextStyled>0xe922879D89E3a8D2f2D51EC8590AEF13216f9E7a</TextStyled>],
        [<TextStyled>0xe922879D89E3a8D2f2D51EC8590AEF13216f9E7a</TextStyled>],
        [<TextStyled>0xe922879D89E3a8D2f2D51EC8590AEF13216f9E7a</TextStyled>],
    ],
    pageSize: 10,
    noPagination: true,
    cellPadding: '0px',
    customTableBorder: '1px solid black',
};
