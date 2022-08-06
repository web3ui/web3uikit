"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetToTargetString = exports.parseTargetString = void 0;
/**
 * Parses a target string into {project, target, configuration}
 *
 * Examples:
 * ```typescript
 * parseTargetString("proj:test") // returns { project: "proj", target: "test" }
 * parseTargetString("proj:test:production") // returns { project: "proj", target: "test", configuration: "production" }
 * ```
 *
 * @param targetString - target reference
 */
function parseTargetString(targetString) {
    const [project, target, configuration] = targetString.split(':');
    if (!project || !target) {
        throw new Error(`Invalid Target String: ${targetString}`);
    }
    return {
        project,
        target,
        configuration,
    };
}
exports.parseTargetString = parseTargetString;
/**
 * Returns a string in the format "project:target[:configuration]" for the target
 *
 * @param target - target object
 *
 * Examples:
 *
 * ```typescript
 * targetToTargetString({ project: "proj", target: "test" }) // returns "proj:test"
 * targetToTargetString({ project: "proj", target: "test", configuration: "production" }) // returns "proj:test:production"
 * ```
 */
function targetToTargetString({ project, target, configuration, }) {
    return `${project}:${target}${configuration !== undefined ? ':' + configuration : ''}`;
}
exports.targetToTargetString = targetToTargetString;
//# sourceMappingURL=parse-target-string.js.map