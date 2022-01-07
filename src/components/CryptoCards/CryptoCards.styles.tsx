import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import { css } from 'styled-components';
import { getShade } from '../../styles/colors';

const borderStyle = css`
    ${resetCSS}
    height: 336px;
    width: 265px;
    left: 20px;
    top: 20px;
    border-radius: 16px;
    padding: 24px, 40px, 24px, 40px;
    border: 1px solid ${getShade('light', 10)};
    box-sizing: border-box;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 40px;
    position: absolute;
    width: 265px;
    height: 336px;
    left: 20px;
    top: 20px;
    overflow: hidden;
    :after {
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
            background: rgba(4, 24, 54, 0.2);
        }
    }
`;

const buttonStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 24px 8px 16px;
    position: static;
    width: 187px;
    height: 40px;
    left: 39px;
    top: 268px;
    background: rgba(4, 24, 54, 0.2);
    border-radius: 16px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 16px 0px;
    overflow: hidden;
`;

const btnTxtStyle = css`
    width: 119px;
    height: 24px;
    left: 44px;
    top: 8px;
    ${fonts.openSans};
    ${fonts.textBold};
    ${fonts.h5};
    line-height: 24px;
    color: ${color.white};
    overflow: hidden;
    word-break: break-all;
`;

const infoStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    position: static;
    width: 162px;
    height: 224px;
    left: 51.5px;
    top: 28px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 16px 0px;
`;

const chainSpanStyle = css`
    position: static;
    width: 162px;
    left: calc(50% - 162px / 2);
    top: 71.43%;
    bottom: 0%;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
`;

const networkInfoHolder = css`
    color: ${color.white};
    text-align: center;
    height: 64px;
    width: 100%;
    position: static;
    left: calc(50% - 162px / 2);
    top: 71.43%;
    bottom: 0%;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
    overflow: hidden;
`;

const chainNameStyle = css`
    ${fonts.montserrat};
    ${fonts.textBold500};
    font-size: 32px;
    margin: 0;
    overflow: hidden;
    height: 50%;
    word-break: break-all;
`;

const networkStyle = css`
    ${fonts.openSans};
    ${fonts.textBold700};
    line-height: 36px;
    font-size: 20px;
    margin: 0;
    height: 36px;
    overflow: hidden;
    word-break: break-all;
`;

const imageBoxStyle = css`
    position: static;
    width: 120px;
    height: 160px;
    left: 21px;
    top: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

const logo = css`
    height: 136px;
    width: 82px;
    left: 19px;
    top: 12px;
    border-radius: 0px;
`;

export const cryptoCardStyles = {
    borderStyle,
    buttonStyle,
    btnTxtStyle,
    infoStyle,
    chainSpanStyle,
    networkStyle,
    chainNameStyle,
    networkInfoHolder,
    imageBoxStyle,
    logo,
};
