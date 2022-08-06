# Strict Event Emitter

`EventEmitter` mirror that restricts emitting/handling events other than specified in an interface.

## Features

- Restricts emitting of the unknown event types.
- Infers emitted data types from the listener's call signature.

## Motivation

The native `EventEmitter` class uses a generic `string` to describe what type of events can be emitted. In most cases you design a strict set of events that you expect your emitter to emit/listen to. This package helps you to type-annotate an emitter instance to produce type violations if an unknown event is emitted/listened to.

```js
const emitter = new EventEmitter()

emitter.addListener('ping', (n: number) => {})

// The "pong" event is not expected, but will be emitted anyway.
// The data passed to the event is incompatible with the expected type.
emitter.emit('pong', 'not a number')
```

```ts
import { StrictEventEmitter } from 'strict-event-emitter'

interface EventsMap {
  ping: (n: number) => void
}

const emitter = new StrictEventEmitter<EventsMap>()
emitter.addListener('ping', (n) => {
  // "n" argument type is inferred as "number'.
})

emitter.emit('ping', 10) // OK
emitter.emit('ping', 'wait, not a number') // TypeError
emitter.emit('unknown', 10) // TypeError
```

This library is a superset class of the native `EventEmitter` with only the type definition logic attached. There's no additional functionality present.

## Getting started

### Install

```bash
npm install strict-event-emitter
```

### Use

```ts
import { StrictEventEmitter } from 'strict-event-emitter'

// 1. Define an interface that describes your events.
// Set event names as the keys, and their listner functions as the values.
interface EventsMap {
  connect: (id: string) => void
  disconnect: (id: string) => void
}

// 2. Create a strict emitter and pass the previously defined "EventsMap"
// as its first generic argument.
const emitter = new StrictEventEmitter<EventsMap>()

// 3. Use the "emitter" the same way you'd use the regular "EventEmitter" instance.
emitter.addListner('connect', (id) => {})
emitter.emit('connect', 'abc-123')
```

## License

MIT
