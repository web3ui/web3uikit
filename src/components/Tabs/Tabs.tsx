// Importing React and its awesome hooks
import React, { useState, useEffect, useContext } from 'react';
import {
    BulbTab,
    StyledTab,
    StyledTabBar,
    StyledTabContent,
    StyleTabBarParent,
} from './NewComp.styles';
import { ITabList } from './types';

const TabContenxt = React.createContext();

const getTabs = (children) => {
    const data = {};
    React.Children.forEach(children.props.children, (element) => {
        if (element.type == Tab) {
            data[element.props.tabKey] = element.props.children;
            // data.push(element);
        }
    });
    return data;
};

function TabList({
    children,
    tabStyle = 'bar',
    defaultActiveKey = 1,
    isVertical = false,
    onChange,
}: ITabList): JSX.Element {
    const [tabs, setTabs] = useState([]);
    const [tabChildren, setTabChildren] = useState(getTabs(children));
    const [selectedKey, setSelectedKey] = useState(defaultActiveKey);
    useEffect(() => {
        if (onChange) {
            onChange(selectedKey);
        }
    }, [selectedKey]);
    useEffect(() => {
        setSelectedKey(defaultActiveKey);
    }, [defaultActiveKey]);
    return (
        <TabContenxt.Provider
            value={{
                selectedKey,
                setSelectedKey,
                tabStyle,
            }}
        >
            <StyleTabBarParent isVertical={isVertical}>
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

function Tab({
    tabName,
    tabKey,
    activeState,
    lineHeight = 24,
    isDisabled = false,
}: ITab) {
    const { selectedKey, setSelectedKey, tabStyle } = useContext(TabContenxt);
    const handleTabClick = (key: number) => {
        console.log(isDisabled);
        if (isDisabled) {
            return;
        }
        setSelectedKey(key);
    };
    const RenderBulbTab = () => {
        return (
            <BulbTab
                role="tab-Item"
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
                key={tabKey}
                isActive={activeState ? activeState : tabKey == selectedKey}
                onClick={() => {
                    handleTabClick(tabKey);
                }}
                lineHeight={lineHeight}
                isDisabled={isDisabled}
            >
                <span>{tabName}</span>
            </StyledTab>
        );
    };

    return <>{tabStyle == 'bar' ? <RenderBarTab /> : <RenderBulbTab />}</>;
}
TabList.Tab = Tab;

export default TabList;
