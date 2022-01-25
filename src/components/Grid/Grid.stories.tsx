import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid from './Grid';
export default {
    title: 'Ui/Grid',
    component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
    <Grid {...args}>{args.children}</Grid>
);

const basicColStyling = {
    width: '100%',
    backgroundColor: 'rgba(0,146,255,.75)',
    height: '50px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
const basicStylingSecondShade = {
    width: '100%',
    backgroundColor: '#0092ff',
    height: '50px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const GridComponent = Template.bind({});

GridComponent.args = {
    alignItems: 'center',
    justifyItems: 'center',
    xs: 8,
    sm: 16,
    md: 24,
    lg: 24,
    children: (
        <>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 24,
                }}
            >
                <div style={basicColStyling}>Col 24</div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 4,
                    sm: 8,
                    md: 12,
                    lg: 12,
                }}
            >
                <div style={basicColStyling}>Grid Col 12</div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 4,
                    sm: 8,
                    md: 12,
                    lg: 12,
                }}
            >
                <div style={{ ...basicColStyling, backgroundColor: '#0092ff' }}>
                    Grid Col 12
                </div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 5.333,
                    md: 8,
                    lg: 8,
                }}
            >
                <div style={basicColStyling}>Grid Col 8</div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 5.333,
                    md: 8,
                    lg: 8,
                }}
            >
                <div style={{ ...basicColStyling, backgroundColor: '#0092ff' }}>
                    Grid Col 8
                </div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 5.33,
                    md: 8,
                    lg: 8,
                }}
            >
                <div style={basicColStyling}>Grid Col 8</div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 6,
                }}
            >
                <div style={{ ...basicColStyling, backgroundColor: '#0092ff' }}>
                    Grid Col 6
                </div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 6,
                }}
            >
                <div style={{ ...basicColStyling }}>Grid Col 6</div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 6,
                }}
            >
                <div style={{ ...basicColStyling, backgroundColor: '#0092ff' }}>
                    Grid Col 6
                </div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 6,
                }}
            >
                <div style={{ ...basicColStyling }}>Grid Col 6</div>
            </Grid.Col>
        </>
    ),
};

export const CustomBreakpoints = Template.bind({});

CustomBreakpoints.args = {
    alignItems: 'center',
    justifyItems: 'center',
    xs: 8,
    sm: 16,
    md: 24,
    lg: 24,
    children: (
        <>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 12,
                    lg: 6,
                }}
            >
                <div style={basicColStyling}>Col 24</div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 12,
                    lg: 6,
                }}
            >
                <div style={basicStylingSecondShade}>Grid Col 12</div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 12,
                    lg: 6,
                }}
            >
                <div style={basicColStyling}>Col 24</div>
            </Grid.Col>
            <Grid.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 12,
                    lg: 6,
                }}
            >
                <div style={basicStylingSecondShade}>Grid Col 12</div>
            </Grid.Col>
        </>
    ),
};

export const JustifyContent = Template.bind({});

JustifyContent.args = {
    children: (
        <>
            <h4>Flex Start</h4>
            <Grid.Col isFullWidth={true}>
                <Grid justifyItems="flex-start">
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Flex Start</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicStylingSecondShade}>Flex Start</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Flex Start</div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <h4>Flex End</h4>
            <Grid.Col isFullWidth={true}>
                <Grid justifyItems="flex-end">
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Flex End</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicStylingSecondShade}>Flex End</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Flex End</div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <h4>Center</h4>
            <Grid.Col span={24}>
                <Grid justifyItems="center">
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Center</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicStylingSecondShade}>Center</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Center</div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <h4>Space Evenly</h4>
            <Grid.Col isFullWidth={true}>
                <Grid justifyItems="space-evenly">
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Space Evenly</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicStylingSecondShade}>Space Evenly</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Space Evenly</div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <h4>Space Between</h4>
            <Grid.Col isFullWidth={true}>
                <Grid justifyItems="space-between">
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Space Between</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicStylingSecondShade}>Space Between</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Space Between</div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <h4>Space Around</h4>
            <Grid.Col isFullWidth={true}>
                <Grid justifyItems="space-around">
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Space Arround</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicStylingSecondShade}>Space Arround</div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={basicColStyling}>Space Arround</div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
        </>
    ),
};

export const AlignStyles = Template.bind({});

AlignStyles.args = {
    children: (
        <>
            <h4>Align Start</h4>
            <Grid.Col isFullWidth={true}>
                <Grid alignItems="start">
                    <Grid.Col span={6}>
                        <div style={{ ...basicColStyling, height: '100px' }}>
                            Align Start
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div
                            style={{
                                ...basicStylingSecondShade,
                                height: '50px',
                            }}
                        >
                            Align Start
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={{ ...basicColStyling, height: '75px' }}>
                            Align Start
                        </div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <h4>Align End</h4>
            <Grid.Col isFullWidth={true}>
                <Grid alignItems="end">
                    <Grid.Col span={6}>
                        <div style={{ ...basicColStyling, height: '100px' }}>
                            Align End
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div
                            style={{
                                ...basicStylingSecondShade,
                                height: '50px',
                            }}
                        >
                            Align End
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={{ ...basicColStyling, height: '75px' }}>
                            Align End
                        </div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <h4>Align Center</h4>
            <Grid.Col isFullWidth={true}>
                <Grid alignItems="center">
                    <Grid.Col span={6}>
                        <div style={{ ...basicColStyling, height: '100px' }}>
                            Align Center
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div
                            style={{
                                ...basicStylingSecondShade,
                                height: '50px',
                            }}
                        >
                            Align Center
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={{ ...basicColStyling, height: '75px' }}>
                            Align Center
                        </div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <h4>Align Baseline</h4>
            <Grid.Col isFullWidth={true}>
                <Grid alignItems="baseline">
                    <Grid.Col span={6}>
                        <div style={{ ...basicColStyling, height: '100px' }}>
                            Align Baseline
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div
                            style={{
                                ...basicStylingSecondShade,
                                height: '50px',
                            }}
                        >
                            Align Baseline
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <div style={{ ...basicColStyling, height: '75px' }}>
                            Align Baseline
                        </div>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
        </>
    ),
};

export const OrderedColumns = Template.bind({});

OrderedColumns.args = {
    children: (
        <>
            <Grid.Col span={6} order={5}>
                <div style={basicColStyling}>Position 1, Order 5 </div>
            </Grid.Col>
            <Grid.Col span={6} order={3}>
                <div style={basicStylingSecondShade}>Position 2, Order 3 </div>
            </Grid.Col>
            <Grid.Col span={6} order={2}>
                <div style={basicColStyling}>Position 3, Order 2 </div>
            </Grid.Col>
            <Grid.Col span={6} order={1}>
                <div style={basicStylingSecondShade}>Position 4, Order 1 </div>
            </Grid.Col>
        </>
    ),
};
