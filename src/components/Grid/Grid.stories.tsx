import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './Grid';
import CryptoCards from '../CryptoCards/CryptoCards';
export default {
    title: 'Ui/Grid',
    component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
    <Grid {...args}>{args.children}</Grid>
);

export const GridComponent = Template.bind({});

GridComponent.args = {
    alignItems: 'center',
    justifyItems: 'center',
    rowGap: 15,
    colGap: 15,
    xs: 15,
    sm: 20,
    md: 25,
    lg: 30,
    children: (
        <>
            <Grid.Col
                span={12}
                justifySelf="center"
                alignSelf="center"
                breakpointsConfig={{
                    xs: 10,
                    sm: 20,
                    md: 20,
                    lg: 30,
                }}
            >
                <div
                    style={{
                        width: '100%',
                        backgroundColor: 'blue',
                        height: '50px',
                        color: 'white',
                        border: '1px solid white',
                    }}
                >
                    Grid Col 12
                </div>
            </Grid.Col>
            <Grid.Col
                span={12}
                justifySelf="center"
                alignSelf="center"
                breakpointsConfig={{
                    xs: 5,
                    sm: 20,
                    md: 20,
                    lg: 30,
                }}
            >
                <div
                    style={{
                        width: '100%',
                        backgroundColor: 'blue',
                        height: '50px',
                        color: 'white',
                        border: '1px solid white',
                    }}
                >
                    Grid Col 12
                </div>
            </Grid.Col>
        </>
    ),
};
