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
import NewRespondentProfileSurvey from './NewRespondentProfileSurvey';
import TargetGroup from './TargetGroup';

/**
 * The RespondentProfileSurvey model module.
 * @module model/RespondentProfileSurvey
 * @version 1.0.0
 */
export default class RespondentProfileSurvey extends NewRespondentProfileSurvey {
  /**
   * Constructs a new <code>RespondentProfileSurvey</code>.
   * @alias module:model/RespondentProfileSurvey
   * @class
   * @extends module:model/NewRespondentProfileSurvey
   * @param id {}
   */
  constructor(id) {
    super();
    this.id = id;
  }

  /**
   * Constructs a <code>RespondentProfileSurvey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RespondentProfileSurvey} obj Optional instance to populate.
   * @return {module:model/RespondentProfileSurvey} The populated <code>RespondentProfileSurvey</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RespondentProfileSurvey();
      NewRespondentProfileSurvey.constructFromObject(data, obj);
      if (data.hasOwnProperty('id'))
        obj.id = RespondentProfileSurveyApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
RespondentProfileSurvey.prototype.id = undefined;

