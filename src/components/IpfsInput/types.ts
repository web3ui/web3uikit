export interface IpfsInputprops {
    /**
     * Set theme  either 'textOnly' or 'withIcon'
     */
    Theme?: 'textOnly' | 'withIcon';
    SaveToIpfs?: boolean;
    FileName?: string;
    Type?: string;
    OnFinish: (value: any) => void;
}
