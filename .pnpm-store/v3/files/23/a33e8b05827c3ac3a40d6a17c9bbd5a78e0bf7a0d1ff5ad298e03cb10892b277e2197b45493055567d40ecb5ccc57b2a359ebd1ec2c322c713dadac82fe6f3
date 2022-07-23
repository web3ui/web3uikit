/**
 * Copied from https://github.com/storybookjs/react-docgen-typescript-plugin/blob/74bb959f468fd6dee7cbc7c8b68cc01e4bcb343c/src/generateDocgenCodeBlock.ts
 * But refactored to remove deprecated functions.
 **/
import type { ComponentDoc } from "react-docgen-typescript";
import { SourceMap } from "magic-string";
export interface GeneratorOptions {
    filename: string;
    source: string;
    componentDocs: ComponentDoc[];
    docgenCollectionName: string | null;
    setDisplayName: boolean;
    typePropName: string;
}
export declare function generateDocgenCodeBlock(options: GeneratorOptions): {
    code: string;
    map: SourceMap;
};
