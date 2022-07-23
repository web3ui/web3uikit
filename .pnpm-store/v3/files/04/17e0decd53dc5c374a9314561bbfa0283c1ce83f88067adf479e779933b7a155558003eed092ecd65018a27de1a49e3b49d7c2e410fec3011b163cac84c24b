import { PackageJson, PackageJsonWithDepsAndDevDeps } from './PackageJson';
/**
 * Extract package name and version from input
 *
 * @param pkg A string like `@storybook/cli`, `react` or `react@^16`
 * @return A tuple of 2 elements: [packageName, packageVersion]
 */
export declare function getPackageDetails(pkg: string): [
    string,
    string?
];
export declare abstract class JsPackageManager {
    abstract readonly type: 'npm' | 'yarn1' | 'yarn2';
    abstract initPackageJson(): void;
    abstract getRunStorybookCommand(): string;
    abstract getRunCommand(command: string): string;
    /**
     * Install dependencies listed in `package.json`
     */
    installDependencies(): void;
    /**
     * Read the `package.json` file available in the directory the command was call from
     * If there is no `package.json` it will create one.
     */
    retrievePackageJson(): PackageJsonWithDepsAndDevDeps;
    /**
     * Add dependencies to a project using `yarn add` or `npm install`.
     *
     * @param {Object} options contains `skipInstall`, `packageJson` and `installAsDevDependencies` which we use to determine how we install packages.
     * @param {Array} dependencies contains a list of packages to add.
     * @example
     * addDependencies(options, [
     *   `@storybook/react@${storybookVersion}`,
     *   `@storybook/addon-actions@${actionsVersion}`,
     *   `@storybook/addon-links@${linksVersion}`,
     *   `@storybook/addons@${addonsVersion}`,
     * ]);
     */
    addDependencies(options: {
        skipInstall?: boolean;
        installAsDevDependencies?: boolean;
        packageJson?: PackageJson;
    }, dependencies: string[]): void;
    /**
     * Return an array of strings matching following format: `<package_name>@<package_latest_version>`
     *
     * @param packages
     */
    getVersionedPackages(...packages: string[]): Promise<string[]>;
    /**
     * Return an array of string standing for the latest version of the input packages.
     * To be able to identify which version goes with which package the order of the input array is keep.
     *
     * @param packageNames
     */
    getVersions(...packageNames: string[]): Promise<string[]>;
    /**
     * Return the latest version of the input package available on npmjs registry.
     * If constraint are provided it return the latest version matching the constraints.
     *
     * For `@storybook/*` packages the latest version is retrieved from `cli/src/versions.json` file directly
     *
     * @param packageName The name of the package
     * @param constraint A valid semver constraint, example: '1.x || >=2.5.0 || 5.0.0 - 7.2.3'
     */
    getVersion(packageName: string, constraint?: string): Promise<string>;
    /**
     * Get the latest version of the package available on npmjs.com.
     * If constraint is set then it returns a version satisfying it, otherwise the latest version available is returned.
     *
     * @param packageName Name of the package
     * @param constraint Version range to use to constraint the returned version
     */
    latestVersion(packageName: string, constraint?: string): Promise<string>;
    addStorybookCommandInScripts(options?: {
        port: number;
        staticFolder?: string;
        preCommand?: string;
    }): void;
    addESLintConfig(): void;
    addScripts(scripts: Record<string, string>): void;
    protected abstract runInstall(): void;
    protected abstract runAddDeps(dependencies: string[], installAsDevDependencies: boolean): void;
    /**
     * Get the latest or all versions of the input package available on npmjs.com
     *
     * @param packageName Name of the package
     * @param fetchAllVersions Should return
     */
    protected abstract runGetVersions<T extends boolean>(packageName: string, fetchAllVersions: T): Promise<T extends true ? string[] : string>;
    executeCommand(command: string, args: string[], stdio?: 'pipe' | 'inherit'): string;
}
