# @cush/relative

[![npm](https://img.shields.io/npm/v/@cush/relative.svg)](https://www.npmjs.com/package/@cush/relative)
[![Bundle size](https://badgen.net/bundlephobia/min/@cush/relative)](https://bundlephobia.com/result?p=@cush/relative)
[![Code style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/alecdotbiz)

Ultra fast relative path resolver ⚡️

```js
relative('a/b', './c')    // => 'a/c'
relative('a/b', '.')      // => 'a'
relative('a/b', '..')     // => ''
relative('a/b', '../..')  // => null
```

The first argument is known as "the module".

The second argument is known as "the relative".

The relative must begin with a period. Otherwise, `null` is returned.

The basename of the module is always ignored.

When the module is *not* absolute and the relative is pointing to the root directory, an empty string is returned.

When the module is *not* absolute and the relative is pointing outside the root directory, `null` is returned.

