# react-lazily

[![minzip size](https://badgen.net/bundlephobia/minzip/react-lazily)](https://bundlephobia.com/result?p=react-lazily)
[![install size](https://badgen.net/packagephobia/install/react-lazily)](https://packagephobia.com/result?p=react-lazily)
[![dependency count](https://badgen.net/bundlephobia/dependency-count/react-lazily)](https://bundlephobia.com/result?p=react-lazily)

react-lazily is a simple wrapper around `React.lazy` (or `loadable` from `@loadable/component`) that supports named imports.

Consider that component `MyComponent` is exported with `export default MyComponent` then per React docs you could do:

```ts
const MyComponent = React.lazy(() => import('./MyComponent'))
```

But if the component is exported with named export `export const MyComponent = ...` then you have to do:

```ts
const MyComponent = React.lazy(() =>
  import('./MyComponent').then((module) => ({ default: module.MyComponent }))
)
```

With `react-lazily` it becomes:

```ts
const { MyComponent } = lazily(() => import('./MyComponent'))
```

## Full example

See: https://codesandbox.io/s/react-lazily-example-p7hyj

```ts
import React, { Suspense } from 'react'
import { lazily } from 'react-lazily'

const { MyComponent } = lazily(() => import('./MyComponent'))

const App = () => {
  const [open, setOpen] = React.useReducer(() => true, false)
  return (
    <>
      {open ? (
        <Suspense fallback={<>Loading...</>}>
          <MyComponent />
        </Suspense>
      ) : (
        <button onClick={setOpen}>Load</button>
      )}
    </>
  )
}
```

## Full example with @loadable/component

Don't forget to install `@loadable/component` first.

```ts
import React from 'react'
import { loadable } from 'react-lazily/loadable'

const { MyComponent } = loadable(() => import('./MyComponent'), {
  fallback: <>Loading...</>,
})

const App = () => {
  const [open, setOpen] = React.useReducer(() => true, false)
  return <>{open ? <MyComponent /> : <button onClick={setOpen}>Load</button>}</>
}
```

## Related

- https://github.com/facebook/react/issues/14603#issuecomment-726551598
- https://stackoverflow.com/a/61879800/74167
- https://www.npmjs.com/package/solidjs-lazily
