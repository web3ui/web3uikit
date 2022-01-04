import color from "../../../styles/colors";
import fonts from "../../../styles/fonts";
import resetCSS from "../../../styles/reset";

const initialStyles = `
    ${resetCSS}
    ${fonts.text}
    border-radius: 10px;
    padding: 2px 16px;
    text-align: center;
    width: fit-content;
    background-color: ${color.blueLight};
    color: ${color.blueDark};

    &:hover {
        background-color: #EBEFF9;
    }
`

export const pillStyles = {
    initialStyles
}
