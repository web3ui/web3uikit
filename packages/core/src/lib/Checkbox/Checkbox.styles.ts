import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { CheckboxProps } from './types';

const inputStyles = css`
    ${resetCSS};
    height: 10px;
    left: -12px;
    position: absolute;
    top: 0;
    width: 10px;
`;

const labelStyles = css`
    ${resetCSS};
    ${fonts.text};
    color: ${color.blue70};
    cursor: pointer;
    display: block;
    font-size: 18px;
    overflow: hidden;
    position: relative;
    width: fit-content;
`;

const labelDisabled = css`
    opacity: 50%;
    pointer-events: none;
`;

type TCheckboxStyles = Pick<CheckboxProps, 'align'>;

const getBoxPositionStyles = ({ align }: TCheckboxStyles) => {
    switch (align) {
        case 'center':
            return css`
                &:before,
                .after {
                    top: 50%;
                    transform: translateY(-50%);
                }
            `;
        case 'bottom':
            return css`
                &:before {
                    bottom: 0px;
                }

                .after {
                    bottom: 1px;
                }
            `;
        default:
            return css`
                &:before {
                    top: 1px;
                }

                .after {
                    top: 2px;
                }
            `;
    }
};

const boxStyles = (props: TCheckboxStyles) => css`
    padding-left: 28px;
    &:before,
    .after {
        border-radius: 5px;
        content: '';
        display: block;
        height: 20px;
        left: 0;
        pointer-events: none;
        position: absolute;
        transition: all 0.1s ease-out;
        width: 20px;
    }

    &:before {
        background-color: ${color.aero10};
        border: 1px solid ${color.navy30};
        z-index: 0;
    }

    .after {
        align-items: center;
        display: flex;
        justify-content: center;
        left: 1px;
        opacity: 0;
        z-index: 1;
    }
    ${getBoxPositionStyles(props)};
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

const boxCheckedStyles = css`
    &:before {
        background-color: ${color.mint40};
        border-color: ${color.mint20};
    }
    .after {
        opacity: 1;
    }
`;

const getSwitchPositionStyles = ({ align }: TCheckboxStyles) => {
    switch (align) {
        case 'top':
            return css`
                &:before,
                &:after {
                    top: 14px;
                }
            `;

        case 'bottom':
            return css`
                &:before,
                &:after {
                    top: calc(100% - 14px);
                }
            `;
        default:
            return css`
                &:before,
                &:after {
                    top: 50%;
                    transform: translateY(-50%);
                }
            `;
    }
};

const switchStyles = (props: TCheckboxStyles) => css`
    padding-left: 48px;

    &:before {
        background-color: ${color.gray30};
        border-radius: 7px;
        content: '';
        display: block;
        height: 14px;
        left: 3px;
        opacity: 0.4;
        position: absolute;
        top: calc(50%);
        transform: translateY(-50%);
        transition: all 0.1s ease-out;
        width: 34px;
    }

    &:after {
        background-color: ${color.aero10};
        border-radius: 50%;
        border: 1px solid ${color.navy40};
        content: '';
        display: block;
        height: 20px;
        left: 0;
        position: absolute;
        top: calc(50%);
        transform: translateY(-50%);
        transition: all 0.1s ease-out;
        width: 20px;
    }
    ${getSwitchPositionStyles(props)}
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

const switchOnStyles = css`
    &:before {
        background-color: ${color.mint40};
    }

    &:after {
        background-color: ${color.mint40};
        border: 1px solid ${color.mint40};
        left: 18px;
    }
`;

const StyledInput = styled.input<Pick<CheckboxProps, 'layout'>>`
    ${inputStyles}
`;

const StyledLabel = styled.label<
    Pick<CheckboxProps, 'layout' | 'checked' | 'disabled' | 'align'>
>`
    ${labelStyles}
    ${(p) => p.disabled && labelDisabled}
    ${(p) => p.layout === 'box' && boxStyles({ align: p.align })}
    ${(p) => p.layout === 'box' && p.checked && boxCheckedStyles}
    ${(p) => p.layout === 'switch' && switchStyles({ align: p.align })}
    ${(p) => p.layout === 'switch' && p.checked && switchOnStyles};

`;

const SpanStyled = styled.span<{ isHidden: boolean }>`
    ${(props) =>
        props.isHidden &&
        css`
            visibility: collapse;
        `}
`;

export default { StyledInput, StyledLabel, SpanStyled };
