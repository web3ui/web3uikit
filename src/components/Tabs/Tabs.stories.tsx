import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabList from './TabsList';
import Icon from '../Icon/Icon';
import { iconTypes } from '../Icon/collection';
import Button from '../Button/Button';
import { Tab } from '.';

export default {
    title: '3.Layout/Tabs',
    component: TabList,
    subcomponents: { Tab },
} as ComponentMeta<typeof TabList>;

const Template: ComponentStory<typeof TabList> = (args) => <>{args.children}</>;

export const TabBar = Template.bind({});
TabBar.args = {
    defaultActiveKey: 1,
    children: (
        <TabList tabStyle="bar" isVertical={false} defaultActiveKey={1}>
            <Tab
                tabName={
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Icon
                            fill="black"
                            size={22}
                            svg={iconTypes.messageCircle}
                        />{' '}
                        <span style={{ paddingLeft: '4px' }}>Freinds </span>
                    </div>
                }
                tabKey={1}
            >
                <p>Looks like you have no friends :)</p>
            </Tab>
            <Tab
                tabName={
                    <div
                        style={{
                            display: 'flex',
                        }}
                    >
                        <Icon fill="black" size={22} svg={iconTypes.bell} />
                        <span style={{ paddingLeft: '4px' }}>Alerts </span>
                    </div>
                }
                tabKey={2}
            >
                <Button
                    icon={iconTypes.plus}
                    text="Add New Alert"
                    theme="primary"
                    type="button"
                    onClick={() => {}}
                />
            </Tab>
        </TabList>
    ),
};

export const VerticalTabBar = Template.bind({});
VerticalTabBar.args = {
    defaultActiveKey: 1,
    children: (
        <TabList tabStyle="bar" isVertical={true} defaultActiveKey={1}>
            <TabList.Tab tabName="Card 1" tabKey={1}>
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 2" tabKey={2}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 3" tabKey={3}>
                <div>This is Card 3</div>
            </TabList.Tab>
        </TabList>
    ),
};

export const Bulb = Template.bind({});
Bulb.args = {
    defaultActiveKey: 1,
    children: (
        <TabList tabStyle="bulbUnion" defaultActiveKey={1}>
            <TabList.Tab tabName="Card 1" tabKey={1}>
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 2" tabKey={2}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 3" tabKey={3}>
                <div>This is Card 3</div>
            </TabList.Tab>
        </TabList>
    ),
};

export const BulbWithIcon = Template.bind({});
BulbWithIcon.args = {
    defaultActiveKey: 1,
    children: (
        <TabList tabStyle="bulbUnion" defaultActiveKey={1}>
            <TabList.Tab
                tabName={<Icon fill="black" size={16} svg={iconTypes.grid} />}
                tabKey={1}
                lineHeight={0}
            >
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab
                tabName={<Icon fill="black" size={16} svg={iconTypes.list} />}
                lineHeight={0}
                tabKey={2}
            >
                <div>This is Card 2</div>
            </TabList.Tab>
        </TabList>
    ),
};

export const VerticalBulbs = Template.bind({});
VerticalBulbs.args = {
    children: (
        <TabList tabStyle="bulbUnion" isVertical={true}>
            <TabList.Tab
                tabName={<Icon fill="black" size={16} svg={iconTypes.grid} />}
                tabKey={1}
                lineHeight={0}
            >
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab
                tabName={<Icon fill="black" size={16} svg={iconTypes.list} />}
                lineHeight={0}
                tabKey={2}
            >
                <div>This is Card 2</div>
            </TabList.Tab>
        </TabList>
    ),
};

export const Seperated = Template.bind({});
Seperated.args = {
    children: (
        <TabList tabStyle="bulbSeperate">
            <TabList.Tab tabName="Card 1" tabKey={1}>
                <div>This is Card 1</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 2" tabKey={2}>
                <div>This is Card 2</div>
            </TabList.Tab>
            <TabList.Tab tabName="Card 3" tabKey={3}>
                <div>This is Card 3</div>
            </TabList.Tab>
        </TabList>
    ),
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: (
        <>
            <TabList tabStyle="bulbUnion">
                <TabList.Tab tabName="Card 1" tabKey={1}>
                    <div>This is Card 1</div>
                </TabList.Tab>
                <TabList.Tab tabName="Disabled" tabKey={2} isDisabled={true}>
                    <div>This is Card 2</div>
                </TabList.Tab>
                <TabList.Tab tabName="Card 2" tabKey={3}>
                    <div>This is Card 3</div>
                </TabList.Tab>
            </TabList>
        </>
    ),
};
