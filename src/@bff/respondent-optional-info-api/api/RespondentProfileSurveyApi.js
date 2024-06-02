/*
 * Respondent Profile Survey API
 * Respondent Profile Survey API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@eoc.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.57
 *
 * Do not edit the class manually.
 *
 */
import RespondentProfileSurveyApiClient from "../RespondentProfileSurveyApiClient";
import Error from '../model/Error';
import NewRespondentProfileSurvey from '../model/NewRespondentProfileSurvey';
import RespondentProfileSurvey from '../model/RespondentProfileSurvey';

/**
* RespondentProfileSurvey service.
* @module api/RespondentProfileSurveyApi
* @version 1.0.0
*/
export default class RespondentProfileSurveyApi {

    /**
    * Constructs a new RespondentProfileSurveyApi.
    * @alias module:api/RespondentProfileSurveyApi
    * @class
    * @param {module:RespondentProfileSurveyApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:RespondentProfileSurveyApiClient#instance
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || RespondentProfileSurveyApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addRespondentProfileSurvey operation.
     * @callback moduleapi/RespondentProfileSurveyApi~addRespondentProfileSurveyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RespondentProfileSurvey{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new RespondentProfileSurvey in the store.  Duplicates are not allowed
     * Creates a new RespondentProfileSurvey in the store.  Duplicates are not allowed
     * @param {module:model/NewRespondentProfileSurvey} body RespondentProfileSurvey to add to the store
     * @param {module:api/RespondentProfileSurveyApi~addRespondentProfileSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addRespondentProfileSurvey(body, callback) {

      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addRespondentProfileSurvey");
      }

      let pathParams = {

      };
      let queryParams = {

      };
      let headerParams = {

      };
      let formParams = {

      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RespondentProfileSurvey;

      return this.apiClient.callApi(
        '/suvery-info', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteRespondentProfileSurvey operation.
     * @callback moduleapi/RespondentProfileSurveyApi~deleteRespondentProfileSurveyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes a single RespondentProfileSurvey based on the ID supplied
     * deletes a single RespondentProfileSurvey based on the ID supplied
     * @param {String} id ID of RespondentProfileSurvey to delete
     * @param {module:api/RespondentProfileSurveyApi~deleteRespondentProfileSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteRespondentProfileSurvey(id, callback) {

      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteRespondentProfileSurvey");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {

      };
      let headerParams = {

      };
      let formParams = {

      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/suvery-info/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the findRespondentProfileSurvey operation.
     * @callback moduleapi/RespondentProfileSurveyApi~findRespondentProfileSurveyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RespondentProfileSurvey>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all RespondentProfileSurvey from the system that the user has access to
     * Returns all RespondentProfileSurvey from the system that the user has access to
     * @param {Number} page Page number
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isCompleted Filter by completed flag
     * @param {module:api/RespondentProfileSurveyApi~findRespondentProfileSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    findRespondentProfileSurvey(page, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling findRespondentProfileSurvey");
      }

      let pathParams = {

      };
      let queryParams = {
        'page': page,'isCompleted': opts['isCompleted']
      };
      let headerParams = {

      };
      let formParams = {

      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [RespondentProfileSurvey];

      return this.apiClient.callApi(
        '/suvery-info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the findRespondentProfileSurveyById operation.
     * @callback moduleapi/RespondentProfileSurveyApi~findRespondentProfileSurveyByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RespondentProfileSurvey{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a RespondentProfileSurvey based on a single ID
     * Returns a RespondentProfileSurvey based on a single ID
     * @param {String} id ID of RespondentProfileSurvey to fetch
     * @param {module:api/RespondentProfileSurveyApi~findRespondentProfileSurveyByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    findRespondentProfileSurveyById(id, callback) {

      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findRespondentProfileSurveyById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {

      };
      let headerParams = {

      };
      let formParams = {

      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RespondentProfileSurvey;

      return this.apiClient.callApi(
        '/suvery-info/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateRespondentProfileSurvey operation.
     * @callback moduleapi/RespondentProfileSurveyApi~updateRespondentProfileSurveyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RespondentProfileSurvey{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update RespondentProfileSurvey in the store based on a single ID
     * Update RespondentProfileSurvey in the store based on a single ID
     * @param {module:model/NewRespondentProfileSurvey} body RespondentProfileSurvey to add to the store
     * @param {String} id ID of RespondentProfileSurvey to update
     * @param {module:api/RespondentProfileSurveyApi~updateRespondentProfileSurveyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateRespondentProfileSurvey(body, id, callback) {

      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateRespondentProfileSurvey");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateRespondentProfileSurvey");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {

      };
      let headerParams = {

      };
      let formParams = {

      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = RespondentProfileSurvey;

      return this.apiClient.callApi(
        '/suvery-info/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
