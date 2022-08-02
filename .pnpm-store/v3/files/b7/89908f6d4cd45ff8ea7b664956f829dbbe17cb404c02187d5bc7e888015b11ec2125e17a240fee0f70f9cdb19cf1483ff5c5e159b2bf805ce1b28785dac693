"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _ParseGeoPoint = _interopRequireDefault(require("./ParseGeoPoint"));
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */

/**
 * Creates a new Polygon with any of the following forms:<br>
 *   <pre>
 *   new Polygon([[0,0],[0,1],[1,1],[1,0]])
 *   new Polygon([GeoPoint, GeoPoint, GeoPoint])
 *   </pre>
 *
 * <p>Represents a coordinates that may be associated
 * with a key in a ParseObject or used as a reference point for geo queries.
 * This allows proximity-based queries on the key.</p>
 *
 * <p>Example:<pre>
 *   var polygon = new Parse.Polygon([[0,0],[0,1],[1,1],[1,0]]);
 *   var object = new Parse.Object("PlaceObject");
 *   object.set("area", polygon);
 *   object.save();</pre></p>
 *
 * @alias Parse.Polygon
 */


var ParsePolygon = /*#__PURE__*/function () {
  /**
   * @param {(number[][] | Parse.GeoPoint[])} coordinates An Array of coordinate pairs
   */
  function ParsePolygon(coordinates
  /*: Array<Array<number>> | Array<ParseGeoPoint>*/
  ) {
    (0, _classCallCheck2.default)(this, ParsePolygon);
    (0, _defineProperty2.default)(this, "_coordinates", void 0);
    this._coordinates = ParsePolygon._validate(coordinates);
  }
  /**
   * Coordinates value for this Polygon.
   * Throws an exception if not valid type.
   *
   * @property {(number[][] | Parse.GeoPoint[])} coordinates list of coordinates
   * @returns {number[][]}
   */


  (0, _createClass2.default)(ParsePolygon, [{
    key: "coordinates",
    get: function ()
    /*: Array<Array<number>>*/
    {
      return this._coordinates;
    },
    set: function (coords
    /*: Array<Array<number>> | Array<ParseGeoPoint>*/
    ) {
      this._coordinates = ParsePolygon._validate(coords);
    }
    /**
     * Returns a JSON representation of the Polygon, suitable for Parse.
     *
     * @returns {object}
     */

  }, {
    key: "toJSON",
    value: function ()
    /*: { __type: string, coordinates: Array<Array<number>> }*/
    {
      ParsePolygon._validate(this._coordinates);

      return {
        __type: 'Polygon',
        coordinates: this._coordinates
      };
    }
    /**
     * Checks if two polygons are equal
     *
     * @param {(Parse.Polygon | object)} other
     * @returns {boolean}
     */

  }, {
    key: "equals",
    value: function (other
    /*: mixed*/
    )
    /*: boolean*/
    {
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
    /**
     *
     * @param {Parse.GeoPoint} point
     * @returns {boolean} Returns if the point is contained in the polygon
     */

  }, {
    key: "containsPoint",
    value: function (point
    /*: ParseGeoPoint*/
    )
    /*: boolean*/
    {
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
    /**
     * Validates that the list of coordinates can form a valid polygon
     *
     * @param {Array} coords the list of coordinates to validate as a polygon
     * @throws {TypeError}
     * @returns {number[][]} Array of coordinates if validated.
     */

  }], [{
    key: "_validate",
    value: function (coords
    /*: Array<Array<number>> | Array<ParseGeoPoint>*/
    )
    /*: Array<Array<number>>*/
    {
      if (!(0, _isArray.default)(coords)) {
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
        } else if ((0, _isArray.default)(coord) && coord.length === 2) {
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