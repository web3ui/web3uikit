import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import color, { gradientColors } from '../../styles/colors';
import fonts from '../../styles/fonts';

// Styling Interfaces
interface IStyledTab {
    isActive: boolean;
    isDisabled: boolean;
    lineHeight: number;
}
interface IStyledTabBarParent {
    isVertical: boolean;
}
interface IStyledTabBar {
    haveBackground: boolean;
    isVertical: boolean;
    isWidthAuto?: boolean;
}
interface IStyledBulb extends IStyledTab {
    hasMargin: boolean;
    tabStyle?: string;
}

// Styles
export const StyleTabBarParent = styled.div<IStyledTabBarParent>`
    ${resetCSS}
    ${fonts.text}
    min-height: fit-content;
    display: flex;
    flex-direction: row;
    ${(props) => !props.isVertical && 'flex-direction:column'}
`;

export const StyledTabBar = styled.div<IStyledTabBar>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    max-height: fit-content;
    min-width: fit-content;
    row-gap: 5px;
    ${(props) => props.isVertical && 'flex-direction: column;'}

    ${(props) =>
        props.haveBackground &&
        !props.isVertical &&
        css`
            & > span {
                background-color: ${color.blueCultured};
            }
            & > span:first-child {
                border-radius: 16px 0 0 16px;
            }

            & > span:last-child {
                border-radius: 0 16px 16px 0;
            }
        `};
    ${(props) =>
        props.haveBackground &&
        props.isVertical &&
        css`
            background-color: ${color.blueCultured};
            border-radius: 16px;
        `};
    ${(props) =>
        props.isWidthAuto &&
        css`
            & > span {
                flex-grow: 1 !important;
            }
        `}
`;

export const StyledTabContent = styled.div<IStyledTabBarParent>`
    padding: ${(props) => (props.isVertical ? '0px 11px' : '11px 0px')};
`;

export const StyledTab = styled.div<IStyledTab>`
    transition-duration: 500ms;
    transition-property: border;
    transition-timing-function: ease-in-out;
    margin: 0px 48px 0px 0px;
    padding-bottom: 4px;
    line-height: 24px;
    padding-bottom: 4px;
    margin-bottom: 11px;

    cursor: pointer;
    ${(props) => props.isActive && 'font-weight:600;'};
    ${(props) => props.isActive && 'border-bottom: 2px solid #21BF96;'};
    ${(props) =>
        (props.isActive || props.isDisabled) && 'pointer-events: none;'};
    ${(props) => !props.isActive && `color:${color.greyIcons};`};
    line-height: ${(props) => props.lineHeight && `${props.lineHeight}px`};
    ${(props) => props.isDisabled && `color:${color.greyDisabled};`}
`;

export const BulbTab = styled.div<IStyledBulb>`
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    border-radius: 16px;
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${color.blueCultured};
    border: 2px solid transparent;
    cursor: pointer;
    color: ${color.blue};
    min-width: fit-content;
    ${({ isActive }) =>
        isActive &&
        css`
            border-color: ${color.blueSky};
            background: ${color.white};
        `};
    ${(props) => props.isDisabled && 'pointer-events: none;'};
    ${(props) => props.hasMargin && 'margin-right:6px;'};
    ${(props) =>
        props.isDisabled && `opacity: 0.5; background-color: ${color.white};`};
    line-height: ${(props) => props.lineHeight && `${props.lineHeight}px`};
    &:hover {
        background: ${color.blueLight2};
        ${({ isActive }) =>
            isActive &&
            css`
                background: ${gradientColors.beauBlue};
            `};
    }

    & > span {
        font-weight: 600;
        font-size: 14px;
        text-align: center;
    }
`;
