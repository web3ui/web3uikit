import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from './Tabs';

type TabsType = typeof Tabs;

export default {
    title: "UI/Tabs",
    component: Tabs,
} as ComponentMeta<TabsType>;

const Template: ComponentStory<TabsType> = () => {
    return (
        <React.StrictMode>
            <Tabs initialActiveTab="a">
                <Tabs.TabList>
                    <Tabs.Tab name="a">First</Tabs.Tab>
                    <Tabs.Tab name="b">Second</Tabs.Tab>
                    <Tabs.Tab name="c">Third</Tabs.Tab>
                </Tabs.TabList>

                <Tabs.Panel name="a">First panel content</Tabs.Panel>
                <Tabs.Panel name="b">Second panel content</Tabs.Panel>
                <Tabs.Panel name="c">Third panel content</Tabs.Panel>
            </Tabs>
        </React.StrictMode>
    )
}

export const BasicTabs = Template.bind({});