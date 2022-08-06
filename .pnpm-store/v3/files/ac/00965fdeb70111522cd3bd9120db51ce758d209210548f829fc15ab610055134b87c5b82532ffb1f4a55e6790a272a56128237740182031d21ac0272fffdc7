import { Stream } from "pump";

export const runOnLoad = (fn: () => void): Promise<unknown> =>
  new Promise((resolve, reject) => {
    if (window.document.body != null) {
      Promise.resolve(fn()).then(resolve).catch(reject);
    } else {
      window.document.addEventListener("DOMContentLoaded", () => {
        Promise.resolve(fn()).then(resolve).catch(reject);
      });
    }
  });

export const runOnComplete = (fn: () => void): void => {
  const retry = window.setInterval(() => {
    if (window.document.readyState === "complete") {
      window.clearInterval(retry);
      fn();
    }
  }, 300);
};

export const htmlToElement = <T extends Element>(html: string): T => {
  const template = window.document.createElement("template");
  const trimmedHtml = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = trimmedHtml;
  return template.content.firstChild as T;
};

export const handleEvent = (handle: EventTarget, eventName: string, handler: (...args: unknown[]) => void, ...handlerArgs: unknown[]): void => {
  const handlerWrapper = () => {
    handler(...handlerArgs);
    handle.removeEventListener(eventName, handlerWrapper);
  };
  handle.addEventListener(eventName, handlerWrapper);
};

export const handleStream = (handle: Stream, eventName: string, handler: (chunk: unknown) => void): void => {
  const handlerWrapper = (chunk: unknown) => {
    handler(chunk);
    handle.removeListener(eventName, handlerWrapper);
  };
  handle.on(eventName, handlerWrapper);
};

export async function documentReady(): Promise<void> {
  return new Promise<void>((resolve) => {
    if (document.readyState !== "loading") {
      resolve();
    } else {
      handleEvent(document, "DOMContentLoaded", resolve);
    }
  });
}
