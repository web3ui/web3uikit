import color from "src/styles/colors";

const initialStyles = `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 20px;
    font-size: 14px;
    height: 24px;
    width: fit-content; 
    padding: 0px 20px;
`

const regular = `
    background: ${color.blueLight};
`

const activeStatus = `
    svg {
        padding-right: 5px;
    }
    background: #EBF9F5;
    color: ${color.green}
`

const inactiveStatus = `
    background: ${color.blueLight};
`

const discount = `
    border-radius: 30px;
    height: 32px;
    width: 32px;
    padding: 0px 4px;
    font-size: 12px;
    align-items: center;
    background: ${color.green};
    color: ${color.white};
`

const coloredGreen = `
    background: #EBF9F5;
    color: ${color.green}
`

const coloredRed = `
    background: #FDF0F0;
    color: ${color.red}
`

const coloredGray = `
    background: #E8EAED;
    color: ${color.blueDark}
`

const coloredYellow = `
    background: #FEF9EE;
    color: ${color.yellow}
`

const coloredBlue = `
    background: #EEF6FB;
    color: #51A5DA;
`

const coloredPurple = `
    background: #F3EEFB;
    color: #8851DA;
`

const coloredPink = `
    background: #FDF0FA;
    color:  #DA51BE;
`

export const tagStyles = {
    initialStyles,
    inactiveStatus,
    activeStatus,
    discount,
    regular,
    coloredGreen,
    coloredRed,
    coloredGray,
    coloredYellow,
    coloredBlue,
    coloredPurple,
    coloredPink
}
