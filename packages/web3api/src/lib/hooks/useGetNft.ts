import { useContext, useEffect, useState } from 'react';
import { MoralisProvider } from '../context/MoralisProvider';

export const useGetNftById = ({
    address,
    tokenId,
    chain,
}: {
    address: string;
    tokenId: string;
    chain: string;
}) => {
    const { web3ApiKey } = useContext(MoralisProvider);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNFTs = (key: string) => {
            setLoading(true);
            const options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-API-Key': web3ApiKey as string,
                },
            };

            fetch(
                `https://deep-index.moralis.io/api/v2/nft/${address}/${tokenId}?chain=${chain}&format=decimal`,
                options,
            )
                .then((response) => response.json())
                .then((response) => setData(response))
                .catch((err) => setError(err))
                .finally(() => setLoading(false));
        };

        if (web3ApiKey) {
            fetchNFTs(web3ApiKey);
        } else {
            setError('Invalid web3Apikey!');
        }
    }, []);

    return { loading, data, error };
};
