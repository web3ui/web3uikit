import React from 'react';
import { TableProps } from '.';
import {
GridDiv, ColDiv
} from './Table.styles';
import {CryptoCards} from "../CryptoCards";

const Table: React.FC<TableProps> = ({

}) => {
    return (
        <GridDiv>
            <ColDiv>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)"
                    btnText="View Endpoints"
                    chain="binance"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </ColDiv>
            <ColDiv>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)"
                    btnText="View Endpoints"
                    chain="binance"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </ColDiv>
            <ColDiv>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)"
                    btnText="View Endpoints"
                    chain="binance"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </ColDiv>
            <ColDiv>
                <CryptoCards
                    bgColor="linear-gradient(113.54deg, rgba(217, 166, 54, 0.6) 14.91%, rgba(230, 166, 26, 0.6) 44.27%, rgba(207, 168, 28, 0) 45.98%, rgba(250, 228, 30, 0) 55.76%, rgba(245, 223, 30, 0) 55.76%), linear-gradient(147.17deg, #F5D116 48.73%, #CD9614 98.22%)"
                    btnText="View Endpoints"
                    chain="binance"
                    chainType="Network"
                    onClick={() => {}}
                    settingsIcon="cog"
                />
            </ColDiv>
        </GridDiv>
    )
};

export default Table;
