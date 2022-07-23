import * as webpack from "webpack";
import NullDependency from "webpack/lib/dependencies/NullDependency.js";
declare type Context = {
    write: (a: string) => void;
    read: () => string;
};
declare class DocGenDependency extends NullDependency {
    codeBlock: string;
    constructor(codeBlock: string);
    get type(): string;
    getModuleEvaluationSideEffectsState(): boolean;
    updateHash: webpack.dependencies.NullDependency["updateHash"];
    serialize(context: Context): void;
    deserialize(context: Context): void;
}
export { DocGenDependency };
//# sourceMappingURL=dependency.d.ts.map