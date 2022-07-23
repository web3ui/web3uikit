# Typescript Custom Error

[![NPM version](https://img.shields.io/npm/v/ts-custom-error.svg?colorB=green)](https://www.npmjs.com/package/ts-custom-error)
[![Pet project](https://img.shields.io/badge/maintain-pet_project-yellow.svg?logo=github)](#automate-all-the-things)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/travis/adriengibrat/ts-custom-error.svg)](https://travis-ci.org/adriengibrat/ts-custom-error)
[![BCH compliance](https://bettercodehub.com/edge/badge/adriengibrat/ts-custom-error?branch=master)](https://bettercodehub.com/results/adriengibrat/ts-custom-error)
[![Maintainability](https://api.codeclimate.com/v1/badges/eb4eb956bc028c49f7aa/maintainability)](https://codeclimate.com/github/adriengibrat/ts-custom-error/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/eb4eb956bc028c49f7aa/test_coverage)](https://codeclimate.com/github/adriengibrat/ts-custom-error/test_coverage)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Install size](https://badgen.net/packagephobia/install/ts-custom-error)](https://packagephobia.now.sh/result?p=ts-custom-error)
[![Bundle size](https://badgen.net/bundlephobia/minzip/ts-custom-error?color=green)](https://bundlephobia.com/result?p=ts-custom-error)

## Extend native Error to create custom errors

`ts-custom-error` is a tiny (~500 bytes of minified & gzipped Javascript) package providing a `CustomError` class and a `customErrorFactory` function to easily extends native Error in node and evergreen browsers.

It's written in Typescript and try to offer the best development and debug experiences: bundled in Javascript with Typescript definition files, map files and bundled js files for various environments: transpiled to es5 with commonjs, module and umd exports, the umd bundle is also available minified for easy import in browsers.

## Why

Because [extending native Error in node and in browsers is tricky](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript)
```js
class MyError extends Error {
	constructor(m) {
		super(m)
	}
}
```
 [doesn't work as expected in ES6](https://stackoverflow.com/questions/31089801/extending-error-in-javascript-with-es6-syntax-babel) and [is broken in Typescript](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work).

### Use `CustomError` class

Simply extends and call `super` in you custom constructor.

```ts
import { CustomError } from 'ts-custom-error'

class HttpError extends CustomError {
	public constructor(
		public code: number,
		message?: string,
	) {
		super(message)
	}
}

...

new HttpError(404, 'Not found')
```
You may want more advanced contructor logic and cutom methods, see [examples](https://github.com/adriengibrat/ts-custom-error/tree/master/src/example)

### Use `customErrorFactory` factory

*Custom error contructor returned by the factory pass the same unit tests as Class constructor.*

Factory still allows custom logic inside constructor:

```ts
import { customErrorFactory } from 'ts-custom-error'

const HttpError = customErrorFactory(function HttpError (code: number, message= '') {
	this.code = code
	this.message = message
})

...

new HttpError(404, 'Not found')
```

Custom Error from `customErrorFactory` can:
- Be called as a simple function
```ts
HttpError(404, 'Not found')
```
- Extend any native Error, using the second optional argument
```ts
import { customErrorFactory } from 'ts-custom-error'

const ValidationError = customErrorFactory(function ValidationError (message= 'Invalid parameter') {
	this.message = message
}, TypeError)
```

### Known limitations

#### Minification and transpilation mangle custom Error names.
Unexpected results are:
- Minified identifiers in place of custom Error name in Stacktrace
- Wrong error recognition where using errors name (bad practice) instead of `instanceof`

You may fix this behaviour by:
- Using [uglifyjs options](https://github.com/mishoo/UglifyJS2/blob/harmony/README.md) `--mangle 'except=["MyError"]'` (need to specify all custom error names) or `--keep_fnames` / `--keep_classnames` (nothing to specify but your bundle size will be larger)
- Setting explicitly error name:

```ts
import { CustomError } from 'ts-custom-error'

class MyError extends CustomError {
	constructor() {
		super()
		// Set name explicitly as minification can mangle class names
		Object.defineProperty(this, 'name', { value: 'MyError' })
	}
}
```

```ts
import { customErrorFactory } from 'ts-custom-error'

const MyError = customErrorFactory(function MyError () {
	// Set name explicitly as minification can remove function expression names
	Object.defineProperty(this, 'name', { value: 'MyError' })
})
```

### Usefull development commands

- Watch source changes and run corresponding unit tests
```
npm start
```

- Run all unit tests
```
npm test
```

- Get coverage report
```
npm run coverage
```

- Format staged code and run commitizen (enforce commit message convention)
```
npm run commit
```

### Automate all the things

⚠️ This project is mainly a pet project and its first purpose is to be a playground for various external services and tools:
- opinionated code style mostly inspired from [standardjs](https://standardjs.com)
- automatic code formating with [prettier](https://github.com/prettier/prettier)
- code quality analysis by [codeclimate](https://codeclimate.com/github/adriengibrat/ts-custom-error)~~, [bithound](https://www.bithound.io/github/adriengibrat/ts-custom-error)~~ & [bettercodehub](https://bettercodehub.com/results/adriengibrat/ts-custom-error)
- automated continuous integration on [travis](https://travis-ci.org/adriengibrat/ts-custom-error)
- automated semantic versioning with [changelog](CHANGELOG.md) generation and release deployment on [npm](https://www.npmjs.com/package/ts-custom-error) and [github](https://github.com/adriengibrat/ts-custom-error/releases) thanks to [semantic-release](https://github.com/semantic-release/semantic-release)

## Licence

Starting [version 3.0.0](https://github.com/adriengibrat/ts-custom-error/releases/tag/v3.0.0) this project is under [MIT licence](LICENSE), there are no code change between [version 2.2.2](https://github.com/adriengibrat/ts-custom-error/releases/tag/v2.2.2) and [version 3.0.0](https://github.com/adriengibrat/ts-custom-error/releases/tag/v3.0.0) but changing licence was considered as a breaking change. All [versions < 3.0.0](https://github.com/adriengibrat/ts-custom-error/releases) are under [WTFPL](http://www.wtfpl.net).

## Similar packages

- [![custom-error](https://badge.fury.io/js/custom-error.svg)](https://www.npmjs.com/package/custom-error) [custom-error](https://github.com/andrezsanchez/custom-error) provides a factory with custom name and parent error
- [![custom-errors](https://badge.fury.io/js/custom-errors.svg)](https://www.npmjs.com/package/custom-errors) [custom-errors](https://github.com/techjacker/custom-errors) provides a class and a factory with custom name and message, easy integration with with [express](https://github.com/expressjs/express) and (log)[https://github.com/visionmedia/log.js]
- [![custom-error-generator](https://badge.fury.io/js/custom-error-generator.svg)](https://www.npmjs.com/package/custom-error-generator) [custom-error-generator](https://github.com/jproulx/node-custom-error) provides a factory with custom name, default properties and a constructor (node only)
- [![custom-error-instance](https://badge.fury.io/js/custom-error-instance.svg)](https://www.npmjs.com/package/custom-error-instance) [custom-error-instance](https://github.com/Gi60s/custom-error-instance) provides a factory with custom name, properties and construction logic (! browser compatibility: redefine constructor name)
- [![node-custom-errors](https://badge.fury.io/js/node-custom-errors.svg)](https://www.npmjs.com/package/node-custom-errors) [node-custom-errors](https://github.com/axyjs/node-custom-errors) provides factories to create abstract or concrete error with default message, an optional constructor function allow more custom properties/methods (node/chrome only, because no feature detection)
- [![extendable-error](https://badge.fury.io/js/extendable-error.svg)](https://www.npmjs.com/package/extendable-error) [extendable-error](https://github.com/vilic/extendable-error) provides a class with clean stacktrace even in non v8 environments
- [![extendable-error-class](https://badge.fury.io/js/extendable-error-class.svg)](https://www.npmjs.com/package/extendable-error-class) [extendable-error-class](https://github.com/brillout/extendable-error-class) provides simple class
- [![extend-error](https://badge.fury.io/js/extend-error.svg)](https://www.npmjs.com/package/extend-error) [extend-error](https://github.com/jayyvis/extend-error) provides a factory attached to global Error object, allows custom name, code & message error
- [![error-extend](https://badge.fury.io/js/eerror-extend.svg)](https://www.npmjs.com/package/error-extend) [error-extend](https://github.com/tilap/error-extend) provides a factory with custom name, default code & message properties, an optional init function allow more custom properties/methods
