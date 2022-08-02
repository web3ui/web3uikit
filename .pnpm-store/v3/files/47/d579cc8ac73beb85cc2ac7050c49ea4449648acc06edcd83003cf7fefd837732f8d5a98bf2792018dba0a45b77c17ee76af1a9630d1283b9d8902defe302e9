import * as chalk from 'chalk';
export interface CLIErrorMessageConfig {
    title: string;
    bodyLines?: string[];
    slug?: string;
}
export interface CLIWarnMessageConfig {
    title: string;
    bodyLines?: string[];
    slug?: string;
}
export interface CLINoteMessageConfig {
    title: string;
    bodyLines?: string[];
}
export interface CLISuccessMessageConfig {
    title: string;
    bodyLines?: string[];
}
declare class CLIOutput {
    private readonly NX_PREFIX;
    /**
     * Longer dash character which forms more of a continuous line when place side to side
     * with itself, unlike the standard dash character
     */
    private readonly VERTICAL_SEPARATOR;
    /**
     * Expose some color and other utility functions so that other parts of the codebase that need
     * more fine-grained control of message bodies are still using a centralized
     * implementation.
     */
    colors: {
        gray: chalk.Chalk;
    };
    bold: chalk.Chalk;
    underline: chalk.Chalk;
    private writeToStdOut;
    private writeOutputTitle;
    private writeOptionalOutputBody;
    addNewline(): void;
    addVerticalSeparator(): void;
    addVerticalSeparatorWithoutNewLines(): void;
    error({ title, slug, bodyLines }: CLIErrorMessageConfig): void;
    warn({ title, slug, bodyLines }: CLIWarnMessageConfig): void;
    note({ title, bodyLines }: CLINoteMessageConfig): void;
    success({ title, bodyLines }: CLISuccessMessageConfig): void;
    logSingleLine(message: string): void;
    logCommand(message: string, isCached?: boolean): void;
    log({ title, bodyLines }: CLIWarnMessageConfig): void;
}
export declare const output: CLIOutput;
export {};
