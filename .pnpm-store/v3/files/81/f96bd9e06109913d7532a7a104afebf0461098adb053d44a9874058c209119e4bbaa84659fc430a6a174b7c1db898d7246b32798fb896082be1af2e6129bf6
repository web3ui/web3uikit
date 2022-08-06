/**
 * Defines a Cloud Function.
 *
 * **Available in Cloud Code only.**
 *
 * @function define
 * @name Parse.Cloud.define
 * @param {string} name The name of the Cloud Function
 * @param {Function} data The Cloud Function to register. This function should take one parameter {@link Parse.Cloud.FunctionRequest}
 */

/**
 * Registers an after delete function.
 *
 * **Available in Cloud Code only.**
 *
 * If you want to use afterDelete for a predefined class in the Parse JavaScript SDK (e.g. {@link Parse.User}), you should pass the class itself and not the String for arg1.
 * ```
 * Parse.Cloud.afterDelete('MyCustomClass', (request) => {
 *   // code here
 * })
 *
 * Parse.Cloud.afterDelete(Parse.User, (request) => {
 *   // code here
 * })
 *```
 *
 * @function afterDelete
 * @name Parse.Cloud.afterDelete
 * @param {(string | Parse.Object)} arg1 The Parse.Object subclass to register the after delete function for. This can instead be a String that is the className of the subclass.
 * @param {Function} func The function to run after a delete. This function should take just one parameter, {@link Parse.Cloud.TriggerRequest}.
 */

/**
 *
 * Registers an after save function.
 *
 * **Available in Cloud Code only.**
 *
 * If you want to use afterSave for a predefined class in the Parse JavaScript SDK (e.g. {@link Parse.User}), you should pass the class itself and not the String for arg1.
 *
 * ```
 * Parse.Cloud.afterSave('MyCustomClass', function(request) {
 *   // code here
 * })
 *
 * Parse.Cloud.afterSave(Parse.User, function(request) {
 *   // code here
 * })
 * ```
 *
 * @function afterSave
 * @name Parse.Cloud.afterSave
 * @param {(string | Parse.Object)} arg1 The Parse.Object subclass to register the after save function for. This can instead be a String that is the className of the subclass.
 * @param {Function} func The function to run after a save. This function should take just one parameter, {@link Parse.Cloud.TriggerRequest}.
 */

/**
 * Registers an before delete function.
 *
 * **Available in Cloud Code only.**
 *
 * If you want to use beforeDelete for a predefined class in the Parse JavaScript SDK (e.g. {@link Parse.User}), you should pass the class itself and not the String for arg1.
 * ```
 * Parse.Cloud.beforeDelete('MyCustomClass', (request) => {
 *   // code here
 * })
 *
 * Parse.Cloud.beforeDelete(Parse.User, (request) => {
 *   // code here
 * })
 *```
 *
 * @function beforeDelete
 * @name Parse.Cloud.beforeDelete
 * @param {(string | Parse.Object)} arg1 The Parse.Object subclass to register the before delete function for. This can instead be a String that is the className of the subclass.
 * @param {Function} func The function to run before a delete. This function should take just one parameter, {@link Parse.Cloud.TriggerRequest}.
 */

/**
 *
 * Registers an before save function.
 *
 * **Available in Cloud Code only.**
 *
 * If you want to use beforeSave for a predefined class in the Parse JavaScript SDK (e.g. {@link Parse.User}), you should pass the class itself and not the String for arg1.
 *
 * ```
 * Parse.Cloud.beforeSave('MyCustomClass', (request) => {
 *   // code here
 * })
 *
 * Parse.Cloud.beforeSave(Parse.User, (request) => {
 *   // code here
 * })
 * ```
 *
 * @function beforeSave
 * @name Parse.Cloud.beforeSave
 * @param {(string | Parse.Object)} arg1 The Parse.Object subclass to register the after save function for. This can instead be a String that is the className of the subclass.
 * @param {Function} func The function to run before a save. This function should take just one parameter, {@link Parse.Cloud.TriggerRequest}.
 */

/**
 *
 * Registers an before save file function. A new Parse.File can be returned to override the file that gets saved.
 * If you want to replace the rquesting Parse.File with a Parse.File that is already saved, simply return the already saved Parse.File.
 * You can also add metadata to the file that will be stored via whatever file storage solution you're using.
 *
 * **Available in Cloud Code only.**
 *
 * Example: Adding metadata and tags
 * ```
 * Parse.Cloud.beforeSaveFile(({ file, user }) => {
 *   file.addMetadata('foo', 'bar');
 *   file.addTag('createdBy', user.id);
 * });
 *
 * ```
 *
 * Example: replacing file with an already saved file
 *
 * ```
 * Parse.Cloud.beforeSaveFile(({ file, user }) => {
 *   return user.get('avatar');
 * });
 *
 * ```
 *
 * Example: replacing file with a different file
 *
 * ```
 * Parse.Cloud.beforeSaveFile(({ file, user }) => {
 *   const metadata = { foo: 'bar' };
 *   const tags = { createdBy: user.id };
 *   const newFile = new Parse.File(file.name(), <some other file data>, 'text/plain', metadata, tags);
 *   return newFile;
 * });
 *
 * ```
 *
 * @function beforeSaveFile
 * @name Parse.Cloud.beforeSaveFile
 * @param {Function} func The function to run before a file saves. This function should take one parameter, a {@link Parse.Cloud.FileTriggerRequest}.
 */

/**
 *
 * Registers an after save file function.
 *
 * **Available in Cloud Code only.**
 *
 * Example: creating a new object that references this file in a separate collection
 * ```
 * Parse.Cloud.afterSaveFile(async ({ file, user }) => {
 *   const fileObject = new Parse.Object('FileObject');
 *   fileObject.set('metadata', file.metadata());
 *   fileObject.set('tags', file.tags());
 *   fileObject.set('name', file.name());
 *   fileObject.set('createdBy', user);
 *   await fileObject.save({ sessionToken: user.getSessionToken() });
 * });
 *
 * @method afterSaveFile
 * @name Parse.Cloud.afterSaveFile
 * @param {Function} func The function to run after a file saves. This function should take one parameter, a {@link Parse.Cloud.FileTriggerRequest}.
 */

/**
 * @function beforeConnect
 * @name Parse.Cloud.beforeConnect
 * @param {Function} func The function to before connection is made. This function can be async and should take just one parameter, {@link Parse.Cloud.ConnectTriggerRequest}.
 */

/**
 *
 * Registers a before connect function.
 *
 * **Available in Cloud Code only.**
 *
 * Example: restrict LiveQueries to logged in users.
 * ```
 * Parse.Cloud.beforeConnect((request) => {
 *   if (!request.user) {
 *     throw "Please login before you attempt to connect."
 *   }
 * });
 * ```
 */

/**
 * @function beforeSubscribe
 * @name Parse.Cloud.beforeSubscribe
 * @param {(string | Parse.Object)} arg1 The Parse.Object subclass to register the before subscription function for. This can instead be a String that is the className of the subclass.
 * @param {Function} func The function to run before a subscription. This function can be async and should take one parameter, a {@link Parse.Cloud.TriggerRequest}.
 */

/**
 *
 * Registers a before subscribe function.
 *
 * **Available in Cloud Code only.**
 * Example: restrict subscriptions to MyObject to Admin accounts only.
 * ```
 *  Parse.Cloud.beforeSubscribe('MyObject', (request) => {
 *   if (!request.user.get('Admin')) {
 *       throw new Parse.Error(101, 'You are not authorized to subscribe to MyObject.');
 *   }
 *   let query = request.query; // the Parse.Query
 *   query.select("name","year")
 * });
 * ```
 */

/**
 * Makes an HTTP Request.
 *
 * **Available in Cloud Code only.**
 *
 * By default, Parse.Cloud.httpRequest does not follow redirects caused by HTTP 3xx response codes. You can use the followRedirects option in the {@link Parse.Cloud.HTTPOptions} object to change this behavior.
 *
 * Sample request:
 * ```
 * Parse.Cloud.httpRequest({
 *   url: 'http://www.example.com/'
 * }).then(function(httpResponse) {
 *   // success
 *   console.log(httpResponse.text);
 * },function(httpResponse) {
 *   // error
 *   console.error('Request failed with response code ' + httpResponse.status);
 * });
 * ```
 *
 * @function httpRequest
 * @name Parse.Cloud.httpRequest
 * @param {Parse.Cloud.HTTPOptions} options The Parse.Cloud.HTTPOptions object that makes the request.
 * @returns {Promise<Parse.Cloud.HTTPResponse>} A promise that will be resolved with a {@link Parse.Cloud.HTTPResponse} object when the request completes.
 */

/**
 * Defines a Background Job.
 *
 * **Available in Cloud Code only.**
 *
 * @function job
 * @name Parse.Cloud.job
 * @param {string} name The name of the Background Job
 * @param {Function} func The Background Job to register. This function should take two parameters a {@link Parse.Cloud.JobRequest} and a {@link Parse.Cloud.JobStatus}
 *
 */

/**
 * @typedef Parse.Cloud.TriggerRequest
 * @property {string} installationId If set, the installationId triggering the request.
 * @property {boolean} master If true, means the master key was used.
 * @property {Parse.User} user If set, the user that made the request.
 * @property {Parse.Object} object The object triggering the hook.
 * @property {string} ip The IP address of the client making the request.
 * @property {object} headers The original HTTP headers for the request.
 * @property {string} triggerName The name of the trigger (`beforeSave`, `afterSave`, ...)
 * @property {object} log The current logger inside Parse Server.
 * @property {Parse.Object} original If set, the object, as currently stored.
 */

/**
 * @typedef Parse.Cloud.FileTriggerRequest
 * @property {string} installationId If set, the installationId triggering the request.
 * @property {boolean} master If true, means the master key was used.
 * @property {Parse.User} user If set, the user that made the request.
 * @property {Parse.File} file The file triggering the hook.
 * @property {string} ip The IP address of the client making the request.
 * @property {object} headers The original HTTP headers for the request.
 * @property {string} triggerName The name of the trigger (`beforeSaveFile`, `afterSaveFile`, ...)
 * @property {object} log The current logger inside Parse Server.
 */

/**
 * @typedef Parse.Cloud.ConnectTriggerRequest
 * @property {string} installationId If set, the installationId triggering the request.
 * @property {boolean} useMasterKey If true, means the master key was used.
 * @property {Parse.User} user If set, the user that made the request.
 * @property {number} clients The number of clients connected.
 * @property {number} subscriptions The number of subscriptions connected.
 * @property {string} sessionToken If set, the session of the user that made the request.
 */

/**
 * @typedef Parse.Cloud.FunctionRequest
 * @property {string} installationId If set, the installationId triggering the request.
 * @property {boolean} master If true, means the master key was used.
 * @property {Parse.User} user If set, the user that made the request.
 * @property {object} params The params passed to the cloud function.
 */

/**
 * @typedef Parse.Cloud.JobRequest
 * @property {object} params The params passed to the background job.
 */

/**
 * @typedef Parse.Cloud.JobStatus
 * @property {Function} error If error is called, will end the job unsuccessfully with an optional completion message to be stored in the job status.
 * @property {Function} message If message is called with a string argument, will update the current message to be stored in the job status.
 * @property {Function} success If success is called, will end the job successfullly with the optional completion message to be stored in the job status.
 */

/**
 * @typedef Parse.Cloud.HTTPOptions
 * @property {string | object} body The body of the request. If it is a JSON object, then the Content-Type set in the headers must be application/x-www-form-urlencoded or application/json. You can also set this to a {@link Buffer} object to send raw bytes. If you use a Buffer, you should also set the Content-Type header explicitly to describe what these bytes represent.
 * @property {Function} error The function that is called when the request fails. It will be passed a Parse.Cloud.HTTPResponse object.
 * @property {boolean} followRedirects Whether to follow redirects caused by HTTP 3xx responses. Defaults to false.
 * @property {object} headers The headers for the request.
 * @property {string} method The method of the request. GET, POST, PUT, DELETE, HEAD, and OPTIONS are supported. Will default to GET if not specified.
 * @property {string | object} params The query portion of the url. You can pass a JSON object of key value pairs like params: {q : 'Sean Plott'} or a raw string like params:q=Sean Plott.
 * @property {Function} success The function that is called when the request successfully completes. It will be passed a Parse.Cloud.HTTPResponse object.
 * @property {string} url The url to send the request to.
 */

/**
 * @typedef Parse.Cloud.HTTPResponse
 * @property {Buffer} buffer The raw byte representation of the response body. Use this to receive binary data. See Buffer for more details.
 * @property {object} cookies The cookies sent by the server. The keys in this object are the names of the cookies. The values are Parse.Cloud.Cookie objects.
 * @property {object} data The parsed response body as a JavaScript object. This is only available when the response Content-Type is application/x-www-form-urlencoded or application/json.
 * @property {object} headers The headers sent by the server. The keys in this object are the names of the headers. We do not support multiple response headers with the same name. In the common case of Set-Cookie headers, please use the cookies field instead.
 * @property {number} status The status code.
 * @property {string} text The raw text representation of the response body.
 */
"use strict";