"use strict";
/* eslint-disable no-loop-func */

const equalObjects = require('./equals').default;

const decode = require('./decode').default;

const ParseError = require('./ParseError').default;

const ParsePolygon = require('./ParsePolygon').default;

const ParseGeoPoint = require('./ParseGeoPoint').default;
/**
 * contains -- Determines if an object is contained in a list with special handling for Parse pointers.
 *
 * @param haystack
 * @param needle
 * @private
 * @returns {boolean}
 */


function contains(haystack, needle) {
  if (needle && needle.__type && (needle.__type === 'Pointer' || needle.__type === 'Object')) {
    for (const i in haystack) {
      const ptr = haystack[i];

      if (typeof ptr === 'string' && ptr === needle.objectId) {
        return true;
      }

      if (ptr.className === needle.className && ptr.objectId === needle.objectId) {
        return true;
      }
    }

    return false;
  }

  return haystack.indexOf(needle) > -1;
}

function transformObject(object) {
  if (object._toFullJSON) {
    return object._toFullJSON();
  }

  return object;
}
/**
 * matchesQuery -- Determines if an object would be returned by a Parse Query
 * It's a lightweight, where-clause only implementation of a full query engine.
 * Since we find queries that match objects, rather than objects that match
 * queries, we can avoid building a full-blown query tool.
 *
 * @param className
 * @param object
 * @param objects
 * @param query
 * @private
 * @returns {boolean}
 */


function matchesQuery(className, object, objects, query) {
  if (object.className !== className) {
    return false;
  }

  let obj = object;
  let q = query;

  if (object.toJSON) {
    obj = object.toJSON();
  }

  if (query.toJSON) {
    q = query.toJSON().where;
  }

  obj.className = className;

  for (const field in q) {
    if (!matchesKeyConstraints(className, obj, objects, field, q[field])) {
      return false;
    }
  }

  return true;
}

function equalObjectsGeneric(obj, compareTo, eqlFn) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      if (eqlFn(obj[i], compareTo)) {
        return true;
      }
    }

    return false;
  }

  return eqlFn(obj, compareTo);
}
/**
 * Determines whether an object matches a single key's constraints
 *
 * @param className
 * @param object
 * @param objects
 * @param key
 * @param constraints
 * @private
 * @returns {boolean}
 */


function matchesKeyConstraints(className, object, objects, key, constraints) {
  if (constraints === null) {
    return false;
  }

  if (key.indexOf('.') >= 0) {
    // Key references a subobject
    const keyComponents = key.split('.');
    const subObjectKey = keyComponents[0];
    const keyRemainder = keyComponents.slice(1).join('.');
    return matchesKeyConstraints(className, object[subObjectKey] || {}, objects, keyRemainder, constraints);
  }

  let i;

  if (key === '$or') {
    for (i = 0; i < constraints.length; i++) {
      if (matchesQuery(className, object, objects, constraints[i])) {
        return true;
      }
    }

    return false;
  }

  if (key === '$and') {
    for (i = 0; i < constraints.length; i++) {
      if (!matchesQuery(className, object, objects, constraints[i])) {
        return false;
      }
    }

    return true;
  }

  if (key === '$nor') {
    for (i = 0; i < constraints.length; i++) {
      if (matchesQuery(className, object, objects, constraints[i])) {
        return false;
      }
    }

    return true;
  }

  if (key === '$relatedTo') {
    // Bail! We can't handle relational queries locally
    return false;
  }

  if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(key)) {
    throw new ParseError(ParseError.INVALID_KEY_NAME, `Invalid Key: ${key}`);
  } // Equality (or Array contains) cases


  if (typeof constraints !== 'object') {
    if (Array.isArray(object[key])) {
      return object[key].indexOf(constraints) > -1;
    }

    return object[key] === constraints;
  }

  let compareTo;

  if (constraints.__type) {
    if (constraints.__type === 'Pointer') {
      return equalObjectsGeneric(object[key], constraints, (obj, ptr) => {
        return typeof obj !== 'undefined' && ptr.className === obj.className && ptr.objectId === obj.objectId;
      });
    }

    return equalObjectsGeneric(decode(object[key]), decode(constraints), equalObjects);
  } // More complex cases


  for (const condition in constraints) {
    compareTo = constraints[condition];

    if (compareTo.__type) {
      compareTo = decode(compareTo);
    } // Compare Date Object or Date String


    if (toString.call(compareTo) === '[object Date]' || typeof compareTo === 'string' && new Date(compareTo) !== 'Invalid Date' && !isNaN(new Date(compareTo))) {
      object[key] = new Date(object[key].iso ? object[key].iso : object[key]);
    }

    switch (condition) {
      case '$lt':
        if (object[key] >= compareTo) {
          return false;
        }

        break;

      case '$lte':
        if (object[key] > compareTo) {
          return false;
        }

        break;

      case '$gt':
        if (object[key] <= compareTo) {
          return false;
        }

        break;

      case '$gte':
        if (object[key] < compareTo) {
          return false;
        }

        break;

      case '$ne':
        if (equalObjects(object[key], compareTo)) {
          return false;
        }

        break;

      case '$in':
        if (!contains(compareTo, object[key])) {
          return false;
        }

        break;

      case '$nin':
        if (contains(compareTo, object[key])) {
          return false;
        }

        break;

      case '$all':
        for (i = 0; i < compareTo.length; i++) {
          if (object[key].indexOf(compareTo[i]) < 0) {
            return false;
          }
        }

        break;

      case '$exists':
        {
          const propertyExists = typeof object[key] !== 'undefined';
          const existenceIsRequired = constraints.$exists;

          if (typeof constraints.$exists !== 'boolean') {
            // The SDK will never submit a non-boolean for $exists, but if someone
            // tries to submit a non-boolean for $exits outside the SDKs, just ignore it.
            break;
          }

          if (!propertyExists && existenceIsRequired || propertyExists && !existenceIsRequired) {
            return false;
          }

          break;
        }

      case '$regex':
        {
          if (typeof compareTo === 'object') {
            return compareTo.test(object[key]);
          } // JS doesn't support perl-style escaping


          let expString = '';
          let escapeEnd = -2;
          let escapeStart = compareTo.indexOf('\\Q');

          while (escapeStart > -1) {
            // Add the unescaped portion
            expString += compareTo.substring(escapeEnd + 2, escapeStart);
            escapeEnd = compareTo.indexOf('\\E', escapeStart);

            if (escapeEnd > -1) {
              expString += compareTo.substring(escapeStart + 2, escapeEnd).replace(/\\\\\\\\E/g, '\\E').replace(/\W/g, '\\$&');
            }

            escapeStart = compareTo.indexOf('\\Q', escapeEnd);
          }

          expString += compareTo.substring(Math.max(escapeStart, escapeEnd + 2));
          let modifiers = constraints.$options || '';
          modifiers = modifiers.replace('x', '').replace('s', ''); // Parse Server / Mongo support x and s modifiers but JS RegExp doesn't

          const exp = new RegExp(expString, modifiers);

          if (!exp.test(object[key])) {
            return false;
          }

          break;
        }

      case '$nearSphere':
        {
          if (!compareTo || !object[key]) {
            return false;
          }

          const distance = compareTo.radiansTo(object[key]);
          const max = constraints.$maxDistance || Infinity;
          return distance <= max;
        }

      case '$within':
        {
          if (!compareTo || !object[key]) {
            return false;
          }

          const southWest = compareTo.$box[0];
          const northEast = compareTo.$box[1];

          if (southWest.latitude > northEast.latitude || southWest.longitude > northEast.longitude) {
            // Invalid box, crosses the date line
            return false;
          }

          return object[key].latitude > southWest.latitude && object[key].latitude < northEast.latitude && object[key].longitude > southWest.longitude && object[key].longitude < northEast.longitude;
        }

      case '$options':
        // Not a query type, but a way to add options to $regex. Ignore and
        // avoid the default
        break;

      case '$maxDistance':
        // Not a query type, but a way to add a cap to $nearSphere. Ignore and
        // avoid the default
        break;

      case '$select':
        {
          const subQueryObjects = objects.filter((obj, index, arr) => {
            return matchesQuery(compareTo.query.className, obj, arr, compareTo.query.where);
          });

          for (let i = 0; i < subQueryObjects.length; i += 1) {
            const subObject = transformObject(subQueryObjects[i]);
            return equalObjects(object[key], subObject[compareTo.key]);
          }

          return false;
        }

      case '$dontSelect':
        {
          const subQueryObjects = objects.filter((obj, index, arr) => {
            return matchesQuery(compareTo.query.className, obj, arr, compareTo.query.where);
          });

          for (let i = 0; i < subQueryObjects.length; i += 1) {
            const subObject = transformObject(subQueryObjects[i]);
            return !equalObjects(object[key], subObject[compareTo.key]);
          }

          return false;
        }

      case '$inQuery':
        {
          const subQueryObjects = objects.filter((obj, index, arr) => {
            return matchesQuery(compareTo.className, obj, arr, compareTo.where);
          });

          for (let i = 0; i < subQueryObjects.length; i += 1) {
            const subObject = transformObject(subQueryObjects[i]);

            if (object[key].className === subObject.className && object[key].objectId === subObject.objectId) {
              return true;
            }
          }

          return false;
        }

      case '$notInQuery':
        {
          const subQueryObjects = objects.filter((obj, index, arr) => {
            return matchesQuery(compareTo.className, obj, arr, compareTo.where);
          });

          for (let i = 0; i < subQueryObjects.length; i += 1) {
            const subObject = transformObject(subQueryObjects[i]);

            if (object[key].className === subObject.className && object[key].objectId === subObject.objectId) {
              return false;
            }
          }

          return true;
        }

      case '$containedBy':
        {
          for (const value of object[key]) {
            if (!contains(compareTo, value)) {
              return false;
            }
          }

          return true;
        }

      case '$geoWithin':
        {
          const points = compareTo.$polygon.map(geoPoint => [geoPoint.latitude, geoPoint.longitude]);
          const polygon = new ParsePolygon(points);
          return polygon.containsPoint(object[key]);
        }

      case '$geoIntersects':
        {
          const polygon = new ParsePolygon(object[key].coordinates);
          const point = new ParseGeoPoint(compareTo.$point);
          return polygon.containsPoint(point);
        }

      default:
        return false;
    }
  }

  return true;
}

function validateQuery(query
/*: any*/
) {
  let q = query;

  if (query.toJSON) {
    q = query.toJSON().where;
  }

  const specialQuerykeys = ['$and', '$or', '$nor', '_rperm', '_wperm', '_perishable_token', '_email_verify_token', '_email_verify_token_expires_at', '_account_lockout_expires_at', '_failed_login_count'];
  Object.keys(q).forEach(key => {
    if (q && q[key] && q[key].$regex) {
      if (typeof q[key].$options === 'string') {
        if (!q[key].$options.match(/^[imxs]+$/)) {
          throw new ParseError(ParseError.INVALID_QUERY, `Bad $options value for query: ${q[key].$options}`);
        }
      }
    }

    if (specialQuerykeys.indexOf(key) < 0 && !key.match(/^[a-zA-Z][a-zA-Z0-9_.]*$/)) {
      throw new ParseError(ParseError.INVALID_KEY_NAME, `Invalid key name: ${key}`);
    }
  });
}

const OfflineQuery = {
  matchesQuery: matchesQuery,
  validateQuery: validateQuery
};
module.exports = OfflineQuery;