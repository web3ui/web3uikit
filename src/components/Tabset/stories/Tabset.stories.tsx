import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tabset } from '../components';

type TabsetType = typeof Tabset;

export default {
    title: 'UI/Tabset',
    component: Tabset,
} as ComponentMeta<TabsetType>;

const Template: ComponentStory<TabsetType> = (props) => {
    return (
        <Tabset {...props}>
            <Tabset.TabList>
                <Tabset.Tab>Bulbasaur</Tabset.Tab>
                <Tabset.Tab>Squirtle</Tabset.Tab>
                <Tabset.Tab>Slowpoke</Tabset.Tab>
                <Tabset.Tab>Pikachu</Tabset.Tab>
                <Tabset.Tab>Charizard</Tabset.Tab>
            </Tabset.TabList>

            <Tabset.Panel>
                <p>
                    Bulbasaur is a <span style={{ color: 'green' }}>Grass</span>
                    /<span style={{ color: 'violet' }}>Poison</span> type
                    Pokémon introduced in Generation 1. It is known as the Seed
                    Pokémon.
                </p>
            </Tabset.Panel>
            <Tabset.Panel>
                <p>
                    Squirtle is a <span style={{ color: 'blue' }}>Water</span>{' '}
                    type Pokémon introduced in Generation 1. It is known as the
                    Tiny Turtle Pokémon.
                </p>
            </Tabset.Panel>
            <Tabset.Panel>
                <p>
                    Slowpoke is a <span style={{ color: 'blue' }}>Water</span>/
                    <span style={{ color: 'pink' }}>Psychic</span> type Pokémon
                    introduced in Generation 1. It is known as the Dopey
                    Pokémon.
                </p>
            </Tabset.Panel>
            <Tabset.Panel>
                <p>
                    Pikachu is an{' '}
                    <span style={{ color: 'orange' }}>Electric</span> type
                    Pokémon introduced in Generation 1. It is known as the Mouse
                    Pokémon.
                </p>
            </Tabset.Panel>
            <Tabset.Panel>
                <p>
                    Charizard is a <span style={{ color: 'red' }}>Fire</span>/
                    <span style={{ color: 'blueviolet' }}>Flying</span> type
                    Pokémon introduced in Generation 1. It is known as the Flame
                    Pokémon.
                </p>
                <p>
                    Charizard has two Mega Evolutions, available from X & Y
                    onwards.
                </p>
            </Tabset.Panel>
        </Tabset>
    );
};

export const OutlineTabset = Template.bind({});
OutlineTabset.args = {
    defaultIndex: 0,
    vertical: false,
    variant: 'outline',
    color: 'blue',
};

export const SolidBlueTabset = Template.bind({});
SolidBlueTabset.args = {
    defaultIndex: 1,
    vertical: false,
    variant: 'solid',
    color: 'blue',
};

export const PillGreenTabset = Template.bind({});
PillGreenTabset.args = {
    defaultIndex: 3,
    vertical: false,
    variant: 'pill',
    color: 'green',
};

export const LightYellowTabset = Template.bind({});
LightYellowTabset.args = {
    defaultIndex: 0,
    vertical: false,
    variant: 'light',
    color: 'yellow',
};

export const WithDisabledTabs = Template.bind({});
WithDisabledTabs.args = {
    defaultIndex: 0,
    vertical: false,
    variant: 'solid',
    color: 'red',
    disabled: [2, 4],
};

export const VerticalTabset = Template.bind({});
VerticalTabset.args = {
    defaultIndex: 0,
    vertical: true,
    variant: 'pill',
    color: 'green',
};

export const UnstyledTabset = Template.bind({});
UnstyledTabset.args = {
    defaultIndex: 0,
    vertical: false,
    variant: 'unstyled',
};
