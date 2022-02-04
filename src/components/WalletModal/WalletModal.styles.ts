import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';

const WrapperStyled = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 50%;
    margin-left: -50vw;
    pointer-events: auto;
    position: fixed;
    top: 0px;
    transition: opacity 0.1s ease-in-out 0s;
    width: 100vw;
    z-index: 10;
`;

const ModalStyled = styled.div`
    /* display: flex;
    flex-direction: column; */
    background-color: ${color.white};
    border-radius: 20px;
    max-width: 568px;
    width: 100%;
    margin: 10px;
    /* min-width: fit-content; */
`;

const TitleStyled = styled.h3`
    ${fonts.semiBold};
    color: ${color.blue};
    font-size: 22px;
`;

const HeaderStyled = styled.div`
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
    /* gap: 5px; */
    width: 100%;
    overflow: hidden;
    /* min-width: fit-content; */
`;

const WalletCardStyled = styled.div`
    align-items: center;
    border-radius: 20px;

    display: flex;
    padding: 24px 80px;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: ${color.blueLight};
    }

    &:active {
        background-color: ${color.blueLight2};
    }
`;

const GridItemStyled = styled.div`
    border: 1px solid rgba(195, 195, 195, 0.14);
    padding: 4px;
    /* width: 100%; */
`;

const WalletLogo = styled.img`
    height: 50px;
    align-self: center;
    margin-bottom: 8px;
`;

const WalletNameStyled = styled.span`
    ${fonts.semiBold};
    color: ${color.blue};
    font-size: 18px;
`;

export default {
    WrapperStyled,
    WalletCardStyled,
    GridItemStyled,
    WalletLogo,
    HeaderStyled,
    WalletNameStyled,
    GridStyled,
    ModalStyled,
    TitleStyled,
};
