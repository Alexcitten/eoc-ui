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
import RespondentProfileSurveyApiClient from '../RespondentProfileSurveyApiClient'
import Error from '../model/Error'
import QuestionStatistic from '../model/QuestionStatistic'
import QuestionStatisticFilter from '../model/QuestionStatisticFilter'

/**
 * QuestionStatistic service.
 * @module api/QuestionStatisticApi
 * @version 1.0.0
 */
export default class QuestionStatisticApi {
  /**
    * Constructs a new QuestionStatisticApi.
    * @alias module:api/QuestionStatisticApi
    * @class
    * @param {module:RespondentProfileSurveyApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:RespondentProfileSurveyApiClient#instance
    e} if unspecified.
    */
  constructor(apiClient) {
    this.apiClient = apiClient || RespondentProfileSurveyApiClient.instance
  }

  /**
   * Callback function to receive the result of the addQuestionStatistic operation.
   * @callback moduleapi/QuestionStatisticApi~addQuestionStatisticCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates / Update QuestionStatistic in the store.
   * Creates/ Update QuestionStatistic in the store.
   * @param {Array.<module:model/QuestionStatistic>} body QuestionStatistic to add / update to the store
   * @param {module:api/QuestionStatisticApi~addQuestionStatisticCallback} callback The callback function, accepting three arguments: error, data, response
   */
  addQuestionStatistic(body, callback) {
    let postBody = body
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling addQuestionStatistic")
    }

    let pathParams = {}
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['bearerAuth']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = null

    return this.apiClient.callApi(
      '/question-statistic',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    )
  }
  /**
   * Callback function to receive the result of the findQuestionStatistic operation.
   * @callback moduleapi/QuestionStatisticApi~findQuestionStatisticCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/QuestionStatistic>{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns all QuestionStatistic from the system that the user has access to
   * Returns all QuestionStatistic from the system that the user has access to
   * @param {Number} page Page number
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.isCompleted Filter by completed flag
   * @param {module:api/QuestionStatisticApi~findQuestionStatisticCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  findQuestionStatistic(page, opts, callback) {
    opts = opts || {}
    let postBody = null
    // verify the required parameter 'page' is set
    if (page === undefined || page === null) {
      throw new Error("Missing the required parameter 'page' when calling findQuestionStatistic")
    }

    let pathParams = {}
    let queryParams = {
      page: page,
      isCompleted: opts['isCompleted']
    }
    let headerParams = {}
    let formParams = {}

    let authNames = ['bearerAuth']
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = [QuestionStatistic]

    return this.apiClient.callApi(
      '/question-statistic',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    )
  }
  /**
   * Callback function to receive the result of the findQuestionStatisticByProfileSurveyStatisticIdAndQuestionStatisticFilter operation.
   * @callback moduleapi/QuestionStatisticApi~findQuestionStatisticByProfileSurveyStatisticIdAndQuestionStatisticFilterCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/QuestionStatistic>{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns profile survey question statistic from the system that the user has access to
   * Returns profile survey question statistic from the system that the user has access to
   * @param {Array.<module:model/QuestionStatisticFilter>} body QuestionStatistic filter
   * @param {String} profileSurveyStatisticId Profile Survey Statistic Name Id
   * @param {module:api/QuestionStatisticApi~findQuestionStatisticByProfileSurveyStatisticIdAndQuestionStatisticFilterCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  findQuestionStatisticByProfileSurveyStatisticIdAndQuestionStatisticFilter(body, profileSurveyStatisticId, callback) {
    let postBody = body
    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error(
        "Missing the required parameter 'body' when calling findQuestionStatisticByProfileSurveyStatisticIdAndQuestionStatisticFilter"
      )
    }
    // verify the required parameter 'profileSurveyStatisticId' is set
    if (profileSurveyStatisticId === undefined || profileSurveyStatisticId === null) {
      throw new Error(
        "Missing the required parameter 'profileSurveyStatisticId' when calling findQuestionStatisticByProfileSurveyStatisticIdAndQuestionStatisticFilter"
      )
    }

    let pathParams = {
      profileSurveyStatisticId: profileSurveyStatisticId
    }
    let queryParams = {}
    let headerParams = {}
    let formParams = {}

    let authNames = ['bearerAuth']
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = [QuestionStatistic]

    return this.apiClient.callApi(
      '/question-statistic/{profileSurveyStatisticId}',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      authNames,
      contentTypes,
      accepts,
      returnType,
      callback
    )
  }
}
