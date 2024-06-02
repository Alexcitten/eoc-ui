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
import RespondentProfileSurveyApiClient from '../RespondentProfileSurveyApiClient';

/**
 * The Error model module.
 * @module model/Error
 * @version 1.0.0
 */
export default class Error {
  /**
   * Constructs a new <code>Error</code>.
   * @alias module:model/Error
   * @class
   * @param message {String}
   */
  constructor(message) {
    this.message = message;
  }

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error();
      if (data.hasOwnProperty('message'))
        obj.message = RespondentProfileSurveyApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} message
 */
Error.prototype.message = undefined;

