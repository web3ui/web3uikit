import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';

export const olStyle = `
  ${resetCSS}
  ${fonts.semiBold}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`;
export const navStyle = `
  ${resetCSS}
`;

export const liStyle = `
  ${resetCSS}
  display: list-item;
  user-select: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:last-child {
    color: ${color.blueDark};
  }

  &:hover {
    color: ${color.blueDark};
  }
`;

export const separatorStyle = `
  ${resetCSS}
  display: flex;
  user-select: none;
  color: ${color.greyIcons};
  margin: 0 2px;
`;
