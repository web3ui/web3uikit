import { Tree } from '@angular-devkit/schematics';
import { Architect, BuilderContext, Target } from '@angular-devkit/architect';
import { TestingArchitectHost } from '@angular-devkit/architect/testing';
import { json, JsonObject } from '@angular-devkit/core';
import { ScheduleOptions } from '@angular-devkit/architect/src/api';
import { LoggerApi, LogLevel } from '@angular-devkit/core/src/logger';
export declare function getFileContent(tree: Tree, path: string): string;
export declare function createEmptyWorkspace(tree: Tree): Tree;
declare class NoopLogger implements LoggerApi {
    private _log;
    createChild(name: string): any;
    includes(substr: string): boolean;
    debug(message: string, metadata?: JsonObject): void;
    error(message: string, metadata?: JsonObject): void;
    fatal(message: string, metadata?: JsonObject): void;
    info(message: string, metadata?: JsonObject): void;
    log(level: LogLevel, message: string, metadata?: JsonObject): void;
    warn(message: string, metadata?: JsonObject): void;
}
/**
 * Mock context which makes testing builders easier
 */
export declare class MockBuilderContext implements BuilderContext {
    private architect;
    private architectHost;
    id: 0;
    builder: any;
    analytics: any;
    target: Target;
    logger: NoopLogger;
    get currentDirectory(): string;
    get workspaceRoot(): string;
    constructor(architect: Architect, architectHost: TestingArchitectHost);
    addBuilderFromPackage(path: string): Promise<void>;
    addTarget(target: Target, builderName: string): Promise<void>;
    getBuilderNameForTarget(target: Target): Promise<string>;
    scheduleTarget(target: Target, overrides?: JsonObject, scheduleOptions?: ScheduleOptions): Promise<import("@angular-devkit/architect").BuilderRun>;
    scheduleBuilder(name: string, overrides?: JsonObject, scheduleOptions?: ScheduleOptions): Promise<import("@angular-devkit/architect").BuilderRun>;
    getTargetOptions(target: Target): Promise<JsonObject>;
    validateOptions<T extends JsonObject = JsonObject>(options: JsonObject, builderName: string): Promise<T>;
    reportRunning(): void;
    reportStatus(status: string): void;
    reportProgress(current: number, total?: number, status?: string): void;
    addTeardown(teardown: () => Promise<void> | void): void;
    getProjectMetadata(target: Target | string): Promise<json.JsonObject | null>;
}
export {};
