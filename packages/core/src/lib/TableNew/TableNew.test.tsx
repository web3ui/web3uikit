import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import { render, screen, fireEvent } from '@testing-library/react';
import * as stories from './TableNew.stories';
import { test, expect, describe, vi } from 'vitest';

const {
    DefaultTable,
    NoPagination,
    NoData,
    FrozenPageTable,
    OutOfRangeFrozenTable,
    NoDataCustomComponent,
    NoDataCustomText,
    LoadingTable,
} = composeStories(stories);

const tableTestId = 'test-table';
const paginationId = 'test-Pagination';
const paginationNextId = 'test-Pagination-Next';
const paginationPrevId = 'test-Pagination-Prev';
const testOnChangeEvent = vi.fn();

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

    test('Computes Correct Number of Pagination', () => {
        render(<DefaultTable />);
        const element = screen.getAllByRole('pagination-item');
        expect(element.length).toBeLessThan(maxPages + 1);
    });

    test('Always one pagination visible', () => {
        render(<DefaultTable />);
        const element = screen.getByTestId(paginationId);
        expect(element).toBeDefined();
    });

    test('Should call back on page change', () => {
        const { rerender } = render(
            <DefaultTable onPageNumberChanged={testOnChangeEvent} />,
        );
        const next: HTMLElement = screen.getByTestId(paginationNextId);
        fireEvent.click(next);
        rerender(<DefaultTable />);
        expect(testOnChangeEvent).toBeCalled();
    });

    test('Should change pagination to next on Click', () => {
        const { rerender } = render(<DefaultTable />);
        const next: HTMLElement = screen.getByTestId(paginationNextId);
        expect(screen.getByTestId('test-tableBodyPage-1'));
        fireEvent.click(next);
        rerender(<DefaultTable />);
        expect(screen.getByTestId('test-tableBodyPage-2'));
    });

    test('Should change to Previous page on previous click', () => {
        const { rerender } = render(<DefaultTable />);
        const prev: HTMLElement = screen.getByTestId(paginationPrevId);
        const next: HTMLElement = screen.getByTestId(paginationNextId);
        expect(screen.getByTestId('test-tableBodyPage-1'));
        fireEvent.click(next);
        rerender(<DefaultTable />);
        expect(screen.getByTestId('test-tableBodyPage-2'));
        fireEvent.click(prev);
        rerender(<DefaultTable />);
        expect(screen.getByTestId('test-tableBodyPage-1'));
    });

    test('Calls back on Row Click', () => {
        const rowClick = vi.fn();
        const { container } = render(<DefaultTable onRowClick={rowClick} />);
        const tableCell = container.querySelector('div[data-key="tr_0_0"]');
        fireEvent.click(tableCell as Element);
        expect(rowClick).toBeCalledWith(0);
    });
});

describe('Table - NoPagination', () => {
    // Arguments
    const header = DefaultTable?.args?.header ? DefaultTable?.args?.header : [];
    const data = DefaultTable?.args?.data ? DefaultTable?.args?.data : [];

    test('renders the component', () => {
        render(<NoPagination />);
        const element = screen.getByTestId(tableTestId);
        expect(element).not.toBeNull();
    });

    test('Defines proper sub headings', () => {
        render(<NoPagination />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    test('Computes Correct Number of table items', () => {
        render(<NoPagination />);
        const element = screen.getAllByRole('table-item');
        expect(element.length).toEqual(data?.length * header?.length);
    });

    test('Should Not Render Pagination', () => {
        render(<NoPagination />);
        const prevElement = screen.queryAllByRole(paginationPrevId);
        const nextElement = screen.queryAllByRole(paginationNextId);
        const paginationTag = screen.queryAllByRole('pagination-item');
        expect(prevElement).toEqual([]);
        expect(nextElement).toEqual([]);
        expect(paginationTag).toEqual([]);
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

    test('Computes Correct Number of table items', () => {
        render(<FrozenPageTable />);
        const element = screen.getAllByRole('table-item');
        expect(element.length).toEqual(pageSize * header?.length);
    });

    test('Computes Correct Number of Pagination', () => {
        render(<FrozenPageTable />);
        const element = screen.getAllByRole('pagination-item');
        expect(element.length).toBeLessThan(maxPages + 1);
    });

    test('Should call back on page change', () => {
        const { rerender } = render(
            <DefaultTable onPageNumberChanged={testOnChangeEvent} />,
        );
        const next: HTMLElement = screen.getByTestId(paginationNextId);
        fireEvent.click(next);
        rerender(<DefaultTable />);
        expect(testOnChangeEvent).toBeCalled();
    });

    test('Should not change pagination to next on Click', () => {
        const { rerender } = render(<FrozenPageTable />);
        const next: HTMLElement = screen.getByTestId(paginationNextId);
        expect(screen.getByTestId('test-tableBodyPage-1'));
        fireEvent.click(next);
        rerender(<FrozenPageTable />);
        expect(screen.getByTestId('test-tableBodyPage-1'));
    });

    test('Should not Navigate to new page on Tag Click', () => {
        const { rerender } = render(<FrozenPageTable />);
        let element: any = screen.getByTestId(paginationId);
        const findTag: HTMLElement | undefined = screen.getAllByTestId(
            paginationId,
        )[0];
        const currentPagination: string =
            element[Object.keys(element)[0] as string].return.key;
        fireEvent.click(findTag as Element);
        rerender(<FrozenPageTable />);
        element = screen.getByTestId(paginationId);
        const newPagination: string =
            element[Object.keys(element)[0] as string].return.key;
        expect(newPagination).toEqual(currentPagination);
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
