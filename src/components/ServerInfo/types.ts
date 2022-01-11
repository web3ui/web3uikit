export interface ServerInfoProps {
    /**
     * set id of server info
     */
    id?: string;

    /**
     * set how much data is used by server in kilobytes
     */
    dataUsed: string;

    /**
     * set if server is sleeping
     */
    isSleeping?: boolean;

    /**
     * set name of server
     */
    name: string;

    /**
     * set network of server
     */
    network: "Mainnet" | "Testnet";

    /**
     * set how much user the server has
     */
    numOfUser: string;

    /**
     * set version of server
     */
    version?: string;
}