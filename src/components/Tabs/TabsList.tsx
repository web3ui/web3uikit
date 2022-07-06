// Importing React and its awesome hooks
import React, { useState, useEffect, useContext } from 'react';
import {
    BulbTab,
    StyledTab,
    StyledTabBar,
    StyledTabContent,
    StyleTabBarParent,
} from './Tabs.styles';
import { ITabList, ITab, TableStyles } from './types';

// Helper Inteerfaces for typing
interface IContext {
    selectedKey: number;
    setSelectedKey: any;
    tabStyle: TableStyles;
}
interface IElement {
    [key: string]: any;
}
// Context for communinicting with tabs
const TabContext = React.createContext({
    selectedKey: 0,
    setSelectedKey: null,
    tabStyle: 'bar',
} as IContext);

// Helper function for parsing tab components
const getTabs = (children: JSX.Element) => {
    const data: IElement = {};
    React.Children.forEach(children, (element: IElement) => {
        if (element.type == Tab) {
            data[element.props.tabKey] = element.props.children;
        }
    });
    return data;
};

function TabList({
    children = <></>,
    defaultActiveKey = 1,
    isVertical = false,
    onChange,
    tabStyle = 'bar',
    ...props
}: ITabList): JSX.Element {
    const [tabChildren, setTabChildren] = useState<any>(
        getTabs(children as any),
    );
    const [selectedKey, setSelectedKey] = useState(defaultActiveKey);
    useEffect(() => {
        if (onChange) {
            onChange(selectedKey);
        }
    }, [selectedKey]);
    useEffect(() => {
        setSelectedKey(defaultActiveKey);
    }, [defaultActiveKey]);
    useEffect(() => {
        setTabChildren(getTabs(children as any));
    }, [children]);
    return (
        <TabContext.Provider
            value={{
                selectedKey,
                setSelectedKey,
                tabStyle,
            }}
        >
            <StyleTabBarParent
                isVertical={isVertical}
                data-testid="test-tab-list"
                {...props}
            >
                <StyledTabBar
                    haveBackground={tabStyle == 'bulbUnion'}
                    isVertical={isVertical}
                >
                    {children}
                </StyledTabBar>
                <StyledTabContent isVertical={isVertical}>
                    {tabChildren[selectedKey]}
                </StyledTabContent>
            </StyleTabBarParent>
        </TabContext.Provider>
    );
}

export function Tab({
    activeState,
    isDisabled = false,
    lineHeight = 24,
    tabKey,
    tabName,
}: ITab) {
    const { selectedKey, setSelectedKey, tabStyle } = useContext(TabContext);
    const handleTabClick = (key: number) => {
        if (isDisabled) {
            return;
        }
        setSelectedKey(key);
    };
    const RenderBulbTab = () => {
        return (
            <BulbTab
                data-testid={`test-tab-item-${tabKey}_${
                    activeState ? activeState : tabKey == selectedKey
                }`}
                hasMargin={tabStyle == 'bulbSeperate'}
                isActive={activeState ? activeState : tabKey == selectedKey}
                isDisabled={isDisabled}
                key={tabKey}
                lineHeight={lineHeight}
                onClick={() => {
                    handleTabClick(tabKey);
                }}
                role="tab-Item"
            >
                <span>{tabName}</span>
            </BulbTab>
        );
    };
    const RenderBarTab = () => {
        return (
            <StyledTab
                data-testid={`test-tab-item-${tabKey}_${
                    activeState ? activeState : tabKey == selectedKey
                }`}
                isActive={activeState ? activeState : tabKey == selectedKey}
                isDisabled={isDisabled}
                key={tabKey}
                lineHeight={lineHeight}
                onClick={() => {
                    handleTabClick(tabKey);
                }}
                role="tab-Item"
            >
                <span data-testid={`test-tab-disabled-${isDisabled}-${tabKey}`}>
                    {tabName}
                </span>
            </StyledTab>
        );
    };

    return (
        <span data-testid="test-tabs">
            {tabStyle == 'bar' ? <RenderBarTab /> : <RenderBulbTab />}
        </span>
    );
}
TabList.Tab = Tab;

export default TabList;
