import React from 'react';
import { eColorTypes, getColor } from '../../utils/getColor';
import {
    StyledBlock,
    Styledh1,
    Styledh2,
    Styledh3,
    Styledh4,
    Styledh5,
    Styledtext,
} from './Typgoraphy.styles';
import {
    eTextType,
    ITypographyFontStyle,
    ITypographyFontType,
    TypographyProps,
} from './types';

const H1 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}: TypographyProps) => {
    return (
        <Styledh1
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
            role="h1"
        >
            {children}
        </Styledh1>
    );
};
const H2 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}: TypographyProps) => {
    return (
        <Styledh2
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
            role="h2"
        >
            {children}
        </Styledh2>
    );
};
const H3 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}: TypographyProps) => {
    return (
        <Styledh3
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
            role="h3"
        >
            {children}
        </Styledh3>
    );
};
const H4 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}: TypographyProps) => {
    return (
        <Styledh4
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
            role="h4"
        >
            {children}
        </Styledh4>
    );
};
const H5 = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}: TypographyProps) => {
    return (
        <Styledh5
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
            role="h5"
        >
            {children}
        </Styledh5>
    );
};
const Text = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}: TypographyProps) => {
    return (
        <Styledtext
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
            role="text"
        >
            {children}
        </Styledtext>
    );
};
const Block = ({
    children,
    type = eColorTypes.GREY,
    fontType = 'normal',
    fontStyle = 'normal',
}: TypographyProps) => {
    return (
        <StyledBlock
            color={getColor(type)}
            fontType={fontType as ITypographyFontType}
            fontStyle={fontStyle as ITypographyFontStyle}
            role="block"
        >
            {children}
        </StyledBlock>
    );
};

export const Typography: React.FC<TypographyProps> = ({
    textType = 'text',
    ...props
}) => {
    const getComponent = () => {
        switch (textType) {
            case eTextType.H1:
                return <H1 {...props} textType={textType} />;
            case eTextType.H2:
                return <H2 {...props} textType={textType} />;
            case eTextType.H3:
                return <H3 {...props} textType={textType} />;
            case eTextType.H4:
                return <H4 {...props} textType={textType} />;
            case eTextType.H5:
                return <H5 {...props} textType={textType} />;
            case eTextType.TEXT:
                return <Text {...props} textType={textType} />;
            case eTextType.BLOCK:
                return <Block {...props} textType={textType} />;
            default:
                return <></>;
        }
    };

    return <>{getComponent()}</>;
};

export default Typography;
