import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as stories from './TableNew.stories';
import { test, expect, describe, vi } from 'vitest';

const {
    DefaultTable,
    NoData,
    FrozenPageTable,
    OutOfRangeFrozenTable,
    NoDataCustomComponent,
    NoDataCustomText,
    LoadingTable,
} = composeStories(stories);

const tableTestId = 'test-table';
const paginationId = 'test-table-pagination';

describe('Table - DefaultTable', () => {
    // Arguments
    const header = DefaultTable?.args?.header ? DefaultTable?.args?.header : [];
    const pageSize = DefaultTable?.args?.pageSize
        ? DefaultTable?.args?.pageSize
        : 0;
    const maxPages = DefaultTable?.args?.maxPages
        ? DefaultTable?.args?.maxPages
        : 0;

    test('renders the component', () => {
        render(<DefaultTable />);
        const element = screen.getByTestId(tableTestId);
        expect(element).not.toBeNull();
    });

    test('Defines proper sub headings', () => {
        render(<DefaultTable />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    test('Computes Correct Number of table items', () => {
        render(<DefaultTable />);
        const element = screen.getAllByRole('table-item');
        expect(element.length).toEqual(pageSize * header?.length);
    });
});

describe('Table - NoData', () => {
    // Arguments
    const header = DefaultTable?.args?.header;

    test('renders the component', () => {
        render(<NoData />);
        const element = screen.getByTestId(tableTestId);
        expect(element).not.toBeNull();
    });

    test('Defines proper sub headings', () => {
        render(<NoData />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    test('Should render no data', () => {
        render(<NoData />);
        const element = screen.queryAllByText('No Data');
        expect(element.length).toEqual(1);
    });

    test('Should not have any items', () => {
        render(<NoData />);
        const element = screen.queryAllByRole('table-item');
        expect(element.length).toEqual(0);
    });
});

describe('Table - NoDataCustomComponent', () => {
    // Arguments
    const header = DefaultTable?.args?.header;

    test('renders the component', () => {
        render(<NoDataCustomComponent />);
        const element = screen.getByTestId(tableTestId);
        expect(element).not.toBeNull();
    });

    test('Defines proper sub headings', () => {
        render(<NoDataCustomComponent />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    test('Should not have any items', () => {
        render(<NoDataCustomComponent />);
        const element = screen.queryAllByRole('table-item');
        expect(element.length).toEqual(0);
    });
});

describe('Table - NoDataCustomText', () => {
    // Arguments
    const header = DefaultTable?.args?.header;
    const text = DefaultTable?.args?.customNoDataText
        ? DefaultTable?.args?.customNoDataText
        : '';

    test('renders the component', () => {
        render(<NoDataCustomText />);
        const element = screen.getByTestId(tableTestId);
        expect(element).not.toBeNull();
    });

    test('Defines proper sub headings', () => {
        render(<NoDataCustomText />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    test('Should render no data', () => {
        render(<NoDataCustomText />);
        const element = screen.queryAllByText(text);
        expect(element).toBeDefined();
    });

    test('Should not have any items', () => {
        render(<NoDataCustomText />);
        const element = screen.queryAllByRole('table-item');
        expect(element.length).toEqual(0);
    });
});

describe('Table - FrozenPage', () => {
    // Arguments
    const header = DefaultTable?.args?.header ? DefaultTable?.args?.header : [];
    const pageSize = DefaultTable?.args?.pageSize
        ? DefaultTable?.args?.pageSize
        : 0;
    const maxPages = DefaultTable?.args?.maxPages
        ? DefaultTable?.args?.maxPages
        : 0;

    test('renders the component', () => {
        render(<FrozenPageTable />);
        const element = screen.getByTestId(tableTestId);
        expect(element).not.toBeNull();
    });

    test('Defines proper sub headings', () => {
        render(<FrozenPageTable />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });
});
describe('Table - FrozenPageOutOfRange', () => {
    //Arguments
    const header = DefaultTable?.args?.header;

    test('renders the component', () => {
        render(<OutOfRangeFrozenTable />);
        const element = screen.getByTestId(tableTestId);
        expect(element).not.toBeNull();
    });

    test('Defines proper sub headings', () => {
        render(<OutOfRangeFrozenTable />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    test('Should render no data', () => {
        render(<OutOfRangeFrozenTable />);
        const element = screen.queryAllByText('No Data');
        expect(element.length).toEqual(1);
    });

    test('Should not have any items', () => {
        render(<OutOfRangeFrozenTable />);
        const element = screen.queryAllByRole('table-item');
        expect(element.length).toEqual(0);
    });
});

describe('Table- Table Loader', () => {
    test('Should Render Loader', () => {
        render(<LoadingTable />);
        const element = screen.getByRole('spinner');
        expect(element).toBeDefined();
    });
});
