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

const children = (
    <>
        <Grid type="item" xs={12} sm={6} md={4} lg={3}>
            <DivStyledBox>Box 1</DivStyledBox>
        </Grid>
        <Grid type="item" xs={12} sm={6} md={4} lg={3}>
            <DivStyledBox>Box 2</DivStyledBox>
        </Grid>
        <Grid type="item" xs={12} sm={6} md={4} lg={3}>
            <DivStyledBox>Box 3</DivStyledBox>
        </Grid>
        <Grid type="item" xs={12} sm={6} md={4} lg={3}>
            <DivStyledBox>Box 4</DivStyledBox>
        </Grid>
    </>
);

export const Basic = Template.bind({});
Basic.args = {
    type: 'container',
    spacing: 12,
    _isRulerVisible: false,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    children: children,
    style: { height: '400px' },
};

export const BasicWithRuler = Template.bind({});
BasicWithRuler.args = {
    type: 'container',
    spacing: 2,
    _isRulerVisible: true,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    children: children,
};
