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
const TabContenxt = React.createContext({
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
        <TabContenxt.Provider
            value={{
                selectedKey,
                setSelectedKey,
                tabStyle,
            }}
        >
            <StyleTabBarParent
                isVertical={isVertical}
                data-testid="tabs_list_parent"
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
        </TabContenxt.Provider>
    );
}

export function Tab({
    activeState,
    isDisabled = false,
    lineHeight = 24,
    tabKey,
    tabName,
}: ITab) {
    const { selectedKey, setSelectedKey, tabStyle } = useContext(TabContenxt);
    const handleTabClick = (key: number) => {
        if (isDisabled) {
            return;
        }
        setSelectedKey(key);
    };
    const RenderBulbTab = () => {
        return (
            <BulbTab
                role="tab-Item"
                data-testid={`tab_item_${tabKey}_${
                    activeState ? activeState : tabKey == selectedKey
                }`}
                key={tabKey}
                isActive={activeState ? activeState : tabKey == selectedKey}
                onClick={() => {
                    handleTabClick(tabKey);
                }}
                hasMargin={tabStyle == 'bulbSeperate'}
                lineHeight={lineHeight}
                isDisabled={isDisabled}
            >
                <span>{tabName}</span>
            </BulbTab>
        );
    };
    const RenderBarTab = () => {
        return (
            <StyledTab
                role="tab-Item"
                data-testid={`tab_item_${tabKey}_${
                    activeState ? activeState : tabKey == selectedKey
                }`}
                key={tabKey}
                isActive={activeState ? activeState : tabKey == selectedKey}
                onClick={() => {
                    handleTabClick(tabKey);
                }}
                lineHeight={lineHeight}
                isDisabled={isDisabled}
            >
                <span data-testid={`disabled_${isDisabled}_${tabKey}`}>
                    {tabName}
                </span>
            </StyledTab>
        );
    };

    return <>{tabStyle == 'bar' ? <RenderBarTab /> : <RenderBulbTab />}</>;
}
TabList.Tab = Tab;

export default TabList;
