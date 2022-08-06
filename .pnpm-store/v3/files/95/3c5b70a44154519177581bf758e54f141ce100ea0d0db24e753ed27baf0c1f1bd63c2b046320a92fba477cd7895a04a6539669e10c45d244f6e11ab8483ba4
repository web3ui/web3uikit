import { DepConstraint } from '@nrwl/workspace/src/utils/runtime-lint-utils';
declare type Options = [
    {
        allow: string[];
        depConstraints: DepConstraint[];
        enforceBuildableLibDependency: boolean;
        allowCircularSelfDependency: boolean;
        banTransitiveDependencies: boolean;
    }
];
export declare type MessageIds = 'noRelativeOrAbsoluteImportsAcrossLibraries' | 'noSelfCircularDependencies' | 'noCircularDependencies' | 'noImportsOfApps' | 'noImportsOfE2e' | 'noImportOfNonBuildableLibraries' | 'noImportsOfLazyLoadedLibraries' | 'projectWithoutTagsCannotHaveDependencies' | 'bannedExternalImportsViolation' | 'noTransitiveDependencies' | 'onlyTagsConstraintViolation' | 'notTagsConstraintViolation';
export declare const RULE_NAME = "enforce-module-boundaries";
declare const _default: import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<MessageIds, Options, import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleListener>;
export default _default;
