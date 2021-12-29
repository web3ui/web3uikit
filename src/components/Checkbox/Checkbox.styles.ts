import resetCSS from "../../styles/reset";
import font from "../../styles/fonts";
import color from "../../styles/colors";

export const inputStyles = `
  ${resetCSS}
  position: absolute;
  top: -30px;
`;

export const labelStyles = `
  ${resetCSS}
  ${font.text}
  display: block;
  overflow: hidden;
  position: relative;
  width: fit-content;
`;

export const labelDisabled = `
  opacity: 50%;
  pointer-events: none;
`;

export const boxStyles = `
  padding-left: 28px;

  &:before,
  &:after {
    border-radius: 5px;
    content: '';
    display: block;
    height: 20px;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: all 0.1s ease-out;
    width: 20px;
  }  

  &:before {
    background-color: ${color.blueLight};
    border: 1px solid ${color.blueSky};
    z-index: 0;
  }

  &:after {
    align-items: center;
    display: flex;
    justify-content: center;
    left: 1px;
    top: 1px;
    z-index: 1;
  }

  &:hover {
    &:before {
      filter: brightness(95%);
    }
  }

  &:active {
    &:before {
      filter: brightness(90%);
    }
  }
`;

export const boxCheckedStyles = `
  &:before {
    background-color: ${color.green};
    border-color: ${color.greenLight};
  }
  &:after {
    background-image: url('/img/svg/tick.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 14px;
  }
`;

export const switchStyles = `
  padding-left: 48px;

	&:before {
    background-color: ${color.greyLight};
    border-radius: 7px;
		content: "";
    display: block;
		height: 14px;
		left: 3px;
    opacity: 0.4;
		position: absolute;
    top: calc(50% - 7px);
    transition: all 0.1s ease-out;
    width: 34px;
	}

  &:after {
    background-color: ${color.blueLight};
    border-radius: 50%;
    border: 1px solid ${color.blue};
    content: "";
    display: block;
		height: 20px;
		left: 0;
		position: absolute;
    top: calc(50% - 11px);
    transition: all 0.1s ease-out;
    width: 20px;
  }

  &:hover {
    &:after {
      filter: brightness(95%);
    }
  }

  &:active {
    &:after {
      filter: brightness(90%);
    }
  }
`;

export const switchOnStyles = `
  &:before {
    background-color: ${color.green};
  }

  &:after {
    background-color: ${color.green};
    border:1px solid ${color.green};
    left: 18px;
  }
`;
