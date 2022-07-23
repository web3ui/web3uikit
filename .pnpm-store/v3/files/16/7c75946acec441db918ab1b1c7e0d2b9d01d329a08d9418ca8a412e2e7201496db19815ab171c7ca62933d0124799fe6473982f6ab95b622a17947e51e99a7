Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseDate;

function parseDate(iso8601) {
  var regexp = new RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})' + 'T' + '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})' + '(.([0-9]+))?' + 'Z$');
  var match = regexp.exec(iso8601);

  if (!match) {
    return null;
  }

  var year = parseInt(match[1]) || 0;
  var month = (parseInt(match[2]) || 1) - 1;
  var day = parseInt(match[3]) || 0;
  var hour = parseInt(match[4]) || 0;
  var minute = parseInt(match[5]) || 0;
  var second = parseInt(match[6]) || 0;
  var milli = parseInt(match[8]) || 0;
  return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
}