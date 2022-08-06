import { INodeDetails, NodeDetailManagerParams } from "./interfaces";
declare class NodeDetailManager {
    static PROXY_ADDRESS_MAINNET: string;
    static PROXY_ADDRESS_ROPSTEN: string;
    static PROXY_ADDRESS_POLYGON: string;
    static NODE_DETAILS_MAINNET: INodeDetails;
    private _currentEpoch;
    private _torusNodeEndpoints;
    private _torusNodePub;
    private _torusIndexes;
    private nodeListAddress;
    private updated;
    private nodeListContract;
    constructor({ network, proxyAddress }?: NodeDetailManagerParams);
    get _nodeDetails(): INodeDetails;
    getNodeDetails({ verifier, verifierId }: {
        verifier: string;
        verifierId: string;
    }): Promise<INodeDetails>;
}
export default NodeDetailManager;
