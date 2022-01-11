export interface ServerInfoProps {
    /**
     * set id of server info
     */
    id?: string;

    /**
     * set name of server
     */
    name?: string;

    /**
     * set version of server
     */
    version?: string;

    /**
     * set network of server
     */
    network?: "Mainnet" | "Testnet";

    /**
     * set if server is sleeping
     */
    isSleeping?: boolean;
}