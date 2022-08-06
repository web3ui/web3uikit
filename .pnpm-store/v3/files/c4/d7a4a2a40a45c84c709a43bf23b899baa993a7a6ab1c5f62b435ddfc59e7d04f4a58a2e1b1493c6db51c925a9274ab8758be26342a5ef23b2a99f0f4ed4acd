import { JsPackageManager } from './JsPackageManager';
export declare class Yarn1Proxy extends JsPackageManager {
    readonly type = "yarn1";
    initPackageJson(): string;
    getRunStorybookCommand(): string;
    getRunCommand(command: string): string;
    protected runInstall(): void;
    protected runAddDeps(dependencies: string[], installAsDevDependencies: boolean): void;
    protected runGetVersions<T extends boolean>(packageName: string, fetchAllVersions: T): Promise<T extends true ? string[] : string>;
}
