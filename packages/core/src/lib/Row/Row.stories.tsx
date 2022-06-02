import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Row, { Col } from './Row';
export default {
    title: '3.Layout/Row',
    component: Row,
    subcomponents: { Col },
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => (
    <Row {...args}>{args.children}</Row>
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

export const RowComponent = Template.bind({});

RowComponent.args = {
    alignItems: 'center',
    justifyItems: 'center',
    xs: 8,
    sm: 16,
    md: 24,
    lg: 24,
    children: (
        <>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 24,
                }}
            >
                <div style={basicColStyling}>Col 24</div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 4,
                    sm: 8,
                    md: 12,
                    lg: 12,
                }}
            >
                <div style={basicColStyling}>Row Col 12</div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 4,
                    sm: 8,
                    md: 12,
                    lg: 12,
                }}
            >
                <div style={{ ...basicColStyling, backgroundColor: '#0092ff' }}>
                    Row Col 12
                </div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 5.333,
                    md: 8,
                    lg: 8,
                }}
            >
                <div style={basicColStyling}>Row Col 8</div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 5.333,
                    md: 8,
                    lg: 8,
                }}
            >
                <div style={{ ...basicColStyling, backgroundColor: '#0092ff' }}>
                    Row Col 8
                </div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 5.33,
                    md: 8,
                    lg: 8,
                }}
            >
                <div style={basicColStyling}>Row Col 8</div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 6,
                }}
            >
                <div style={{ ...basicColStyling, backgroundColor: '#0092ff' }}>
                    Row Col 6
                </div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 6,
                }}
            >
                <div style={{ ...basicColStyling }}>Row Col 6</div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 6,
                }}
            >
                <div style={{ ...basicColStyling, backgroundColor: '#0092ff' }}>
                    Row Col 6
                </div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 2,
                    sm: 4,
                    md: 6,
                    lg: 6,
                }}
            >
                <div style={{ ...basicColStyling }}>Row Col 6</div>
            </Row.Col>
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
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 12,
                    lg: 6,
                }}
            >
                <div style={basicColStyling}>Col 24</div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 12,
                    lg: 6,
                }}
            >
                <div style={basicStylingSecondShade}>Row Col 12</div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 12,
                    lg: 6,
                }}
            >
                <div style={basicColStyling}>Col 24</div>
            </Row.Col>
            <Row.Col
                span={12}
                breakpointsConfig={{
                    xs: 8,
                    sm: 16,
                    md: 12,
                    lg: 6,
                }}
            >
                <div style={basicStylingSecondShade}>Row Col 12</div>
            </Row.Col>
        </>
    ),
};

export const JustifyContent = Template.bind({});

JustifyContent.args = {
    children: (
        <>
            <h4>Flex Start</h4>
            <Row.Col isFullWidth={true}>
                <Row justifyItems="flex-start">
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Flex Start</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicStylingSecondShade}>Flex Start</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Flex Start</div>
                    </Row.Col>
                </Row>
            </Row.Col>
            <h4>Flex End</h4>
            <Row.Col isFullWidth={true}>
                <Row justifyItems="flex-end">
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Flex End</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicStylingSecondShade}>Flex End</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Flex End</div>
                    </Row.Col>
                </Row>
            </Row.Col>
            <h4>Center</h4>
            <Row.Col span={24}>
                <Row justifyItems="center">
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Center</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicStylingSecondShade}>Center</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Center</div>
                    </Row.Col>
                </Row>
            </Row.Col>
            <h4>Space Evenly</h4>
            <Row.Col isFullWidth={true}>
                <Row justifyItems="space-evenly">
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Space Evenly</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicStylingSecondShade}>Space Evenly</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Space Evenly</div>
                    </Row.Col>
                </Row>
            </Row.Col>
            <h4>Space Between</h4>
            <Row.Col isFullWidth={true}>
                <Row justifyItems="space-between">
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Space Between</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicStylingSecondShade}>Space Between</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Space Between</div>
                    </Row.Col>
                </Row>
            </Row.Col>
            <h4>Space Around</h4>
            <Row.Col isFullWidth={true}>
                <Row justifyItems="space-around">
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Space Arround</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicStylingSecondShade}>Space Arround</div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={basicColStyling}>Space Arround</div>
                    </Row.Col>
                </Row>
            </Row.Col>
        </>
    ),
};

export const AlignStyles = Template.bind({});

AlignStyles.args = {
    children: (
        <>
            <h4>Align Start</h4>
            <Row.Col isFullWidth={true}>
                <Row alignItems="start">
                    <Row.Col span={6}>
                        <div style={{ ...basicColStyling, height: '100px' }}>
                            Align Start
                        </div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div
                            style={{
                                ...basicStylingSecondShade,
                                height: '50px',
                            }}
                        >
                            Align Start
                        </div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={{ ...basicColStyling, height: '75px' }}>
                            Align Start
                        </div>
                    </Row.Col>
                </Row>
            </Row.Col>
            <h4>Align End</h4>
            <Row.Col isFullWidth={true}>
                <Row alignItems="end">
                    <Row.Col span={6}>
                        <div style={{ ...basicColStyling, height: '100px' }}>
                            Align End
                        </div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div
                            style={{
                                ...basicStylingSecondShade,
                                height: '50px',
                            }}
                        >
                            Align End
                        </div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={{ ...basicColStyling, height: '75px' }}>
                            Align End
                        </div>
                    </Row.Col>
                </Row>
            </Row.Col>
            <h4>Align Center</h4>
            <Row.Col isFullWidth={true}>
                <Row alignItems="center">
                    <Row.Col span={6}>
                        <div style={{ ...basicColStyling, height: '100px' }}>
                            Align Center
                        </div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div
                            style={{
                                ...basicStylingSecondShade,
                                height: '50px',
                            }}
                        >
                            Align Center
                        </div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={{ ...basicColStyling, height: '75px' }}>
                            Align Center
                        </div>
                    </Row.Col>
                </Row>
            </Row.Col>
            <h4>Align Baseline</h4>
            <Row.Col isFullWidth={true}>
                <Row alignItems="baseline">
                    <Row.Col span={6}>
                        <div style={{ ...basicColStyling, height: '100px' }}>
                            Align Baseline
                        </div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div
                            style={{
                                ...basicStylingSecondShade,
                                height: '50px',
                            }}
                        >
                            Align Baseline
                        </div>
                    </Row.Col>
                    <Row.Col span={6}>
                        <div style={{ ...basicColStyling, height: '75px' }}>
                            Align Baseline
                        </div>
                    </Row.Col>
                </Row>
            </Row.Col>
        </>
    ),
};

export const OrderedColumns = Template.bind({});

OrderedColumns.args = {
    children: (
        <>
            <Row.Col span={6} order={5}>
                <div style={basicColStyling}>Position 1, Order 5 </div>
            </Row.Col>
            <Row.Col span={6} order={3}>
                <div style={basicStylingSecondShade}>Position 2, Order 3 </div>
            </Row.Col>
            <Row.Col span={6} order={2}>
                <div style={basicColStyling}>Position 3, Order 2 </div>
            </Row.Col>
            <Row.Col span={6} order={1}>
                <div style={basicStylingSecondShade}>Position 4, Order 1 </div>
            </Row.Col>
        </>
    ),
};
