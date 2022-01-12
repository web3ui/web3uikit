import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';

export const SectionStyled = styled.section`
    border: 1px solid ${color.blue};
    border-radius: 20px;
    overflow: hidden;
`;

export const HeaderStyled = styled.header`
    display: flex;
    cursor: pointer;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 8px 12px;

    &:hover {
        background-color: ${color.paleBlue2};
    }
`;

export const HeadingStyled = styled.h4`
    ${resetCSS}
    ${fonts.heading}
    ${fonts.h4}
    line-height: 1;
    padding: 8px 0;
`;

export const DivFlexStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    p {
        ${resetCSS}
        ${fonts.text}
        margin: 0 6px;
    }

    svg {
        margin: 0 6px;
    }

    div {
        margin: 0 6px;
    }
`;

export const ContentDivStyled = styled.div`
    overflow: hidden;
    transition: max-height 0.3s ease-out;

    div {
        padding: 12px 16px 24px;
    }
`;
