import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabset } from './components';

type TabsetType = typeof Tabset;

export default {
    title: "UI/Tabset",
    component: Tabset,
} as ComponentMeta<TabsetType>;

const Template: ComponentStory<TabsetType> = () => {
    return (
        <React.StrictMode>
            <Tabset>
                <Tabset.TabList>
                    <Tabset.Tab>First</Tabset.Tab>
                    <Tabset.Tab>Second</Tabset.Tab>
                    <Tabset.Tab>Third</Tabset.Tab>
                </Tabset.TabList>
                
                <Tabset.Panels>
                    <Tabset.Panel>First panel content</Tabset.Panel>
                    <Tabset.Panel>Second panel content</Tabset.Panel>
                    <Tabset.Panel>Third panel content</Tabset.Panel>
                </Tabset.Panels>
            </Tabset>
        </React.StrictMode>
    )
}

export const BasicTabs = Template.bind({});