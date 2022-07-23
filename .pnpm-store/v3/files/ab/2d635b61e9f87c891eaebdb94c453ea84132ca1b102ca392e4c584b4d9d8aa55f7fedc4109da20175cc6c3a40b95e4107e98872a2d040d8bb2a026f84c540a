import { ObservableStore } from './ObservableStore';
export declare class ComposedStore<T extends Record<string, Record<string, unknown>>> extends ObservableStore<T> {
    private _children;
    constructor(children: Record<keyof T, ObservableStore<T[keyof T]>>);
    _addChild(childKey: keyof T, child: ObservableStore<T[keyof T]>): void;
}
