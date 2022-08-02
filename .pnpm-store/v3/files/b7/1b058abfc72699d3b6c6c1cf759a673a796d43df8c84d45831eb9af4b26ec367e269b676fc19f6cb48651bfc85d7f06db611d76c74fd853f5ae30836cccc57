"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.output = void 0;
const chalk = require("chalk");
/**
 * Automatically disable styling applied by chalk if CI=true
 */
if (process.env.CI === 'true') {
    chalk.level = 0;
}
class CLIOutput {
    constructor() {
        this.NX_PREFIX = `${chalk.cyan('>')} ${chalk.reset.inverse.bold.cyan(' NX ')}`;
        /**
         * Longer dash character which forms more of a continuous line when place side to side
         * with itself, unlike the standard dash character
         */
        this.VERTICAL_SEPARATOR = '———————————————————————————————————————————————';
        /**
         * Expose some color and other utility functions so that other parts of the codebase that need
         * more fine-grained control of message bodies are still using a centralized
         * implementation.
         */
        this.colors = {
            gray: chalk.gray,
        };
        this.bold = chalk.bold;
        this.underline = chalk.underline;
    }
    writeToStdOut(str) {
        process.stdout.write(str);
    }
    writeOutputTitle({ label, title, }) {
        let outputTitle;
        if (label) {
            outputTitle = `${this.NX_PREFIX} ${label} ${title}\n`;
        }
        else {
            outputTitle = `${this.NX_PREFIX} ${title}\n`;
        }
        this.writeToStdOut(outputTitle);
    }
    writeOptionalOutputBody(bodyLines) {
        if (!bodyLines) {
            return;
        }
        this.addNewline();
        bodyLines.forEach((bodyLine) => this.writeToStdOut(`  ${bodyLine}\n`));
    }
    addNewline() {
        this.writeToStdOut('\n');
    }
    addVerticalSeparator() {
        this.writeToStdOut(`\n${chalk.gray(this.VERTICAL_SEPARATOR)}\n\n`);
    }
    addVerticalSeparatorWithoutNewLines() {
        this.writeToStdOut(`${chalk.gray(this.VERTICAL_SEPARATOR)}\n`);
    }
    error({ title, slug, bodyLines }) {
        this.addNewline();
        this.writeOutputTitle({
            label: chalk.reset.inverse.bold.red(' ERROR '),
            title: chalk.bold.red(title),
        });
        this.writeOptionalOutputBody(bodyLines);
        /**
         * Optional slug to be used in an Nx error message redirect URL
         */
        if (slug && typeof slug === 'string') {
            this.addNewline();
            this.writeToStdOut(`${chalk.grey('  Learn more about this error: ')}https://errors.nx.dev/${slug}\n`);
        }
        this.addNewline();
    }
    warn({ title, slug, bodyLines }) {
        this.addNewline();
        this.writeOutputTitle({
            label: chalk.reset.inverse.bold.yellow(' WARNING '),
            title: chalk.bold.yellow(title),
        });
        this.writeOptionalOutputBody(bodyLines);
        /**
         * Optional slug to be used in an Nx warning message redirect URL
         */
        if (slug && typeof slug === 'string') {
            this.addNewline();
            this.writeToStdOut(`${chalk.grey('  Learn more about this warning: ')}https://errors.nx.dev/${slug}\n`);
        }
        this.addNewline();
    }
    note({ title, bodyLines }) {
        this.addNewline();
        this.writeOutputTitle({
            label: chalk.reset.inverse.bold.keyword('orange')(' NOTE '),
            title: chalk.bold.keyword('orange')(title),
        });
        this.writeOptionalOutputBody(bodyLines);
        this.addNewline();
    }
    success({ title, bodyLines }) {
        this.addNewline();
        this.writeOutputTitle({
            label: chalk.reset.inverse.bold.green(' SUCCESS '),
            title: chalk.bold.green(title),
        });
        this.writeOptionalOutputBody(bodyLines);
        this.addNewline();
    }
    logSingleLine(message) {
        this.addNewline();
        this.writeOutputTitle({
            title: message,
        });
        this.addNewline();
    }
    logCommand(message, isCached = false) {
        this.addNewline();
        this.writeToStdOut(chalk.bold(`> ${message} `));
        if (isCached) {
            this.writeToStdOut(chalk.bold.grey(`[retrieved from cache]`));
        }
        this.addNewline();
    }
    log({ title, bodyLines }) {
        this.addNewline();
        this.writeOutputTitle({
            title: chalk.white(title),
        });
        this.writeOptionalOutputBody(bodyLines);
        this.addNewline();
    }
}
exports.output = new CLIOutput();
//# sourceMappingURL=output.js.map