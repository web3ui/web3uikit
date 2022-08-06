/// <reference types="node" />
import * as fs from 'fs';
export interface FileAdapter {
    readdir(name: string): string[];
    readlink(name: string): string;
    lstat(name: string): fs.Stats;
    stat(name: string): fs.Stats;
}
export declare const localFs: FileAdapter;
