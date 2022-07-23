# Change Log
All notable changes to the "svelte-intellisense" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## UNPUBLISHED

## [4.2.0] 14.12.2021

- 🔒 **[Fixed]** Upgrade all dependecies to latest version to solve known vulnarability issues.
- ✔ **[Added]** Add support ES6 default value assignment for method parameter [Issue #75](https://github.com/alexprey/sveltedoc-parser/issues/75). Thanks for @ekhaled.
- ✔ **[Added]** Add support of method parsing when it assigned to identifier [Issue #78](https://github.com/alexprey/sveltedoc-parser/issues/78). Thanks for @ekhaled.
- ✔ **[Added]** Extend typings to support `self` and `trusted` event modifiers [Issue #80].
- ✔ **[Added]** Introduce `JSDocTypeFunction` to support functions types in variable definitions and provide details about function parameters and methods.
- ✔ **[Added]** Extend `JSDocType` to support new `JSDocTypeFunction`
- ✔ **[Added]** Improve type infering from assigned value. Currently support simple infering: `array`, `object`, `function`.
- 🛠 **[Fixed]** Fix the [Issue #67](https://github.com/alexprey/sveltedoc-parser/issues/67), [Issue #69](https://github.com/alexprey/sveltedoc-parser/issues/69): specifier comments are not parsed properly; Thanks to @ekhaled
- 🛠 **[Fixed]** Fix the [Issue #72](https://github.com/alexprey/sveltedoc-parser/issues/72): Module context scripts look for the wrong attribute
- 🛠 **[Fixed]** Fix the [Issue #83](https://github.com/alexprey/sveltedoc-parser/issues/83): Default value and keywords of exported aliases not merged.

## [4.1.0] 19.02.2021

- 🎉 **[Misc]** Update the ReadMe by [@soft-decay](https://github.com/soft-decay).
- ✔ **[Added]** Implement support of imported types parsing, f.ex. `@type {import('../typings.d.ts').ExternalTypeClass}`. In order to do this, new field `importPath` introduced to `JSDocType`, in the name property now it returns imported class name, f.ex.: `ExternalTypeClass`.
- 🛠 **[Fixed]** Complete fix of [Issue #1](https://github.com/alexprey/sveltedoc-parser/issues/1): Support parsing event names from top-level constant objects with accessing to their properties by naming strings. Introduce the new issue [Issue #48](https://github.com/alexprey/sveltedoc-parser/issues/48) about supporting parse of event names by external references.
- 🛠 **[Fixed]** Fix the [Issue #47](https://github.com/alexprey/sveltedoc-parser/issues/48), now all comments in markup are parsed correctly and attached to required items in document. Support JSDoc comment markup parsing in all places where comment can be used.
- 🛠 **[Fixed]** Fix the [Issue #61](https://github.com/alexprey/sveltedoc-parser/issues/61), now slot parameter items enrich with all detailed information that was parsed from markup comment.
- 🛠 **[Fixed]** Spec: add the module definition typings to `typings.d.ts` file.
- 🛠 **[Fixed]** Fix some edge-cases in script parsing logic.
- 🛠 **[Tech]** Refactor internal parser logic to make it easy to introduce new features, moves forward to TS support! ;)
- 🔥 **[Breaking]** Spec: change the `SvelteSlotParameter` definition, to support `name`, `description`, `type` fields, instead of many not relevant fields that was inherited from `ISvelteItem` interface.
- 🔥 **[Breaking]** Spec: change the `SvelteSlotItem` definition, to improve consistency:
  - Rename `parameters` property to `params` to be most likely the same as `SvelteMethodItem`. Old field still available until 5.* release.

Thanks a lot [@soft-decay](https://github.com/soft-decay) for contributing in this release!

## [4.0.0] 25.01.2021

- 🛠 **[Fixed]** Fix [Issue #42](https://github.com/alexprey/sveltedoc-parser/issues/42)
- 🛠 **[Fixed]** Partially fixed [Issue #1](https://github.com/alexprey/sveltedoc-parser/issues/1). Now event name correcly parsed if it provided by top-level constant of the same file. Thanks for [@soft-decay](https://github.com/soft-decay)
- ✔ **[Added]** Support to complete parsing of component method arguments [Issue #39](https://github.com/alexprey/sveltedoc-parser/issues/39). Thanks for [@soft-decay](https://github.com/soft-decay)
- ✔ **[Added]** Support to parse return types and description for methods in component [Issue #37](https://github.com/alexprey/sveltedoc-parser/issues/37). Thanks for [@soft-decay](https://github.com/soft-decay)
- ✔ **[Added]** Options validation, thanks for [@soft-decay](https://github.com/soft-decay)
- 🔥 **[Breaking]** API rework for component methods description:
    - `args` property was renamed to `params`;
    - Change the structure of `return` item for methods:
        - `desc` property was renamed to `description`;
        - `type` property now contains the `JSDocType` object, instead of `string` type with text representation of type. This can be gets from `text` property of `JSDocType` object;
    - [Svelte2]: method arguments was presented with plain array with names, now that replaced with objects of `SvelteMethodParamItem` type;
- 🔥 **[Breaking]** Cleanup depricated code:
    - `loc` property was removed, please use `locations` instead, if you late with upgrade;
    - `value` property of `SvelteComponentItem` was removed, please use `importPath` instead

## [3.0.5] 28.11.2020

- 🛠 **[Fixed]** Fix [Issue #35](https://github.com/alexprey/sveltedoc-parser/issues/35): Object literals not supported in @type keyword. Thanks for @soft-decay

## [3.0.4] 25.08.2020

- 🛠 **[Fixed]** Fix [issue #5](https://github.com/alexprey/sveltedoc-parser/issues/5) (slots items have a private access level by default)

## [3.0.3] 25.08.2020

- 🛠 **[Fixed]** Fix [issue #28](https://github.com/alexprey/sveltedoc-parser/issues/28) (Inline event handlers in markup cause errors when used without quotes)
    - Change dependency from `htmlparser2` to [htmlparser2-svelte](https://www.npmjs.com/package/htmlparser2-svelte) special fork of [htmlparser2](https://www.npmjs.com/package/htmlparser2) to handle Svelte specific cases to parse markup

## [3.0.2] 24.08.2020

- 🛠 **[Fixed]** Fix issue #6 (Build a correct component name from a file name)
```
round.button.svelte -> RoundButton
```
- 🛠 **[Fixed]** Fix [issue #27](https://github.com/alexprey/sveltedoc-parser/issues/27) (Events is not exposed from exported functions and arrow functions)
- 🛠 **[Fixed]** Fix [issue #31](https://github.com/alexprey/sveltedoc-parser/issues/31) (Propogated events in markup should be parsed even it was before handled)
- 🛠 **[Fixed]** Fix [issue #32](https://github.com/alexprey/sveltedoc-parser/issues/32) (Event is not registered when dispatched from functions used as a parameters of another functions)

## [3.0.1] 17.08.2020

- [Fixed] Solve issue #26, support `export { variables as var }` statement.
- [Added] now interface `SvelteDataItem` provides a new property `localName` with information about internal name of component property.

## [3.0.0] 08.08.2020

- [Fixed] Solve vulnerability issues:
    - Update `espree` to `7.2.0`
    - Update `htmlparser2` to `3.9.2`
    - Add dependency to `eslint` to fix issues after upgrading to new versions
- [Breaking] Increase requirement of Node.js to `10.0.0`, Node.js v8 now is not supported, this is related with security isssues above. Please let me know if it still required.

## [2.3.4] 10.12.2019

- [Fixed] Now `keywords` feature correctly supported.

Thanks to [hontas](https://github.com/hontas) for following changes:

- [Fixed] Svelte V3: Fix parsing of types for data items, defined by `@type` keyword.

## [2.3.3] 05.12.2019

Thanks to [hontas](https://github.com/hontas) for following changes:

- [Added] Svelte V3: Implement component documentation parsing provided by top level comment in HTML markup or in the JS section, marked with `@component` JSDoc attribute.

## [2.3.2] 02.12.2019

Thanks to [Hostas](https://github.com/hontas) for following fixes:

- [Fixed] Svelte V3: Improve type parsing for properties with default values.
- [Fixed] Svelte V3: In some cases `type` property was setup with wrong structure and data, now it fixed.

## [2.3.1] 25.11.2019

- [Fixed] Svelte V3: Fix parsing issues when anonymous functions are used in event handlers at markup (Issue #18)

## [2.3.0] 02.10.2019

- [Added] Svelte V3: Implement support of script element locations
- [Fixed] Svelte V3: Fix parsing when component have multiple `<script>` blocks
- [Added] Spec: Property `locations` was added to items and presents the list of item code locations
- [Changed] Spec: Property `loc` for items marked as depricated, see `locations` property instead

## [2.2.0] 15.08.2019

- [Added] Svelte V3: Add a new properties for data items: `originalName` and `importPath`
- [Changed] Svelte V3: Add support for multiple bindings to one data item, now `bind` property of the item are array
- [Changed] Property `value` for component items marked as depricated and new proprty `importPath` are used now
- [Fixed] Issues with parsing

## [2.1.0] 09.08.2019

- [Added] Svelte V3: Implement support for property binding parsing (`bind:property={...}`)
- [Added] Svelte V3: Implement support for event parsing which dispatched from code (`dispatch(...)`)
- [Added] Svelte V3: Implement support for event parsing which dispatched from markup expressions (`<button on:click="{() => dispatch(....)}">`)
- [Added] Svelte V3: Implement support for ref parsing (`bind:this={...}`)
- [Fixed] Spec: Property `SvelteDataItem.let` changed to `SvelteDateItem.kind`, that was named as `let` by mistake

## [2.0.0] 05.08.2019

- [Added] Support for V3 syntax

## [1.2.0] 01.02.2019

- [Added] Implement source locations provider for most of component symbols

## [1.1.5] 07.12.2018

- [Fixed] Fix and refactor param keyword parsing to handle some wrong cases (fix and close issue #7)

## [1.1.3] 03.12.2018

- [Fixed] Improve crash handling in parser logic, now all errors fall into `reject(...)` method instead throwing up

## [1.1.2] 30.11.2018

- [Fixed] Fix issue when parsing types from JSDoc, cover more cases. Previously type `@type {('plain'|'plain-negative')}` was not supported in case of `-` symbol

## [1.1.1] 20.11.2018

- [Fix] Fix `typings.d.ts` file to be importable

## [1.1.0] 19.11.2018
- [Fix] Fix issue with component name parsing with default features set (Missing feature `name` in defaults features list)
- [Added] Implement parsing of js types for data properties from `@type` keyword and from default value

## [1.0.0]
- Initial release