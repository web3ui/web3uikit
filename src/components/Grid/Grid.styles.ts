import styled from 'styled-components';
import { IGridProps } from '.';
import { IColBreakpointsConfig, IColProps } from './types';

export const RowDiv = styled.div<IGridProps>`
    display: flex;
    flex-wrap: wrap;
    gap: ${(props) =>
        props.rowGap ? `${props.rowGap}px ${props.colGap}px` : '15px 15px'};
`;

const getConfig = (
    breakPointConfig: object,
    toGet: string,
    span: number,
    props?: any,
): number => {
    if (Object.keys(breakPointConfig).includes(toGet)) {
        console.log('in keys', breakPointConfig[toGet], toGet, props);
        return breakPointConfig[toGet] as number;
    }
    return span;
};

export const ColDiv = styled.div<IColProps>`
    color: white;

    // Small devices (landscape phones, 576px and up)
    @media (max-width: 767px) {
        flex: ${(props) =>
            props.span
                ? `${Math.round(
                      (100 / (props.xs ? props.xs : 0)) *
                          getConfig(
                              props.breakpointsConfig,
                              'xs',
                              props.span,
                              props,
                          ),
                  )}%`
                : '100%'};

        max-width: ${(props) =>
            props.span
                ? `calc(${Math.round(
                      (100 / (props.xs ? props.xs : 0)) *
                          getConfig(
                              props.breakpointsConfig,
                              'xs',
                              props.span,
                              props,
                          ),
                  )}% - ${props.colGap}px)`
                : '100%'};
        background-color: blue;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991px) {
        flex: ${(props) =>
            props.span
                ? `${Math.round(
                      (100 / (props.sm ? props.sm : 0)) *
                          getConfig(props.breakpointsConfig, 'sm', props.span),
                  )}%`
                : '100%'};

        max-width: ${(props) =>
            props.span
                ? `calc(${Math.round(
                      (100 / (props.sm ? props.sm : 0)) *
                          getConfig(props.breakpointsConfig, 'sm', props.span),
                  )}% - ${props.colGap}px)`
                : '100%'};
        background-color: black;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) and (max-width: 1199px) {
        flex: ${(props) =>
            props.span
                ? `${Math.round(
                      getConfig(props.breakpointsConfig, 'md', props.span) *
                          (100 / (props.md ? props.md : 0)),
                  )}%`
                : '100%'};

        max-width: ${(props) =>
            props.span
                ? `calc(${Math.round(
                      (100 / (props.md ? props.md : 0)) *
                          getConfig(props.breakpointsConfig, 'md', props.span),
                  )}% - ${props.colGap}px)`
                : '100%'};
        background-color: grey;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        flex: ${(props) =>
            props.span
                ? `${Math.round(
                      (100 / (props.lg ? props.lg : 0)) *
                          getConfig(props.breakpointsConfig, 'lg', props.span),
                  )}%`
                : '100%'};

        max-width: ${(props) =>
            props.span
                ? `calc(${Math.round(
                      (100 * (props.lg ? props.lg : 0)) /
                          getConfig(props.breakpointsConfig, 'lg', props.span),
                  )}% - ${props.colGap}px)`
                : '100%'};
        background-color: pink;
    }
    ${(props) => props.isFullWidth && `width: 100%;`}
`;
