import styled from 'styled-components';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';

const WrapperStyled = styled.div`
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    pointer-events: auto;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 10;
`;

const ModalStyled = styled.div`
    background-color: ${color.white};
    border-radius: 20px;
    box-shadow: 0 4px 10px rgba(48, 71, 105, 0.1);
    display: flex;
    flex-direction: column;
    margin: 10px;
    max-height: 98%;
    max-width: 568px;
    width: 100%;
`;

const TitleStyled = styled.span`
    ${fonts.semiBold};
    color: ${color.blue};
    font-size: 22px;
`;

const HeaderStyled = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 12px;
`;

const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    overflow-y: auto;
    width: 100%;

    &::-webkit-scrollbar {
        background: none;
        height: 0;
        width: 14px;
    }
    &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: ${color.greyIcons};
        border-radius: 30px;
        border: 3px solid transparent;
    }
    &::-webkit-scrollbar-button {
        height: 5px;
    }
    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`;

const WalletCardStyled = styled.div`
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;

    @media (max-width: 400px) {
        padding: 8px;
    }

    &:hover {
        background-color: ${color.blueLight};
    }

    &:active {
        background-color: ${color.blueLight2};
    }
`;

const GridItemStyled = styled.div`
    border: 1px solid rgba(195, 195, 195, 0.13);
    padding: 4px;
`;

const WalletLogo = styled.div`
    align-self: center;
    height: 40px;
    width: fit-content;
    margin-bottom: 8px;
    pointer-events: none;
`;

const WalletNameStyled = styled.span`
    ${fonts.semiBold};
    color: ${color.blue};
    font-size: 18px;
`;

export default {
    GridItemStyled,
    GridStyled,
    HeaderStyled,
    ModalStyled,
    TitleStyled,
    WalletCardStyled,
    WalletLogo,
    WalletNameStyled,
    WrapperStyled,
};
