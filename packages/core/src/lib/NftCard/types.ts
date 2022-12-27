import { ReactNode } from 'react';
import { TCustomize } from '../../interfaces/customize';

export interface INftCardProps {
    /**
     * moralis api result data
     */
    moralisApiResult: {
        token_address: string;
        token_id: string;
        amount: string | null;
        owner_of: string | null;
        token_hash: string | null;
        block_number_minted: string | null;
        block_number: string | null;
        transfer_index: number[] | null;
        contract_type: string | null;
        name: string | null;
        symbol: string | null;
        token_uri?: string | null;
        metadata?: string | null;
        last_token_uri_sync?: string | null;
        last_metadata_sync?: string | null;
        minter_address?: string | null;
        normalized_metadata?: any;
    };

    /**
     * width of the card
     */
    width?: string;

    /**
     * chain name
     */
    chain: string;

    /**
     * custom details component
     */
    customDetails?: ReactNode;

    /**
     * set border for details section
     */
    detailsBorder?: string;

    /**
     * customize style
     */
    customize?: TCustomize;
}
