"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Constructs a new Parse.Error object with the given code and message.
 *
 * @alias Parse.Error
 */

class ParseError extends Error {
  /**
   * @param {number} code An error code constant from <code>Parse.Error</code>.
   * @param {string} message A detailed description of the error.
   */
  constructor(code, message) {
    super(message);
    this.code = code;
    Object.defineProperty(this, 'message', {
      enumerable: true,
      value: message
    });
  }

  toString() {
    return `ParseError: ${this.code} ${this.message}`;
  }

}
/**
 * Error code indicating some error other than those enumerated here.
 *
 * @property {number} OTHER_CAUSE
 * @static
 */


ParseError.OTHER_CAUSE = -1;
/**
 * Error code indicating that something has gone wrong with the server.
 *
 * @property {number} INTERNAL_SERVER_ERROR
 * @static
 */

ParseError.INTERNAL_SERVER_ERROR = 1;
/**
 * Error code indicating the connection to the Parse servers failed.
 *
 * @property {number} CONNECTION_FAILED
 * @static
 */

ParseError.CONNECTION_FAILED = 100;
/**
 * Error code indicating the specified object doesn't exist.
 *
 * @property {number} OBJECT_NOT_FOUND
 * @static
 */

ParseError.OBJECT_NOT_FOUND = 101;
/**
 * Error code indicating you tried to query with a datatype that doesn't
 * support it, like exact matching an array or object.
 *
 * @property {number} INVALID_QUERY
 * @static
 */

ParseError.INVALID_QUERY = 102;
/**
 * Error code indicating a missing or invalid classname. Classnames are
 * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
 * only valid characters.
 *
 * @property {number} INVALID_CLASS_NAME
 * @static
 */

ParseError.INVALID_CLASS_NAME = 103;
/**
 * Error code indicating an unspecified object id.
 *
 * @property {number} MISSING_OBJECT_ID
 * @static
 */

ParseError.MISSING_OBJECT_ID = 104;
/**
 * Error code indicating an invalid key name. Keys are case-sensitive. They
 * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
 *
 * @property {number} INVALID_KEY_NAME
 * @static
 */

ParseError.INVALID_KEY_NAME = 105;
/**
 * Error code indicating a malformed pointer. You should not see this unless
 * you have been mucking about changing internal Parse code.
 *
 * @property {number} INVALID_POINTER
 * @static
 */

ParseError.INVALID_POINTER = 106;
/**
 * Error code indicating that badly formed JSON was received upstream. This
 * either indicates you have done something unusual with modifying how
 * things encode to JSON, or the network is failing badly.
 *
 * @property {number} INVALID_JSON
 * @static
 */

ParseError.INVALID_JSON = 107;
/**
 * Error code indicating that the feature you tried to access is only
 * available internally for testing purposes.
 *
 * @property {number} COMMAND_UNAVAILABLE
 * @static
 */

ParseError.COMMAND_UNAVAILABLE = 108;
/**
 * You must call Parse.initialize before using the Parse library.
 *
 * @property {number} NOT_INITIALIZED
 * @static
 */

ParseError.NOT_INITIALIZED = 109;
/**
 * Error code indicating that a field was set to an inconsistent type.
 *
 * @property {number} INCORRECT_TYPE
 * @static
 */

ParseError.INCORRECT_TYPE = 111;
/**
 * Error code indicating an invalid channel name. A channel name is either
 * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
 * characters and starts with a letter.
 *
 * @property {number} INVALID_CHANNEL_NAME
 * @static
 */

ParseError.INVALID_CHANNEL_NAME = 112;
/**
 * Error code indicating that push is misconfigured.
 *
 * @property {number} PUSH_MISCONFIGURED
 * @static
 */

ParseError.PUSH_MISCONFIGURED = 115;
/**
 * Error code indicating that the object is too large.
 *
 * @property {number} OBJECT_TOO_LARGE
 * @static
 */

ParseError.OBJECT_TOO_LARGE = 116;
/**
 * Error code indicating that the operation isn't allowed for clients.
 *
 * @property {number} OPERATION_FORBIDDEN
 * @static
 */

ParseError.OPERATION_FORBIDDEN = 119;
/**
 * Error code indicating the result was not found in the cache.
 *
 * @property {number} CACHE_MISS
 * @static
 */

ParseError.CACHE_MISS = 120;
/**
 * Error code indicating that an invalid key was used in a nested
 * JSONObject.
 *
 * @property {number} INVALID_NESTED_KEY
 * @static
 */

ParseError.INVALID_NESTED_KEY = 121;
/**
 * Error code indicating that an invalid filename was used for ParseFile.
 * A valid file name contains only a-zA-Z0-9_. characters and is between 1
 * and 128 characters.
 *
 * @property {number} INVALID_FILE_NAME
 * @static
 */

ParseError.INVALID_FILE_NAME = 122;
/**
 * Error code indicating an invalid ACL was provided.
 *
 * @property {number} INVALID_ACL
 * @static
 */

ParseError.INVALID_ACL = 123;
/**
 * Error code indicating that the request timed out on the server. Typically
 * this indicates that the request is too expensive to run.
 *
 * @property {number} TIMEOUT
 * @static
 */

ParseError.TIMEOUT = 124;
/**
 * Error code indicating that the email address was invalid.
 *
 * @property {number} INVALID_EMAIL_ADDRESS
 * @static
 */

ParseError.INVALID_EMAIL_ADDRESS = 125;
/**
 * Error code indicating a missing content type.
 *
 * @property {number} MISSING_CONTENT_TYPE
 * @static
 */

ParseError.MISSING_CONTENT_TYPE = 126;
/**
 * Error code indicating a missing content length.
 *
 * @property {number} MISSING_CONTENT_LENGTH
 * @static
 */

ParseError.MISSING_CONTENT_LENGTH = 127;
/**
 * Error code indicating an invalid content length.
 *
 * @property {number} INVALID_CONTENT_LENGTH
 * @static
 */

ParseError.INVALID_CONTENT_LENGTH = 128;
/**
 * Error code indicating a file that was too large.
 *
 * @property {number} FILE_TOO_LARGE
 * @static
 */

ParseError.FILE_TOO_LARGE = 129;
/**
 * Error code indicating an error saving a file.
 *
 * @property {number} FILE_SAVE_ERROR
 * @static
 */

ParseError.FILE_SAVE_ERROR = 130;
/**
 * Error code indicating that a unique field was given a value that is
 * already taken.
 *
 * @property {number} DUPLICATE_VALUE
 * @static
 */

ParseError.DUPLICATE_VALUE = 137;
/**
 * Error code indicating that a role's name is invalid.
 *
 * @property {number} INVALID_ROLE_NAME
 * @static
 */

ParseError.INVALID_ROLE_NAME = 139;
/**
 * Error code indicating that an application quota was exceeded.  Upgrade to
 * resolve.
 *
 * @property {number} EXCEEDED_QUOTA
 * @static
 */

ParseError.EXCEEDED_QUOTA = 140;
/**
 * Error code indicating that a Cloud Code script failed.
 *
 * @property {number} SCRIPT_FAILED
 * @static
 */

ParseError.SCRIPT_FAILED = 141;
/**
 * Error code indicating that a Cloud Code validation failed.
 *
 * @property {number} VALIDATION_ERROR
 * @static
 */

ParseError.VALIDATION_ERROR = 142;
/**
 * Error code indicating that invalid image data was provided.
 *
 * @property {number} INVALID_IMAGE_DATA
 * @static
 */

ParseError.INVALID_IMAGE_DATA = 143;
/**
 * Error code indicating an unsaved file.
 *
 * @property {number} UNSAVED_FILE_ERROR
 * @static
 */

ParseError.UNSAVED_FILE_ERROR = 151;
/**
 * Error code indicating an invalid push time.
 *
 * @property {number} INVALID_PUSH_TIME_ERROR
 * @static
 */

ParseError.INVALID_PUSH_TIME_ERROR = 152;
/**
 * Error code indicating an error deleting a file.
 *
 * @property {number} FILE_DELETE_ERROR
 * @static
 */

ParseError.FILE_DELETE_ERROR = 153;
/**
 * Error code indicating an error deleting an unnamed file.
 *
 * @property {number} FILE_DELETE_UNNAMED_ERROR
 * @static
 */

ParseError.FILE_DELETE_UNNAMED_ERROR = 161;
/**
 * Error code indicating that the application has exceeded its request
 * limit.
 *
 * @property {number} REQUEST_LIMIT_EXCEEDED
 * @static
 */

ParseError.REQUEST_LIMIT_EXCEEDED = 155;
/**
 * Error code indicating that the request was a duplicate and has been discarded due to
 * idempotency rules.
 *
 * @property {number} DUPLICATE_REQUEST
 * @static
 */

ParseError.DUPLICATE_REQUEST = 159;
/**
 * Error code indicating an invalid event name.
 *
 * @property {number} INVALID_EVENT_NAME
 * @static
 */

ParseError.INVALID_EVENT_NAME = 160;
/**
 * Error code indicating that the username is missing or empty.
 *
 * @property {number} USERNAME_MISSING
 * @static
 */

ParseError.USERNAME_MISSING = 200;
/**
 * Error code indicating that the password is missing or empty.
 *
 * @property {number} PASSWORD_MISSING
 * @static
 */

ParseError.PASSWORD_MISSING = 201;
/**
 * Error code indicating that the username has already been taken.
 *
 * @property {number} USERNAME_TAKEN
 * @static
 */

ParseError.USERNAME_TAKEN = 202;
/**
 * Error code indicating that the email has already been taken.
 *
 * @property {number} EMAIL_TAKEN
 * @static
 */

ParseError.EMAIL_TAKEN = 203;
/**
 * Error code indicating that the email is missing, but must be specified.
 *
 * @property {number} EMAIL_MISSING
 * @static
 */

ParseError.EMAIL_MISSING = 204;
/**
 * Error code indicating that a user with the specified email was not found.
 *
 * @property {number} EMAIL_NOT_FOUND
 * @static
 */

ParseError.EMAIL_NOT_FOUND = 205;
/**
 * Error code indicating that a user object without a valid session could
 * not be altered.
 *
 * @property {number} SESSION_MISSING
 * @static
 */

ParseError.SESSION_MISSING = 206;
/**
 * Error code indicating that a user can only be created through signup.
 *
 * @property {number} MUST_CREATE_USER_THROUGH_SIGNUP
 * @static
 */

ParseError.MUST_CREATE_USER_THROUGH_SIGNUP = 207;
/**
 * Error code indicating that an an account being linked is already linked
 * to another user.
 *
 * @property {number} ACCOUNT_ALREADY_LINKED
 * @static
 */

ParseError.ACCOUNT_ALREADY_LINKED = 208;
/**
 * Error code indicating that the current session token is invalid.
 *
 * @property {number} INVALID_SESSION_TOKEN
 * @static
 */

ParseError.INVALID_SESSION_TOKEN = 209;
/**
 * Error code indicating an error enabling or verifying MFA
 *
 * @property {number} MFA_ERROR
 * @static
 */

ParseError.MFA_ERROR = 210;
/**
 * Error code indicating that a valid MFA token must be provided
 *
 * @property {number} MFA_TOKEN_REQUIRED
 * @static
 */

ParseError.MFA_TOKEN_REQUIRED = 211;
/**
 * Error code indicating that a user cannot be linked to an account because
 * that account's id could not be found.
 *
 * @property {number} LINKED_ID_MISSING
 * @static
 */

ParseError.LINKED_ID_MISSING = 250;
/**
 * Error code indicating that a user with a linked (e.g. Facebook) account
 * has an invalid session.
 *
 * @property {number} INVALID_LINKED_SESSION
 * @static
 */

ParseError.INVALID_LINKED_SESSION = 251;
/**
 * Error code indicating that a service being linked (e.g. Facebook or
 * Twitter) is unsupported.
 *
 * @property {number} UNSUPPORTED_SERVICE
 * @static
 */

ParseError.UNSUPPORTED_SERVICE = 252;
/**
 * Error code indicating an invalid operation occured on schema
 *
 * @property {number} INVALID_SCHEMA_OPERATION
 * @static
 */

ParseError.INVALID_SCHEMA_OPERATION = 255;
/**
 * Error code indicating that there were multiple errors. Aggregate errors
 * have an "errors" property, which is an array of error objects with more
 * detail about each error that occurred.
 *
 * @property {number} AGGREGATE_ERROR
 * @static
 */

ParseError.AGGREGATE_ERROR = 600;
/**
 * Error code indicating the client was unable to read an input file.
 *
 * @property {number} FILE_READ_ERROR
 * @static
 */

ParseError.FILE_READ_ERROR = 601;
/**
 * Error code indicating a real error code is unavailable because
 * we had to use an XDomainRequest object to allow CORS requests in
 * Internet Explorer, which strips the body from HTTP responses that have
 * a non-2XX status code.
 *
 * @property {number} X_DOMAIN_REQUEST
 * @static
 */

ParseError.X_DOMAIN_REQUEST = 602;
var _default = ParseError;
exports.default = _default;