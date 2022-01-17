import React, { useState } from 'react';
import { eColorTypes, getColor } from '../../utils/getColor';
import {
    Styledh1,
    Styledh2,
    Styledh3,
    Styledh4,
    Styledh5,
    Styledtext,
} from './Tooltip.styles';
import {
    ITypographyFontStyle,
    ITypographyFontType,
    TypographyProps,
} from './types';

export class Tooltip extends React.Component<TypographyProps, {}> {
    static h1: ({
        children,
        type,
        fontType,
        fontStyle,
    }: {
        children: any;
        type?: eColorTypes | undefined;
        fontType?: string | undefined;
        fontStyle?: string | undefined;
    }) => JSX.Element;
    static h2: ({
        children,
        type,
        fontType,
        fontStyle,
    }: {
        children: any;
        type?: eColorTypes | undefined;
        fontType?: string | undefined;
        fontStyle?: string | undefined;
    }) => JSX.Element;
    static h3: ({
        children,
        type,
        fontType,
        fontStyle,
    }: {
        children: any;
        type?: eColorTypes | undefined;
        fontType?: string | undefined;
        fontStyle?: string | undefined;
    }) => JSX.Element;
    static h4: ({
        children,
        type,
        fontType,
        fontStyle,
    }: {
        children: any;
        type?: eColorTypes | undefined;
        fontType?: string | undefined;
        fontStyle?: string | undefined;
    }) => JSX.Element;
    static h5: ({
        children,
        type,
        fontType,
        fontStyle,
    }: {
        children: any;
        type?: eColorTypes | undefined;
        fontType?: string | undefined;
        fontStyle?: string | undefined;
    }) => JSX.Element;
    static text: ({
        children,
        type,
        fontType,
        fontStyle,
    }: {
        children: any;
        type?: eColorTypes | undefined;
        fontType?: string | undefined;
        fontStyle?: string | undefined;
    }) => JSX.Element;
    render() {
        return (
            <div>
                <p>Welcome To Topology</p>
            </div>
        );
    }
}
Tooltip.h1 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}) => {
    return (
        <Styledh1
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
        >
            {children}
        </Styledh1>
    );
};
Tooltip.h2 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}) => {
    return (
        <Styledh2
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
        >
            {children}
        </Styledh2>
    );
};
Tooltip.h3 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}) => {
    return (
        <Styledh3
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
        >
            {children}
        </Styledh3>
    );
};
Tooltip.h4 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}) => {
    return (
        <Styledh4
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
        >
            {children}
        </Styledh4>
    );
};
Tooltip.h5 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}) => {
    return (
        <Styledh5
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
        >
            {children}
        </Styledh5>
    );
};
Tooltip.text = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}) => {
    return (
        <Styledtext
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
        >
            {children}
        </Styledtext>
    );
};

export default Tooltip;
