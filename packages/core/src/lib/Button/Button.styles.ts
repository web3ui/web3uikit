import styled, { css } from 'styled-components';
import { EButtonIcon, EButtonSize, EButtonTheme, IButtonProps } from './types';

const ButtonStyled = styled.button<
  Pick<IButtonProps, 'iconType' | 'theme' | 'isDisabled' | 'size'>
>`
  align-items: center;
  border-radius: 16px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  padding: ${({ size, iconType }) => getPaddingBySizeAndTheme(size, iconType)};
  flex-direction: ${({ iconType }) =>
    iconType === 'trailing' ? 'row-reverse' : 'row'};
  ${({ theme }) => getStyleByTheme(theme)};
  ${({ size }) => getStylesBySize(size)}
  svg {
    display: ${({ iconType }) => (iconType === 'none' ? 'none' : 'block')};
  }
  span {
    display: ${({ iconType }) => iconType === 'iconOnly' && 'none'};
  }
`;

/** @todo add all themes */
const getStyleByTheme = (theme: keyof typeof EButtonTheme) => {
  switch (theme) {
    case 'outline':
      return outline;
    default:
      return primary;
  }
};

export const getIconStylesByTheme = (
  theme: keyof typeof EButtonTheme
): { iconColor: string; onHover: string } => {
  switch (theme) {
    case 'outline':
      return {
        iconColor: '#68738D',
        onHover: 'white',
      };
    default:
      return {
        iconColor: 'white',
        onHover: 'white',
      };
  }
};

const getPaddingBySizeAndTheme = (
  size?: keyof typeof EButtonSize,
  iconType?: keyof typeof EButtonIcon
) => {
  switch (size) {
    case 'large':
      return iconType === 'iconOnly' ? '14px' : '8px 24px';
    case 'small':
      return iconType === 'iconOnly' ? '6px' : '0 8px';
    default:
      return iconType === 'iconOnly' ? '10px' : '4px 16px';
  }
};

const getStylesBySize = (size?: keyof typeof EButtonSize) => {
  switch (size) {
    case 'large':
      return large;
    case 'small':
      return small;
    default:
      return regular;
  }
};

const regular = css`
  font-size: 14px;
  font-weight: 600;
  gap: 4px;
  svg {
    width: 12px;
    height: 12px;
  }
`;

const large = css`
  font-size: 16px;
  font-weight: 600;
  gap: 10px;
  svg {
    width: 12px;
    height: 12px;
  }
`;

const small = css`
  font-size: 14px;
  font-weight: 600;
  gap: 4px;
  svg {
    width: 10px;
    height: 10px;
  }
`;

const primary = css`
  border: 2px solid #7ad9c0;
  background-color: hsla(164, 71%, 44%, 1);
  color: white;

  &:hover {
    background: radial-gradient(
        71.63% 130.21% at 50% 0%,
        #aadcd6 0%,
        rgba(33, 191, 150, 0) 100%
      ),
      linear-gradient(0deg, #21bf96, #21bf96);
  }
  &:focus-visible {
    border-color: #aadcd6;
  }

  &:active {
    background: linear-gradient(
        83.64deg,
        #aadcd6 -9.46%,
        rgba(33, 191, 150, 0) 45.97%,
        #aadcd6 103.7%
      ),
      #21bf96;
  }
`;

const generateStyles = (
  bgColor?: string,
  borderColor?: string,
  fontColor?: string,
  backgroundOnHover?: string,
  onTabBorderColor?: string,
  onPressedBackground?: string,
  onHoverFontColor?: string
) => css`
  border: 2px solid ${borderColor};
  background-color: ${bgColor};
  color: ${fontColor};

  &:hover {
    background: ${backgroundOnHover};
    ${onHoverFontColor && `color: ${onHoverFontColor}`};
  }
  &:focus-visible {
    border-width: 3px;
    border-color: ${onTabBorderColor};
  }

  &:active {
    background: ${onPressedBackground};
  }
`;

const outline = generateStyles(
  'white',
  'hsla(204, 44%, 83%, 1)',
  '#68738D',
  '#041836',
  '#9ECCEA',
  'black',
  'white'
);

export default {
  ButtonStyled,
};
