export declare type FileInputOutput = {
    input: string;
    output: string;
};
export declare type AssetGlob = FileInputOutput & {
    glob: string;
    ignore: string[];
    dot?: boolean;
};
export declare function assetGlobsToFiles(assets: Array<AssetGlob | string>, rootDir: string, outDir: string): FileInputOutput[];
