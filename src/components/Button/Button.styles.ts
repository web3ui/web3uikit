import color, { getShade } from "../../styles/colors";
import resetCSS from "../../styles/reset";
import fonts from "../../styles/fonts";

// the default styles for any button
const initialStyles = `
  ${resetCSS}
	${fonts.text}
  align-items: center;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  justify-content: center;
  overflow: hidden;
  position: relative;
  text-align: left;
  transition: all 0.2s ease;

  span {
    pointer-events: none;
    z-index: 1;
  }

  svg {
    height: 20px;
    pointer-events: none;
    width: 20px;
    z-index: 1;
  }

  :after {
    background-color: rgba(0, 0, 0, 0);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: all 0.3s ease;
    width: 100%;
    z-index: 0;
  }

  :hover {
    :after {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  :active {
    border-color: ${color.blue};
  }

  :disabled {
    opacity: 50%;
    pointer-events: none;
  }
`;

// theme = regular | primary | outline
const regular = `
  background-color: ${color.blueLight};
  border-color: ${color.blueLight};
  color: ${color.blue};

  :active {
    border-color: ${color.blue};
  }

  svg {
    fill: ${color.blue};
  }
`;
const primary = `
  background-color: ${color.green};
  border-color: ${color.greenLight};
  color: ${color.white};

  :active {
    border-color: ${color.greenLight};
  }

  svg {
    fill: ${color.white};
  }
`;
const outline = `
  background-color: ${color.white};
  border-color: ${color.blueLight};
  color: ${color.blue};

  :hover {
    background-color: ${color.blueDark};
    color: ${color.white};

    svg {
      fill: ${color.white};
    }
  }

  :active {
    border-color: ${color.blue};
  }

  svg {
    fill: ${color.blue};
  }
`;

// theme = colored common shades
const coloredShades = `
:after {
  background-color: ${getShade("light", 90)};
}

:hover {
  :after {
    background-color: ${getShade("light", 70)};
  }
}

:active {
  :after {
    background-color: ${getShade("light", 50)};
  }
}
`;

// theme = colored
const coloredRed = `
  background-color: ${color.red};
  border-color: ${color.red};
  color: ${color.red};

  svg {
    fill: ${color.red};
  }

  ${coloredShades}
`;
const coloredGreen = `
  background-color: ${color.green};
  border-color: ${color.green};
  color: ${color.green};

  svg {
    fill: ${color.green};
  }

  ${coloredShades}
`;
const coloredBlue = `
  background-color: ${color.blue};
  border-color: ${color.blue};
  color: ${color.blue};

  svg {
    fill: ${color.blue};
  }

  ${coloredShades}
`;
const coloredYellow = `
  background-color: ${color.yellow};
  border-color: ${color.yellow};
  color: ${color.yellow};

  svg {
    fill: ${color.yellow};
  }

  ${coloredShades}
`;

// if icon styles
const iconLeading = `
  flex-direction: row;

  svg {
    margin-right: 8px;
  }
`;
const iconTrailing = `
  flex-direction: row-reverse;

  svg {
    margin-left: 8px;
  }
`;
const iconOnly = `
  align-items: center;
  border-radius: 12px;
  border-width: 0px;
  display: flex;
  height: 32px;
  justify-content: center;
  padding: 0;
  text-indent: -99999px;
  width: 32px;
`;

// size settings
const sizeSmall = `
  border: none;
  font-size: 13px;
  padding: 2px 12px;
`;
const sizeRegular = `
  font-size: 14px;
  padding: 4px 16px;
`;
const sizeLarge = `
  border-width: 4px;
  font-size: 16px;
  padding: 4px 20px;
`;

const buttonStyles = {
	coloredBlue,
	coloredGreen,
	coloredRed,
	coloredYellow,
	iconLeading,
	iconOnly,
	iconTrailing,
	initialStyles,
	outline,
	primary,
	regular,
	sizeLarge,
	sizeRegular,
	sizeSmall,
};

export default buttonStyles;
