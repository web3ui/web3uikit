interface CounterOptions {
    to: number;
    result: boolean;
}
export default function counter(opts: CounterOptions): AsyncGenerator<{
    success: boolean;
}, void, unknown>;
export declare function batchCounter(taskGraph: any, inputs: Record<string, CounterOptions>): Promise<Record<string, {
    success: boolean;
    terminalOutput: string;
}>>;
export {};
