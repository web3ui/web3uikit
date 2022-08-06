/// <reference types="node" />
import type { ErrorCode } from './types';
export declare class AppError extends Error {
    code?: ErrorCode;
    cause?: Error;
    constructor(errorContext: ErrorContext, error?: NodeJS.ErrnoException);
}
export declare const SOURCE_MAP_INFO_URL = "https://github.com/danvk/source-map-explorer/blob/master/README.md#generating-source-maps";
interface CommonErrorContext {
    code: 'NoBundles' | 'NoSourceMap' | 'CannotSaveFile' | 'CannotCreateTempFile' | 'CannotOpenCoverageFile' | 'NoCoverageMatches' | 'Unknown';
}
interface OneSourceSourceMapErrorContext {
    code: 'OneSourceSourceMap';
    filename: string;
}
interface UnmappedBytesErrorContext {
    code: 'UnmappedBytes';
    totalBytes: number;
    unmappedBytes: number;
}
interface InvalidMappingLineErrorContext {
    code: 'InvalidMappingLine';
    generatedLine: number;
    maxLine: number;
}
interface InvalidMappingColumnErrorContext {
    code: 'InvalidMappingColumn';
    generatedLine: number;
    generatedColumn: number;
    maxColumn: number;
}
interface CannotOpenTempFileErrorContext {
    code: 'CannotOpenTempFile';
    error: Buffer;
    tempFile: string;
}
export declare type ErrorContext = CommonErrorContext | OneSourceSourceMapErrorContext | UnmappedBytesErrorContext | InvalidMappingLineErrorContext | InvalidMappingColumnErrorContext | CannotOpenTempFileErrorContext;
export declare function getErrorMessage(context: ErrorContext): string;
export {};
