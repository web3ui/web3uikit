"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function postProcessProps(props) {
    // props with default values should not be required
    Object.keys(props).forEach(prop => {
        const propInfo = props[prop];
        if (propInfo.defaultValue) {
            propInfo.required = false;
        }
    });
}
function default_1(documentation) {
    const props = documentation.props;
    if (props) {
        postProcessProps(props);
    }
    return documentation;
}
exports.default = default_1;
