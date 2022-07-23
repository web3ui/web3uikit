import { ParserOptions, TransformOptions, ParseResult } from '@babel/core';
export declare type Options = TransformOptions & {
    parserOptions?: ParserOptions;
};
export declare type FileNodeWithOptions = ParseResult & {
    program: {
        options: Options;
    };
    __src: string;
};
export interface Parser {
    parse: (src: string) => FileNodeWithOptions;
}
export default function buildParse(options?: Options): Parser;
