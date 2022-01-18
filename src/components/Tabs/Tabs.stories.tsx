import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabList from './Tabs';
import Icon from '../Icon/Icon';

export default {
    title: 'UI/Tabs',
    component: TabList,
} as ComponentMeta<typeof TabList>;

const Template: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>{args.children}</TabList>
);

export const TabBar = Template.bind({});
TabBar.args = {
    tabStyle: 'bar',
    children: (
        <>
            <TabList.Tab tabName="Card 1" tabKey={1}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 2" tabKey={2}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 3" tabKey={3}>
                <div>This is Card 3</div>
            </TabList.Tab>
        </>
    ),
};

export const VerticalTabBar = Template.bind({});
VerticalTabBar.args = {
    isVertical: true,
    tabStyle: 'bar',
    children: (
        <>
            <TabList.Tab tabName="Card 1" tabKey={1}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 2" tabKey={2}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 3" tabKey={3}>
                <div>This is Card 3</div>
            </TabList.Tab>
        </>
    ),
};

export const Bulb = Template.bind({});
Bulb.args = {
    tabStyle: 'bulbUnion',
    children: (
        <>
            <TabList.Tab tabName="Card 1" tabKey={1}>
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 2" tabKey={2}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 3" tabKey={3}>
                <div>This is Card 3</div>
            </TabList.Tab>
        </>
    ),
};

export const BulbWithIcon = Template.bind({});
BulbWithIcon.args = {
    tabStyle: 'bulbUnion',
    children: (
        <>
            <TabList.Tab
                tabName={<Icon fill="black" size={16} svg="grid" />}
                tabKey={1}
                lineHeight={0}
            >
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab
                tabName={<Icon fill="black" size={16} svg="list" />}
                lineHeight={0}
                tabKey={2}
            >
                <div>This is Card 2</div>
            </TabList.Tab>
        </>
    ),
};

export const CardwithIconVertical = Template.bind({});
CardwithIconVertical.args = {
    isVertical: true,
    tabStyle: 'bulbUnion',
    children: (
        <>
            <TabList.Tab
                tabName={<Icon fill="black" size={16} svg="grid" />}
                tabKey={1}
                lineHeight={0}
            >
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab
                tabName={<Icon fill="black" size={16} svg="list" />}
                lineHeight={0}
                tabKey={2}
            >
                <div>This is Card 2</div>
            </TabList.Tab>
        </>
    ),
};

export const bulbSperate = Template.bind({});
bulbSperate.args = {
    tabStyle: 'bulbSeperate',
    children: (
        <>
            <TabList.Tab tabName="Card 1" tabKey={1}>
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 2" tabKey={2}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 3" tabKey={3}>
                <div>This is Card 3</div>
            </TabList.Tab>
        </>
    ),
};

export const bulbDisabled = Template.bind({});
bulbDisabled.args = {
    tabStyle: 'bulbUnion',
    children: (
        <>
            <TabList.Tab tabName="Card 1" tabKey={1}>
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab tabName="Disabled" tabKey={2} isDisabled={true}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 2" tabKey={3}>
                <div>This is Card 3</div>
            </TabList.Tab>
        </>
    ),
};
