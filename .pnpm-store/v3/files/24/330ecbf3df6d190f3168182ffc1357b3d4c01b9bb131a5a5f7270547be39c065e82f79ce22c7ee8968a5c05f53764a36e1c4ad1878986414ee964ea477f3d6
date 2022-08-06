import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
const filterNoop = () => true;
const internalEvents = ["newListener", "removeListener"];
const externalEventFilter = (name: string) => !internalEvents.includes(name);

interface EventEmitterProxyOpts {
  eventFilter?: ((name: string) => boolean) | string;
}

function getRawListeners<T extends SafeEventEmitter>(eventEmitter: T, name: string) {
  // prefer native
  return eventEmitter.rawListeners(name);
}

export default function createEventEmitterProxy<T extends SafeEventEmitter>(initialTarget: T, opts?: EventEmitterProxyOpts): T {
  // parse options
  const finalOpts = opts || {};
  let eventFilter = finalOpts.eventFilter || filterNoop;
  if (typeof eventFilter === "string" && eventFilter === "skipInternal") eventFilter = externalEventFilter;
  if (typeof eventFilter !== "function") throw new Error("createEventEmitterProxy - Invalid eventFilter");

  let target = initialTarget;

  let setTarget = (newTarget: T) => {
    const oldTarget = target;
    target = newTarget;

    oldTarget
      .eventNames()
      .filter(eventFilter as (name: string) => boolean)
      .forEach((name: string) => {
        getRawListeners(oldTarget, name).forEach((handler: (...args: any[]) => void) => newTarget.on(name, handler));
      });

    // remove old listeners
    oldTarget.removeAllListeners();
  };

  const proxy = new Proxy<T>({} as T, {
    get: (_, name) => {
      // override `setTarget` access
      if (name === "setTarget") return setTarget;
      return target[name];
    },
    set: (_, name, value) => {
      // allow `setTarget` overrides
      if (name === "setTarget") {
        setTarget = value;
        return true;
      }
      target[name] = value;
      return true;
    },
  });

  return proxy;
}
