export default function createSwappableProxy<T extends object>(initialTarget: T): T {
  let target = initialTarget;

  let setTarget = (newTarget: T) => {
    target = newTarget;
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
