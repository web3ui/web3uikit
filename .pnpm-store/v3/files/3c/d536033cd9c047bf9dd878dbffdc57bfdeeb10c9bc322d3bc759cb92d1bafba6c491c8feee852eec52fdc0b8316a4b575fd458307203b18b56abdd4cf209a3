import { JsPackageManager } from './JsPackageManager';
export declare class Yarn2Proxy extends JsPackageManager {
    readonly type = "yarn2";
    initPackageJson(): string;
    getRunStorybookCommand(): string;
    getRunCommand(command: string): string;
    protected runInstall(): void;
    protected runAddDeps(dependencies: string[], installAsDevDependencies: boolean): void;
    protected runGetVersions<T extends boolean>(packageName: string, fetchAllVersions: T): Promise<T extends true ? string[] : string>;
}
