import { ObservableStore } from './ObservableStore';
export declare class MergedStore<T extends Record<string, unknown>> extends ObservableStore<T> {
    private _children;
    constructor(children?: never[]);
    _addChild(child: ObservableStore<Partial<T>>): void;
    _updateWholeState(): void;
}
