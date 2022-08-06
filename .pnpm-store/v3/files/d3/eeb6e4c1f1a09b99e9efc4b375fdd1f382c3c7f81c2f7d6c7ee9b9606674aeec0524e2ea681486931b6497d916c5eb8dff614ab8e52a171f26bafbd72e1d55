import { ExecOptions } from 'shelljs';
export interface Parameters {
    /** E2E configuration name */
    name: string;
    /** framework version */
    version: string;
    /** CLI to bootstrap the project */
    generator: string;
    /** Use storybook framework detection */
    autoDetect?: boolean;
    /** Pre-build hook */
    preBuildCommand?: string;
    /** When cli complains when folder already exists */
    ensureDir?: boolean;
    /** Dependencies to add before building Storybook */
    additionalDeps?: string[];
    /** Add typescript dependency and creates a tsconfig.json file */
    typescript?: boolean;
}
interface Configuration {
    e2e: boolean;
    pnp: boolean;
}
export interface Options extends Parameters {
    appName: string;
    creationPath: string;
    cwd?: string;
    e2e: boolean;
    pnp: boolean;
}
export declare const exec: (command: string, options?: ExecOptions, { startMessage, errorMessage }?: {
    startMessage?: string;
    errorMessage?: string;
}) => Promise<unknown>;
export declare const createAndInit: (cwd: string, { name, version, ...rest }: Parameters, { e2e, pnp }: Configuration) => Promise<void>;
export {};
