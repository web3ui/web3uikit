"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_codepoint_1 = __importDefault(require("entities/lib/decode_codepoint"));
var entities_json_1 = __importDefault(require("entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(require("entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(require("entities/lib/maps/xml.json"));
function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
function isASCIIAlpha(c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();
    if (upper === lower) {
        return function (t, c) {
            if (c === lower) {
                t._state = SUCCESS;
            }
            else {
                t._state = FAILURE;
                t._index--;
            }
        };
    }
    else {
        return function (t, c) {
            if (c === lower || c === upper) {
                t._state = SUCCESS;
            }
            else {
                t._state = FAILURE;
                t._index--;
            }
        };
    }
}
function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();
    return function (t, c) {
        if (c === lower || c === upper) {
            t._state = NEXT_STATE;
        }
        else {
            t._state = 3 /* InTagName */;
            t._index--; //consume the token again
        }
    };
}
var stateBeforeCdata1 = ifElseState("C", 34 /* BeforeCdata2 */, 26 /* InDeclaration */);
var stateBeforeCdata2 = ifElseState("D", 35 /* BeforeCdata3 */, 26 /* InDeclaration */);
var stateBeforeCdata3 = ifElseState("A", 36 /* BeforeCdata4 */, 26 /* InDeclaration */);
var stateBeforeCdata4 = ifElseState("T", 37 /* BeforeCdata5 */, 26 /* InDeclaration */);
var stateBeforeCdata5 = ifElseState("A", 38 /* BeforeCdata6 */, 26 /* InDeclaration */);
var stateBeforeScript1 = consumeSpecialNameChar("R", 45 /* BeforeScript2 */);
var stateBeforeScript2 = consumeSpecialNameChar("I", 46 /* BeforeScript3 */);
var stateBeforeScript3 = consumeSpecialNameChar("P", 47 /* BeforeScript4 */);
var stateBeforeScript4 = consumeSpecialNameChar("T", 48 /* BeforeScript5 */);
var stateAfterScript1 = ifElseState("R", 50 /* AfterScript2 */, 1 /* Text */);
var stateAfterScript2 = ifElseState("I", 51 /* AfterScript3 */, 1 /* Text */);
var stateAfterScript3 = ifElseState("P", 52 /* AfterScript4 */, 1 /* Text */);
var stateAfterScript4 = ifElseState("T", 53 /* AfterScript5 */, 1 /* Text */);
var stateBeforeStyle1 = consumeSpecialNameChar("Y", 55 /* BeforeStyle2 */);
var stateBeforeStyle2 = consumeSpecialNameChar("L", 56 /* BeforeStyle3 */);
var stateBeforeStyle3 = consumeSpecialNameChar("E", 57 /* BeforeStyle4 */);
var stateAfterStyle1 = ifElseState("Y", 59 /* AfterStyle2 */, 1 /* Text */);
var stateAfterStyle2 = ifElseState("L", 60 /* AfterStyle3 */, 1 /* Text */);
var stateAfterStyle3 = ifElseState("E", 61 /* AfterStyle4 */, 1 /* Text */);
var stateBeforeSpecialT = consumeSpecialNameChar("I", 64 /* BeforeTitle1 */);
var stateBeforeTitle1 = consumeSpecialNameChar("T", 65 /* BeforeTitle2 */);
var stateBeforeTitle2 = consumeSpecialNameChar("L", 66 /* BeforeTitle3 */);
var stateBeforeTitle3 = consumeSpecialNameChar("E", 67 /* BeforeTitle4 */);
var stateAfterSpecialTEnd = ifElseState("I", 68 /* AfterTitle1 */, 1 /* Text */);
var stateAfterTitle1 = ifElseState("T", 69 /* AfterTitle2 */, 1 /* Text */);
var stateAfterTitle2 = ifElseState("L", 70 /* AfterTitle3 */, 1 /* Text */);
var stateAfterTitle3 = ifElseState("E", 71 /* AfterTitle4 */, 1 /* Text */);
var stateBeforeEntity = ifElseState("#", 73 /* BeforeNumericEntity */, 74 /* InNamedEntity */);
var stateBeforeNumericEntity = ifElseState("X", 76 /* InHexEntity */, 75 /* InNumericEntity */);
var Tokenizer = /** @class */ (function () {
    function Tokenizer(options, cbs) {
        /** The current state the tokenizer is in. */
        this._state = 1 /* Text */;
        /** The read buffer. */
        this._buffer = "";
        /** The beginning of the section that is currently being read. */
        this._sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */
        this._index = 0;
        /**
         * Data that has already been processed will be removed from the buffer occasionally.
         * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
         */
        this._bufferOffset = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
        this._baseState = 1 /* Text */;
        /** For special parsing behavior inside of script and style tags. */
        this._special = 1 /* None */;
        /** Indicates whether the tokenizer has been paused. */
        this._running = true;
        /** Indicates whether the tokenizer has finished running / `.end` has been called. */
        this._ended = false;
        /** JS State stack which used for JSBlock behaviour when `_curlyBracesInAttributes` option are enabled. */
        this._jsStateStack = [];
        this._cbs = cbs;
        this._xmlMode = !!(options && options.xmlMode);
        this._decodeEntities = !!(options && options.decodeEntities);
        this._curlyBracesInAttributes = !!(options && options.curlyBracesInAttributes);
    }
    Tokenizer.prototype.reset = function () {
        this._state = 1 /* Text */;
        this._buffer = "";
        this._sectionStart = 0;
        this._index = 0;
        this._bufferOffset = 0;
        this._baseState = 1 /* Text */;
        this._special = 1 /* None */;
        this._running = true;
        this._ended = false;
        this._jsStateStack = [];
    };
    Tokenizer.prototype._stateText = function (c) {
        if (c === "<") {
            if (this._index > this._sectionStart) {
                this._cbs.ontext(this._getSection());
            }
            this._state = 2 /* BeforeTagName */;
            this._sectionStart = this._index;
        }
        else if (this._decodeEntities &&
            this._special === 1 /* None */ &&
            c === "&") {
            if (this._index > this._sectionStart) {
                this._cbs.ontext(this._getSection());
            }
            this._baseState = 1 /* Text */;
            this._state = 72 /* BeforeEntity */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateBeforeTagName = function (c) {
        if (c === "/") {
            this._state = 5 /* BeforeClosingTagName */;
        }
        else if (c === "<") {
            this._cbs.ontext(this._getSection());
            this._sectionStart = this._index;
        }
        else if (c === ">" ||
            this._special !== 1 /* None */ ||
            whitespace(c)) {
            this._state = 1 /* Text */;
        }
        else if (c === "!") {
            this._state = 25 /* BeforeDeclaration */;
            this._sectionStart = this._index + 1;
        }
        else if (c === "?") {
            this._state = 27 /* InProcessingInstruction */;
            this._sectionStart = this._index + 1;
        }
        else if (!isASCIIAlpha(c)) {
            this._state = 1 /* Text */;
        }
        else {
            this._state =
                !this._xmlMode && (c === "s" || c === "S")
                    ? 42 /* BeforeSpecialS */
                    : !this._xmlMode && (c === "t" || c === "T")
                        ? 62 /* BeforeSpecialT */
                        : 3 /* InTagName */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInTagName = function (c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this._emitToken("onopentagname");
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateBeforeClosingTagName = function (c) {
        if (whitespace(c)) {
            // ignore
        }
        else if (c === ">") {
            this._state = 1 /* Text */;
        }
        else if (this._special !== 1 /* None */) {
            if (c === "s" || c === "S") {
                this._state = 43 /* BeforeSpecialSEnd */;
            }
            else if (c === "t" || c === "T") {
                this._state = 63 /* BeforeSpecialTEnd */;
            }
            else {
                this._state = 1 /* Text */;
                this._index--;
            }
        }
        else if (!isASCIIAlpha(c)) {
            this._state = 30 /* InSpecialComment */;
            this._sectionStart = this._index;
        }
        else {
            this._state = 6 /* InClosingTagName */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInClosingTagName = function (c) {
        if (c === ">" || whitespace(c)) {
            this._emitToken("onclosetag");
            this._state = 7 /* AfterClosingTagName */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateAfterClosingTagName = function (c) {
        //skip everything until ">"
        if (c === ">") {
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype._stateBeforeAttributeName = function (c) {
        if (c === ">") {
            this._cbs.onopentagend();
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
        else if (c === "/") {
            this._state = 4 /* InSelfClosingTag */;
        }
        else if (!whitespace(c)) {
            this._state = 9 /* InAttributeName */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInSelfClosingTag = function (c) {
        if (c === ">") {
            this._cbs.onselfclosingtag();
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
            this._special = 1 /* None */; // reset special state, in case of self-closing special tags
        }
        else if (!whitespace(c)) {
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateInAttributeName = function (c) {
        if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
            this._cbs.onattribname(this._getSection());
            this._sectionStart = -1;
            this._state = 10 /* AfterAttributeName */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateAfterAttributeName = function (c) {
        if (c === "=") {
            this._state = 11 /* BeforeAttributeValue */;
        }
        else if (c === "/" || c === ">") {
            this._cbs.onattribend();
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
        else if (!whitespace(c)) {
            this._cbs.onattribend();
            this._state = 9 /* InAttributeName */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateBeforeAttributeValue = function (c) {
        if (c === '"') {
            this._state = 12 /* InAttributeValueDq */;
            this._sectionStart = this._index + 1;
        }
        else if (c === "'") {
            this._state = 13 /* InAttributeValueSq */;
            this._sectionStart = this._index + 1;
        }
        else if (this._curlyBracesInAttributes && c === '{') {
            this._state = 15 /* InAttributeValueCurly */;
            this._sectionStart = this._index + 1;
            this._jsStateStack = [];
        }
        else if (!whitespace(c)) {
            this._state = 14 /* InAttributeValueNq */;
            this._sectionStart = this._index;
            this._index--; //reconsume token
        }
    };
    Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function (c) {
        if (c === '"') {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8 /* BeforeAttributeName */;
        }
        else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 72 /* BeforeEntity */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInAttributeValueSingleQuotes = function (c) {
        if (c === "'") {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8 /* BeforeAttributeName */;
        }
        else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 72 /* BeforeEntity */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateInAttributeValueCurlyBraces = function (c) {
        if (c === '{') {
            this._jsStateStack.push(this._state);
            this._state = 15 /* InAttributeValueCurly */;
        }
        else if (c === '"') {
            this._jsStateStack.push(this._state);
            this._state = 16 /* InJsStringDq */;
        }
        else if (c === "'") {
            this._jsStateStack.push(this._state);
            this._state = 17 /* InJsStringSq */;
        }
        else if (c === '`') {
            this._jsStateStack.push(this._state);
            this._state = 18 /* InJsStringInterpolation */;
        }
        else if (c === '/') {
            this._jsStateStack.push(this._state);
            this._state = 22 /* BeforeJsInlineComment1 */;
        }
        else if (c === '}') {
            if (this._jsStateStack.length === 0) {
                this._emitToken("onattribdata");
                this._cbs.onattribend();
                this._state = 8 /* BeforeAttributeName */;
            }
            else {
                var previousState = this._jsStateStack.pop();
                if (previousState) {
                    this._state = previousState;
                }
            }
        }
    };
    Tokenizer.prototype._stateBeforeJsInlineComment1 = function (c) {
        if (c === '*') {
            this._state = 24 /* InJsInlineComment */;
        }
        else {
            var previousState = this._jsStateStack.pop();
            if (previousState) {
                this._state = previousState;
            }
        }
    };
    Tokenizer.prototype._stateInJsInlineComment = function (c) {
        if (c === '*') {
            this._state = 23 /* AfterJsInlineComment1 */;
        }
    };
    Tokenizer.prototype._stateAfterJsInlineComment1 = function (c) {
        if (c === '/') {
            var previousState = this._jsStateStack.pop();
            if (previousState) {
                this._state = previousState;
            }
        }
        else {
            this._state = 24 /* InJsInlineComment */;
        }
    };
    Tokenizer.prototype._stateInJsEscape = function () {
        var previousState = this._jsStateStack.pop();
        if (previousState) {
            this._state = previousState;
        }
    };
    Tokenizer.prototype._stateInJsStringDq = function (c) {
        if (c === '"') {
            var previousState = this._jsStateStack.pop();
            if (previousState) {
                this._state = previousState;
            }
        }
        else if (c === '\\') {
            this._jsStateStack.push(this._state);
            this._state = 21 /* InJsEscape */;
        }
    };
    Tokenizer.prototype._stateInJsStringSq = function (c) {
        if (c === "'") {
            var previousState = this._jsStateStack.pop();
            if (previousState) {
                this._state = previousState;
            }
        }
        else if (c === '\\') {
            this._jsStateStack.push(this._state);
            this._state = 21 /* InJsEscape */;
        }
    };
    Tokenizer.prototype._stateInJsStringInterpolation = function (c) {
        if (c === '`') {
            var previousState = this._jsStateStack.pop();
            if (previousState) {
                this._state = previousState;
            }
        }
        else if (c === '$') {
            this._state = 19 /* InJsStringInterpolationPlaceholderSign */;
        }
    };
    Tokenizer.prototype._stateInJsStringInterpolationPlaceholderSign = function (c) {
        if (c === '{') {
            this._jsStateStack.push(18 /* InJsStringInterpolation */);
            this._state = 20 /* InJsStringInterpolationPlaceholderInner */;
        }
        else {
            this._state = 18 /* InJsStringInterpolation */;
        }
    };
    Tokenizer.prototype._stateInJsStringInterpolationPlaceholderInner = function (c) {
        this._stateInAttributeValueCurlyBraces(c);
    };
    Tokenizer.prototype._stateInAttributeValueNoQuotes = function (c) {
        if (whitespace(c) || c === ">") {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = 8 /* BeforeAttributeName */;
            this._index--;
        }
        else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = 72 /* BeforeEntity */;
            this._sectionStart = this._index;
        }
    };
    Tokenizer.prototype._stateBeforeDeclaration = function (c) {
        this._state =
            c === "["
                ? 33 /* BeforeCdata1 */
                : c === "-"
                    ? 28 /* BeforeComment */
                    : 26 /* InDeclaration */;
    };
    Tokenizer.prototype._stateInDeclaration = function (c) {
        if (c === ">") {
            this._cbs.ondeclaration(this._getSection());
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype._stateInProcessingInstruction = function (c) {
        if (c === ">") {
            this._cbs.onprocessinginstruction(this._getSection());
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype._stateBeforeComment = function (c) {
        if (c === "-") {
            this._state = 29 /* InComment */;
            this._sectionStart = this._index + 1;
        }
        else {
            this._state = 26 /* InDeclaration */;
        }
    };
    Tokenizer.prototype._stateInComment = function (c) {
        if (c === "-")
            this._state = 31 /* AfterComment1 */;
    };
    Tokenizer.prototype._stateInSpecialComment = function (c) {
        if (c === ">") {
            this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index));
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
    };
    Tokenizer.prototype._stateAfterComment1 = function (c) {
        if (c === "-") {
            this._state = 32 /* AfterComment2 */;
        }
        else {
            this._state = 29 /* InComment */;
        }
    };
    Tokenizer.prototype._stateAfterComment2 = function (c) {
        if (c === ">") {
            //remove 2 trailing chars
            this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
        else if (c !== "-") {
            this._state = 29 /* InComment */;
        }
        // else: stay in AFTER_COMMENT_2 (`--->`)
    };
    Tokenizer.prototype._stateBeforeCdata6 = function (c) {
        if (c === "[") {
            this._state = 39 /* InCdata */;
            this._sectionStart = this._index + 1;
        }
        else {
            this._state = 26 /* InDeclaration */;
            this._index--;
        }
    };
    Tokenizer.prototype._stateInCdata = function (c) {
        if (c === "]")
            this._state = 40 /* AfterCdata1 */;
    };
    Tokenizer.prototype._stateAfterCdata1 = function (c) {
        if (c === "]")
            this._state = 41 /* AfterCdata2 */;
        else
            this._state = 39 /* InCdata */;
    };
    Tokenizer.prototype._stateAfterCdata2 = function (c) {
        if (c === ">") {
            //remove 2 trailing chars
            this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
            this._state = 1 /* Text */;
            this._sectionStart = this._index + 1;
        }
        else if (c !== "]") {
            this._state = 39 /* InCdata */;
        }
        //else: stay in AFTER_CDATA_2 (`]]]>`)
    };
    Tokenizer.prototype._stateBeforeSpecialS = function (c) {
        if (c === "c" || c === "C") {
            this._state = 44 /* BeforeScript1 */;
        }
        else if (c === "t" || c === "T") {
            this._state = 54 /* BeforeStyle1 */;
        }
        else {
            this._state = 3 /* InTagName */;
            this._index--; //consume the token again
        }
    };
    Tokenizer.prototype._stateBeforeSpecialSEnd = function (c) {
        if (this._special === 2 /* Script */ && (c === "c" || c === "C")) {
            this._state = 49 /* AfterScript1 */;
        }
        else if (this._special === 3 /* Style */ &&
            (c === "t" || c === "T")) {
            this._state = 58 /* AfterStyle1 */;
        }
        else
            this._state = 1 /* Text */;
    };
    Tokenizer.prototype._stateBeforeSpecialLast = function (c, special) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this._special = special;
        }
        this._state = 3 /* InTagName */;
        this._index--; //consume the token again
    };
    Tokenizer.prototype._stateAfterSpecialLast = function (c, sectionStartOffset) {
        if (c === ">" || whitespace(c)) {
            this._special = 1 /* None */;
            this._state = 6 /* InClosingTagName */;
            this._sectionStart = this._index - sectionStartOffset;
            this._index--; //reconsume the token
        }
        else
            this._state = 1 /* Text */;
    };
    //for entities terminated with a semicolon
    Tokenizer.prototype._parseNamedEntityStrict = function () {
        //offset = 1
        if (this._sectionStart + 1 < this._index) {
            var entity = this._buffer.substring(this._sectionStart + 1, this._index), map = this._xmlMode
                ? xml_json_1.default
                : entities_json_1.default;
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
                this._emitPartial(map[entity]);
                this._sectionStart = this._index + 1;
            }
        }
    };
    //parses legacy entities (without trailing semicolon)
    Tokenizer.prototype._parseLegacyEntity = function () {
        var start = this._sectionStart + 1;
        var limit = this._index - start;
        if (limit > 6)
            limit = 6; // The max length of legacy entities is 6
        while (limit >= 2) {
            // The min length of legacy entities is 2
            var entity = this._buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
                this._emitPartial(legacy_json_1.default[entity]);
                this._sectionStart += limit + 1;
                return;
            }
            else {
                limit--;
            }
        }
    };
    Tokenizer.prototype._stateInNamedEntity = function (c) {
        if (c === ";") {
            this._parseNamedEntityStrict();
            if (this._sectionStart + 1 < this._index && !this._xmlMode) {
                this._parseLegacyEntity();
            }
            this._state = this._baseState;
        }
        else if ((c < "a" || c > "z") &&
            (c < "A" || c > "Z") &&
            (c < "0" || c > "9")) {
            if (this._xmlMode || this._sectionStart + 1 === this._index) {
                // ignore
            }
            else if (this._baseState !== 1 /* Text */) {
                if (c !== "=") {
                    this._parseNamedEntityStrict();
                }
            }
            else {
                this._parseLegacyEntity();
            }
            this._state = this._baseState;
            this._index--;
        }
    };
    Tokenizer.prototype._decodeNumericEntity = function (offset, base) {
        var sectionStart = this._sectionStart + offset;
        if (sectionStart !== this._index) {
            //parse entity
            var entity = this._buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);
            this._emitPartial(decode_codepoint_1.default(parsed));
            this._sectionStart = this._index;
        }
        else {
            this._sectionStart--;
        }
        this._state = this._baseState;
    };
    Tokenizer.prototype._stateInNumericEntity = function (c) {
        if (c === ";") {
            this._decodeNumericEntity(2, 10);
            this._sectionStart++;
        }
        else if (c < "0" || c > "9") {
            if (!this._xmlMode) {
                this._decodeNumericEntity(2, 10);
            }
            else {
                this._state = this._baseState;
            }
            this._index--;
        }
    };
    Tokenizer.prototype._stateInHexEntity = function (c) {
        if (c === ";") {
            this._decodeNumericEntity(3, 16);
            this._sectionStart++;
        }
        else if ((c < "a" || c > "f") &&
            (c < "A" || c > "F") &&
            (c < "0" || c > "9")) {
            if (!this._xmlMode) {
                this._decodeNumericEntity(3, 16);
            }
            else {
                this._state = this._baseState;
            }
            this._index--;
        }
    };
    Tokenizer.prototype._cleanup = function () {
        if (this._sectionStart < 0) {
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        }
        else if (this._running) {
            if (this._state === 1 /* Text */) {
                if (this._sectionStart !== this._index) {
                    this._cbs.ontext(this._buffer.substr(this._sectionStart));
                }
                this._buffer = "";
                this._bufferOffset += this._index;
                this._index = 0;
            }
            else if (this._sectionStart === this._index) {
                //the section just started
                this._buffer = "";
                this._bufferOffset += this._index;
                this._index = 0;
            }
            else {
                //remove everything unnecessary
                this._buffer = this._buffer.substr(this._sectionStart);
                this._index -= this._sectionStart;
                this._bufferOffset += this._sectionStart;
            }
            this._sectionStart = 0;
        }
    };
    //TODO make events conditional
    Tokenizer.prototype.write = function (chunk) {
        if (this._ended)
            this._cbs.onerror(Error(".write() after done!"));
        this._buffer += chunk;
        this._parse();
    };
    // Iterates through the buffer, calling the function corresponding to the current state.
    // States that are more likely to be hit are higher up, as a performance improvement.
    Tokenizer.prototype._parse = function () {
        while (this._index < this._buffer.length && this._running) {
            var c = this._buffer.charAt(this._index);
            if (this._state === 1 /* Text */) {
                this._stateText(c);
            }
            else if (this._state === 12 /* InAttributeValueDq */) {
                this._stateInAttributeValueDoubleQuotes(c);
            }
            else if (this._state === 9 /* InAttributeName */) {
                this._stateInAttributeName(c);
            }
            else if (this._state === 29 /* InComment */) {
                this._stateInComment(c);
            }
            else if (this._state === 30 /* InSpecialComment */) {
                this._stateInSpecialComment(c);
            }
            else if (this._state === 8 /* BeforeAttributeName */) {
                this._stateBeforeAttributeName(c);
            }
            else if (this._state === 3 /* InTagName */) {
                this._stateInTagName(c);
            }
            else if (this._state === 6 /* InClosingTagName */) {
                this._stateInClosingTagName(c);
            }
            else if (this._state === 2 /* BeforeTagName */) {
                this._stateBeforeTagName(c);
            }
            else if (this._state === 10 /* AfterAttributeName */) {
                this._stateAfterAttributeName(c);
            }
            else if (this._state === 13 /* InAttributeValueSq */) {
                this._stateInAttributeValueSingleQuotes(c);
            }
            else if (this._state === 15 /* InAttributeValueCurly */) {
                this._stateInAttributeValueCurlyBraces(c);
            }
            else if (this._state === 21 /* InJsEscape */) {
                this._stateInJsEscape();
            }
            else if (this._state === 16 /* InJsStringDq */) {
                this._stateInJsStringDq(c);
            }
            else if (this._state === 17 /* InJsStringSq */) {
                this._stateInJsStringSq(c);
            }
            else if (this._state === 18 /* InJsStringInterpolation */) {
                this._stateInJsStringInterpolation(c);
            }
            else if (this._state === 19 /* InJsStringInterpolationPlaceholderSign */) {
                this._stateInJsStringInterpolationPlaceholderSign(c);
            }
            else if (this._state === 20 /* InJsStringInterpolationPlaceholderInner */) {
                this._stateInJsStringInterpolationPlaceholderInner(c);
            }
            else if (this._state === 22 /* BeforeJsInlineComment1 */) {
                this._stateBeforeJsInlineComment1(c);
            }
            else if (this._state === 24 /* InJsInlineComment */) {
                this._stateInJsInlineComment(c);
            }
            else if (this._state === 23 /* AfterJsInlineComment1 */) {
                this._stateAfterJsInlineComment1(c);
            }
            else if (this._state === 11 /* BeforeAttributeValue */) {
                this._stateBeforeAttributeValue(c);
            }
            else if (this._state === 5 /* BeforeClosingTagName */) {
                this._stateBeforeClosingTagName(c);
            }
            else if (this._state === 7 /* AfterClosingTagName */) {
                this._stateAfterClosingTagName(c);
            }
            else if (this._state === 42 /* BeforeSpecialS */) {
                this._stateBeforeSpecialS(c);
            }
            else if (this._state === 31 /* AfterComment1 */) {
                this._stateAfterComment1(c);
            }
            else if (this._state === 14 /* InAttributeValueNq */) {
                this._stateInAttributeValueNoQuotes(c);
            }
            else if (this._state === 4 /* InSelfClosingTag */) {
                this._stateInSelfClosingTag(c);
            }
            else if (this._state === 26 /* InDeclaration */) {
                this._stateInDeclaration(c);
            }
            else if (this._state === 25 /* BeforeDeclaration */) {
                this._stateBeforeDeclaration(c);
            }
            else if (this._state === 32 /* AfterComment2 */) {
                this._stateAfterComment2(c);
            }
            else if (this._state === 28 /* BeforeComment */) {
                this._stateBeforeComment(c);
            }
            else if (this._state === 43 /* BeforeSpecialSEnd */) {
                this._stateBeforeSpecialSEnd(c);
            }
            else if (this._state === 63 /* BeforeSpecialTEnd */) {
                stateAfterSpecialTEnd(this, c);
            }
            else if (this._state === 49 /* AfterScript1 */) {
                stateAfterScript1(this, c);
            }
            else if (this._state === 50 /* AfterScript2 */) {
                stateAfterScript2(this, c);
            }
            else if (this._state === 51 /* AfterScript3 */) {
                stateAfterScript3(this, c);
            }
            else if (this._state === 44 /* BeforeScript1 */) {
                stateBeforeScript1(this, c);
            }
            else if (this._state === 45 /* BeforeScript2 */) {
                stateBeforeScript2(this, c);
            }
            else if (this._state === 46 /* BeforeScript3 */) {
                stateBeforeScript3(this, c);
            }
            else if (this._state === 47 /* BeforeScript4 */) {
                stateBeforeScript4(this, c);
            }
            else if (this._state === 48 /* BeforeScript5 */) {
                this._stateBeforeSpecialLast(c, 2 /* Script */);
            }
            else if (this._state === 52 /* AfterScript4 */) {
                stateAfterScript4(this, c);
            }
            else if (this._state === 53 /* AfterScript5 */) {
                this._stateAfterSpecialLast(c, 6);
            }
            else if (this._state === 54 /* BeforeStyle1 */) {
                stateBeforeStyle1(this, c);
            }
            else if (this._state === 39 /* InCdata */) {
                this._stateInCdata(c);
            }
            else if (this._state === 55 /* BeforeStyle2 */) {
                stateBeforeStyle2(this, c);
            }
            else if (this._state === 56 /* BeforeStyle3 */) {
                stateBeforeStyle3(this, c);
            }
            else if (this._state === 57 /* BeforeStyle4 */) {
                this._stateBeforeSpecialLast(c, 3 /* Style */);
            }
            else if (this._state === 58 /* AfterStyle1 */) {
                stateAfterStyle1(this, c);
            }
            else if (this._state === 59 /* AfterStyle2 */) {
                stateAfterStyle2(this, c);
            }
            else if (this._state === 60 /* AfterStyle3 */) {
                stateAfterStyle3(this, c);
            }
            else if (this._state === 61 /* AfterStyle4 */) {
                this._stateAfterSpecialLast(c, 5);
            }
            else if (this._state === 62 /* BeforeSpecialT */) {
                stateBeforeSpecialT(this, c);
            }
            else if (this._state === 64 /* BeforeTitle1 */) {
                stateBeforeTitle1(this, c);
            }
            else if (this._state === 65 /* BeforeTitle2 */) {
                stateBeforeTitle2(this, c);
            }
            else if (this._state === 66 /* BeforeTitle3 */) {
                stateBeforeTitle3(this, c);
            }
            else if (this._state === 67 /* BeforeTitle4 */) {
                this._stateBeforeSpecialLast(c, 4 /* Title */);
            }
            else if (this._state === 68 /* AfterTitle1 */) {
                stateAfterTitle1(this, c);
            }
            else if (this._state === 69 /* AfterTitle2 */) {
                stateAfterTitle2(this, c);
            }
            else if (this._state === 70 /* AfterTitle3 */) {
                stateAfterTitle3(this, c);
            }
            else if (this._state === 71 /* AfterTitle4 */) {
                this._stateAfterSpecialLast(c, 5);
            }
            else if (this._state === 27 /* InProcessingInstruction */) {
                this._stateInProcessingInstruction(c);
            }
            else if (this._state === 74 /* InNamedEntity */) {
                this._stateInNamedEntity(c);
            }
            else if (this._state === 33 /* BeforeCdata1 */) {
                stateBeforeCdata1(this, c);
            }
            else if (this._state === 72 /* BeforeEntity */) {
                stateBeforeEntity(this, c);
            }
            else if (this._state === 34 /* BeforeCdata2 */) {
                stateBeforeCdata2(this, c);
            }
            else if (this._state === 35 /* BeforeCdata3 */) {
                stateBeforeCdata3(this, c);
            }
            else if (this._state === 40 /* AfterCdata1 */) {
                this._stateAfterCdata1(c);
            }
            else if (this._state === 41 /* AfterCdata2 */) {
                this._stateAfterCdata2(c);
            }
            else if (this._state === 36 /* BeforeCdata4 */) {
                stateBeforeCdata4(this, c);
            }
            else if (this._state === 37 /* BeforeCdata5 */) {
                stateBeforeCdata5(this, c);
            }
            else if (this._state === 38 /* BeforeCdata6 */) {
                this._stateBeforeCdata6(c);
            }
            else if (this._state === 76 /* InHexEntity */) {
                this._stateInHexEntity(c);
            }
            else if (this._state === 75 /* InNumericEntity */) {
                this._stateInNumericEntity(c);
            }
            else if (this._state === 73 /* BeforeNumericEntity */) {
                stateBeforeNumericEntity(this, c);
            }
            else {
                this._cbs.onerror(Error("unknown _state"), this._state);
            }
            this._index++;
        }
        this._cleanup();
    };
    Tokenizer.prototype.pause = function () {
        this._running = false;
    };
    Tokenizer.prototype.resume = function () {
        this._running = true;
        if (this._index < this._buffer.length) {
            this._parse();
        }
        if (this._ended) {
            this._finish();
        }
    };
    Tokenizer.prototype.end = function (chunk) {
        if (this._ended)
            this._cbs.onerror(Error(".end() after done!"));
        if (chunk)
            this.write(chunk);
        this._ended = true;
        if (this._running)
            this._finish();
    };
    Tokenizer.prototype._finish = function () {
        //if there is remaining data, emit it in a reasonable way
        if (this._sectionStart < this._index) {
            this._handleTrailingData();
        }
        this._cbs.onend();
    };
    Tokenizer.prototype._handleTrailingData = function () {
        var data = this._buffer.substr(this._sectionStart);
        if (this._state === 39 /* InCdata */ ||
            this._state === 40 /* AfterCdata1 */ ||
            this._state === 41 /* AfterCdata2 */) {
            this._cbs.oncdata(data);
        }
        else if (this._state === 29 /* InComment */ ||
            this._state === 31 /* AfterComment1 */ ||
            this._state === 32 /* AfterComment2 */) {
            this._cbs.oncomment(data);
        }
        else if (this._state === 74 /* InNamedEntity */ && !this._xmlMode) {
            this._parseLegacyEntity();
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        }
        else if (this._state === 75 /* InNumericEntity */ && !this._xmlMode) {
            this._decodeNumericEntity(2, 10);
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        }
        else if (this._state === 76 /* InHexEntity */ && !this._xmlMode) {
            this._decodeNumericEntity(3, 16);
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        }
        else if (this._state !== 3 /* InTagName */ &&
            this._state !== 8 /* BeforeAttributeName */ &&
            this._state !== 11 /* BeforeAttributeValue */ &&
            this._state !== 10 /* AfterAttributeName */ &&
            this._state !== 9 /* InAttributeName */ &&
            this._state !== 13 /* InAttributeValueSq */ &&
            this._state !== 12 /* InAttributeValueDq */ &&
            this._state !== 14 /* InAttributeValueNq */ &&
            this._state !== 6 /* InClosingTagName */) {
            this._cbs.ontext(data);
        }
        //else, ignore remaining data
        //TODO add a way to remove current tag
    };
    Tokenizer.prototype.getAbsoluteIndex = function () {
        return this._bufferOffset + this._index;
    };
    Tokenizer.prototype._getSection = function () {
        return this._buffer.substring(this._sectionStart, this._index);
    };
    Tokenizer.prototype._emitToken = function (name) {
        this._cbs[name](this._getSection());
        this._sectionStart = -1;
    };
    Tokenizer.prototype._emitPartial = function (value) {
        if (this._baseState !== 1 /* Text */) {
            this._cbs.onattribdata(value); //TODO implement the new event
        }
        else {
            this._cbs.ontext(value);
        }
    };
    return Tokenizer;
}());
exports.default = Tokenizer;
