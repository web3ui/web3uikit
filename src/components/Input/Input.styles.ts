import resetCSS from "../../styles/reset";
import fonts from "../../styles/fonts";
import color from "../../styles/colors";

export const inputStyle = `
  ${resetCSS}
  ${fonts.text}
  border: 1px solid ${color.greyLight};
  border-radius: 16px;
  padding: 16px;
  transition: all 0.3 linear;

  &:hover {
    border-color: ${color.blue};
  }

  &:focus {
    border-color: ${color.blue};

    + label {
      color: ${color.blue};
    }
  }

  &:focus,
  .filled & {
    + label {
      font-size: 14px;
      height: 18px;
      line-height: 1;
      padding: 2px 4px;
      top: 0px;
    }
  }
`;

export const labelStyle = `
  ${resetCSS}
  ${fonts.text}
  background-color: ${color.white};
  height: 24px;
  left: 12px;
  padding: 0 4px;
  pointer-events: none;
  position: absolute;
  top: calc(50% - 8px);
  transition: all 0.1s ease-out;
`;

export const divStyle = `
  padding-top: 8px;
	position: relative;
`;
