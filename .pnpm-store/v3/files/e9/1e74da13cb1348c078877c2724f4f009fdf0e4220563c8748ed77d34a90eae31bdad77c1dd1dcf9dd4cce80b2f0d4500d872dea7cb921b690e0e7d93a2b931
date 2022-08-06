![CI](https://github.com/benlesh/rxjs-for-await/workflows/CI/badge.svg)
[![npm version](https://badge.fury.io/js/rxjs-for-await.svg)](https://www.npmjs.com/package/rxjs-for-await)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

# rxjs-for-await
A library for making RxJS support async-await for-await loops via AsyncIterables

## Four Strategies

This library exposes 4 different ways to consume an [RxJS](https://rxjs.dev) observable with an async/await `for await..of` loop using `AsyncIterable`. Each of these strategies has pros and cons, so be aware of those as you choose the one that suits your needs.

### eachValueFrom (lossless)

```ts
async function example() {
  const source$ = interval(100);

  for await (const value of eachValueFrom(source$)) {
    console.log(value);
  }
}
```

This strategy will yield every single value the observable source emits, one at a time, until the observable completes or errors.

#### Pros
- All values are yielded
- You get each value one at a time

#### Cons
- Creates more memory pressure if the body of the `for await` loop takes longer to come back around than the time between emissions from the observable source. If the observable emits faster than your loop can consume them, this may result in a memory leak.

### bufferedValuesFrom (lossless)

```ts
async function example() {
  const source$ = interval(10);

  for await (const buffer of bufferedValuesFrom(source$)) {
    console.log(buffer);
    await wait(1000);
  }
}
```

Keep an internal buffer of values emitted by the observable source, and yield the entire buffer to the `for await` loop. Continue this until the observable source completes or errors.

#### Pros
- All values are yielded
- Lower memory pressure than `eachValueFrom`
- Provides snapshots of what has happened since the last loop

#### Cons
- May still cause out of memory errors if the body of the `for await` loop is _extremely_ slow.
- Perhaps less intuitive than `eachValueFrom`.

### latestValueFrom (lossy)

```ts
async function example() {
  const source$ = interval(100);

  for await (const value of latestValueFrom(source$)) {
    console.log(value);
  }
}
```

This strategy will immediately yield the most recently arrived value, or the very next one, if the `for await` loop is waiting and one has not arrived yet. Will continue
to do so until the source observable completes or errors.

#### Pros
- No chance of memory leaks
- Quick entry to the loop if a value is already available

#### Cons
- Will lose values if more than one value arrives while the loop body is being processed.

### nextValueFrom (lossy)

```ts
async function example() {
  const source$ = interval(100);

  for await (const value of nextValueFrom(source$)) {
    console.log(value);
  }
}
```

Will wait for the very next value to arrive, then yield it. Will continue to do so until the source observable completes or errors.

#### Pros
- No chance of memory leaks

#### Cons
- Loop must wait for the next value to arrive, perhaps slowing down the process
- Will lose values if values arrive while the loop is being processed.
