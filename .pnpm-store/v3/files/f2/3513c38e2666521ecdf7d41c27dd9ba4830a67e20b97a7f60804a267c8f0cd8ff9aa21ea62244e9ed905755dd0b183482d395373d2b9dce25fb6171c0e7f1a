var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var ParseGeoPoint = function () {
  function ParseGeoPoint(arg1, arg2) {
    (0, _classCallCheck2.default)(this, ParseGeoPoint);

    if (Array.isArray(arg1)) {
      ParseGeoPoint._validate(arg1[0], arg1[1]);

      this._latitude = arg1[0];
      this._longitude = arg1[1];
    } else if (typeof arg1 === 'object') {
      ParseGeoPoint._validate(arg1.latitude, arg1.longitude);

      this._latitude = arg1.latitude;
      this._longitude = arg1.longitude;
    } else if (arg1 !== undefined && arg2 !== undefined) {
      ParseGeoPoint._validate(arg1, arg2);

      this._latitude = arg1;
      this._longitude = arg2;
    } else {
      this._latitude = 0;
      this._longitude = 0;
    }
  }

  (0, _createClass2.default)(ParseGeoPoint, [{
    key: "latitude",
    get: function () {
      return this._latitude;
    },
    set: function (val) {
      ParseGeoPoint._validate(val, this.longitude);

      this._latitude = val;
    }
  }, {
    key: "longitude",
    get: function () {
      return this._longitude;
    },
    set: function (val) {
      ParseGeoPoint._validate(this.latitude, val);

      this._longitude = val;
    }
  }, {
    key: "toJSON",
    value: function () {
      ParseGeoPoint._validate(this._latitude, this._longitude);

      return {
        __type: 'GeoPoint',
        latitude: this._latitude,
        longitude: this._longitude
      };
    }
  }, {
    key: "equals",
    value: function (other) {
      return other instanceof ParseGeoPoint && this.latitude === other.latitude && this.longitude === other.longitude;
    }
  }, {
    key: "radiansTo",
    value: function (point) {
      var d2r = Math.PI / 180.0;
      var lat1rad = this.latitude * d2r;
      var long1rad = this.longitude * d2r;
      var lat2rad = point.latitude * d2r;
      var long2rad = point.longitude * d2r;
      var sinDeltaLatDiv2 = Math.sin((lat1rad - lat2rad) / 2);
      var sinDeltaLongDiv2 = Math.sin((long1rad - long2rad) / 2);
      var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
      a = Math.min(1.0, a);
      return 2 * Math.asin(Math.sqrt(a));
    }
  }, {
    key: "kilometersTo",
    value: function (point) {
      return this.radiansTo(point) * 6371.0;
    }
  }, {
    key: "milesTo",
    value: function (point) {
      return this.radiansTo(point) * 3958.8;
    }
  }], [{
    key: "_validate",
    value: function (latitude, longitude) {
      if (isNaN(latitude) || isNaN(longitude) || typeof latitude !== 'number' || typeof longitude !== 'number') {
        throw new TypeError('GeoPoint latitude and longitude must be valid numbers');
      }

      if (latitude < -90.0) {
        throw new TypeError("GeoPoint latitude out of bounds: " + latitude + " < -90.0.");
      }

      if (latitude > 90.0) {
        throw new TypeError("GeoPoint latitude out of bounds: " + latitude + " > 90.0.");
      }

      if (longitude < -180.0) {
        throw new TypeError("GeoPoint longitude out of bounds: " + longitude + " < -180.0.");
      }

      if (longitude > 180.0) {
        throw new TypeError("GeoPoint longitude out of bounds: " + longitude + " > 180.0.");
      }
    }
  }, {
    key: "current",
    value: function () {
      return navigator.geolocation.getCurrentPosition(function (location) {
        return new ParseGeoPoint(location.coords.latitude, location.coords.longitude);
      });
    }
  }]);
  return ParseGeoPoint;
}();

var _default = ParseGeoPoint;
exports.default = _default;