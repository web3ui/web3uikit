# Change Log

## [3.0.0] - 2021-07-08

* **API** Renamed `const` function to [constant][doc:constant].
* Migrate to TypeScript and make type definitions available from npm.

## [2.0.0] - 2021-07-08

* Improve [browser compatibility][pr#28] by adding a browser polyfill
  for the Node browser module and loosening types from Buffer to Uint8Array.

## [1.2.2] - 2021-07-05

* Improve [browser compatibility][pr#27] by eliminating a dependence on
  the Node assert module.

## [1.2.1] - 2021-04-29

* Improve [browser compatibility][pr#24] by using `Buffer.isBuffer` instead of
  `instanceof` to confirm Buffer types.

## [1.2.0] - 2018-03-14

* **API** Add [UTF8][doc:UTF8] to encode UTF strings in a possibly
  bounded buffer, resolving [issue #21][issue#21].
* **API** Allow the layout parameter of
  a [VariantLayout][doc:VariantLayout] to be omitted in cases where no
  data beyond the discriminator is required,
  resolving [issue #20][issue#20].

## [1.1.0] - 2018-01-06

* **API** Add a third parameter to Structure specifying it should decode
  short buffers as prefixes, resolving [issue #19][issue#19].
* **API** Interpret string argument to BitStructure `msb` parameter as
  a `property` parameter, resolving [issue #17][issue#17].

## [1.0.0] - 2017-12-17

* Minimum Node version increased to 4.5 to support dependency
  on
  [Buffer.alloc()](https://nodejs.org/dist/latest-v4.x/docs/api/buffer.html#buffer_class_method_buffer_alloc_size_fill_encoding).
* Removed [patch][node:issue#3994] for [ancient buffer bug][node:issue#3992]
* Update to ES6 classes and other features
* Documentation clarifications.
* Update dependent packages.
* Switch to [npm:eslint] and deal with fallout.

## [0.13.0] - 2016-03-27

* **API** Add [fieldFor][doc:BitStructure.fieldFor].
* Fix incorrect encoding of [boolean-valued bit fields][doc:Boolean].
* **API** Add [offsetOf][doc:Structure.offsetOf] and [layoutFor][doc:Structure.layoutFor].

## [0.12.1] - 2016-03-08

* Disable coverage testing for [patchIssue3992][doc:patchIssue3992] to
  avoid taking a penalty on node versions that have been updated.

## [0.12.0] - 2016-03-08

* **API** Replace `setClassLayout` with [bindConstructorLayout][doc:bindConstructorLayout].
* **API** Replace `objectPrototype` with [makeDestinationObject][doc:makeDestinationObject].

## [0.11.0] - 2016-02-10

* **API** Provide prototypes to use for decoded objects, resolving
  [issue #15][issue#15].

## [0.10.0] - 2016-01-23

* **API** Change some exceptions (especially integer value spans) to
  throw `RangeError` instead of `TypeError`, resolving
  [issue #12][issue#12].
* **API** [Add][issue#14] [boolean-valued bit fields][doc:Boolean].
* Increase coverage of primary module to 100%.
* Update dev dependency modules.
* Fix always-false pre-convert type check.

## [0.9.0] - 2015-12-22

* **API** Support inferring [Sequence][doc:Sequence.count] and
  [Blob][doc:Blob.length] spans from available data.
* **API** Define return value for [Layout.encode][doc:Layout.encode] so
  we know how much was written.
* **API** Change name of [Sequence][doc:Sequence] property
  `elementLayout` (from `element_layout`) and [Union][doc:Union]
  property `defaultLayout` (from (`default layout`) for coding standard
  conformance.
* Convert to [Google coding style][npm:jscs].

## [0.8.0] - 2015-11-29

* [Add][issue#13] [64-bit integers][doc:NearInt64].

## [0.7.1] - 2015-11-23

* Stop publishing emacs backup files to npm.

## [0.7.0] - 2015-11-23

* [Fix][doc:patchIssue3992] [bug in Buffer.writeInt][node:issue#3992].
* **API** Support [variable lengths][doc:Layout.getSpan] in
  unions.
* **API** Add [zero-width constants][doc:Constant].
* **API** Add function to infer [union variant for object][doc:Union.getSourceVariant].
* **API** Rework how [union discriminators][doc:UnionDiscriminator] are
  defined.

## [0.6.0] - 2015-11-21

* **API** [Support][issue#11] variable lengths in
  [Blob][doc:Blob.length] and [Sequence][doc:Sequence.count].
* **API** Add [NUL-terminated C strings][doc:CString].
* **API** Add API to access layout [span][doc:Layout.span]
* **API** Leave data associated with unnamed properties unchanged in
  [Structure][doc:structure] and [BitStructure][doc:BitStructure] regions
  (formerly was zeroed on encode).
* Add [offset layout][doc:OffsetLayout] support.
* **API** Eliminate failed support for [anonymous containers][issue#8].

## [0.5.0] - 2015-11-20

* Add [factories for various layouts][issue#10].
* Integrate [travis support][ci:travis].
* Integrate [coverage testing][ci:coveralls] using [Istanbul][npm:istanbul].

## [0.4.0] - 2015-11-19

* [Support][issue#9] [data blobs][doc:Blob].
* Add tests for support of [anonymous containers][issue#8] *(feature
  ultimately rejected)*.
* [Allow][issue#7] [external discriminators][doc:UnionDiscriminator] for
  unions.
* [Respect union property names][issue#6].

## [0.3.0] - 2015-11-07

* [Add support][issue#5] for [bit fields][doc:BitField].
* Various [corrections and enhancements in examples][issue#4].

## [0.2.0] - 2015-10-25

* Add [fromArray helper][issue#3] to simplify construction from argument
  list.
* Document [destination parameter to decode][issue#2].
* Allow [user-defined name for union discriminators][issue#1].

## 0.1.0 - 2015-10-25

* Initial release.

[1.2.2]: https://github.com/pabigot/buffer-layout/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/pabigot/buffer-layout/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/pabigot/buffer-layout/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/pabigot/buffer-layout/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/pabigot/buffer-layout/compare/v0.13.0...v1.0.0
[0.13.0]: https://github.com/pabigot/buffer-layout/compare/v0.12.0...v0.13.0
[0.12.1]: https://github.com/pabigot/buffer-layout/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/pabigot/buffer-layout/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/pabigot/buffer-layout/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/pabigot/buffer-layout/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/pabigot/buffer-layout/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/pabigot/buffer-layout/compare/v0.7.0...v0.8.0
[0.7.1]: https://github.com/pabigot/buffer-layout/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/pabigot/buffer-layout/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/pabigot/buffer-layout/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/pabigot/buffer-layout/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/pabigot/buffer-layout/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/pabigot/buffer-layout/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/pabigot/buffer-layout/compare/v0.1.0...v0.2.0
[doc:bindConstructorLayout]: http://pabigot.github.io/buffer-layout/module-Layout.html#.bindConstructorLayout
[doc:BitField]: http://pabigot.github.io/buffer-layout/module-Layout-BitField.html
[doc:BitStructure]: http://pabigot.github.io/buffer-layout/module-Layout-BitStructure.html
[doc:BitStructure.fieldFor]: http://pabigot.github.io/buffer-layout/module-Layout-BitStructure.html#fieldFor
[doc:Blob]: http://pabigot.github.io/buffer-layout/module-Layout-Blob.html
[doc:Blob.length]: http://pabigot.github.io/buffer-layout/module-Layout-Blob.html#length
[doc:Boolean]: http://pabigot.github.io/buffer-layout/module-Layout-Boolean.html
[doc:Constant]: http://pabigot.github.io/buffer-layout/module-Layout-Constant.html
[doc:CString]: http://pabigot.github.io/buffer-layout/module-Layout-CString.html
[doc:Layout.encode]: http://pabigot.github.io/buffer-layout/module-Layout-Layout.html#encode
[doc:Layout.getSpan]: http://pabigot.github.io/buffer-layout/module-Layout-Layout.html#getSpan
[doc:Layout.span]: http://pabigot.github.io/buffer-layout/module-Layout-Layout.html#span
[doc:makeDestinationObject]: http://pabigot.github.io/buffer-layout/module-Layout-Layout.html#makeDestinationObject
[doc:NearInt64]: http://pabigot.github.io/buffer-layout/module-Layout-NearInt64.html
[doc:OffsetLayout]: http://pabigot.github.io/buffer-layout/module-Layout-OffsetLayout.html
[doc:patchIssue3992]: http://pabigot.github.io/buffer-layout/module-patchIssue3992.html
[doc:Sequence]: http://pabigot.github.io/buffer-layout/module-Layout-Sequence.html
[doc:Sequence.count]: http://pabigot.github.io/buffer-layout/module-Layout-Sequence.html#count
[doc:Structure]: http://pabigot.github.io/buffer-layout/module-Layout-Structure.html
[doc:Structure.layoutFor]: http://pabigot.github.io/buffer-layout/module-Layout-Structure.html#layoutFor
[doc:Structure.offsetOf]: http://pabigot.github.io/buffer-layout/module-Layout-Structure.html#offsetOf
[doc:Union]: http://pabigot.github.io/buffer-layout/module-Layout-Union.html
[doc:Union.getSourceVariant]: http://pabigot.github.io/buffer-layout/module-Layout-Union.html#getSourceVariant
[doc:UnionDiscriminator]: http://pabigot.github.io/buffer-layout/module-Layout-UnionDiscriminator.html
[doc:UTF8]: http://pabigot.github.io/buffer-layout/module-Layout-UTF8.html
[doc:VariantLayout]: http://pabigot.github.io/buffer-layout/module-Layout-VariantLayout.html
[issue#1]: https://github.com/pabigot/buffer-layout/issues/1
[issue#2]: https://github.com/pabigot/buffer-layout/issues/2
[issue#3]: https://github.com/pabigot/buffer-layout/issues/3
[issue#4]: https://github.com/pabigot/buffer-layout/issues/4
[issue#5]: https://github.com/pabigot/buffer-layout/issues/5
[issue#6]: https://github.com/pabigot/buffer-layout/issues/6
[issue#7]: https://github.com/pabigot/buffer-layout/issues/7
[issue#8]: https://github.com/pabigot/buffer-layout/issues/8
[issue#9]: https://github.com/pabigot/buffer-layout/issues/9
[issue#10]: https://github.com/pabigot/buffer-layout/issues/10
[issue#11]: https://github.com/pabigot/buffer-layout/issues/11
[issue#12]: https://github.com/pabigot/buffer-layout/issues/12
[issue#13]: https://github.com/pabigot/buffer-layout/issues/13
[issue#14]: https://github.com/pabigot/buffer-layout/issues/14
[issue#15]: https://github.com/pabigot/buffer-layout/issues/15
[issue#17]: https://github.com/pabigot/buffer-layout/issues/17
[issue#19]: https://github.com/pabigot/buffer-layout/issues/19
[issue#20]: https://github.com/pabigot/buffer-layout/issues/20
[issue#21]: https://github.com/pabigot/buffer-layout/issues/21
[pr#24]: https://github.com/pabigot/buffer-layout/pull/24
[pr#26]: https://github.com/pabigot/buffer-layout/pull/26
[ci:travis]: https://travis-ci.org/pabigot/buffer-layout
[ci:coveralls]: https://coveralls.io/github/pabigot/buffer-layout
[node:issue#3992]: https://github.com/nodejs/node/issues/3992
[node:issue#3994]: https://github.com/nodejs/node/issues/3994
[npm:istanbul]: https://www.npmjs.com/package/istanbul
[npm:jscs]: https://www.npmjs.com/package/jscs
[npm:eslint]: https://www.npmjs.com/package/eslint

<!---
# Local Variables:
# mode:markdown
# End:
-->
