import { PackageManager, Tree } from '@nrwl/devkit';
export interface Schema {
    cli: 'nx' | 'angular';
    directory: string;
    name: string;
    appName: string;
    npmScope?: string;
    skipInstall?: boolean;
    skipGit?: boolean;
    style?: string;
    nxCloud?: boolean;
    preset: string;
    commit?: {
        name: string;
        email: string;
        message?: string;
    };
    defaultBase: string;
    linter: 'tslint' | 'eslint';
    packageManager?: PackageManager;
}
export interface NormalizedSchema extends Schema {
    presetVersion?: string;
}
export declare function newGenerator(host: Tree, options: Schema): Promise<() => Promise<void>>;
export default newGenerator;
export declare const newSchematic: (generatorOptions: Schema) => (tree: any, context: any) => Promise<any>;
