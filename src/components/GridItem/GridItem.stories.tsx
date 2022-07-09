// importing boilerplate stuff for Storybook
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// importing your new component
import GridItem from './GridItem';
import Grid from '../Grid/Grid';

// title: group / name in Storybook
// component: your new component
// argTypes: onClick is a 'Storybook Event' to simulate clicks
export default {
    title: '3.Layout/GridItem',
    component: GridItem,
    argTypes: {},
} as ComponentMeta<typeof GridItem>;

// another boilerplate to set up your Storybook template with your new component
const Template: ComponentStory<typeof GridItem> = (args) => (
    <Grid
        gridColumns={3}
        gridRows={3}
        responsive={false}
        responsiveProps={{
            minWidth: 50,
            minHeight: 50,
            maxWidth: '1fr',
            maxHeight: '1fr',
            responsiveType: 'auto-fit',
            enableAuto: false,
        }}
        disableTestChildren={true}
    >
        <GridItem {...args} />
    </Grid>
);

// ////////////////////////////////////////////////////////////////////////////
// NOTE please only include the min props needed for each render
// this means the next dev using 'get code' in Storybook will not get confused
// ////////////////////////////////////////////////////////////////////////////

// Story 1 Default
export const Sample = Template.bind({});
Sample.args = {
    gridArea: [2, 2, 3, 3],
    children: [
        <div
            style={{
                minWidth: '100%',
                minHeight: '100px',
                backgroundColor: '#1973b8',
            }}
        ></div>,
    ],
};
