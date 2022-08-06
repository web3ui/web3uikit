"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNxExecutor = void 0;
const workspaces_1 = require("nx/src/config/workspaces");
/**
 * Convert an Nx Executor into an Angular Devkit Builder
 *
 * Use this to expose a compatible Angular Builder
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function convertNxExecutor(executor) {
    const builderFunction = (options, builderContext) => {
        const workspaces = new workspaces_1.Workspaces(builderContext.workspaceRoot);
        const workspaceConfig = workspaces.readWorkspaceConfiguration();
        const context = {
            root: builderContext.workspaceRoot,
            projectName: builderContext.target.project,
            targetName: builderContext.target.target,
            configurationName: builderContext.target.configuration,
            workspace: workspaceConfig,
            cwd: process.cwd(),
            isVerbose: false,
        };
        if (builderContext.target &&
            builderContext.target.project &&
            builderContext.target.target) {
            context.target =
                workspaceConfig.projects[builderContext.target.project].targets[builderContext.target.target];
        }
        return toObservable(executor(options, context));
    };
    return require('@angular-devkit/architect').createBuilder(builderFunction);
}
exports.convertNxExecutor = convertNxExecutor;
function toObservable(promiseOrAsyncIterator) {
    if (typeof promiseOrAsyncIterator.then === 'function') {
        return require('rxjs').from(promiseOrAsyncIterator);
    }
    else {
        return new (require('rxjs').Observable)((subscriber) => {
            let asyncIterator = promiseOrAsyncIterator;
            function recurse(iterator) {
                iterator
                    .next()
                    .then((result) => {
                    if (!result.done) {
                        subscriber.next(result.value);
                        recurse(iterator);
                    }
                    else {
                        if (result.value) {
                            subscriber.next(result.value);
                        }
                        subscriber.complete();
                    }
                })
                    .catch((e) => {
                    subscriber.error(e);
                });
            }
            recurse(asyncIterator);
            return () => {
                asyncIterator.return();
            };
        });
    }
}
//# sourceMappingURL=convert-nx-executor.js.map