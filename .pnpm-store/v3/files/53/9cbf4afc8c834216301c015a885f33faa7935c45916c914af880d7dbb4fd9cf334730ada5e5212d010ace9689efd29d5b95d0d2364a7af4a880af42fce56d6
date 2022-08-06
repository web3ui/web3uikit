import * as ts from 'typescript';
import { IExcerptToken, IExcerptTokenRange } from '@microsoft/api-extractor-model';
import { DeclarationReferenceGenerator } from './DeclarationReferenceGenerator';
import { AstDeclaration } from '../analyzer/AstDeclaration';
/**
 * Used to provide ExcerptBuilder with a list of nodes whose token range we want to capture.
 */
export interface IExcerptBuilderNodeToCapture {
    /**
     * The node to capture
     */
    node: ts.Node | undefined;
    /**
     * The token range whose startIndex/endIndex will be overwritten with the indexes for the
     * tokens corresponding to IExcerptBuilderNodeToCapture.node
     */
    tokenRange: IExcerptTokenRange;
}
export declare class ExcerptBuilder {
    /**
     * Appends a blank line to the `excerptTokens` list.
     * @param excerptTokens - The target token list to append to
     */
    static addBlankLine(excerptTokens: IExcerptToken[]): void;
    /**
     * Appends the signature for the specified `AstDeclaration` to the `excerptTokens` list.
     * @param excerptTokens - The target token list to append to
     * @param nodesToCapture - A list of child nodes whose token ranges we want to capture
     */
    static addDeclaration(excerptTokens: IExcerptToken[], astDeclaration: AstDeclaration, nodesToCapture: IExcerptBuilderNodeToCapture[], referenceGenerator: DeclarationReferenceGenerator): void;
    static createEmptyTokenRange(): IExcerptTokenRange;
    private static _buildSpan;
    private static _appendToken;
    private static _isDeclarationName;
    private static _isDeclaration;
}
//# sourceMappingURL=ExcerptBuilder.d.ts.map