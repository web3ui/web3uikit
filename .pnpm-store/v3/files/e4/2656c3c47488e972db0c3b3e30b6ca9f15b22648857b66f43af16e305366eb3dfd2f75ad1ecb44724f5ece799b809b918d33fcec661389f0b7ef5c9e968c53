import { JsonSchema, IJsonSchemaErrorInfo, IJsonSchemaValidateOptions } from './JsonSchema';
import { NewlineKind } from './Text';
/**
 * Represents a JSON-serializable object whose type has not been determined yet.
 *
 * @remarks
 *
 * This type is similar to `any`, except that it communicates that the object is serializable JSON.
 *
 * @public
 */
export declare type JsonObject = any;
/**
 * The Rush Stack lint rules discourage usage of `null`.  However, JSON parsers always return JavaScript's
 * `null` to keep the two syntaxes consistent.  When creating interfaces that describe JSON structures,
 * use `JsonNull` to avoid triggering the lint rule.  Do not use `JsonNull` for any other purpose.
 *
 * @remarks
 * If you are designing a new JSON file format, it's a good idea to avoid `null` entirely.  In most cases
 * there are better representations that convey more information about an item that is unknown, omitted, or disabled.
 *
 * To understand why `null` is deprecated, please see the `@rushstack/eslint-plugin` documentation here:
 *
 * {@link https://www.npmjs.com/package/@rushstack/eslint-plugin#rushstackno-null}
 *
 * @public
 */
export declare type JsonNull = null;
/**
 * Options for JsonFile.stringify()
 *
 * @public
 */
export interface IJsonFileStringifyOptions {
    /**
     * If provided, the specified newline type will be used instead of the default `\r\n`.
     */
    newlineConversion?: NewlineKind;
    /**
     * If true, conforms to the standard behavior of JSON.stringify() when a property has the value `undefined`.
     * Specifically, the key will be dropped from the emitted object.
     */
    ignoreUndefinedValues?: boolean;
    /**
     * If true, then the "jju" library will be used to improve the text formatting.
     * Note that this is slightly slower than the native JSON.stringify() implementation.
     */
    prettyFormatting?: boolean;
    /**
     * If specified, this header will be prepended to the start of the file.  The header must consist
     * of lines prefixed by "//" characters.
     * @remarks
     * When used with {@link IJsonFileSaveOptions.updateExistingFile}
     * or {@link JsonFile.updateString}, the header will ONLY be added for a newly created file.
     */
    headerComment?: string;
}
/**
 * Options for JsonFile.saveJsonFile()
 *
 * @public
 */
export interface IJsonFileSaveOptions extends IJsonFileStringifyOptions {
    /**
     * If there is an existing file, and the contents have not changed, then
     * don't write anything; this preserves the old timestamp.
     */
    onlyIfChanged?: boolean;
    /**
     * Creates the folder recursively using FileSystem.ensureFolder()
     * Defaults to false.
     */
    ensureFolderExists?: boolean;
    /**
     * If true, use the "jju" library to preserve the existing JSON formatting:  The file will be loaded
     * from the target filename, the new content will be merged in (preserving whitespace and comments),
     * and then the file will be overwritten with the merged contents.  If the target file does not exist,
     * then the file is saved normally.
     */
    updateExistingFile?: boolean;
}
/**
 * Utilities for reading/writing JSON files.
 * @public
 */
export declare class JsonFile {
    /**
     * @internal
     */
    static _formatPathForError: (path: string) => string;
    /**
     * Loads a JSON file.
     */
    static load(jsonFilename: string): JsonObject;
    /**
     * An async version of {@link JsonFile.load}.
     */
    static loadAsync(jsonFilename: string): Promise<JsonObject>;
    /**
     * Parses a JSON file's contents.
     */
    static parseString(jsonContents: string): JsonObject;
    /**
     * Loads a JSON file and validate its schema.
     */
    static loadAndValidate(jsonFilename: string, jsonSchema: JsonSchema, options?: IJsonSchemaValidateOptions): JsonObject;
    /**
     * An async version of {@link JsonFile.loadAndValidate}.
     */
    static loadAndValidateAsync(jsonFilename: string, jsonSchema: JsonSchema, options?: IJsonSchemaValidateOptions): Promise<JsonObject>;
    /**
     * Loads a JSON file and validate its schema, reporting errors using a callback
     * @remarks
     * See JsonSchema.validateObjectWithCallback() for more info.
     */
    static loadAndValidateWithCallback(jsonFilename: string, jsonSchema: JsonSchema, errorCallback: (errorInfo: IJsonSchemaErrorInfo) => void): JsonObject;
    /**
     * An async version of {@link JsonFile.loadAndValidateWithCallback}.
     */
    static loadAndValidateWithCallbackAsync(jsonFilename: string, jsonSchema: JsonSchema, errorCallback: (errorInfo: IJsonSchemaErrorInfo) => void): Promise<JsonObject>;
    /**
     * Serializes the specified JSON object to a string buffer.
     * @param jsonObject - the object to be serialized
     * @param options - other settings that control serialization
     * @returns a JSON string, with newlines, and indented with two spaces
     */
    static stringify(jsonObject: JsonObject, options?: IJsonFileStringifyOptions): string;
    /**
     * Serializes the specified JSON object to a string buffer.
     * @param jsonObject - the object to be serialized
     * @param options - other settings that control serialization
     * @returns a JSON string, with newlines, and indented with two spaces
     */
    static updateString(previousJson: string, newJsonObject: JsonObject, options?: IJsonFileStringifyOptions): string;
    /**
     * Saves the file to disk.  Returns false if nothing was written due to options.onlyIfChanged.
     * @param jsonObject - the object to be saved
     * @param jsonFilename - the file path to write
     * @param options - other settings that control how the file is saved
     * @returns false if ISaveJsonFileOptions.onlyIfChanged didn't save anything; true otherwise
     */
    static save(jsonObject: JsonObject, jsonFilename: string, options?: IJsonFileSaveOptions): boolean;
    /**
     * An async version of {@link JsonFile.save}.
     */
    static saveAsync(jsonObject: JsonObject, jsonFilename: string, options?: IJsonFileSaveOptions): Promise<boolean>;
    /**
     * Used to validate a data structure before writing.  Reports an error if there
     * are any undefined members.
     */
    static validateNoUndefinedMembers(jsonObject: JsonObject): void;
    private static _validateNoUndefinedMembers;
    private static _formatKeyPath;
    private static _formatJsonHeaderComment;
}
//# sourceMappingURL=JsonFile.d.ts.map