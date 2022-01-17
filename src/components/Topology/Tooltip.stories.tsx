import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';
import { eColorTypes } from '../../utils/getColor';
import { TypographyProps } from '.';

export default {
    title: 'UI/Topology',
    component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Typogrophy: ComponentStory<typeof Tooltip> = (args: TypographyProps) => (
    <div>
        {/* <Tooltip.P {...args} /> */}
        {args.children}
    </div>
);

export const baseComponents = Typogrophy.bind({});
baseComponents.args = {
    children: (
        <>
            <Tooltip.h1>Header 2</Tooltip.h1>
            <Tooltip.h2>Header 2</Tooltip.h2>
            <Tooltip.h3>Header 3</Tooltip.h3>
            <Tooltip.h4>Header 4</Tooltip.h4>
            <Tooltip.h5>Header 5</Tooltip.h5>
            <Tooltip.text>Text</Tooltip.text>
        </>
    ),
};

export const coloredText = Typogrophy.bind({});
coloredText.args = {
    children: (
        <>
            <Tooltip.h1 type={eColorTypes.SECONDARY}>Header 1</Tooltip.h1>
            <Tooltip.h2 type={eColorTypes.SUCCESSS}>Header 2</Tooltip.h2>
            <Tooltip.h3 type={eColorTypes.WARNING}>Header 3</Tooltip.h3>
            <Tooltip.h4 type={eColorTypes.DANGER}>Header 4</Tooltip.h4>
            <Tooltip.h5 type={eColorTypes.GREY}>Header 5</Tooltip.h5>
        </>
    ),
};

export const fontWeights = Typogrophy.bind({});
fontWeights.args = {
    children: (
        <>
            <Tooltip.text fontType={'bolder'}>Bolder</Tooltip.text>
            <Tooltip.text fontType={'bold'}>Bold</Tooltip.text>
            <Tooltip.text fontType={'normal'}>Normal</Tooltip.text>
            <Tooltip.text fontType={'inherit'}>Inherit</Tooltip.text>
            <Tooltip.text fontType={'initial'}>Initial</Tooltip.text>
            <Tooltip.text fontType={'lighter'}>Lighter</Tooltip.text>
            <Tooltip.text fontType={200}>Number</Tooltip.text>
        </>
    ),
};

export const fontStyles = Typogrophy.bind({});
fontStyles.args = {
    children: (
        <>
            <Tooltip.text fontStyle={'normal'}>normal</Tooltip.text>
            <Tooltip.text fontStyle={'italic'}>italic</Tooltip.text>
            <Tooltip.text fontStyle={'oblique'}>oblique</Tooltip.text>
            <Tooltip.text fontStyle={'initial'}>initial</Tooltip.text>
            <Tooltip.text fontStyle={'inherit'}>inherit</Tooltip.text>
        </>
    ),
};

export const blockText = Typogrophy.bind({});
blockText.args = {
    children: (
        <>
            <Tooltip.h1>
                <h1>Introducing Block Text</h1>
                <p>
                    Every ordinary html text attribute is automatically styled
                    to our default styles
                </p>
                <Tooltip.h4 fontStyle="italic" type={eColorTypes.SECONDARY}>
                    Thesse can also be nested in Typography componets to create
                    custom fonts and colors
                </Tooltip.h4>
            </Tooltip.h1>
        </>
    ),
};
