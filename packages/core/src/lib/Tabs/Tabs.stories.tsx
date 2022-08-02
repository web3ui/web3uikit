import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabList from './TabsList';
import { MessageCircle, Bell, List, Grid, Plus } from '@web3uikit/icons';
import Button from '../Button/Button';
import { Tab } from '.';

export default {
    title: '3.Layout/Tabs',
    component: TabList,
    subcomponents: { Tab },
} as ComponentMeta<typeof TabList>;

<List fill="black" fontSize={16} />;

export const TabBar: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
        <Tab
            tabName={
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <MessageCircle fill="black" fontSize={22} />{' '}
                    <span style={{ paddingLeft: '4px' }}>Friends </span>
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
                    <Bell fill="black" fontSize={22} />
                    <span style={{ paddingLeft: '4px' }}>Alerts </span>
                </div>
            }
            tabKey={2}
        >
            <Button
                icon={<Plus fontSize={24} />}
                text="Add New Alert"
                theme="primary"
                type="button"
                onClick={() => {}}
            />
        </Tab>
    </TabList>
);
TabBar.args = {
    defaultActiveKey: 1,
    tabStyle: 'bar',
    isVertical: false,
};

export const VerticalTabBar: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
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
);
VerticalTabBar.args = {
    defaultActiveKey: 1,
    tabStyle: 'bar',
    isVertical: true,
};

export const Bulb: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
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
);
Bulb.args = {
    defaultActiveKey: 1,
    tabStyle: 'bulbUnion',
};

export const BulbWithIcon: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
        <TabList.Tab
            tabName={<Grid fill="black" fontSize={16} />}
            tabKey={1}
            lineHeight={0}
        >
            <div>This is Card 1</div>
        </TabList.Tab>
        <TabList.Tab
            tabName={<List fill="black" fontSize={16} />}
            lineHeight={0}
            tabKey={2}
        >
            <div>This is Card 2</div>
        </TabList.Tab>
    </TabList>
);
BulbWithIcon.args = {
    defaultActiveKey: 1,
    tabStyle: 'bulbUnion',
};

export const VerticalBulbs: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
        <TabList.Tab
            tabName={<Grid fill="black" fontSize={16} />}
            tabKey={1}
            lineHeight={0}
        >
            <div>This is Card 1</div>
        </TabList.Tab>
        <TabList.Tab
            tabName={<List fill="black" fontSize={16} />}
            lineHeight={0}
            tabKey={2}
        >
            <div>This is Card 2</div>
        </TabList.Tab>
    </TabList>
);

VerticalBulbs.args = {
    tabStyle: 'bulbSeperate',
    isVertical: true,
};

export const Separated: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
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
);

Separated.args = {
    tabStyle: 'bulbSeperate',
};

export const Disabled: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
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
);
Disabled.args = {
    tabStyle: 'bulbUnion',
};

export const BulbCustomHeightWidth: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
        <TabList.Tab tabName="Card 1" tabKey={1} lineHeight={30}>
            <div>This is Card 1</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 2" tabKey={2} lineHeight={30}>
            <div>This is Card 2</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 3" tabKey={3} lineHeight={30}>
            <div>This is Card 3</div>
        </TabList.Tab>
    </TabList>
);
BulbCustomHeightWidth.args = {
    tabStyle: 'bulbUnion',
    isWidthAuto: true,
};

export const BulbOverflow: ComponentStory<typeof TabList> = (args) => (
    <TabList {...args}>
        <TabList.Tab tabName="Card 1" tabKey={1}>
            <div>This is Card 1</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 2" tabKey={2}>
            <div>This is Card 2</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 3" tabKey={3}>
            <div>This is Card 3</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 4" tabKey={4}>
            <div>This is Card 4</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 5" tabKey={5}>
            <div>This is Card 5</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 6" tabKey={6}>
            <div>This is Card 6</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 7" tabKey={7}>
            <div>This is Card 7</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 8" tabKey={8}>
            <div>This is Card 8</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 9" tabKey={9}>
            <div>This is Card 9</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 10" tabKey={10}>
            <div>This is Card 10</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 11" tabKey={11}>
            <div>This is Card 11</div>
        </TabList.Tab>
        <TabList.Tab tabName="Card 12" tabKey={12}>
            <div>This is Card 12</div>
        </TabList.Tab>
    </TabList>
);
BulbOverflow.args = {
    isWidthAuto: true,
    tabStyle: 'bulbSeperate',
};
