import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '.';
import { MoralisProvider } from 'react-moralis';
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const MORALIS_APP_ID = 'Ee6dXw6BMrIwvZCToiliDH2qZaIipi1RIN2ODI3v';
const MORALIS_SERVER_URL = 'https://inlxtebatbqn.usemoralis.com:2053/server';

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <MoralisProvider appId={MORALIS_APP_ID} serverUrl={MORALIS_SERVER_URL}>
            <BrowserRouter basename="/">
                <App />
            </BrowserRouter>
        </MoralisProvider>
    </StrictMode>,
);
