import { storeKey } from "./constants";
import { IStore } from "./IStore";
import { MemoryStore } from "./MemoryStore";
import { localStorageAvailable } from "./utils";

export default class OpenLoginStore {
  // eslint-disable-next-line no-use-before-define
  private static instance: OpenLoginStore;

  public storage: IStore;

  private constructor(storage: IStore) {
    this.storage = storage;
    try {
      if (!storage.getItem(storeKey)) {
        this.resetStore();
      }
    } catch (error) {
      // Storage is not available
    }
  }

  static getInstance(): OpenLoginStore {
    if (!this.instance) {
      this.instance = new this(localStorageAvailable ? localStorage : new MemoryStore());
    }
    return this.instance;
  }

  toJSON(): string {
    return this.storage.getItem(storeKey);
  }

  resetStore(): Record<string, unknown> {
    const currStore = this.getStore();
    this.storage.setItem(storeKey, JSON.stringify({}));
    return currStore;
  }

  getStore(): Record<string, unknown> {
    return JSON.parse(this.storage.getItem(storeKey));
  }

  get<T>(key: string): T {
    const store = JSON.parse(this.storage.getItem(storeKey));
    return store[key];
  }

  set<T>(key: string, value: T): void {
    const store = JSON.parse(this.storage.getItem(storeKey));
    store[key] = value;
    this.storage.setItem(storeKey, JSON.stringify(store));
  }
}
