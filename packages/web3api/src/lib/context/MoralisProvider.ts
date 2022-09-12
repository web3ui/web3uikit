import { createContext } from 'react';

type TMoralisProvider = {
    web3ApiKey: string | null;
};

export const MoralisProvider = createContext<TMoralisProvider>({
    web3ApiKey: null,
});
