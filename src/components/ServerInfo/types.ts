import { Widget } from "../Widget";
export interface ServerInfoProps {
    /**
     * set id of server info
     */
    id?: string;

    /**
     * set if server can be revived
     */
    canRevive?: boolean;


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
    network: "Mainnet" | "Testnet" | "Local";

    /**
     * run function on view dApp click
     */
    onDapp: () => void;

    /**
     * run function on settings click
     */
    onSettings: () => void;

    /**
     * server delete function
     */
    onDelete: () => void;

    /**
     * server restart function
     */
    onRestart: () => void;

    /**
     * revive function
     */
    onRevive: () => void;

    /**
     * server update function
     */
    onUpdate: () => void;

    /**
     * run function when Database button is clicked
     */
    onDatabase: () => void;

    /**
     * run wake up function
     */
    onWakeUp: () => void;

    /**
     * set version of server
     */
    version?: string;

    /**
     * set an Array of <Widget /> children that represent informations
     */
    widgets: Array<React.ReactElement<typeof Widget>>
}