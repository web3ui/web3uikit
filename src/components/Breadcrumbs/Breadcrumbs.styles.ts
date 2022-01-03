import resetCSS from "../../styles/reset";
import fonts from "../../styles/fonts";

export const olStyle = `
  ${resetCSS}
  ${fonts.text}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`;
export const navStyle = `
  ${resetCSS}
  ${fonts.textBold}
`;

export const liStyle = `
  ${resetCSS}
  display: list-item;
  user-select: none;
  display: flex;
  align-items: center;
`;

export const separatorStyle = `
  ${resetCSS}
  display: flex;
  user-select: none;
`