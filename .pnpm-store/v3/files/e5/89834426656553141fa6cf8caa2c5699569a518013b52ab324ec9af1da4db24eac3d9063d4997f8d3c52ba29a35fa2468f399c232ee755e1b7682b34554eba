import type { Tree } from '@nrwl/devkit';
import { Linter } from '../utils/linter';
interface LintProjectOptions {
    project: string;
    linter?: Linter;
    eslintFilePatterns?: string[];
    tsConfigPaths?: string[];
    skipFormat: boolean;
    setParserOptionsProject?: boolean;
    skipPackageJson?: boolean;
}
export declare function lintProjectGenerator(tree: Tree, options: LintProjectOptions): Promise<import("@nrwl/devkit").GeneratorCallback>;
export {};
