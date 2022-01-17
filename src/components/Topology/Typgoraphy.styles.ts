import styled from 'styled-components';
import fonts from '../../styles/fonts';
import { ITypographyFontStyle, ITypographyFontType } from './types';

interface ITopology {
    color: string;
    fontType: ITypographyFontType;
    fontStyle: ITypographyFontStyle;
}
interface ITopology {
    color: string;
    fontType: ITypographyFontType;
    fontStyle: ITypographyFontStyle;
}

export const StyledBlock = styled.div<ITopology>`
    ${fonts.text}
    & > h1 {
        ${fonts.h1}
    }
    & > h2 {
        ${fonts.h2}
    }
    & > h3 {
        ${fonts.h3}
    }
    & > h4 {
        ${fonts.h4}
    }
    & > h5 {
        ${fonts.h5}
    }
    color: ${(props) => props.color};
    font-weight: ${(props) => props.fontType};
    font-style: ${(props) => props.fontStyle};
`;
StyledBlock.displayName = 'Tooltip';

export const Styledh1 = styled.h1<ITopology>`
    ${fonts.text}
    ${fonts.h1}
    color: ${(props) => props.color};
    font-weight: ${(props) => props.fontType};
    font-style: ${(props) => props.fontStyle};
`;
Styledh1.displayName = 'Typogography.h1';
export const Styledh2 = styled.h2<ITopology>`
    ${fonts.text}
    ${fonts.h2}
    color: ${(props) => props.color};
    font-weight: ${(props) => props.fontType};
    font-style: ${(props) => props.fontStyle};
`;
Styledh2.displayName = 'Typogography.h2';

export const Styledh3 = styled.h3<ITopology>`
    ${fonts.text}
    ${fonts.h3}
    color: ${(props) => props.color};
    font-weight: ${(props) => props.fontType};
    font-style: ${(props) => props.fontStyle};
`;
Styledh3.displayName = 'Typogography.h3';

export const Styledh4 = styled.h4<ITopology>`
    ${fonts.text}
    ${fonts.h4}
    color: ${(props) => props.color};
    font-weight: ${(props) => props.fontType};
    font-style: ${(props) => props.fontStyle};
`;
Styledh4.displayName = 'Typogography.h4';

export const Styledh5 = styled.h5<ITopology>`
    ${fonts.text}
    ${fonts.h5}
    color: ${(props) => props.color};
    font-weight: ${(props) => props.fontType};
    font-style: ${(props) => props.fontStyle};
`;
Styledh5.displayName = 'Typogography.h5';

export const Styledtext = styled.p<ITopology>`
    ${fonts.text}
    color: ${(props) => props.color};
    font-weight: ${(props) => props.fontType};
    font-style: ${(props) => props.fontStyle};
`;
Styledtext.displayName = 'Typogography.text';
