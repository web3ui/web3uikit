import { a as getWorkerState, w as withSafeTimers } from './chunk-utils-global.79a8b1cc.mjs';

const rpc = () => {
  const { rpc: rpc2 } = getWorkerState();
  return new Proxy(rpc2, {
    get(target, p, handler) {
      const sendCall = Reflect.get(target, p, handler);
      const safeSendCall = (...args) => withSafeTimers(() => sendCall(...args));
      safeSendCall.asEvent = sendCall.asEvent;
      return safeSendCall;
    }
  });
};

export { rpc as r };
