import { PopupStoreChannelHandlers } from "./interfaces";
export default class PopupStoreChannel {
    private handleLogout;
    private handleAccountImport;
    private handleNetworkChange;
    private handleSelectedAddressChange;
    private instanceId;
    constructor({ instanceId, handleLogout, handleAccountImport, handleNetworkChange, handleSelectedAddressChange, }: {
        instanceId: string;
        handleLogout: PopupStoreChannelHandlers["handleLogout"];
        handleAccountImport: PopupStoreChannelHandlers["handleAccountImport"];
        handleNetworkChange: PopupStoreChannelHandlers["handleNetworkChange"];
        handleSelectedAddressChange: PopupStoreChannelHandlers["handleSelectedAddressChange"];
    });
    setupStoreChannels(): void;
    private logoutChannel;
    private importAccountChannel;
    private networkChangeChannel;
    private selectedAddressChangeChannel;
}
