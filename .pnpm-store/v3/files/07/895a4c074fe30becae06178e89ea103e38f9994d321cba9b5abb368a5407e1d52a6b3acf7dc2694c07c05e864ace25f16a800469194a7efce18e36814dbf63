/** All the states the tokenizer can be in. */
declare const enum State {
    Text = 1,
    BeforeTagName = 2,
    InTagName = 3,
    InSelfClosingTag = 4,
    BeforeClosingTagName = 5,
    InClosingTagName = 6,
    AfterClosingTagName = 7,
    BeforeAttributeName = 8,
    InAttributeName = 9,
    AfterAttributeName = 10,
    BeforeAttributeValue = 11,
    InAttributeValueDq = 12,
    InAttributeValueSq = 13,
    InAttributeValueNq = 14,
    InAttributeValueCurly = 15,
    InJsStringDq = 16,
    InJsStringSq = 17,
    InJsStringInterpolation = 18,
    InJsStringInterpolationPlaceholderSign = 19,
    InJsStringInterpolationPlaceholderInner = 20,
    InJsEscape = 21,
    BeforeJsInlineComment1 = 22,
    AfterJsInlineComment1 = 23,
    InJsInlineComment = 24,
    BeforeDeclaration = 25,
    InDeclaration = 26,
    InProcessingInstruction = 27,
    BeforeComment = 28,
    InComment = 29,
    InSpecialComment = 30,
    AfterComment1 = 31,
    AfterComment2 = 32,
    BeforeCdata1 = 33,
    BeforeCdata2 = 34,
    BeforeCdata3 = 35,
    BeforeCdata4 = 36,
    BeforeCdata5 = 37,
    BeforeCdata6 = 38,
    InCdata = 39,
    AfterCdata1 = 40,
    AfterCdata2 = 41,
    BeforeSpecialS = 42,
    BeforeSpecialSEnd = 43,
    BeforeScript1 = 44,
    BeforeScript2 = 45,
    BeforeScript3 = 46,
    BeforeScript4 = 47,
    BeforeScript5 = 48,
    AfterScript1 = 49,
    AfterScript2 = 50,
    AfterScript3 = 51,
    AfterScript4 = 52,
    AfterScript5 = 53,
    BeforeStyle1 = 54,
    BeforeStyle2 = 55,
    BeforeStyle3 = 56,
    BeforeStyle4 = 57,
    AfterStyle1 = 58,
    AfterStyle2 = 59,
    AfterStyle3 = 60,
    AfterStyle4 = 61,
    BeforeSpecialT = 62,
    BeforeSpecialTEnd = 63,
    BeforeTitle1 = 64,
    BeforeTitle2 = 65,
    BeforeTitle3 = 66,
    BeforeTitle4 = 67,
    AfterTitle1 = 68,
    AfterTitle2 = 69,
    AfterTitle3 = 70,
    AfterTitle4 = 71,
    BeforeEntity = 72,
    BeforeNumericEntity = 73,
    InNamedEntity = 74,
    InNumericEntity = 75,
    InHexEntity = 76
}
declare const enum Special {
    None = 1,
    Script = 2,
    Style = 3,
    Title = 4
}
interface Callbacks {
    onattribdata(value: string): void;
    onattribend(): void;
    onattribname(name: string): void;
    oncdata(data: string): void;
    onclosetag(name: string): void;
    oncomment(data: string): void;
    ondeclaration(content: string): void;
    onend(): void;
    onerror(error: Error, state?: State): void;
    onopentagend(): void;
    onopentagname(name: string): void;
    onprocessinginstruction(instruction: string): void;
    onselfclosingtag(): void;
    ontext(value: string): void;
}
export default class Tokenizer {
    /** The current state the tokenizer is in. */
    _state: State;
    /** The read buffer. */
    _buffer: string;
    /** The beginning of the section that is currently being read. */
    _sectionStart: number;
    /** The index within the buffer that we are currently looking at. */
    _index: number;
    /**
     * Data that has already been processed will be removed from the buffer occasionally.
     * `_bufferOffset` keeps track of how many characters have been removed, to make sure position information is accurate.
     */
    _bufferOffset: number;
    /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
    _baseState: State;
    /** For special parsing behavior inside of script and style tags. */
    _special: Special;
    /** Indicates whether the tokenizer has been paused. */
    _running: boolean;
    /** Indicates whether the tokenizer has finished running / `.end` has been called. */
    _ended: boolean;
    /** JS State stack which used for JSBlock behaviour when `_curlyBracesInAttributes` option are enabled. */
    _jsStateStack: Array<State>;
    _cbs: Callbacks;
    _xmlMode: boolean;
    _decodeEntities: boolean;
    _curlyBracesInAttributes: boolean;
    constructor(options: {
        xmlMode?: boolean;
        decodeEntities?: boolean;
        curlyBracesInAttributes?: boolean;
    } | null, cbs: Callbacks);
    reset(): void;
    _stateText(c: string): void;
    _stateBeforeTagName(c: string): void;
    _stateInTagName(c: string): void;
    _stateBeforeClosingTagName(c: string): void;
    _stateInClosingTagName(c: string): void;
    _stateAfterClosingTagName(c: string): void;
    _stateBeforeAttributeName(c: string): void;
    _stateInSelfClosingTag(c: string): void;
    _stateInAttributeName(c: string): void;
    _stateAfterAttributeName(c: string): void;
    _stateBeforeAttributeValue(c: string): void;
    _stateInAttributeValueDoubleQuotes(c: string): void;
    _stateInAttributeValueSingleQuotes(c: string): void;
    _stateInAttributeValueCurlyBraces(c: string): void;
    _stateBeforeJsInlineComment1(c: string): void;
    _stateInJsInlineComment(c: string): void;
    _stateAfterJsInlineComment1(c: string): void;
    _stateInJsEscape(): void;
    _stateInJsStringDq(c: string): void;
    _stateInJsStringSq(c: string): void;
    _stateInJsStringInterpolation(c: string): void;
    _stateInJsStringInterpolationPlaceholderSign(c: string): void;
    _stateInJsStringInterpolationPlaceholderInner(c: string): void;
    _stateInAttributeValueNoQuotes(c: string): void;
    _stateBeforeDeclaration(c: string): void;
    _stateInDeclaration(c: string): void;
    _stateInProcessingInstruction(c: string): void;
    _stateBeforeComment(c: string): void;
    _stateInComment(c: string): void;
    _stateInSpecialComment(c: string): void;
    _stateAfterComment1(c: string): void;
    _stateAfterComment2(c: string): void;
    _stateBeforeCdata6(c: string): void;
    _stateInCdata(c: string): void;
    _stateAfterCdata1(c: string): void;
    _stateAfterCdata2(c: string): void;
    _stateBeforeSpecialS(c: string): void;
    _stateBeforeSpecialSEnd(c: string): void;
    _stateBeforeSpecialLast(c: string, special: Special): void;
    _stateAfterSpecialLast(c: string, sectionStartOffset: number): void;
    _parseNamedEntityStrict(): void;
    _parseLegacyEntity(): void;
    _stateInNamedEntity(c: string): void;
    _decodeNumericEntity(offset: number, base: number): void;
    _stateInNumericEntity(c: string): void;
    _stateInHexEntity(c: string): void;
    _cleanup(): void;
    write(chunk: string): void;
    _parse(): void;
    pause(): void;
    resume(): void;
    end(chunk?: string): void;
    _finish(): void;
    _handleTrailingData(): void;
    getAbsoluteIndex(): number;
    _getSection(): string;
    _emitToken(name: "onopentagname" | "onclosetag" | "onattribdata"): void;
    _emitPartial(value: string): void;
}
export {};
//# sourceMappingURL=Tokenizer.d.ts.map