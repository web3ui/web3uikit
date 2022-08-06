====================== [**WE ARE LOOKING FOR A NEW MAINTAINER**](https://github.com/brillout/vite-plugin-mdx/issues/42) ====================
 
# Vite Plugin MDX

Vite plugin to use MDX with your Vite app.

Features:

- Works with MDX v1 and MDX v2.
- Works with React and Preact.
- Works with Vue [**[WIP]**](https://github.com/brillout/vite-plugin-mdx/issues/3).
- HMR support.
- SSR support.
- Plugin support, such as [remark-frontmatter](https://github.com/remarkjs/remark-frontmatter).

## Getting Started

1. Install:

   1. Vite Plugin:
      ```sh
       npm install vite-plugin-mdx
      ```
   2. MDX v1:
      ```sh
      npm install @mdx-js/mdx
      ```
      Or MDX v2:
      ```sh
      npm install @mdx-js/mdx@next
      ```
   3. MDX React:
      ```sh
      npm install @mdx-js/react
      ```
      Or MDX Preact:
      ```sh
      npm install @mdx-js/preact
      ```

2. Add the plugin to your `vite.config.js`.

   ```js
   // vite.config.js

   import mdx from 'vite-plugin-mdx'

   // `options` are passed to `@mdx-js/mdx`
   const options = {
     // See https://mdxjs.com/advanced/plugins
     remarkPlugins: [
       // E.g. `remark-frontmatter`
     ],
     rehypePlugins: [],
   }

   export default {
     plugins: [mdx(options)]
   }
   ```

3. You can now write `.mdx` files.

   ```mdx-js
   // hello.mdx

   import { Counter } from './Counter.jsx'

   # Hello

   This text is written in Markdown.

   MDX allows Rich React components to be used directly in Markdown: <Counter/>
   ```

   ```jsx
   // Counter.jsx

   import React, { useState } from 'react'

   export { Counter }

   function Counter() {
     const [count, setCount] = useState(0)

     return (
       <button onClick={() => setCount((count) => count + 1)}>
         Counter: {count}
       </button>
     )
   }
   ```

## Examples

- [React example](/examples/react/).
- [Preact example](/examples/preact/).

## File-specific options

To define options a per-file basis, you can pass a function to the `mdx` plugin factory.

```ts
mdx((filename) => {
  // Any options passed to `mdx` can be returned.
  return {
    remarkPlugins: [
      // Enable a plugin based on the current file.
      /\/components\//.test(filename) && someRemarkPlugin,
    ]
  }
})
```

## Pre-built transclusion

To embed an `.mdx` or `.md` file into another, you can import it without naming its export. The file extension is required. Remark plugins are applied to the imported file before it's embedded.

```mdx
import '../foo/bar.mdx'
```
