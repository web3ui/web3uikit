// importing boilerplate stuff for Storybook
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// importing your new component
import Grid from './Grid';
import GridItem from '../GridItem/GridItem';
import { CryptoCards } from '../CryptoCards';

// title: group / name in Storybook
// component: your new component
// argTypes: onClick is a 'Storybook Event' to simulate clicks
export default {
    title: '3.Layout/Grid Example Layouts',
    component: Grid,
    argTypes: {},
} as ComponentMeta<typeof Grid>;

// another boilerplate to set up your Storybook template with your new component
const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

// ////////////////////////////////////////////////////////////////////////////
// NOTE please only include the min props needed for each render
// this means the next dev using 'get code' in Storybook will not get confused
// ////////////////////////////////////////////////////////////////////////////

// Story 1 Default
export const ResponsiveCardGrid = Template.bind({});
ResponsiveCardGrid.args = {
    responsive: true,
    responsiveProps: {
        minWidth: 240,
        maxWidth: '1fr',
        minHeight: 100,
        maxHeight: '1fr',
        responsiveType: 'auto-fit',
        enableAuto: false,
    },
    gridColumns: 3,
    gridRows: 3,
    gridColumnGap: 8,
    gridRowGap: 8,
    disableTestChildren: true,
    drawCustomChildrenForTesting: false,
    customChildPropsForTesting: [],
    children: [
        <GridItem
        // gridArea={[1, 1, 6, 2]}
        >
            <div>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(215, 38, 243, 0.6) 42.57%, rgba(252, 84, 255, 0.336) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #AB42CB 41.37%, #45FFFF 98.29%)"
                    btnText="View Endpoints"
                    chain="ethereum"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </div>
        </GridItem>,
        <GridItem
        // gridArea={[1, 2, 6, 3]}
        >
            <div>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)"
                    btnText="View Endpoints"
                    chain="binance"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </div>
        </GridItem>,
        <GridItem
        // gridArea={[1, 1, 2, 2]}
        >
            <div>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(103, 58, 194, 0.6) 14.91%, rgba(122, 74, 221, 0.498) 44.27%, rgba(170, 129, 255, 0.222) 45.98%, rgba(209, 103, 255, 0.03) 55.76%), linear-gradient(160.75deg, #7A4ADD 41.37%, #D57BFF 98.29%)"
                    btnText="View Endpoints"
                    chain="polygon"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </div>
        </GridItem>,
        <GridItem
        // gridArea={[1, 4, 6, 5]}
        >
            <div>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(119, 0, 1, 0.5) 14.91%, rgba(216, 43, 44, 0.5) 43.21%, rgba(255, 130, 130, 0.345) 44.27%, rgba(220, 96, 97, 0.185) 55.76%), linear-gradient(151.07deg, #8F0E0F 33.25%, #FA4A4B 98.24%)"
                    btnText="View Endpoints"
                    chain="avalanche"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </div>
        </GridItem>,
        <GridItem
        // gridArea={[1, 5, 6, 6]}
        >
            <div>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(117, 183, 251, 0.531738) 14.91%, rgba(10, 41, 255, 0.6) 42.57%, rgba(25, 105, 255, 0.336) 45.98%, rgba(25, 105, 255, 0.03) 55.76%), linear-gradient(160.75deg, #071AFF 41.37%, #45D4FF 98.29%)"
                    btnText="View Endpoints"
                    chain="fantom"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </div>
        </GridItem>,
        <GridItem
        // gridArea={[1, 6, 6, 7]}
        >
            <div>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(60, 87, 140, 0.5) 14.91%, rgba(70, 86, 169, 0.5) 43.21%, rgba(125, 150, 217, 0.345) 44.27%, rgba(129, 161, 225, 0.185) 55.76%), linear-gradient(151.07deg, #141659 33.25%, #4152A7 98.24%)"
                    btnText="View Endpoints"
                    chain="arbitrum"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </div>
        </GridItem>,
    ],
};

// Story 2 GridWithinGrid
export const GridWithinGrid = Template.bind({});
GridWithinGrid.args = {
    responsive: false,
    responsiveProps: {
        minWidth: 200,
        maxWidth: '1fr',
        minHeight: 50,
        maxHeight: '1fr',
        responsiveType: 'auto-fit',
        enableAuto: false,
    },
    gridColumns: 2,
    gridRows: 2,
    gridColumnGap: 0,
    gridRowGap: 0,
    disableTestChildren: true,
    drawCustomChildrenForTesting: false,
    customChildPropsForTesting: [[1, 1, 2, 2]],
    children: [
        <GridItem
        // gridArea={[1, 1, 6, 2]}
        >
            <Grid
                responsive={true}
                responsiveProps={{
                    minWidth: 50,
                    maxWidth: '1fr',
                    minHeight: 50,
                    maxHeight: '1fr',
                    responsiveType: 'auto-fit',
                    enableAuto: false,
                }}
                gridColumns={2}
                gridRows={2}
                gridColumnGap={0}
                gridRowGap={0}
                disableTestChildren={true}
                drawCustomChildrenForTesting={false}
                customChildPropsForTesting={[[1, 1, 2, 2]]}
            >
                <div
                    style={{
                        height: '50px',
                        // width: '100px',
                        backgroundColor: '#2bff00',
                    }}
                ></div>
                <div
                    style={{
                        height: '50px',
                        // width: '100px',
                        backgroundColor: '#f2ff00',
                    }}
                ></div>
                <div
                    style={{
                        height: '50px',
                        // width: '100px',
                        backgroundColor: '#de8a37',
                    }}
                ></div>
                <div
                    style={{
                        height: '50px',
                        // width: '100px',
                        backgroundColor: '#bf00ff',
                    }}
                ></div>
                <div
                    style={{
                        height: '50px',
                        // width: '100px',
                        backgroundColor: '#00ffd5',
                    }}
                ></div>
                <div
                    style={{
                        height: '50px',
                        // width: '100px',
                        backgroundColor: '#009dff',
                    }}
                ></div>
            </Grid>
        </GridItem>,
        <GridItem>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#c4c4c4',
                }}
            ></div>
        </GridItem>,
        <GridItem>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#a9aca8',
                }}
            ></div>
        </GridItem>,
        <GridItem>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#919490',
                }}
            ></div>
        </GridItem>,
    ],
};

// Story 3 GridPlayground
export const GridPlayground = Template.bind({});
GridPlayground.args = {
    drawCustomChildrenForTesting: false,
    customChildPropsForTesting: [[1, 1, 2, 2]],
    disableTestChildren: false,
    gridColumns: 5,
    gridRows: 5,
    gridColumnGap: 8,
    gridRowGap: 8,
    responsive: false,
    responsiveProps: {
        minWidth: 200,
        maxWidth: '1fr',
        minHeight: 50,
        maxHeight: '1fr',
        responsiveType: 'auto-fit',
        enableAuto: false,
    },
};
