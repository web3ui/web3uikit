import type { Tree, GeneratorCallback, ProjectConfiguration } from '@nrwl/devkit';
import type { Linter } from 'eslint';
/**
 * Common schema used by all implementations of convert-tslint-to-eslint generators
 */
export interface ConvertTSLintToESLintSchema {
    project: string;
    ignoreExistingTslintConfig: boolean;
    removeTSLintIfNoMoreTSLintTargets: boolean;
    skipFormat?: boolean;
}
/**
 * When we convert a TSLint setup to an ESLint setup for a particular project, there are a number of
 * shared/common concerns (implemented as library utilities within @nrwl/linter), and a few things
 * which are specific to this package and the types of projects it produces.
 *
 * The key structure of the converted ESLint support is as follows:
 *
 * - We will first generate a workspace root .eslintrc.json which is the same as the one generated
 * for new workspaces (i.e. it is NOT just a converted version of their root tslint.json). This allows us
 * to have a consistent base for all users, as well as standardized patterns around "overrides".
 *
 * - The user's original root tslint.json will be converted and any applicable settings will be stored
 * within ADDITIONAL override blocks within the root .eslintrc.json.
 *
 * - The user's project-level tslint.json file will be converted into a corresponding .eslintrc.json file
 * and it will extend from the root workspace .eslintrc.json file as normal.
 */
export declare class ProjectConverter {
    private readonly projectConfig;
    private readonly rootTSLintJsonPath;
    private readonly rootTSLintJson;
    private readonly projectTSLintJsonPath;
    private readonly projectTSLintJson;
    private readonly host;
    private readonly projectName;
    private readonly ignoreExistingTslintConfig;
    private readonly eslintInitializer;
    /**
     * Using an object as the argument to the constructor means we sacrifice some
     * authoring sugar around initializing these properties but it makes the usage
     * of the class much easier to read and maintain.
     */
    constructor({ host, projectName, ignoreExistingTslintConfig, eslintInitializer, }: {
        host: Tree;
        projectName: string;
        ignoreExistingTslintConfig: boolean;
        eslintInitializer: (projectInfo: {
            projectName: string;
            projectConfig: ProjectConfiguration;
        }) => Promise<void>;
    });
    initESLint(): Promise<GeneratorCallback>;
    /**
     * If the package-specific shareable config already exists then the workspace must already
     * be part way through migrating from TSLint to ESLint. In this case we do not want to convert
     * the root tslint.json again (and this utility will return a noop task), and we instead just
     * focus on the project-level config conversion.
     */
    convertRootTSLintConfig(applyPackageSpecificModifications: (json: Linter.Config) => Linter.Config, rootEslintConfigExists?: boolean): Promise<Exclude<GeneratorCallback, void>>;
    convertProjectConfig(applyPackageSpecificModifications: (json: Linter.Config) => Linter.Config): Promise<GeneratorCallback>;
    removeProjectTSLintFile(): void;
    isTSLintUsedInWorkspace(): boolean;
    removeTSLintFromWorkspace(): GeneratorCallback;
    private cleanUpGeneratorsConfig;
    /**
     * If the project which is the subject of the ProjectConverter instance is an application,
     * figure out its associated e2e project's name.
     */
    getE2EProjectName(): string | null;
    setDefaults(collectionName: string, defaults: Partial<ConvertTSLintToESLintSchema>): void;
}
