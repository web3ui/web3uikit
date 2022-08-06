import { Tree, GeneratorCallback } from '@nrwl/devkit';
import { Schema } from './schema';
export interface NormalizedSchema extends Schema {
    name: string;
    fileName: string;
    projectRoot: string;
    projectDirectory: string;
    parsedTags: string[];
    importPath?: string;
}
export declare function addLint(tree: Tree, options: NormalizedSchema): Promise<GeneratorCallback>;
export declare function libraryGenerator(tree: Tree, schema: Schema): Promise<GeneratorCallback>;
export default libraryGenerator;
export declare const librarySchematic: (generatorOptions: Schema) => (tree: any, context: any) => Promise<any>;
