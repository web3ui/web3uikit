export function storageAvailable(type: string): boolean {
  let storageExists = false;
  let storageLength = 0;
  let storage: Storage;
  try {
    storage = (window as any)[type];
    storageExists = true;
    storageLength = storage.length;
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (error: unknown) {
    const _error = error as DOMException;
    return !!(
      _error &&
      // everything except Firefox
      (_error.code === 22 ||
        // Firefox
        _error.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        _error.name === "QuotaExceededError" ||
        // Firefox
        _error.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storageExists &&
      storageLength !== 0
    );
  }
}

export const isHexStrict = (hex: string): boolean => {
  return (typeof hex === "string" || typeof hex === "number") && /^(-)?0x[0-9a-f]*$/i.test(hex);
};
