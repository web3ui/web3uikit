import styled from 'styled-components';

export const DropDownContainer = styled.div`
    width: 16%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 5px;
    margin-right: 7px;
    @media screen and (max-width: 829px) {
        width: 48%;
        margin-right: 0px;
    }
`;

export const DropDownHeader = styled.div`
    width: calc(100% - 2px);
    height: 35px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(248, 247, 247, 0.2);
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transition: 0.2s all;
    &.actived {
        border: 1px solid #fff;
    }
    @media screen and (max-width: 768px) {
        cursor: default;
    }
`;

export const DropDownList = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #16282e;
    border-radius: 8px;
    margin-top: 5px;
    z-index: 2000;
    border: 1px solid gray;
    position: absolute;
    top: 100%;
    /* animation: $dropdown 0.3s ease-in-out; */
    /* @media screen and (max-width: 829px) {
		position: static;
		margin-bottom: 10px;
	} */
`;

export const FilterText = styled.p`
    width: 100%;
    font-size: 15px;
    line-height: 18px;
    color: #d9f4ff;
    padding-left: 15px;
    position: relative;
    &::after {
        content: '>';
        position: absolute;
        right: 2px;
        top: -2px;
        margin-right: 5px;
        transition: 0.2s all;
    }
    &.actived {
        &::after {
            transform: rotate(180deg);
            top: 1px;
        }
    }
`;

export const FilterListText = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
    font-size: 15px;
    line-height: 18px;
    color: #d9f4ff;
    cursor: pointer;
    padding-left: 20px;
    &:hover {
        background-color: rgba(128, 128, 128, 0.4);
    }
    &:first-child {
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }
    &:last-child {
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    }
`;
