import { color } from '@web3uikit/styles';
import React from 'react';
import { getEllipsisTxt } from '../../utils/utils';
import { CopyButton } from '../CopyButton';
import TruncateString from '../Credentials/components/TruncateString';
import { INftCardProps } from './types';

const NftDetails: React.FC<{
    data: INftCardProps['moralisApiResult'];
    chain: INftCardProps['chain'];
}> = ({ data, chain }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Contract Address</th>
                    <td className="address">
                        {getEllipsisTxt(data?.token_address, 4)}{' '}
                        <CopyButton text={data?.token_address} iconSize={20} />
                    </td>
                </tr>
                {data?.owner_of && (
                    <tr>
                        <th>Owner Address</th>
                        <td className="address">
                            {getEllipsisTxt(data.owner_of, 4)}{' '}
                            <CopyButton text={data?.owner_of} iconSize={20} />
                        </td>
                    </tr>
                )}
                <tr>
                    <th>Token Id</th>
                    <td className="card-text">
                        <TruncateString
                            text={data?.token_id}
                            fontSize="16px"
                            textColor={color.blueGray50}
                        />
                    </td>
                </tr>
                <tr>
                    <th>Symbol</th>
                    <td>{data.symbol}</td>
                </tr>
                <tr>
                    <th>Chain</th>
                    <td>{chain}</td>
                </tr>
                {data?.last_metadata_sync && (
                    <tr>
                        <th>Last Synced</th>
                        <td>
                            {new Date(data?.last_metadata_sync)
                                .toLocaleDateString()
                                .toString()}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default NftDetails;
