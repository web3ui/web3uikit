import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';
import { eColorTypes } from '../../utils/getColor';
import { TypographyProps } from '.';
import { eTextType } from './types';

export default {
    title: 'UI/Topology',
    component: Typography,
} as ComponentMeta<typeof Typography>;

const TypogrophyTemplate: ComponentStory<typeof Typography> = (
    args: TypographyProps,
) => <div>{args.children}</div>;

export const BaseFonts = TypogrophyTemplate.bind({});
BaseFonts.args = {
    children: (
        <>
            <Typography textType={eTextType.H1}>Header 1</Typography>
            <Typography textType={eTextType.H2}>Header 2</Typography>
            <Typography textType={eTextType.H3}>Header 3</Typography>
            <Typography textType={eTextType.H4}>Header 4</Typography>
            <Typography textType={eTextType.H5}>Header 5</Typography>
            <Typography textType={eTextType.TEXT}>Text</Typography>
        </>
    ),
};

export const ColoredText = TypogrophyTemplate.bind({});
ColoredText.args = {
    children: (
        <>
            <Typography textType={eTextType.H1} type={eColorTypes.SECONDARY}>
                Header 1
            </Typography>
            <Typography textType={eTextType.H2} type={eColorTypes.SUCCESSS}>
                Header 2
            </Typography>
            <Typography textType={eTextType.H3} type={eColorTypes.WARNING}>
                Header 3
            </Typography>
            <Typography textType={eTextType.H4} type={eColorTypes.DANGER}>
                Header 4
            </Typography>
            <Typography textType={eTextType.H5} type={eColorTypes.GREY}>
                Header 5
            </Typography>
        </>
    ),
};

export const FontWeights = TypogrophyTemplate.bind({});
FontWeights.args = {
    children: (
        <>
            <Typography textType={eTextType.TEXT} fontType={'bolder'}>
                Bolder
            </Typography>
            <Typography textType={eTextType.TEXT} fontType={'bold'}>
                Bold
            </Typography>
            <Typography textType={eTextType.TEXT} fontType={'normal'}>
                Normal
            </Typography>
            <Typography textType={eTextType.TEXT} fontType={'inherit'}>
                Inherit
            </Typography>
            <Typography textType={eTextType.TEXT} fontType={'initial'}>
                Initial
            </Typography>
            <Typography textType={eTextType.TEXT} fontType={'lighter'}>
                Lighter
            </Typography>
            <Typography textType={eTextType.TEXT} fontType={200}>
                Number
            </Typography>
        </>
    ),
};

export const FontStyles = TypogrophyTemplate.bind({});
FontStyles.args = {
    children: (
        <>
            <Typography fontStyle={'normal'}>normal</Typography>
            <Typography fontStyle={'italic'}>italic</Typography>
            <Typography fontStyle={'oblique'}>oblique</Typography>
            <Typography fontStyle={'initial'}>initial</Typography>
            <Typography fontStyle={'inherit'}>inherit</Typography>
        </>
    ),
};

export const BlockText = TypogrophyTemplate.bind({});
BlockText.args = {
    children: (
        <>
            <Typography textType={eTextType.BLOCK}>
                <h1>Introducing Block Text</h1>
                <p>
                    All ordinary html elements passed here will be given the
                    default styles.
                </p>
                <p>This is great if you have bulk text</p>
                <Typography
                    textType={eTextType.H4}
                    fontStyle="italic"
                    type={eColorTypes.SECONDARY}
                >
                    To add custom fonts, simply nest Typography components in
                    each other
                </Typography>
                <h5
                    style={{
                        color: '#F1A90E',
                    }}
                >
                    You can also add styles to your own html tags
                </h5>
            </Typography>
        </>
    ),
};
