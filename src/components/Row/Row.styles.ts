import styled from 'styled-components';
import { IRowProps } from '.';
import fonts from '../../styles/fonts';
import { IColBreakpointsConfig } from './types';

export const RowDiv = styled.div<IRowProps>`
    ${fonts.text}
    display: flex;
    flex-wrap: wrap;
    width: ${(props) => `${props.width && `${props.width}px`} `};
    gap: ${(props) =>
        props.rowGap ? `${props.rowGap}px ${props.colGap}px` : '15px 15px'};
    margin-left: ${(props) => props.colGap && `${props.colGap / 2}px`};
    align-items: ${(props) => props.alignItems && props.alignItems};
    justify-content: ${(props) => props.justifyItems && props.justifyItems};
`;

const getConfig = (
    breakPointConfig: object,
    toGet: string,
    span: number,
): number => {
    if (Object.keys(breakPointConfig).includes(toGet)) {
        return (breakPointConfig as any)[toGet] as number;
    }
    return span;
};

interface IColProps {
    isFullWidth: boolean;
    order: number;
    span: number;
    xs: number;
    lg: number;
    md: number;
    sm: number;
    rowGap: number;
    colGap: number;
    breakpointsConfig: IColBreakpointsConfig;
}

export const ColDiv = styled.div<Required<IColProps>>`
    color: white;
    order: ${(props) => props.order};
    ${fonts.text}
    // xSmall devices (landscape phones, 576px and up)
        @media (max-width: 767px) {
        flex: ${(props) =>
            props.span
                ? `${
                      (100 / (props.xs ? props.xs : 0)) *
                      getConfig(props.breakpointsConfig, 'xs', props.span)
                  }%`
                : '100%'};

        max-width: ${(props) =>
            props.span
                ? `calc(${
                      (100 / (props.xs ? props.xs : 0)) *
                      getConfig(props.breakpointsConfig, 'xs', props.span)
                  }% - ${props.colGap}px)`
                : '100%'};
        ${(props) => props.isFullWidth && `max-width: 100%; flex: 100%;`}
    }

    // sm devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991px) {
        color: black;
        flex: ${(props) =>
            props.span
                ? `${
                      (100 / (props.sm ? props.sm : 0)) *
                      getConfig(props.breakpointsConfig, 'sm', props.span)
                  }%`
                : '100%'};

        max-width: ${(props) =>
            props.span
                ? `calc(${
                      (100 / (props.sm ? props.sm : 0)) *
                      getConfig(props.breakpointsConfig, 'sm', props.span)
                  }% - ${props.colGap}px)`
                : '100%'};
        ${(props) => props.isFullWidth && `max-width: 100%; flex: 100%;`}
    }

    // Meduim(desktops, 992px and up)
    @media (min-width: 992px) and (max-width: 1199px) {
        flex: ${(props) =>
            props.span
                ? `${
                      getConfig(props.breakpointsConfig, 'md', props.span) *
                      (100 / (props.md ? props.md : 0))
                  }%`
                : '100%'};

        max-width: ${(props) =>
            props.span
                ? `calc(${
                      (100 / (props.md ? props.md : 0)) *
                      getConfig(props.breakpointsConfig, 'md', props.span)
                  }% - ${props.colGap}px)`
                : '100%'};
        ${(props) => props.isFullWidth && `max-width: 100%; flex: 100%;`}
    }

    // large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        flex: ${(props) =>
            props.span
                ? `${
                      (100 / (props.lg ? props.lg : 0)) *
                      getConfig(props.breakpointsConfig, 'lg', props.span)
                  }%`
                : '90%'};

        max-width: ${(props) =>
            props.span
                ? `calc(${
                      (100 / (props.lg ? props.lg : 0)) *
                      getConfig(props.breakpointsConfig, 'lg', props.span)
                  }% - ${props.colGap}px )`
                : '90%'};

        ${(props) => props.isFullWidth && `max-width: 100%; flex: 100%;`}
    }
`;
