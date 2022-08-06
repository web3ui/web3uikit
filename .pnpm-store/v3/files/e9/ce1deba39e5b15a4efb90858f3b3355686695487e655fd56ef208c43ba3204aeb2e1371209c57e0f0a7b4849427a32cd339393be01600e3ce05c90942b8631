"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUpdateTask = void 0;
const Observable_1 = require("rxjs/internal/Observable");
const child_process_1 = require("child_process");
const path_1 = require("path");
const ast_utils_1 = require("./ast-utils");
let taskRegistered = false;
function addUpdateTask(pkg, to, dependencies = []) {
    return (host, context) => {
        // Workflow should always be there during ng update but not during tests.
        if (!context.engine.workflow) {
            return;
        }
        const packageJson = (0, ast_utils_1.readJsonInTree)(host, 'package.json');
        if (!packageJson.dependencies[pkg] && !packageJson.devDependencies[pkg]) {
            return;
        }
        if (!taskRegistered) {
            const engineHost = context.engine.workflow._engineHost;
            engineHost.registerTaskExecutor(createRunUpdateTask());
            taskRegistered = true;
        }
        context.engine._taskSchedulers.forEach((scheduler) => {
            if (scheduler._queue.peek() &&
                scheduler._queue.peek().configuration.name === 'RunUpdate' &&
                scheduler._queue.peek().configuration.options.package === pkg) {
                scheduler._queue.pop();
            }
        });
        context.addTask(new RunUpdateTask(pkg, to), dependencies);
    };
}
exports.addUpdateTask = addUpdateTask;
class RunUpdateTask {
    constructor(_pkg, _to) {
        this._pkg = _pkg;
        this._to = _to;
    }
    toConfiguration() {
        return {
            name: 'RunUpdate',
            options: {
                package: this._pkg,
                to: this._to,
            },
        };
    }
}
function createRunUpdateTask() {
    return {
        name: 'RunUpdate',
        create: () => {
            return Promise.resolve((options, context) => {
                context.logger.info(`Updating ${options.package} to ${options.to}`);
                const forkOptions = {
                    stdio: [process.stdin, process.stdout, process.stderr, 'ipc'],
                    shell: true,
                };
                const ng = (0, path_1.join)('./node_modules', '@angular/cli', 'bin/ng');
                const args = [
                    'update',
                    `${options.package}@${options.to}`,
                    '--force',
                    '--allow-dirty',
                ].filter((e) => !!e);
                return new Observable_1.Observable((obs) => {
                    (0, child_process_1.fork)(ng, args, forkOptions).on('close', (code) => {
                        if (code === 0) {
                            obs.next();
                            obs.complete();
                        }
                        else {
                            const message = `${options.package} migration failed, see above.`;
                            obs.error(new Error(message));
                        }
                    });
                });
            });
        },
    };
}
//# sourceMappingURL=update-task.js.map