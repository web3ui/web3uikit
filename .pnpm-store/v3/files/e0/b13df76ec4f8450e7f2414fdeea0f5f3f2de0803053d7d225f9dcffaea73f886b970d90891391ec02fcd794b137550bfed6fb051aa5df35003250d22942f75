# The sveltedoc parser <!-- omit in toc -->

Generate a JSON documentation for a Svelte file.

[![npm](https://img.shields.io/npm/v/sveltedoc-parser.svg)](https://www.npmjs.com/package/sveltedoc-parser)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/alexprey/sveltedoc-parser/Node%20CI/master)

## Table of Contents <!-- omit in toc -->

- [Changelog](#changelog)
  - [[4.2.1] 15.12.2021](#421-15122021)
  - [[4.2.0] 14.12.2021](#420-14122021)
  - [[4.1.0] 19.02.2021](#410-19022021)
  - [[4.0.0] 25.01.2021](#400-25012021)
- [Install](#install)
- [Features](#features)
  - [Common](#common)
  - [Svelte 2](#svelte-2)
  - [Svelte 3](#svelte-3)
- [Options](#options)
  - [Supported feature names](#supported-feature-names)
- [Output format](#output-format)
- [Usage](#usage)
- [API](#api)
  - [parse(options)](#parseoptions)
  - [detectVersion(options)](#detectversionoptions)
- [Issues](#issues)
- [Contributors](#contributors)
- [License](#license)

## Changelog

### [4.2.1] 15.12.2021
- 🛠 **[Fixed]** - Add missed dependency.

### [4.2.0] 14.12.2021

- 🔒 **[Fixed]** Upgrade all dependecies to latest version to solve known vulnarability issues.
- ✔ **[Added]** Add support ES6 default value assignment for method parameter [Issue #75](https://github.com/alexprey/sveltedoc-parser/issues/75). Thanks for [@ekhaled](https://github.com/ekhaled).
- ✔ **[Added]** Add support of method parsing when it assigned to identifier [Issue #78](https://github.com/alexprey/sveltedoc-parser/issues/78). Thanks for [@ekhaled](https://github.com/ekhaled).
- ✔ **[Added]** Extend typings to support `self` and `trusted` event modifiers [Issue #80].
- ✔ **[Added]** Introduce `JSDocTypeFunction` to support functions types in variable definitions and provide details about function parameters and methods.
- ✔ **[Added]** Extend `JSDocType` to support new `JSDocTypeFunction`.
- ✔ **[Added]** Improve type infering from assigned value. Currently support simple infering: `array`, `object`, `function`.
- 🛠 **[Fixed]** Fix the [Issue #67](https://github.com/alexprey/sveltedoc-parser/issues/67), [Issue #69](https://github.com/alexprey/sveltedoc-parser/issues/69): specifier comments are not parsed properly; Thanks to [@ekhaled](https://github.com/ekhaled).
- 🛠 **[Fixed]** Fix the [Issue #72](https://github.com/alexprey/sveltedoc-parser/issues/72): Module context scripts look for the wrong attribute.
- 🛠 **[Fixed]** Fix the [Issue #83](https://github.com/alexprey/sveltedoc-parser/issues/83): Default value and keywords of exported aliases not merged.

### [4.1.0] 19.02.2021

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

### [4.0.0] 25.01.2021

- 🛠 **[Fixed]** Fix [Issue #42](https://github.com/alexprey/sveltedoc-parser/issues/42)
- 🛠 **[Fixed]** Partially fixed [Issue #1](https://github.com/alexprey/sveltedoc-parser/issues/1). Event names are now correctly parsed if provided by a top-level constant in the same file. Thanks to [@soft-decay](https://github.com/soft-decay)
- ✔ **[Added]** Support complete parsing of component method arguments [Issue #39](https://github.com/alexprey/sveltedoc-parser/issues/39). Thanks to [@soft-decay](https://github.com/soft-decay)
- ✔ **[Added]** Support parsing of return type and description for methods in component [Issue #37](https://github.com/alexprey/sveltedoc-parser/issues/37). Thanks to [@soft-decay](https://github.com/soft-decay)
- ✔ **[Added]** Options validation, Thanks to [@soft-decay](https://github.com/soft-decay)
- 🔥 **[Breaking]** API rework for component methods description:
  - `args` property renamed to `params`;
  - Change the structure of `return` item for methods:
    - `desc` property renamed to `description`;
    - `type` property now contains a `JSDocType` object instead of a `string` with a text representation of the type. This text representation is still available from the `text` property of the `JSDocType` object;
  - [Svelte2]: method arguments presented with plain array with names, now that replaced with objects of `SvelteMethodParamItem` type;
- 🔥 **[Breaking]** Cleanup deprecated code:
  - `loc` property removed: Use `locations` instead;
  - `value` property of `SvelteComponentItem` removed: Use `importPath` instead;

Full changelog of release versions can be found [here](/CHANGELOG.md).

## Install

```shell
npm install --save sveltedoc-parser
```

## Features

### Common

- JSDoc support
  - Support description extraction for everything items
  - Support visibility scope from JSDoc keywords: `@public`, `@protected`, `@private`
- Extract list of imported components
  - Extract relative path to imported component (supports full-syntax and short-syntax import styles)
- Extract data properties
  - Extract description from JSDoc comment
  - Extract JS type from JSDoc (`@type {string}`) or parse default value if is not provided
- Extract computed properties with list of dependencies
- Extract list of references attached to components or HTML elements
- Extract information about events
  - Events that propagated from child component or HTML elements `<button on:click>...</button>`
  - Parse event modifiers `... on:click|once`
- Extract list of used default and named `slots`
- Extract component methods
  - Extract description from JSDoc comment
  - Extract parameters description from JSDoc comment
  - Extract JS type from JSDoc for parameters (`@param {string} parameter`)
  - Identify optional parameters using brackets (`@param [parameter]`) or using Google ClosureCompiler syntax (`@param {string=} parameter`)
    - Identify default values for optional parameters (`@param [parameter=Default value]`)
- Extract source locations for component symbols
  - data (props)
  - slots
  - methods
  - refs
  - events

### Svelte 2

- Extract fired events
  - Events fired by this component using the `fire(...)` method
  - Custom event handlers with `private` visibility scope
- Extract component helpers
- Extract component actions
- Extract component transitions

### Svelte 3

- Extract global component description and keywords from JSDoc comment
  - Top level comment must include `@component`. [Example script](/test/svelte3/integration/globalComment/globalComment.script.svelte), [Example html](/test/svelte3/integration/globalComment/globalComment.markup.svelte)
- Extract all dispatched events
  - Events that dispatched from script block by user-created dispatcher
  - Events that dispatched from markup expressions by user-created dispatcher

## Options

The `options` object passed to the `parse` function ***must include*** `filename` or `fileContent`.

Here are the properties supported by `options` (see the [Usage](#Usage) section below):

| json Path | Description | Type | Default value |
|-----------|-------------|------|---------------|
| **filename** | The filename to parse. **Required**, unless `fileContent` is passed. | string |
| **fileContent** | The file content to parse. **Required**, unless `filename` is passed. | string |
| **encoding** | The file encoding. | string | `utf8` |
| **features** | The component features to parse and extract. | string[] | [All supported features](#Supported-feature-names) |
| **ignoredVisibilities** | The list of ignored visibilities. Symbols with a visibility that is ignored will not be included in the output. | string[] | `['private', 'protected']` |
| **includeSourceLocations** | Flag, which indicates that source locations should be provided for component symbols. | boolean | `false` |
| **version** | Optional. Use `2` or `3` to specify which svelte syntax should be used. When that is not provided, parser try to detect version of the syntax. | number? | `undefined` |
| **defaultVersion** | Optional. Specify default version of svelte syntax, if auto-detector can't identify correct version. | number? | `undefined` |

### Supported feature names

These are the values that can be included in the `options.features` array:

| Feature       | Svelte 2 | Svelte 3 | Description                                           |
|---------------|:--------:|:--------:|-------------------------------------------------------|
| `name`        |     ✔    |     ✔    | Component's name                                      |
| `description` |     ✔    |     ✔    | Component's description                               |
| `keywords`    |     ✔    |     ✔    | List of JSDoc keywords found in the top level comment |
| `components`  |     ✔    |     ✔    | List of imported components                           |
| `computed`    |     ✔    |     ✔    | List of computed properties                           |
| `data`        |     ✔    |     ✔    | List of data properties (Component's props)           |
| `events`      |     ✔    |     ✔    | List of events fired/dispatched by this component     |
| `methods`     |     ✔    |     ✔    | List of methods                                       |
| `refs`        |     ✔    |     ✔    | List of references used by this component             |
| `slots`       |     ✔    |     ✔    | List of slots provided by this component              |
| `actions`     |     ✔    |          | List of actions                                       |
| `helpers`     |     ✔    |          | List of helpers                                       |
| `transitions` |     ✔    |          | List of transitions used by this component            |
| `store`       |          |          | NOT SUPPORTED                                         |

## Output format

Output format is described in [this document](/typings.d.ts).

For Svelte 3 examples, take a look at the [examples folder](/examples/) to check how Svelte 3 components are transformed to JSON documents.

For a Svelte 2 example, take a look at the [JSON output](/test/svelte2/integration/overall/overall.main.doc.json) generated from [this component](/test/svelte2/integration/overall/main.svelte).

## Usage

Minimal example:

```js
const sveltedoc = require('sveltedoc-parser');
const options = {
    filename: 'main.svelte'
};

sveltedoc.parse(options)
    .then(componentDoc => {
        console.log(componentDoc);
    })
    .catch(e => {
        console.error(e);
    });
```

or with options customization:

```js
const { parse } = require('sveltedoc-parser');
const { externalFileContent } = require('./local-file');
const options = {
    fileContent: externalFileContent,
    encoding: 'ascii',
    features: ['data', 'computed', 'methods'],
    ignoredVisibilities: ['private'],
    includeSourceLocations: true,
    version: 3
};
const doc = await parse(options);
console.log(doc)
```

## API

### parse(options)

Method to parse svelte component and provide doc object structure with details information.

### detectVersion(options)

Method to detect the Svelte syntax used in the component. It returns, in order:

- the value of `options.version`, if present; else
- `2` or `3` if Svelte 2 syntax or Svelte 3 syntax is detected, respectively; else
- the value of `options.defaultVersion`, if present; else
- `undefined` if the function failed to detect the syntax to use

## Issues

A list of known issues can be found [here](https://github.com/alexprey/sveltedoc-parser/issues).

Found a new issue? Please contribute and write a detailed description [here](https://github.com/alexprey/sveltedoc-parser/issues/new).

## Contributors

Author [Alexey Mulyukin](https://github.com/alexprey)

Inspired by [Vuedoc Parser](https://gitlab.com/vuedoc/parser)

## License

[MIT](/LICENSE)
