import * as ts from 'typescript';
import { Tree } from '@angular-devkit/schematics';
import { Config } from '@jest/types';
export declare function getJsonObject(object: string): any;
export declare function addOrUpdateProperty(object: ts.ObjectLiteralExpression, properties: string[], value: unknown, path: string): any;
export declare function removeProperty(object: ts.ObjectLiteralExpression, properties: string[]): ts.PropertyAssignment | null;
/**
 * Should be used to get the jest config object.
 *
 * @param host
 * @param path
 */
export declare function jestConfigObjectAst(host: Tree, path: string): ts.ObjectLiteralExpression;
/**
 * Returns the jest config object
 * @param host
 * @param path
 */
export declare function jestConfigObject(host: Tree, path: string): Partial<Config.InitialOptions> & {
    [index: string]: any;
};
