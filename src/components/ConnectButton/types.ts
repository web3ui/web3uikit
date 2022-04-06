export interface ConnectButtonProps {
    /**
     * if true & server is connected & web3 is enabled will automatically try to connect user to the server
     */
    moralisAuth?: boolean;

    /**
     * an optional response message that will be displayed to the user once their sign-in request is successful
     */
    signingMessage?: string;
}
