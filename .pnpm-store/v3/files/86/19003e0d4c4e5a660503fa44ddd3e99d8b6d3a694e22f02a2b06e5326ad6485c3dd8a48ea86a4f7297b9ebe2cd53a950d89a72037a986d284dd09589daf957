"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticRunOneTerminalOutputLifeCycle = void 0;
const output_1 = require("../../utils/output");
const utils_1 = require("../utils");
/**
 * The following life cycle's outputs are static, meaning no previous content
 * is rewritten or modified as new outputs are added. It is therefore intended
 * for use in CI environments.
 *
 * For the common case of a user executing a command on their local machine,
 * the dynamic equivalent of this life cycle is usually preferable.
 */
class StaticRunOneTerminalOutputLifeCycle {
    constructor(initiatingProject, projectNames, tasks, args) {
        this.initiatingProject = initiatingProject;
        this.projectNames = projectNames;
        this.tasks = tasks;
        this.args = args;
        this.failedTasks = [];
        this.cachedTasks = [];
    }
    startCommand() {
        const numberOfDeps = this.tasks.length - 1;
        if (numberOfDeps > 0) {
            output_1.output.log({
                color: 'cyan',
                title: `Running target ${output_1.output.bold(this.args.target)} for project ${output_1.output.bold(this.initiatingProject)} and ${output_1.output.bold(numberOfDeps)} task(s) it depends on`,
            });
            output_1.output.addVerticalSeparatorWithoutNewLines('cyan');
        }
    }
    endCommand() {
        output_1.output.addNewline();
        if (this.failedTasks.length === 0) {
            output_1.output.addVerticalSeparatorWithoutNewLines('green');
            const bodyLines = this.cachedTasks.length > 0
                ? [
                    output_1.output.dim(`Nx read the output from the cache instead of running the command for ${this.cachedTasks.length} out of ${this.tasks.length} tasks.`),
                ]
                : [];
            output_1.output.success({
                title: `Successfully ran target ${output_1.output.bold(this.args.target)} for project ${output_1.output.bold(this.initiatingProject)}`,
                bodyLines,
            });
        }
        else {
            output_1.output.addVerticalSeparatorWithoutNewLines('red');
            const bodyLines = [
                output_1.output.dim('Failed tasks:'),
                '',
                ...this.failedTasks.map((task) => `${output_1.output.dim('-')} ${task.id}`),
                '',
                `${output_1.output.dim('Hint: run the command with')} --verbose ${output_1.output.dim('for more details.')}`,
            ];
            output_1.output.error({
                title: `Running target "${this.initiatingProject}:${this.args.target}" failed`,
                bodyLines,
            });
        }
    }
    endTasks(taskResults) {
        for (let t of taskResults) {
            if (t.status === 'failure') {
                this.failedTasks.push(t.task);
            }
            else if (t.status === 'local-cache') {
                this.cachedTasks.push(t.task);
            }
            else if (t.status === 'local-cache-kept-existing') {
                this.cachedTasks.push(t.task);
            }
            else if (t.status === 'remote-cache') {
                this.cachedTasks.push(t.task);
            }
        }
    }
    printTaskTerminalOutput(task, status, terminalOutput) {
        if (status === 'success' ||
            status === 'failure' ||
            task.target.project === this.initiatingProject) {
            const args = (0, utils_1.getPrintableCommandArgsForTask)(task);
            output_1.output.logCommand(args.join(' '), status);
            output_1.output.addNewline();
            process.stdout.write(terminalOutput);
        }
    }
}
exports.StaticRunOneTerminalOutputLifeCycle = StaticRunOneTerminalOutputLifeCycle;
//# sourceMappingURL=static-run-one-terminal-output-life-cycle.js.map