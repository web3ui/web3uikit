import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
import React from 'react';
import * as stories from './Row.stories';

const {
    RowComponent,
    CustomBreakpoints,
    JustifyContent,
    AlignStyles,
    OrderedColumns,
} = composeStories(stories);

const testRowId = 'row';

type TestStoryProps = {
    name: string;
    Component: any;
    checkStyles?: boolean;
    checkRoles?: boolean;
};

function testStory({
    name,
    Component,
    checkStyles = true,
    checkRoles = true,
}: TestStoryProps) {
    return test(name, () => {
        const children = Component?.args?.children as any;
        render(<Component />);

        // renders the component
        const row = screen.getAllByTestId(testRowId) as HTMLDivElement[] | null;
        expect(row).not.toBeNull();

        if (checkStyles) {
            // renders row with correct styles
            const style = row && getComputedStyle(row?.[0]);

            expect(style?.alignItems).toEqual('center');
            expect(style?.justifyContent).toEqual('center');
        }

        if (checkRoles) {
            // renders row with correct children
            const colsElement = screen.getAllByRole('col');
            const cols = children.props?.children;

            expect(cols.length).toEqual(colsElement?.length);
        }
    });
}

const data = [
    {
        name: 'Default Row',
        Component: RowComponent,
    },
    {
        name: 'Custom Breakpoints',
        Component: CustomBreakpoints,
    },
    {
        name: 'Justify Content',
        Component: JustifyContent,
        checkStyles: false,
        checkRoles: false,
    },
    {
        name: 'Align Styles',
        Component: AlignStyles,
        checkStyles: false,
        checkRoles: false,
    },
    {
        name: 'Ordered Columns',
        Component: OrderedColumns,
        checkStyles: false,
    },
];

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    testStory({ ...element });
}
