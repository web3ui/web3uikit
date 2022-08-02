"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gracefully handles a given Promise factory.
 * @example
 * cosnt [error, data] = await until(() => asyncAction())
 */
exports.until = async (promise) => {
    try {
        const data = await promise().catch((error) => {
            throw error;
        });
        return [null, data];
    }
    catch (error) {
        return [error, null];
    }
};
