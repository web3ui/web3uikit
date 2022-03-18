import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Table.stories';
import { render, fireEvent, screen } from '@testing-library/react';

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

const testOnChangeEvent = jest.fn();

describe('Table - DefaultTable', () => {
    // Arguments
    const header = DefaultTable?.args?.header ? DefaultTable?.args?.header : [];
    const pageSize = DefaultTable?.args?.pageSize
        ? DefaultTable?.args?.pageSize
        : 0;
    const maxPages = DefaultTable?.args?.maxPages
        ? DefaultTable?.args?.maxPages
        : 0;

    it('renders the component', () => {
        render(<DefaultTable />);
        const element = screen.getByTestId('test-table-parent');
        expect(element).not.toBeNull();
    });

    it('Defines proper sub headings', () => {
        render(<DefaultTable />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    it('Computes Correct Number of table items', () => {
        render(<DefaultTable />);
        const element = screen.getAllByRole('table-item');
        expect(element.length).toEqual(pageSize * header?.length);
    });

    it('Computes Correct Number of Pagination', () => {
        render(<DefaultTable />);
        const element = screen.getAllByRole('pagination-item');
        expect(element.length).toBeLessThan(maxPages + 1);
    });

    it('Always one pagination visible', () => {
        render(<DefaultTable />);
        const element = screen.getByTestId('pagination_true');
        expect(element).toBeDefined();
    });

    it('Should call back on page change', () => {
        const { rerender } = render(
            <DefaultTable onPageNumberChanged={testOnChangeEvent} />,
        );
        const next: HTMLElement = screen.getByTestId('pagination-next');
        fireEvent.click(next);
        rerender(<DefaultTable />);
        expect(testOnChangeEvent).toBeCalled();
    });

    it('Should change pagination to next on Click', () => {
        const { rerender } = render(<DefaultTable />);
        let element: any = screen.getByTestId('pagination_true');
        const next: HTMLElement = screen.getByTestId('pagination-next');
        const keys: string[] = [...Object.keys(element)];
        const firstPaginationKey: string = `${element[keys[0]].return.key}`;
        fireEvent.click(next);
        rerender(<DefaultTable />);
        element = screen.getByTestId('pagination_true');
        const Skeys: any = [...Object.keys(element)];
        const SeccondPaginationKey: string = `${
            (element[Skeys[0]] as any).return?.key
        }`;
        const getNumber = (state: string): number => {
            return parseInt(state.charAt(state.length - 1));
        };
        expect(getNumber(firstPaginationKey) + 1).toEqual(
            getNumber(SeccondPaginationKey),
        );
    });

    it('Should Disable Previous on Render', () => {
        const { rerender } = render(<DefaultTable />);
        let element = screen.getByTestId('pagination_true')
            ? screen.getByTestId('pagination_true')
            : ({} as any);
        const next: HTMLElement = screen.getByTestId('pagination-prev');
        const keys: string[] = [...Object.keys(element)];
        const firstPaginationKey: string = `${
            (element[keys[0]] as any).return.key
        }`;
        fireEvent.click(next);
        rerender(<DefaultTable />);
        element = screen.getByTestId('pagination_true');
        const Skeys = Object.keys(element);
        const SeccondPaginationKey: string = element[Skeys[0]].return.key;
        const getNumber = (state: string): number => {
            return parseInt(state.charAt(state.length - 1));
        };
        expect(getNumber(firstPaginationKey)).toEqual(
            getNumber(SeccondPaginationKey),
        );
    });

    it('Should Naviagte to new page on Tag Click', () => {
        const { rerender } = render(<DefaultTable />);
        let element = screen.getByTestId('pagination_true') as any;
        const findTag: HTMLElement =
            screen.getAllByTestId('pagination_false')[0];
        const currentPagination: string =
            element[Object.keys(element)[0]].return.key;
        fireEvent.click(findTag);
        rerender(<DefaultTable />);
        element = screen.getByTestId('pagination_true');
        const newPagination: string =
            element[Object.keys(element)[0]].return.key;
        expect(newPagination).not.toEqual(currentPagination);
    });
});

describe('Table - NoPagination', () => {
    // Arguments
    const header = DefaultTable?.args?.header ? DefaultTable?.args?.header : [];
    const data = DefaultTable?.args?.data ? DefaultTable?.args?.data : [];

    it('renders the component', () => {
        render(<NoPagination />);
        const element = screen.getByTestId('test-table-parent');
        expect(element).not.toBeNull();
    });

    it('Defines proper sub headings', () => {
        render(<NoPagination />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    it('Computes Correct Number of table items', () => {
        render(<NoPagination />);
        const element = screen.getAllByRole('table-item');
        expect(element.length).toEqual(data?.length * header?.length);
    });

    it('Should Not Render Pagination', () => {
        render(<NoPagination />);
        const prevElement = screen.queryAllByRole('pagination-prev');
        const nextElement = screen.queryAllByRole('pagination-next');
        const paginationTag = screen.queryAllByRole('pagination-item');
        expect(prevElement).toEqual([]);
        expect(nextElement).toEqual([]);
        expect(paginationTag).toEqual([]);
    });
});

describe('Table - NoData', () => {
    // Arguments
    const header = DefaultTable?.args?.header;

    it('renders the component', () => {
        render(<NoData />);
        const element = screen.getByTestId('test-table-parent');
        expect(element).not.toBeNull();
    });

    it('Defines proper sub headings', () => {
        render(<NoData />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    it('Should render no data', () => {
        render(<NoData />);
        const element = screen.queryAllByText('No Data');
        expect(element.length).toEqual(1);
    });

    it('Should not have any items', () => {
        render(<NoData />);
        const element = screen.queryAllByRole('table-item');
        expect(element.length).toEqual(0);
    });

    it('Should Not Render Pagination', () => {
        render(<NoData />);
        const prevElement = screen.queryAllByRole('pagination-prev');
        const nextElement = screen.queryAllByRole('pagination-next');
        const paginationTag = screen.queryAllByRole('pagination-item');
        expect(prevElement).toEqual([]);
        expect(nextElement).toEqual([]);
        expect(paginationTag).toEqual([]);
    });
});

describe('Table - NoDataCustomComponent', () => {
    // Arguments
    const header = DefaultTable?.args?.header;

    it('renders the component', () => {
        render(<NoDataCustomComponent />);
        const element = screen.getByTestId('test-table-parent');
        expect(element).not.toBeNull();
    });

    it('Defines proper sub headings', () => {
        render(<NoDataCustomComponent />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    it('Should not have any items', () => {
        render(<NoDataCustomComponent />);
        const element = screen.queryAllByRole('table-item');
        expect(element.length).toEqual(0);
    });

    it('Should Not Render Pagination', () => {
        render(<NoDataCustomComponent />);
        const prevElement = screen.queryAllByRole('pagination-prev');
        const nextElement = screen.queryAllByRole('pagination-next');
        const paginationTag = screen.queryAllByRole('pagination-item');
        expect(prevElement).toEqual([]);
        expect(nextElement).toEqual([]);
        expect(paginationTag).toEqual([]);
    });
});

describe('Table - NoDataCustomText', () => {
    // Arguments
    const header = DefaultTable?.args?.header;
    const text = DefaultTable?.args?.customNoDataText
        ? DefaultTable?.args?.customNoDataText
        : '';

    it('renders the component', () => {
        render(<NoDataCustomText />);
        const element = screen.getByTestId('test-table-parent');
        expect(element).not.toBeNull();
    });

    it('Defines proper sub headings', () => {
        render(<NoDataCustomText />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    it('Should render no data', () => {
        render(<NoDataCustomText />);
        const element = screen.queryAllByText(text);
        expect(element).toBeDefined();
    });

    it('Should not have any items', () => {
        render(<NoDataCustomText />);
        const element = screen.queryAllByRole('table-item');
        expect(element.length).toEqual(0);
    });

    it('Should Not Render Pagination', () => {
        render(<NoDataCustomText />);
        const prevElement = screen.queryAllByRole('pagination-prev');
        const nextElement = screen.queryAllByRole('pagination-next');
        const paginationTag = screen.queryAllByRole('pagination-item');
        expect(prevElement).toEqual([]);
        expect(nextElement).toEqual([]);
        expect(paginationTag).toEqual([]);
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

    it('renders the component', () => {
        render(<FrozenPageTable />);
        const element = screen.getByTestId('test-table-parent');
        expect(element).not.toBeNull();
    });

    it('Defines proper sub headings', () => {
        render(<FrozenPageTable />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    it('Computes Correct Number of table items', () => {
        render(<FrozenPageTable />);
        const element = screen.getAllByRole('table-item');
        expect(element.length).toEqual(pageSize * header?.length);
    });

    it('Computes Correct Number of Pagination', () => {
        render(<FrozenPageTable />);
        const element = screen.getAllByRole('pagination-item');
        expect(element.length).toBeLessThan(maxPages + 1);
    });

    it('Should call back on page change', () => {
        const { rerender } = render(
            <DefaultTable onPageNumberChanged={testOnChangeEvent} />,
        );
        const next: HTMLElement = screen.getByTestId('pagination-next');
        fireEvent.click(next);
        rerender(<DefaultTable />);
        expect(testOnChangeEvent).toBeCalled();
    });

    it('Should not change pagination to next on Click', () => {
        const { rerender } = render(<FrozenPageTable />);
        let element: any = screen.getByTestId('pagination_true');
        const next: HTMLElement = screen.getByTestId('pagination-next');
        const keys = Object.keys(element);
        const firstPaginationKey: string = element[keys[0]].return.key;
        fireEvent.click(next);
        rerender(<FrozenPageTable />);
        element = screen.getByTestId('pagination_true');
        const Skeys = Object.keys(element);
        const SeccondPaginationKey: string = element[Skeys[0]].return.key;
        const getNumber = (state: string): number => {
            return parseInt(state.charAt(state.length - 1));
        };
        expect(getNumber(firstPaginationKey)).toEqual(
            getNumber(SeccondPaginationKey),
        );
    });

    it('Should not Naviagte to new page on Tag Click', () => {
        const { rerender } = render(<FrozenPageTable />);
        let element: any = screen.getByTestId('pagination_true');
        const findTag: HTMLElement =
            screen.getAllByTestId('pagination_false')[0];
        const currentPagination: string =
            element[Object.keys(element)[0]].return.key;
        fireEvent.click(findTag);
        rerender(<FrozenPageTable />);
        element = screen.getByTestId('pagination_true');
        const newPagination: string =
            element[Object.keys(element)[0]].return.key;
        expect(newPagination).toEqual(currentPagination);
    });
});

describe('Table - FrozenPageOutOfRange', () => {
    //Arguments
    const header = DefaultTable?.args?.header;

    it('renders the component', () => {
        render(<OutOfRangeFrozenTable />);
        const element = screen.getByTestId('test-table-parent');
        expect(element).not.toBeNull();
    });

    it('Defines proper sub headings', () => {
        render(<OutOfRangeFrozenTable />);
        const element = screen.getAllByRole('table-header');
        expect(element.length).toEqual(header?.length);
    });

    it('Should render no data', () => {
        render(<OutOfRangeFrozenTable />);
        const element = screen.queryAllByText('No Data');
        expect(element.length).toEqual(1);
    });

    it('Should not have any items', () => {
        render(<OutOfRangeFrozenTable />);
        const element = screen.queryAllByRole('table-item');
        expect(element.length).toEqual(0);
    });

    it('Should Still Render Pagination', () => {
        render(<OutOfRangeFrozenTable />);
        const prevElement = screen.queryAllByTestId('pagination-prev');
        const nextElement = screen.queryAllByTestId('pagination-next');
        const paginationTag = screen.queryAllByRole('pagination-item');
        expect(prevElement).not.toEqual([]);
        expect(nextElement).not.toEqual([]);
        expect(paginationTag).not.toEqual([]);
    });
});

describe('Table- Table Loader', () => {
    it('Should Render Loader', () => {
        render(<LoadingTable />);
        const element = screen.getByRole('spinner');
        expect(element).toBeDefined();
    });
});
