import camelCase from 'lodash/camelCase';
import upperFirst from 'lodash/upperFirst';
export var sanitizeName = function (name) {
  var key = upperFirst(camelCase(name)); // prepend _ if name starts with a digit

  if (/^\d/.test(key)) {
    key = `_${key}`;
  } // prepend _ if name starts with a digit


  if (/^\d/.test(key)) {
    key = `_${key}`;
  }

  return key;
};
export function jscodeshiftToPrettierParser(parser) {
  var parserMap = {
    babylon: 'babel',
    flow: 'flow',
    ts: 'typescript',
    tsx: 'typescript'
  };
  return parserMap[parser] || 'babel';
}