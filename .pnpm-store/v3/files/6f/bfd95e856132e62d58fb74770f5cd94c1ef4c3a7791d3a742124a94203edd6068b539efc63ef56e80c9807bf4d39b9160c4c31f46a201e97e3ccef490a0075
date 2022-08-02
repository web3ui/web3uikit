"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandLineParameterWithArgument = exports.CommandLineParameter = exports.CommandLineParameterKind = void 0;
/**
 * Identifies the kind of a CommandLineParameter.
 * @public
 */
var CommandLineParameterKind;
(function (CommandLineParameterKind) {
    /** Indicates a CommandLineChoiceParameter */
    CommandLineParameterKind[CommandLineParameterKind["Choice"] = 0] = "Choice";
    /** Indicates a CommandLineFlagParameter */
    CommandLineParameterKind[CommandLineParameterKind["Flag"] = 1] = "Flag";
    /** Indicates a CommandLineIntegerParameter */
    CommandLineParameterKind[CommandLineParameterKind["Integer"] = 2] = "Integer";
    /** Indicates a CommandLineStringParameter */
    CommandLineParameterKind[CommandLineParameterKind["String"] = 3] = "String";
    /** Indicates a CommandLineStringListParameter */
    CommandLineParameterKind[CommandLineParameterKind["StringList"] = 4] = "StringList";
    /** Indicates a CommandLineChoiceListParameter */
    CommandLineParameterKind[CommandLineParameterKind["ChoiceList"] = 5] = "ChoiceList";
    /** Indicates a CommandLineIntegerListParameter */
    CommandLineParameterKind[CommandLineParameterKind["IntegerList"] = 6] = "IntegerList";
})(CommandLineParameterKind = exports.CommandLineParameterKind || (exports.CommandLineParameterKind = {}));
/**
 * The base class for the various command-line parameter types.
 * @public
 */
class CommandLineParameter {
    /** @internal */
    constructor(definition) {
        this.longName = definition.parameterLongName;
        this.shortName = definition.parameterShortName;
        this.parameterGroup = definition.parameterGroup;
        this.description = definition.description;
        this.required = !!definition.required;
        this.environmentVariable = definition.environmentVariable;
        this.undocumentedSynonyms = definition.undocumentedSynonyms;
        if (!CommandLineParameter._longNameRegExp.test(this.longName)) {
            throw new Error(`Invalid name: "${this.longName}". The parameter long name must be` +
                ` lower-case and use dash delimiters (e.g. "--do-a-thing")`);
        }
        if (this.shortName) {
            if (!CommandLineParameter._shortNameRegExp.test(this.shortName)) {
                throw new Error(`Invalid name: "${this.shortName}". The parameter short name must be` +
                    ` a dash followed by a single upper-case or lower-case letter (e.g. "-a")`);
            }
        }
        if (this.environmentVariable) {
            if (this.required) {
                // TODO: This constraint is imposed only because argparse enforces "required" parameters, but
                // it does not know about ts-command-line environment variable mappings.  We should fix this.
                throw new Error(`An "environmentVariable" cannot be specified for "${this.longName}"` +
                    ` because it is a required parameter`);
            }
            if (!CommandLineParameter._environmentVariableRegExp.test(this.environmentVariable)) {
                throw new Error(`Invalid environment variable name: "${this.environmentVariable}". The name must` +
                    ` consist only of upper-case letters, numbers, and underscores. It may not start with a number.`);
            }
        }
        if (this.undocumentedSynonyms && this.undocumentedSynonyms.length > 0) {
            if (this.required) {
                throw new Error('Undocumented synonyms are not allowed on required parameters.');
            }
            for (const undocumentedSynonym of this.undocumentedSynonyms) {
                if (this.longName === undocumentedSynonym) {
                    throw new Error(`Invalid name: "${undocumentedSynonym}". Undocumented Synonyms must not be the same` +
                        ` as the the long name.`);
                }
                else if (!CommandLineParameter._longNameRegExp.test(undocumentedSynonym)) {
                    throw new Error(`Invalid name: "${undocumentedSynonym}". All undocumented Synonyms name must be` +
                        ` lower-case and use dash delimiters (e.g. "--do-a-thing")`);
                }
            }
        }
    }
    /**
     * Returns additional text used by the help formatter.
     * @internal
     */
    _getSupplementaryNotes(supplementaryNotes) {
        // virtual
        if (this.environmentVariable !== undefined) {
            supplementaryNotes.push('This parameter may alternatively be specified via the ' +
                this.environmentVariable +
                ' environment variable.');
        }
    }
    /**
     * Internal usage only.  Used to report unexpected output from the argparse library.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reportInvalidData(data) {
        throw new Error(`Unexpected data object for parameter "${this.longName}": ` + JSON.stringify(data));
    }
    validateDefaultValue(hasDefaultValue) {
        if (this.required && hasDefaultValue) {
            // If a parameter is "required", then the user understands that they always need to
            // specify a value for this parameter (either via the command line or via an environment variable).
            // It would be confusing to allow a default value that sometimes allows the "required" parameter
            // to be omitted.  If you sometimes don't have a suitable default value, then the better approach
            // is to throw a custom error explaining why the parameter is required in that case.
            throw new Error(`A default value cannot be specified for "${this.longName}" because it is a "required" parameter`);
        }
    }
}
exports.CommandLineParameter = CommandLineParameter;
// Example: "--do-something"
CommandLineParameter._longNameRegExp = /^-(-[a-z0-9]+)+$/;
// Example: "-d"
CommandLineParameter._shortNameRegExp = /^-[a-zA-Z]$/;
// "Environment variable names used by the utilities in the Shell and Utilities volume of
// IEEE Std 1003.1-2001 consist solely of uppercase letters, digits, and the '_' (underscore)
// from the characters defined in Portable Character Set and do not begin with a digit."
// Example: "THE_SETTING"
CommandLineParameter._environmentVariableRegExp = /^[A-Z_][A-Z0-9_]*$/;
/**
 * The common base class for parameters types that receive an argument.
 *
 * @remarks
 * An argument is an accompanying command-line token, such as "123" in the
 * example "--max-count 123".
 * @public
 */
class CommandLineParameterWithArgument extends CommandLineParameter {
    /** @internal */
    constructor(definition) {
        super(definition);
        if (definition.argumentName === '') {
            throw new Error('The argument name cannot be an empty string. (For the default name, specify undefined.)');
        }
        if (definition.argumentName.toUpperCase() !== definition.argumentName) {
            throw new Error(`Invalid name: "${definition.argumentName}". The argument name must be all upper case.`);
        }
        const match = definition.argumentName.match(CommandLineParameterWithArgument._invalidArgumentNameRegExp);
        if (match) {
            throw new Error(`The argument name "${definition.argumentName}" contains an invalid character "${match[0]}".` +
                ` Only upper-case letters, numbers, and underscores are allowed.`);
        }
        this.argumentName = definition.argumentName;
        this.completions = definition.completions;
    }
}
exports.CommandLineParameterWithArgument = CommandLineParameterWithArgument;
// Matches the first character that *isn't* part of a valid upper-case argument name such as "URL_2"
CommandLineParameterWithArgument._invalidArgumentNameRegExp = /[^A-Z_0-9]/;
//# sourceMappingURL=BaseClasses.js.map