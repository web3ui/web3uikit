export interface ConnectButtonProps {
    /**
     * name on the button, by default it is 'Connect Wallet'
     */
    name: string;

    /**
     * an optional chain id of the blockchain that the web3 wallet is connected to
     */
    chainId?: number;

    /**
     * if true & server is connected & web3 is enabled will automatically try to connect user to the server
     */
    moralisAuth?: boolean;

    /**
     * an optional response message that will be displayed to the user once their sign-in request is successful
     */
    signingMessage?: string;

    /**
     *  if true & connected to ethereum mainnet, the address will resolve to the ENS name
     */
    resolveAddress?: boolean;
}
