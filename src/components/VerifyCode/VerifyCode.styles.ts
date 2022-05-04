import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

const globalStyles = {
    height: '92px',
    spacing: '12px',
    width: '92.8px',
};

const DivStyledWrapper = styled.div`
    ${resetCSS};
    display: flex;
    gap: ${globalStyles.spacing};
    justify-content: flex-start;
    margin: 10px 0px;
    position: relative;
    width: 100%;
    @media only screen and (max-width: 420px) {
        gap: 5px;
    }
`;

const InputStyled = styled.input`
    ${resetCSS};
    height: ${globalStyles.height};
    left: -2000px;
    opacity: 0;
    position: absolute;
    top: 0;
    width: ${globalStyles.width};
`;

const DivStyledItem = styled.input`
    ${resetCSS};
    ${fonts.openSans};
    border-radius: 20px;
    border: 0;
    box-shadow: inset 0 0 0 1px ${color.greyLight};
    color: ${color.blueDark};
    font-size: 18px;
    font-weight: 600;
    height: ${globalStyles.height};
    line-height: ${globalStyles.height};
    padding: 0;
    text-align: center;
    transition: box-shadow 0.2s ease-out;
    width: ${globalStyles.width};
    &::placeholder {
        color: ${color.greyIcons};
        opacity: 1; // firefox
    }
    &:focus {
        box-shadow: inset 0 0 0 2px ${color.blueSky} !important;
    }
    &.is-filled {
        background: ${color.blueLight};
        box-shadow: none;
    }
    &:hover {
        box-shadow: inset 0 0 0 1px ${color.blueSky};
    }
    @media only screen and (max-width: 420px) {
        width: 52px;
        height: 52px;
        line-height: 52px;
        border-radius: 10px;
    }
    /* Firefox */
    caret-color: transparent;
`;

export default {
    DivStyledItem,
    DivStyledWrapper,
    InputStyled,
};
