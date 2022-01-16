import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tabset } from '../components';

describe('Render', () => {
    it('should correct render all elements', () => {
        render(
            <Tabset defaultIndex={0}>
                <Tabset.TabList>
                    <Tabset.Tab>First tab</Tabset.Tab>
                    <Tabset.Tab>Second tab</Tabset.Tab>
                    <Tabset.Tab>Third tab</Tabset.Tab>
                </Tabset.TabList>
                <Tabset.Panel>First panel</Tabset.Panel>
                <Tabset.Panel>Second panel</Tabset.Panel>
                <Tabset.Panel>Third panel</Tabset.Panel>
            </Tabset>,
        );

        expect(screen.getByTestId('tabset')).toBeInTheDocument();
        expect(screen.getByRole('tablist')).toBeInTheDocument();

        expect(screen.getAllByRole('tab')).toHaveLength(3);
        expect(screen.getAllByRole('tabpanel')).toHaveLength(1);

        expect(screen.getByText(/First panel/i)).toBeInTheDocument();
        expect(screen.queryByText(/Second panel/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Third panel/i)).not.toBeInTheDocument();
    });

    it('should throw error if number of tabs and panels not equal', () => {
        expect(() =>
            render(
                <Tabset>
                    <Tabset.TabList>
                        <Tabset.Tab>First tab</Tabset.Tab>
                        <Tabset.Tab>Second tab</Tabset.Tab>
                        <Tabset.Tab>Third tab</Tabset.Tab>
                    </Tabset.TabList>
                    <Tabset.Panel>First panel</Tabset.Panel>
                </Tabset>,
            ),
        ).toThrowError();
    });
});

describe('Interaction', () => {
    describe('Mouse', () => {
        it('click on tab should set its panel as visible', () => {
            render(
                <Tabset defaultIndex={0}>
                    <Tabset.TabList>
                        <Tabset.Tab>First tab</Tabset.Tab>
                        <Tabset.Tab>Second tab</Tabset.Tab>
                    </Tabset.TabList>
                    <Tabset.Panel>First panel</Tabset.Panel>
                    <Tabset.Panel>Second panel</Tabset.Panel>
                </Tabset>,
            );
            userEvent.click(screen.getByText(/Second tab/i));
            expect(screen.getByText(/Second panel/i)).toBeInTheDocument();
        });
    });

    describe('Keyboard', () => {
        beforeEach(() =>
            render(
                <Tabset defaultIndex={0} disabled={[2]}>
                    <Tabset.TabList>
                        <Tabset.Tab>First tab</Tabset.Tab>
                        <Tabset.Tab>Second tab</Tabset.Tab>
                        <Tabset.Tab>Third tab</Tabset.Tab>
                        <Tabset.Tab>Last tab</Tabset.Tab>
                    </Tabset.TabList>
                    <Tabset.Panel>First panel</Tabset.Panel>
                    <Tabset.Panel>Second panel</Tabset.Panel>
                    <Tabset.Panel>Third panel</Tabset.Panel>
                    <Tabset.Panel>Last panel</Tabset.Panel>
                </Tabset>,
            ),
        );

        it('Press `ArrowRight` should move focus to next tab', () => {
            userEvent.click(screen.getByText(/First tab/i));
            userEvent.keyboard('{ArrowRight}');

            expect(screen.getByText(/Second tab/i)).toHaveFocus();
        });

        it('Press `ArrowDown` should move focus to next tab', () => {
            userEvent.click(screen.getByText(/First tab/i));
            userEvent.keyboard('{ArrowDown}');

            expect(screen.getByText(/Second tab/i)).toHaveFocus();
        });

        it('Press `ArrowLeft` should move foucus to previous tab', () => {
            userEvent.click(screen.getByText(/Second tab/i));
            userEvent.keyboard('{ArrowLeft}');

            expect(screen.getByText(/First tab/i)).toHaveFocus();
        });

        it('Press `ArrowUp` should move foucus to previous tab', () => {
            userEvent.click(screen.getByText(/Second tab/i));
            userEvent.keyboard('{ArrowUp}');

            expect(screen.getByText(/First tab/i)).toHaveFocus();
        });

        it('Press `Home` should move foucus to first tab', () => {
            userEvent.click(screen.getByText(/Second tab/i));
            userEvent.keyboard('{Home}');

            expect(screen.getByText(/First tab/i)).toHaveFocus();
        });

        it('Press `End` should move foucus to last tab', () => {
            userEvent.click(screen.getByText(/Second tab/i));
            userEvent.keyboard('{End}');

            expect(screen.getByText(/Last tab/i)).toHaveFocus();
        });

        it('skip disabled tabs', () => {
            userEvent.click(screen.getByText(/Second tab/i));
            userEvent.keyboard('{ArrowRight}');

            expect(screen.getByText(/Last tab/i)).toHaveFocus();
        });

        it('Press `Enter` on focused tab shoud', () => {
            userEvent.click(screen.getByText(/Second tab/i));
            userEvent.keyboard('{ArrowRight}');
            userEvent.keyboard('{Enter}');

            expect(screen.getByText(/Last panel/i)).toBeInTheDocument();
        });

        it('Press `Space` on focused tab shoud', () => {
            userEvent.click(screen.getByText(/Second tab/i));
            userEvent.keyboard('{ArrowRight}');
            userEvent.keyboard(' ');

            expect(screen.getByText(/Last panel/i)).toBeInTheDocument();
        });
    });
});
