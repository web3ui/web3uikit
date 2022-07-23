import { Rule } from '@angular-devkit/schematics';
export declare const enum Linter {
    TsLint = "tslint",
    EsLint = "eslint",
    None = "none"
}
export declare function generateProjectLint(projectRoot: string, tsConfigPath: string, linter: Linter, eslintFilePatterns: string[]): {
    builder: string;
    options: {
        tsConfig: string[];
        exclude: string[];
        lintFilePatterns?: undefined;
    };
} | {
    builder: string;
    options: {
        lintFilePatterns: string[];
        tsConfig?: undefined;
        exclude?: undefined;
    };
};
interface AddLintFileOptions {
    onlyGlobal?: boolean;
    localConfig?: any;
    extraPackageDeps?: {
        dependencies: {
            [key: string]: string;
        };
        devDependencies: {
            [key: string]: string;
        };
    };
    setParserOptionsProject?: boolean;
}
export declare function addLintFiles(projectRoot: string, linter: Linter, options?: AddLintFileOptions): Rule;
export {};
