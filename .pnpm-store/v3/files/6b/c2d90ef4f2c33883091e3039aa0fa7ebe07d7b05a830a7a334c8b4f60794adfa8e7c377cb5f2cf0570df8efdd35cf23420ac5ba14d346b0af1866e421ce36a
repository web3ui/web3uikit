export type AnyFunction = (...args: any[]) => any

export type LazyCallbackReturnType<FnType extends AnyFunction> =
  | Parameters<FnType>
  | []

export interface LazyCallback<FnType extends AnyFunction> {
  (...args: Parameters<FnType>): void
  invoked(): Promise<LazyCallbackReturnType<FnType>>
}

export interface LazyCallbackOptions {
  maxCalls?: number
  maxCallsCallback?(): void
}

export function createLazyCallback<FnType extends AnyFunction>(
  options: LazyCallbackOptions = {}
): LazyCallback<FnType> {
  let calledTimes = 0
  let autoResolveTimeout: NodeJS.Timeout
  let remoteResolve: (args: LazyCallbackReturnType<FnType>) => unknown

  const callPromise = new Promise<LazyCallbackReturnType<FnType>>((resolve) => {
    remoteResolve = resolve
  }).finally(() => {
    clearTimeout(autoResolveTimeout)
  })

  const fn: LazyCallback<FnType> = function (...args) {
    if (options.maxCalls && calledTimes >= options.maxCalls) {
      options.maxCallsCallback?.()
    }

    remoteResolve(args)
    calledTimes++
  }

  fn.invoked = async () => {
    // Immediately resolve the callback if it hasn't been called already.
    autoResolveTimeout = setTimeout(() => {
      remoteResolve([])
    }, 0)

    return callPromise
  }

  return fn
}
