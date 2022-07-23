var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));

var ParsePolygon = function () {
  function ParsePolygon(coordinates) {
    (0, _classCallCheck2.default)(this, ParsePolygon);
    this._coordinates = ParsePolygon._validate(coordinates);
  }

  (0, _createClass2.default)(ParsePolygon, [{
    key: "coordinates",
    get: function () {
      return this._coordinates;
    },
    set: function (coords) {
      this._coordinates = ParsePolygon._validate(coords);
    }
  }, {
    key: "toJSON",
    value: function () {
      ParsePolygon._validate(this._coordinates);

      return {
        __type: 'Polygon',
        coordinates: this._coordinates
      };
    }
  }, {
    key: "equals",
    value: function (other) {
      if (!(other instanceof ParsePolygon) || this.coordinates.length !== other.coordinates.length) {
        return false;
      }

      var isEqual = true;

      for (var i = 1; i < this._coordinates.length; i += 1) {
        if (this._coordinates[i][0] !== other.coordinates[i][0] || this._coordinates[i][1] !== other.coordinates[i][1]) {
          isEqual = false;
          break;
        }
      }

      return isEqual;
    }
  }, {
    key: "containsPoint",
    value: function (point) {
      var minX = this._coordinates[0][0];
      var maxX = this._coordinates[0][0];
      var minY = this._coordinates[0][1];
      var maxY = this._coordinates[0][1];

      for (var i = 1; i < this._coordinates.length; i += 1) {
        var p = this._coordinates[i];
        minX = Math.min(p[0], minX);
        maxX = Math.max(p[0], maxX);
        minY = Math.min(p[1], minY);
        maxY = Math.max(p[1], maxY);
      }

      var outside = point.latitude < minX || point.latitude > maxX || point.longitude < minY || point.longitude > maxY;

      if (outside) {
        return false;
      }

      var inside = false;

      for (var _i = 0, j = this._coordinates.length - 1; _i < this._coordinates.length; j = _i++) {
        var startX = this._coordinates[_i][0];
        var startY = this._coordinates[_i][1];
        var endX = this._coordinates[j][0];
        var endY = this._coordinates[j][1];
        var intersect = startY > point.longitude !== endY > point.longitude && point.latitude < (endX - startX) * (point.longitude - startY) / (endY - startY) + startX;

        if (intersect) {
          inside = !inside;
        }
      }

      return inside;
    }
  }], [{
    key: "_validate",
    value: function (coords) {
      if (!Array.isArray(coords)) {
        throw new TypeError('Coordinates must be an Array');
      }

      if (coords.length < 3) {
        throw new TypeError('Polygon must have at least 3 GeoPoints or Points');
      }

      var points = [];

      for (var i = 0; i < coords.length; i += 1) {
        var coord = coords[i];
        var geoPoint = void 0;

        if (coord instanceof _ParseGeoPoint.default) {
          geoPoint = coord;
        } else if (Array.isArray(coord) && coord.length === 2) {
          geoPoint = new _ParseGeoPoint.default(coord[0], coord[1]);
        } else {
          throw new TypeError('Coordinates must be an Array of GeoPoints or Points');
        }

        points.push([geoPoint.latitude, geoPoint.longitude]);
      }

      return points;
    }
  }]);
  return ParsePolygon;
}();

var _default = ParsePolygon;
exports.default = _default;