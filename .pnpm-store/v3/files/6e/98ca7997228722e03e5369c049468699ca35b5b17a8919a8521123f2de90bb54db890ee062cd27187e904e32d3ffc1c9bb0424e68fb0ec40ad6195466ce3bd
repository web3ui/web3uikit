import { TargetConfiguration } from '../config/workspace-json-project-json';
export declare type PackageJsonTargetConfiguration = Omit<TargetConfiguration, 'executor'>;
export interface NxProjectPackageJsonConfiguration {
    targets?: Record<string, PackageJsonTargetConfiguration>;
}
export declare type PackageGroup = (string | {
    package: string;
    version: string;
})[] | Record<string, string>;
export interface NxMigrationsConfiguration {
    migrations?: string;
    packageGroup?: PackageGroup;
}
export interface PackageJson {
    name: string;
    version: string;
    scripts?: Record<string, string>;
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    peerDependencies?: Record<string, string>;
    workspaces?: string[] | {
        packages: string[];
    };
    nx?: NxProjectPackageJsonConfiguration;
    generators?: string;
    schematics?: string;
    builders?: string;
    executors?: string;
    'nx-migrations'?: string | NxMigrationsConfiguration;
    'ng-update'?: string | NxMigrationsConfiguration;
}
export declare function buildTargetFromScript(script: string, nx: NxProjectPackageJsonConfiguration): {
    executor: string;
    options: any;
    outputs?: string[];
    dependsOn?: (string | import("../config/workspace-json-project-json").TargetDependencyConfig)[];
    configurations?: {
        [config: string]: any;
    };
    defaultConfiguration?: string;
};
