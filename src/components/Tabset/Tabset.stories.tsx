import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Tabset } from './components';

type TabsetType = typeof Tabset;

export default {
    title: "UI/Tabset",
    component: Tabset,
} as ComponentMeta<TabsetType>;

export const SolidButton = () => {
    return (
        <React.StrictMode>
            <Tabset>
                <Tabset.TabList>
                    <Tabset.Tab>First</Tabset.Tab>
                    <Tabset.Tab>Second</Tabset.Tab>
                    <Tabset.Tab disabled>Third</Tabset.Tab>
                    <Tabset.Tab>Third</Tabset.Tab>
                    <Tabset.Tab disabled>Third</Tabset.Tab>
                </Tabset.TabList>
                
                <Tabset.Panel>First panel content</Tabset.Panel>
                <Tabset.Panel>Second panel content</Tabset.Panel>
                <Tabset.Panel>Third panel content</Tabset.Panel>
                <Tabset.Panel>Third panel content</Tabset.Panel>
                <Tabset.Panel>Third panel content</Tabset.Panel>
            </Tabset>
        </React.StrictMode>
    )
}
