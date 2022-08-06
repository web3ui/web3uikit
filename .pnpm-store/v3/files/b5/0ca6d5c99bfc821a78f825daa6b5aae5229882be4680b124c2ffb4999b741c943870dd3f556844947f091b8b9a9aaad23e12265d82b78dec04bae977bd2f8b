import type { IPhantomWalletProvider } from "@web3auth/solana-provider";

export function poll(callback: () => boolean | Promise<boolean>, interval: number, count: number): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (count > 0) {
      setTimeout(async () => {
        const done = await callback();
        if (done) resolve(done);
        if (!done)
          poll(callback, interval, count - 1)
            .then((res) => {
              resolve(res);
              return res;
            })
            .catch((err) => reject(err));
      }, interval);
    } else {
      resolve(false);
    }
  });
}

export const detectProvider = async (
  options: { interval: number; count: number } = { interval: 1000, count: 3 }
): Promise<IPhantomWalletProvider | null> => {
  const isPhantomAvailable = typeof window !== "undefined" && !!(window as any).solana?.isPhantom;
  if (isPhantomAvailable) {
    return (window as any).solana;
  }
  const isAvailable = await poll(() => (window as any).solana?.isPhantom, options.interval, options.count);
  if (isAvailable) return (window as any).solana;
  return null;
};
