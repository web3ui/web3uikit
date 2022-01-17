import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Typography';
import { eColorTypes } from '../../utils/getColor';
import { TypographyProps } from '.';
import { eTextType } from './types';

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

export const BaseFonts = Typogrophy.bind({});
BaseFonts.args = {
    children: (
        <>
            <Tooltip textType={eTextType.H1}>Header 1</Tooltip>
            <Tooltip textType={eTextType.H2}>Header 2</Tooltip>
            <Tooltip textType={eTextType.H3}>Header 3</Tooltip>
            <Tooltip textType={eTextType.H4}>Header 4</Tooltip>
            <Tooltip textType={eTextType.H5}>Header 5</Tooltip>
            <Tooltip textType={eTextType.TEXT}>Text</Tooltip>
        </>
    ),
};

export const ColoredText = Typogrophy.bind({});
ColoredText.args = {
    children: (
        <>
            <Tooltip textType={eTextType.H1} type={eColorTypes.SECONDARY}>
                Header 1
            </Tooltip>
            <Tooltip textType={eTextType.H2} type={eColorTypes.SUCCESSS}>
                Header 2
            </Tooltip>
            <Tooltip textType={eTextType.H3} type={eColorTypes.WARNING}>
                Header 3
            </Tooltip>
            <Tooltip textType={eTextType.H4} type={eColorTypes.DANGER}>
                Header 4
            </Tooltip>
            <Tooltip textType={eTextType.H5} type={eColorTypes.GREY}>
                Header 5
            </Tooltip>
        </>
    ),
};

export const FontWeights = Typogrophy.bind({});
FontWeights.args = {
    children: (
        <>
            <Tooltip textType={eTextType.TEXT} fontType={'bolder'}>
                Bolder
            </Tooltip>
            <Tooltip textType={eTextType.TEXT} fontType={'bold'}>
                Bold
            </Tooltip>
            <Tooltip textType={eTextType.TEXT} fontType={'normal'}>
                Normal
            </Tooltip>
            <Tooltip textType={eTextType.TEXT} fontType={'inherit'}>
                Inherit
            </Tooltip>
            <Tooltip textType={eTextType.TEXT} fontType={'initial'}>
                Initial
            </Tooltip>
            <Tooltip textType={eTextType.TEXT} fontType={'lighter'}>
                Lighter
            </Tooltip>
            <Tooltip textType={eTextType.TEXT} fontType={200}>
                Number
            </Tooltip>
        </>
    ),
};

export const FontStyles = Typogrophy.bind({});
FontStyles.args = {
    children: (
        <>
            <Tooltip fontStyle={'normal'}>normal</Tooltip>
            <Tooltip fontStyle={'italic'}>italic</Tooltip>
            <Tooltip fontStyle={'oblique'}>oblique</Tooltip>
            <Tooltip fontStyle={'initial'}>initial</Tooltip>
            <Tooltip fontStyle={'inherit'}>inherit</Tooltip>
        </>
    ),
};

export const BlockText = Typogrophy.bind({});
BlockText.args = {
    children: (
        <>
            <Tooltip textType={eTextType.BLOCK}>
                <h1>Introducing Block Text</h1>
                <p>
                    Every ordinary html text attribute is automatically styled
                    to our default styles
                </p>
                <Tooltip
                    textType={eTextType.H4}
                    fontStyle="italic"
                    type={eColorTypes.SECONDARY}
                >
                    Thesse can also be nested in Typography componets to create
                    custom fonts and colors
                </Tooltip>
            </Tooltip>
        </>
    ),
};
