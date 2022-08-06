import { JsPackageManager } from '../js-package-manager';
export interface CheckOptions {
    packageManager: JsPackageManager;
}
export interface RunOptions<ResultType> {
    packageManager: JsPackageManager;
    result: ResultType;
    dryRun?: boolean;
}
export interface Fix<ResultType = any> {
    id: string;
    check: (options: CheckOptions) => Promise<ResultType | void>;
    prompt: (result: ResultType) => string;
    run: (options: RunOptions<ResultType>) => Promise<void>;
}
