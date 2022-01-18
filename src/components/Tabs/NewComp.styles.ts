// importing styled to make components and css to make themes
import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';

const transition = css`
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
`;

interface IStyledTabBarParent {
    isVertical: boolean;
}
export const StyleTabBarParent = styled.div<IStyledTabBarParent>`
    ${resetCSS}
    ${fonts.text}
    min-height: fit-content;
    display: flex;
    flex-direction: row;
    ${(props) => !props.isVertical && 'flex-direction:column'}
`;

interface IStyledTabBar {
    haveBackground: boolean;
    isVertical: boolean;
}
export const StyledTabBar = styled.div<IStyledTabBar>`
    display: flex;
    ${(props) => props.isVertical && 'flex-direction: column;'}
    overflow-x: auto;
    max-width: fit-content;
    ${(props) =>
        props.haveBackground &&
        `
 background-color: #f2f6ff;
    border-radius: 16px;`}
`;

export const StyledTabContent = styled.div<IStyledTabBarParent>`
    padding: ${(props) => (props.isVertical ? '0px 11px' : '11px 0px')};
`;

interface IStyledTab {
    isActive: boolean;
    lineHeight: number;
    isDisabled: boolean;
}
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
    ${(props) => props.isActive && `font-weight:600;`};
    ${(props) => props.isActive && `border-bottom: 2px solid #21BF96;`};
    ${(props) =>
        (props.isActive || props.isDisabled) && `pointer-events: none;`};
    ${(props) => !props.isActive && `color:${color.greyIcons};`};
    line-height: ${(props) => props.lineHeight && `${props.lineHeight}px`};
    ${(props) => props.isDisabled && `color:${color.greyDisabled};`}
`;

interface IStyledBulb extends IStyledTab {
    hasMargin: boolean;
}

export const BulbTab = styled.div<IStyledBulb>`
    ${transition}
    font-size: 14px;
    border-radius: 16px;
    padding: 8px 16px 8px 16px;
    background-color: #f2f6ff;
    cursor: pointer;
    color: ${color.blue};
    ${(props) => props.isActive && `border:1px solid ${color.blue};`};
    ${(props) => props.isActive && `background-color: ${color.white};`};
    ${(props) =>
        (props.isActive || props.isDisabled) && `pointer-events: none;`};
    ${(props) => props.hasMargin && 'margin-right:6px;'}
    ${(props) => props.isDisabled && `color:${color.greyDisabled};`}
    line-height: ${(props) => props.lineHeight && `${props.lineHeight}px`};
    &:hover {
        background: #e5edff;
    }
`;
