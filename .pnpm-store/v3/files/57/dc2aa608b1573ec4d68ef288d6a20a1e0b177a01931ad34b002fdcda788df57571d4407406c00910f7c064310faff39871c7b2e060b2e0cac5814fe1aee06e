"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getMembers_1 = __importDefault(require("../utils/getMembers"));
/**
 * Returns true of the prop is required, according to its type definition
 */
function isRequiredPropType(path) {
    return (0, getMembers_1.default)(path).some(member => (!member.computed && member.path.node.name === 'isRequired') ||
        (member.computed && member.path.node.value === 'isRequired'));
}
exports.default = isRequiredPropType;
