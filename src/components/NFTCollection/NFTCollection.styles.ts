import styled from 'styled-components';
import color from '../../styles/colors';
import resetCSS from '../../styles/reset';

const DivStyled = styled.div`
    ${resetCSS};
    margin: auto;
`;

const DivStyledCardContainer = styled.div`
    ${resetCSS};
    background: ${color.white};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: auto;
    width: 90%;
    @media only screen and (max-width: 600px) {
        width: 80%;
    }
`;
DivStyledCardContainer.displayName = 'NftCollectionCard';

const DivStyledCardContent = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin: 4px 0;
    padding: 0px 10px;
    a {
        text-decoration: none;
    }
    a:hover > span {
        color: ${color.blue};
    }
    #name {
        word-break: break-all;
    }
`;

const DivStyledCardFooter = styled.div`
    border-radius: 0 0 20px 20px;
    border-top: 2px solid;
    display: flex;
    height: fit-content;
    margin-top: auto;
    padding: 10px;
`;

const SpanStyled = styled.span`
    ${resetCSS};
    background-color: ${color.greyDisabled};
    background-size: cover;
    background-position: center;
    border-radius: 20px 20px 0 0;
    height: 300px;
    max-width: 100%;
`;
SpanStyled.displayName = 'SpanStyled';

const SectionStyled = styled.section`
    ${resetCSS};
    display: block;
`;
SectionStyled.displayName = 'NftCollection';

export {
    DivStyled,
    DivStyledCardContainer,
    DivStyledCardContent,
    DivStyledCardFooter,
    SectionStyled,
    SpanStyled,
};
