/// <reference types="node" />
import * as fs from 'fs';
import { Observable } from 'rxjs';
declare const fsPromises: typeof fs.promises;
export declare function exists(filePath: string): Observable<boolean>;
export declare function readFile(filePath: string): Observable<string>;
export declare function readFileIfExists(filePath: string, fallback?: string): Observable<string>;
export declare function readJsonFile(filePath: string): Observable<any>;
export declare function writeFile(filePath: string, data: Parameters<typeof fsPromises.writeFile>[1]): Observable<void>;
export {};
