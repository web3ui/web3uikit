import { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';

const fieldsetStyles = css`
    ${resetCSS}
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const legendStyles = css`
    ${resetCSS}
    ${fonts.heading}
    ${fonts.h3}
    color: ${color.grey};
    display: block;
    margin-bottom: 4px;
`;

const labelStyles = css`
    ${resetCSS}
    ${fonts.heading}
    ${fonts.text}
    align-content: center;
    color: ${color.greyDark};
    display: flex;
    line-height: 20px;
    margin-bottom: 12px;
    padding-left: 28px;
    position: relative;

    &:before {
        background-color: ${color.blueLight};
        border-radius: 50%;
        border: 1px solid ${color.blueSky};
        content: '';
        display: block;
        height: 18px;
        left: 0;
        position: absolute;
        top: 0;
        transition: all 0.1s ease-out;
        width: 18px;
    }

    &:after {
        background-color: ${color.white};
        border-radius: 50%;
        content: '';
        display: block;
        height: 8px;
        left: 6px;
        opacity: 0;
        position: absolute;
        top: 6px;
        transition: all 0.2s ease-out;
        width: 8px;
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

const inputStyles = css`
    position: absolute;
    left: -100px;

    &:checked {
        & + label {
            &:before {
                background-color: ${color.green};
                border-color: ${color.greenLight};
            }
            &:after {
                opacity: 1;
            }
        }
    }
`;

const styles = {
    fieldsetStyles,
    inputStyles,
    labelStyles,
    legendStyles,
};

export default styles;
