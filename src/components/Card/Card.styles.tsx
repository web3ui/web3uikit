const initialStyles = `
    width: 242px;
    height: fit-content;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(48, 71, 105, 0.1);
    border-radius: 20px;
    display: grid;
    padding: 10px;
    position: relative;

    div.tooltip-text {
        padding: 8px 12px;
        background: #112F5C;
        border-radius: 4px;
        font-size: 10px;
        color: white;
    }
`

const moduleDefaultInactive = `
    &:hover {
        border: 2px solid #9ECCEA;
        box-sizing: border-box;
    }
`

const cardHead = ` 
    height: 20px;
    svg.tooltip-icon {
        position: absolute;
        top: 10px;
        right: 10px;
    }
`

const moduleComingSoon = `
    background: radial-gradient(58.41% 49.8% at 49.83% 50.2%, #FFFFFF 0%, #F1FAFF 100%), #FFFFFF;
`

const selected = `
    border: 2px solid #21BF96;
`


export const cardStyles = {
    initialStyles,
    moduleDefaultInactive,
    moduleComingSoon,
    cardHead,
    selected
}