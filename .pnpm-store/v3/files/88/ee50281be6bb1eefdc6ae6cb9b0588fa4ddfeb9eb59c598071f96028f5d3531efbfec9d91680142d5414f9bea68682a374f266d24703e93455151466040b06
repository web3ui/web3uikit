import * as Lint from 'tslint';
import { IOptions } from 'tslint';
import * as ts from 'typescript';
import type { NxJsonConfiguration } from '@nrwl/devkit';
import { MappedProjectGraph } from '../utils/runtime-lint-utils';
import { TargetProjectLocator } from 'nx/src/utils/target-project-locator';
export declare class Rule extends Lint.Rules.AbstractRule {
    private readonly projectPath?;
    private readonly projectGraph?;
    private readonly targetProjectLocator?;
    private readonly workspaceLayout?;
    constructor(options: IOptions, projectPath?: string, projectGraph?: MappedProjectGraph, targetProjectLocator?: TargetProjectLocator, workspaceLayout?: NxJsonConfiguration['workspaceLayout']);
    apply(sourceFile: ts.SourceFile): Lint.RuleFailure[];
}
