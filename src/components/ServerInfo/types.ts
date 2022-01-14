import { Widget } from "../Widget";
export interface ServerInfoProps {
    /**
     * set id of server info
     */
    id?: string;

    /**
     * set name of server
     */
    name: string;

    /**
     * set network of server
     */
    network: "Mainnet" | "Testnet" | "Local";

    /**
     * set functions of buttons if server is alive
     */
    isAlive: isAlive;

    /**
     * set wakeup type if server is sleeping
     */
    isSleeping: isSleeping;

    /**
     * set revive type if server is sleeping
     */
    canRevive: canRevive;

    /**
     * set version of server
     */
    version: string;

    /**
     * set an Array of <Widget /> children that represent informations
     */
    widgets: Array<React.ReactElement<typeof Widget>>
}

type isAlive = {
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
     * server update function
     */
    onUpdate: () => void;

    /**
     * run function when Database button is clicked
     */
    onDatabase: () => void;
}

type isSleeping = {
    onWakeUp: () => void;
}

type canRevive = {
    /**
     * revive function
     */
    onRevive: () => void;
}