Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;
var encoded = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '/': '&#x2F;',
  "'": '&#x27;',
  '"': '&quot;'
};

function escape(str) {
  return str.replace(/[&<>/'"]/g, function (char) {
    return encoded[char];
  });
}