import { DecoratorFn } from '@storybook/react';
import { MoralisProvider } from '../context/MoralisProvider';

let MORALIS_WEB3_API_KEY: string | null | undefined = null;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //@ts-ignore
    MORALIS_WEB3_API_KEY = import.meta.env.STORYBOOK_MORALIS_WEB3_API_KEY;
} else {
    MORALIS_WEB3_API_KEY = process.env.STORYBOOK_MORALIS_WEB3_API_KEY ?? '';
}

export const moralisContext: DecoratorFn = (storyFn) => {
    return (
        <>
            {MORALIS_WEB3_API_KEY ? (
                <MoralisProvider.Provider
                    value={{ web3ApiKey: MORALIS_WEB3_API_KEY }}
                >
                    {storyFn()}
                </MoralisProvider.Provider>
            ) : (
                <>
                    <p>This component requires your Moralis web3Api key!</p>
                    <p>
                        Rename .env.example to .env in the main folder and
                        provide your web3api key from moralis Example: <br />
                        STORYBOOK_MORALIS_WEB3_API_KEY = xxxxxxxxxxxx
                    </p>
                    <p>After adding .env run pnpm run storybook again</p>
                </>
            )}
        </>
    );
};
