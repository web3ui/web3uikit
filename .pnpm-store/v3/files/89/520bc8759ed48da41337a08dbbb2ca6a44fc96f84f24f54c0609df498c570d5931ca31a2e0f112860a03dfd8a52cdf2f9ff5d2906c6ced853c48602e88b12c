"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcerptBuilder = void 0;
const ts = __importStar(require("typescript"));
const api_extractor_model_1 = require("@microsoft/api-extractor-model");
const Span_1 = require("../analyzer/Span");
class ExcerptBuilder {
    /**
     * Appends a blank line to the `excerptTokens` list.
     * @param excerptTokens - The target token list to append to
     */
    static addBlankLine(excerptTokens) {
        let newlines = '\n\n';
        // If the existing text already ended with a newline, then only append one newline
        if (excerptTokens.length > 0) {
            const previousText = excerptTokens[excerptTokens.length - 1].text;
            if (/\n$/.test(previousText)) {
                newlines = '\n';
            }
        }
        excerptTokens.push({ kind: api_extractor_model_1.ExcerptTokenKind.Content, text: newlines });
    }
    /**
     * Appends the signature for the specified `AstDeclaration` to the `excerptTokens` list.
     * @param excerptTokens - The target token list to append to
     * @param nodesToCapture - A list of child nodes whose token ranges we want to capture
     */
    static addDeclaration(excerptTokens, astDeclaration, nodesToCapture, referenceGenerator) {
        let stopBeforeChildKind = undefined;
        switch (astDeclaration.declaration.kind) {
            case ts.SyntaxKind.ClassDeclaration:
            case ts.SyntaxKind.EnumDeclaration:
            case ts.SyntaxKind.InterfaceDeclaration:
                // FirstPunctuation = "{"
                stopBeforeChildKind = ts.SyntaxKind.FirstPunctuation;
                break;
            case ts.SyntaxKind.ModuleDeclaration:
                // ModuleBlock = the "{ ... }" block
                stopBeforeChildKind = ts.SyntaxKind.ModuleBlock;
                break;
        }
        const span = new Span_1.Span(astDeclaration.declaration);
        const tokenRangesByNode = new Map();
        for (const excerpt of nodesToCapture || []) {
            if (excerpt.node) {
                tokenRangesByNode.set(excerpt.node, excerpt.tokenRange);
            }
        }
        ExcerptBuilder._buildSpan(excerptTokens, span, {
            referenceGenerator: referenceGenerator,
            startingNode: span.node,
            stopBeforeChildKind,
            tokenRangesByNode,
            disableMergingForNextToken: false,
            lastAppendedTokenIsSeparator: false
        });
    }
    static createEmptyTokenRange() {
        return { startIndex: 0, endIndex: 0 };
    }
    static _buildSpan(excerptTokens, span, state) {
        if (span.kind === ts.SyntaxKind.JSDocComment) {
            // Discard any comments
            return true;
        }
        // Can this node start a excerpt?
        const capturedTokenRange = state.tokenRangesByNode.get(span.node);
        let excerptStartIndex = 0;
        if (capturedTokenRange) {
            // We will assign capturedTokenRange.startIndex to be the index of the next token to be appended
            excerptStartIndex = excerptTokens.length;
            state.disableMergingForNextToken = true;
        }
        if (span.prefix) {
            let canonicalReference = undefined;
            if (span.kind === ts.SyntaxKind.Identifier) {
                const name = span.node;
                if (!ExcerptBuilder._isDeclarationName(name)) {
                    canonicalReference = state.referenceGenerator.getDeclarationReferenceForIdentifier(name);
                }
            }
            if (canonicalReference) {
                ExcerptBuilder._appendToken(excerptTokens, api_extractor_model_1.ExcerptTokenKind.Reference, span.prefix, state, canonicalReference);
            }
            else {
                ExcerptBuilder._appendToken(excerptTokens, api_extractor_model_1.ExcerptTokenKind.Content, span.prefix, state);
            }
            state.lastAppendedTokenIsSeparator = false;
        }
        for (const child of span.children) {
            if (span.node === state.startingNode) {
                if (state.stopBeforeChildKind && child.kind === state.stopBeforeChildKind) {
                    // We reached a child whose kind is stopBeforeChildKind, so stop traversing
                    return false;
                }
            }
            if (!this._buildSpan(excerptTokens, child, state)) {
                return false;
            }
        }
        if (span.suffix) {
            ExcerptBuilder._appendToken(excerptTokens, api_extractor_model_1.ExcerptTokenKind.Content, span.suffix, state);
            state.lastAppendedTokenIsSeparator = false;
        }
        if (span.separator) {
            ExcerptBuilder._appendToken(excerptTokens, api_extractor_model_1.ExcerptTokenKind.Content, span.separator, state);
            state.lastAppendedTokenIsSeparator = true;
        }
        // Are we building a excerpt?  If so, set its range
        if (capturedTokenRange) {
            capturedTokenRange.startIndex = excerptStartIndex;
            // We will assign capturedTokenRange.startIndex to be the index after the last token
            // that was appended so far. However, if the last appended token was a separator and
            // there is no additional spaces, omit it from the range.
            let excerptEndIndex = excerptTokens.length;
            if (state.lastAppendedTokenIsSeparator && excerptEndIndex > excerptStartIndex + 1) {
                excerptEndIndex--;
            }
            capturedTokenRange.endIndex = excerptEndIndex;
            state.disableMergingForNextToken = true;
        }
        return true;
    }
    static _appendToken(excerptTokens, excerptTokenKind, text, state, canonicalReference) {
        if (text.length === 0) {
            return;
        }
        if (excerptTokenKind !== api_extractor_model_1.ExcerptTokenKind.Content) {
            if (excerptTokenKind === api_extractor_model_1.ExcerptTokenKind.Reference &&
                excerptTokens.length > 1 &&
                !state.disableMergingForNextToken) {
                // If the previous two tokens were a Reference and a '.', then concatenate
                // all three tokens as a qualified name Reference.
                const previousTokenM1 = excerptTokens[excerptTokens.length - 1];
                const previousTokenM2 = excerptTokens[excerptTokens.length - 2];
                if (previousTokenM1.kind === api_extractor_model_1.ExcerptTokenKind.Content &&
                    previousTokenM1.text.trim() === '.' &&
                    previousTokenM2.kind === api_extractor_model_1.ExcerptTokenKind.Reference) {
                    previousTokenM2.text += '.' + text;
                    if (canonicalReference !== undefined) {
                        previousTokenM2.canonicalReference = canonicalReference.toString();
                    }
                    excerptTokens.pop(); // remove previousTokenM1;
                    return;
                }
            }
        }
        else {
            // If someone referenced this index, then we need to start a new token
            if (excerptTokens.length > 0 && !state.disableMergingForNextToken) {
                // Otherwise, can we merge with the previous token?
                const previousToken = excerptTokens[excerptTokens.length - 1];
                if (previousToken.kind === excerptTokenKind) {
                    previousToken.text += text;
                    return;
                }
            }
        }
        const excerptToken = { kind: excerptTokenKind, text: text };
        if (canonicalReference !== undefined) {
            excerptToken.canonicalReference = canonicalReference.toString();
        }
        excerptTokens.push(excerptToken);
        state.disableMergingForNextToken = false;
    }
    static _isDeclarationName(name) {
        return ExcerptBuilder._isDeclaration(name.parent) && name.parent.name === name;
    }
    static _isDeclaration(node) {
        switch (node.kind) {
            case ts.SyntaxKind.FunctionDeclaration:
            case ts.SyntaxKind.FunctionExpression:
            case ts.SyntaxKind.VariableDeclaration:
            case ts.SyntaxKind.Parameter:
            case ts.SyntaxKind.EnumDeclaration:
            case ts.SyntaxKind.ClassDeclaration:
            case ts.SyntaxKind.ClassExpression:
            case ts.SyntaxKind.ModuleDeclaration:
            case ts.SyntaxKind.MethodDeclaration:
            case ts.SyntaxKind.MethodSignature:
            case ts.SyntaxKind.PropertyDeclaration:
            case ts.SyntaxKind.PropertySignature:
            case ts.SyntaxKind.GetAccessor:
            case ts.SyntaxKind.SetAccessor:
            case ts.SyntaxKind.InterfaceDeclaration:
            case ts.SyntaxKind.TypeAliasDeclaration:
            case ts.SyntaxKind.TypeParameter:
            case ts.SyntaxKind.EnumMember:
            case ts.SyntaxKind.BindingElement:
                return true;
            default:
                return false;
        }
    }
}
exports.ExcerptBuilder = ExcerptBuilder;
//# sourceMappingURL=ExcerptBuilder.js.map