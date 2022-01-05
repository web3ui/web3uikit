import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

const initialStyles = `
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    background: #112F5C;
    border-radius: 20px;
    color: white;
    display: flex;
    height: 5%;
    max-width: 25%;
    min-width: 270px;
    padding: 16px;
`;

const box = `
    display: grid;
    margin-left: 10px;
    width: 100%;
`;

const message = `
${fonts.ibm}
${fonts.textSmall}
color: ${color.grey};
`;

const title = `
    ${fonts.textBold}
    margin: 0;
`;

const flex = `
    display: flex;
    justify-content: space-between;
`;

export const notificationStyles = {
  box,
  flex,
  initialStyles,
  message,
  title,
};
