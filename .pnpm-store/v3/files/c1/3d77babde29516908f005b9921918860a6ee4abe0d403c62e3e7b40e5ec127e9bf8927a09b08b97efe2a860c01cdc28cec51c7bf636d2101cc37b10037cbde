import { GeneratorCallback, Tree } from '@nrwl/devkit';
import { LibraryGeneratorSchema } from '../../utils/schema';
export declare function libraryGenerator(tree: Tree, schema: LibraryGeneratorSchema): Promise<GeneratorCallback>;
export declare function projectGenerator(tree: Tree, schema: LibraryGeneratorSchema, destinationDir: string, filesDir: string): Promise<GeneratorCallback>;
export interface NormalizedSchema extends LibraryGeneratorSchema {
    name: string;
    fileName: string;
    projectRoot: string;
    projectDirectory: string;
    parsedTags: string[];
    importPath?: string;
}
export declare function addLint(tree: Tree, options: NormalizedSchema): Promise<GeneratorCallback>;
export default libraryGenerator;
export declare const librarySchematic: (generatorOptions: LibraryGeneratorSchema) => (tree: any, context: any) => Promise<any>;
