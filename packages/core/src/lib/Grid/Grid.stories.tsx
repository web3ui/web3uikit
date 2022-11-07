import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './Grid';
import styles from './Grid.styles';

const { DivStyledBox } = styles;

export default {
    title: '3.Layout/Grid',
    component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'container',
    spacing: 'sm',
    isRulerVisible: true,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    children: (
        <>
            <Grid type="item" xs={12} sm={6} md={4} lg={3}>
                <DivStyledBox>Box 1</DivStyledBox>
            </Grid>
            <Grid type="item" xs={12} sm={6} md={4} lg={3}>
                <DivStyledBox>Box 12</DivStyledBox>
            </Grid>
            <Grid type="item" xs={12} sm={6} md={4} lg={3}>
                <DivStyledBox>Box 3</DivStyledBox>
            </Grid>
            <Grid type="item" xs={12} sm={6} md={4} lg={3}>
                <DivStyledBox>Box 4</DivStyledBox>
            </Grid>
        </>
    ),
};
