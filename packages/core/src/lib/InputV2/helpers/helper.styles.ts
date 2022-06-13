import { css } from 'styled-components';
import { color } from '@web3uikit/styles';
import { StyleProps } from '../Input.styles';

const getLabelStyles = ({ label }: StyleProps) => {
    return css`
        transition: all 0.1s ease-out;
        &:focus-within {
            outline: 2px solid ${color.blue};
            label {
                font-weight: 600;
                color: ${color.blue};
            }
        }
        // On input focus
        input:focus + label {
            ${labelUpPosition}
        }
        //To change label position if input has value - NOTE: set placeholder default value to ' '
        input:not(:focus) {
            &:not(:placeholder-shown) + label {
                ${labelUpPosition}
            }
        }
        //to hide placeholder when label is present
        input:placeholder-shown {
            &:not(:focus) {
                ::placeholder {
                    ${label && `color: transparent`}
                }
            }
        }
    `;
};

const getSizeStyles = ({ size }: StyleProps) => {
    switch (size) {
        case 'large':
            return css`
                height: 56px;
                padding: 14px 16px;
                & > label {
                    top: 15px;
                }
            `;
        case 'regular':
        default:
            return css`
                height: 40px;
                padding: 8px 16px;
                & > label {
                    top: 8px;
                }
            `;
    }
};

const getStateStyles = ({ state }: StyleProps) => {
    switch (state) {
        case 'initial':
            return css`
                outline-color: ${color.greyLight};
                &:hover {
                    outline-color: ${color.blueSky};
                    label {
                        color: ${color.blue};
                    }
                }
                svg {
                    color: ${color.grey};
                }
            `;
        case 'filled':
            return css`
                outline: 2px solid ${color.blueSky};
                &:hover,
                label {
                    color: ${color.blue};
                    outline-color: ${color.blueSky};
                }

                svg {
                    color: ${color.blue};
                }
            `;
        case 'disabled':
            return css`
                outline: 1px solid ${color.greyLight};
                &:hover,
                label,
                * {
                    color: ${color.grey};
                    outline-color: ${color.greyLight};
                    font-weight: 400;
                    cursor: not-allowed;
                }
                svg {
                    color: ${color.greyDisabled};
                }
            `;
        case 'confirmed':
            return css`
                outline: 2px solid ${color.green};
                &:hover,
                label {
                    color: ${color.green};
                    outline-color: ${color.green};
                }
                div > svg {
                    color: ${color.grey};
                }
            `;
        case 'error':
            return css`
                outline: 1px solid ${color.red};
                &:hover,
                label {
                    outline-color: ${color.red};
                    color: ${color.red};
                }
                svg {
                    color: ${color.grey};
                }
            `;
    }
};

const labelUpPosition = css`
    font-size: 14px;
    height: 18px;
    line-height: 1;
    padding: 2px 4px;
    top: -13px;
    left: 12px;
`;

export { labelUpPosition, getLabelStyles, getStateStyles, getSizeStyles };
