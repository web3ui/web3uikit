import { PackageJsonWithDepsAndDevDeps } from './js-package-manager';
export declare const getStorybookVersion: (line: string) => {
    package: string;
    version: string;
};
export declare const isCorePackage: (pkg: string) => boolean;
export declare const checkVersionConsistency: () => void;
declare type ExtraFlags = Record<string, string[]>;
export declare const addExtraFlags: (extraFlags: ExtraFlags, flags: string[], { dependencies, devDependencies }: PackageJsonWithDepsAndDevDeps) => string[];
interface UpgradeOptions {
    prerelease: boolean;
    skipCheck: boolean;
    useNpm: boolean;
    dryRun: boolean;
    yes: boolean;
    disableTelemetry: boolean;
}
export declare const upgrade: ({ prerelease, skipCheck, useNpm, dryRun, yes, ...options }: UpgradeOptions) => Promise<void>;
export {};
