import * as React from 'react';
import { composeStories } from '@storybook/testing-react';
import * as Stories from './Tabs.stories';
import { render, screen, fireEvent } from '@testing-library/react';

const {
    TabBar,
    VerticalTabBar,
    Bulb,
    BulbWithIcon,
    VerticalBulbs,
    Seperated,
    Disabled,
} = composeStories(Stories);

describe('Tabs - Tab Bar', () => {
    const defaultSelectedKey = TabBar.args?.defaultActiveKey;
    it('Should Render', () => {
        render(<TabBar />);
        const element = screen.getByTestId('tabs_list_parent');
        expect(element).toBeDefined();
    });
    it('Should set active key to default one', () => {
        render(<TabBar />);
        const element = screen.getByTestId(
            `tab_item_${defaultSelectedKey}_true`,
        );
        expect(element).toBeDefined();
    });
    it('Should change active key if new one is clicked', () => {
        render(<TabBar />);
        const element = screen.getByTestId(`tab_item_2_false`);
        fireEvent.click(element);
        const el = screen.getByTestId(`tab_item_2_true`);
        expect(el).toBeDefined();
    });
    it('Should Render Icons', () => {
        render(<TabBar />);
        const element = screen.getAllByTestId(`test-icon`);
        expect(element.length).toBeGreaterThanOrEqual(2);
    });
});

describe('Tabs - Vertical Tab Bar', () => {
    const defaultSelectedKey = TabBar.args?.defaultActiveKey;
    it('Should Render', () => {
        render(<VerticalTabBar />);
        const element = screen.getByTestId('tabs_list_parent');
        expect(element).toBeDefined();
    });
    it('Should set active key to default one', () => {
        render(<VerticalTabBar />);
        const element = screen.getByTestId(
            `tab_item_${defaultSelectedKey}_true`,
        );
        expect(element).toBeDefined();
    });
    it('Should Render Text Associated with card', () => {
        render(<VerticalTabBar />);
        const element = screen.getAllByText('This is Card 1');
        expect(element).toBeDefined();
    });
    it('Should change active key if new one is clicked', () => {
        render(<VerticalTabBar />);
        const element = screen.getByTestId(`tab_item_2_false`);
        fireEvent.click(element);
        const el = screen.getByTestId(`tab_item_2_true`);
        expect(el).toBeDefined();
    });
});

describe('Tabs - Bulb', () => {
    const defaultSelectedKey = TabBar.args?.defaultActiveKey;
    it('Should Render', () => {
        render(<Bulb />);
        const element = screen.getByTestId('tabs_list_parent');
        expect(element).toBeDefined();
    });
    it('Should set active key to default one', () => {
        render(<Bulb />);
        const element = screen.getByTestId(
            `tab_item_${defaultSelectedKey}_true`,
        );
        expect(element).toBeDefined();
    });
    it('Should Render Text Associated with card', () => {
        render(<Bulb />);
        const element = screen.getAllByText('This is Card 1');
        expect(element).toBeDefined();
    });
    it('Should change active key if new one is clicked', () => {
        render(<Bulb />);
        const element = screen.getByTestId(`tab_item_2_false`);
        fireEvent.click(element);
        const el = screen.getByTestId(`tab_item_2_true`);
        expect(el).toBeDefined();
    });
});

describe('Tabs - Bulb With Icon', () => {
    const defaultSelectedKey = TabBar.args?.defaultActiveKey;
    it('Should Render', () => {
        render(<BulbWithIcon />);
        const element = screen.getByTestId('tabs_list_parent');
        expect(element).toBeDefined();
    });
    it('Should set active key to default one', () => {
        render(<BulbWithIcon />);
        const element = screen.getByTestId(
            `tab_item_${defaultSelectedKey}_true`,
        );
        expect(element).toBeDefined();
    });
    it('Should Render Text Associated with card', () => {
        render(<BulbWithIcon />);
        const element = screen.getAllByText('This is Card 1');
        expect(element).toBeDefined();
    });
    it('Should change active key if new one is clicked', () => {
        render(<BulbWithIcon />);
        const element = screen.getByTestId(`tab_item_2_false`);
        fireEvent.click(element);
        const el = screen.getByTestId(`tab_item_2_true`);
        expect(el).toBeDefined();
    });
    it('Should Render Icons', () => {
        render(<BulbWithIcon />);
        const element = screen.getAllByTestId(`test-icon`);
        expect(element.length).toBeGreaterThanOrEqual(2);
    });
});

describe('Tabs - Vertical', () => {
    const defaultSelectedKey = TabBar.args?.defaultActiveKey;
    it('Should Render', () => {
        render(<VerticalBulbs />);
        const element = screen.getByTestId('tabs_list_parent');
        expect(element).toBeDefined();
    });
    it('Should set active key to default one', () => {
        render(<VerticalBulbs />);
        const element = screen.getByTestId(
            `tab_item_${defaultSelectedKey}_true`,
        );
        expect(element).toBeDefined();
    });
    it('Should Render Text Associated with card', () => {
        render(<VerticalBulbs />);
        const element = screen.getAllByText('This is Card 1');
        expect(element).toBeDefined();
    });
    it('Should change active key if new one is clicked', () => {
        render(<VerticalBulbs />);
        const element = screen.getByTestId(`tab_item_2_false`);
        fireEvent.click(element);
        const el = screen.getByTestId(`tab_item_2_true`);
        expect(el).toBeDefined();
    });
    it('Should Render Icons', () => {
        render(<VerticalBulbs />);
        const element = screen.getAllByTestId(`test-icon`);
        expect(element.length).toBeGreaterThanOrEqual(2);
    });
});

describe('Tabs - Sepratated', () => {
    const defaultSelectedKey = TabBar.args?.defaultActiveKey;
    it('Should Render', () => {
        render(<Seperated />);
        const element = screen.getByTestId('tabs_list_parent');
        expect(element).toBeDefined();
    });
    it('Should set active key to default one', () => {
        render(<Seperated />);
        const element = screen.getByTestId(
            `tab_item_${defaultSelectedKey}_true`,
        );
        expect(element).toBeDefined();
    });
    it('Should Render Text Associated with card', () => {
        render(<Seperated />);
        const element = screen.getAllByText('This is Card 1');
        expect(element).toBeDefined();
    });
    it('Should change active key if new one is clicked', () => {
        render(<Seperated />);
        const element = screen.getByTestId(`tab_item_2_false`);
        fireEvent.click(element);
        const el = screen.getByTestId(`tab_item_2_true`);
        expect(el).toBeDefined();
    });
});

describe('Tabs - Disabled', () => {
    const defaultSelectedKey = TabBar.args?.defaultActiveKey;
    it('Should Render', () => {
        render(<Disabled />);
        const element = screen.getByTestId('tabs_list_parent');
        expect(element).toBeDefined();
    });
    it('Should set active key to default one', () => {
        render(<Disabled />);
        const element = screen.getByTestId(
            `tab_item_${defaultSelectedKey}_true`,
        );
        expect(element).toBeDefined();
    });
    it('Should Render Text Associated with card', () => {
        render(<Disabled />);
        const element = screen.getAllByText('This is Card 1');
        expect(element).toBeDefined();
    });
    it('Should change active key if new one is clicked', () => {
        render(<Disabled />);
        const element = screen.getByTestId(`tab_item_3_false`);
        fireEvent.click(element);
        const el = screen.getByTestId(`tab_item_3_true`);
        expect(el).toBeDefined();
    });
    it('Should not change active key if disabled one is clicked', () => {
        render(<Disabled />);
        const element = screen.getByText('Disabled');
        fireEvent.click(element);
        const el = screen.getByTestId(`tab_item_1_true`);
        expect(el).toBeDefined();
    });
});
