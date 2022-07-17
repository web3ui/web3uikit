export interface IPFSInputProps {
    /**
     * Set theme  either 'textOnly' or 'withIcon'
     */
    theme?: 'textOnly' | 'withIcon';
    /**
     * Set the nature of upload either ipfs or non-ipfs using boolean
     */
    saveToIPFS?: boolean;
    /**
     * Set name of file to be uploaded
     */
    fileName?: string;
    /**
     * Set the type of file for eg: "image/jpeg"
     */
    type?: string;
    /**
     * get back the information regarding upload and file data using onFinish()
     */
    onFinish?: (value: any) => void;
}
