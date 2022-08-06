function upgradeSeparator(path) {
  return path.replace(/[|.]/g, '/');
}

export default function transformer(file, api, options) {
  var j = api.jscodeshift;
  var root = j(file.source); // storiesOf(...)

  root.find(j.CallExpression).filter(function (call) {
    return call.node.callee.name === 'storiesOf';
  }).filter(function (call) {
    return call.node.arguments.length > 0 && ['Literal', 'StringLiteral'].includes(call.node.arguments[0].type);
  }).forEach(function (call) {
    var arg0 = call.node.arguments[0];
    arg0.value = upgradeSeparator(arg0.value);
  }); // export default { title: ... }

  root.find(j.ExportDefaultDeclaration).filter(function (def) {
    return def.node.declaration.properties.map(function (p) {
      return p.key.name;
    }).includes('title');
  }).forEach(function (def) {
    if (def.node.declaration && def.node.declaration.properties) {
      def.node.declaration.properties.forEach(function (p) {
        if (p.key.name === 'title') {
          // eslint-disable-next-line no-param-reassign
          p.value.value = upgradeSeparator(p.value.value);
        }
      });
    }
  });
  return root.toSource({
    quote: 'single'
  });
}