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
 * The Question model module.
 * @module model/Question
 * @version 1.0.0
 */
export default class Question {
  /**
   * Constructs a new <code>Question</code>.
   * @alias module:model/Question
   * @class
   * @param question {String}
   * @param questionType {String}
   */
  constructor(question, questionType) {
    this.question = question;
    this.questionType = questionType;
  }

  /**
   * Constructs a <code>Question</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Question} obj Optional instance to populate.
   * @return {module:model/Question} The populated <code>Question</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Question();
      if (data.hasOwnProperty('question'))
        obj.question = RespondentProfileSurveyApiClient.convertToType(data['question'], 'String');
      if (data.hasOwnProperty('questionType'))
        obj.questionType = RespondentProfileSurveyApiClient.convertToType(data['questionType'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = RespondentProfileSurveyApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('possibleAnswers'))
        obj.possibleAnswers = RespondentProfileSurveyApiClient.convertToType(data['possibleAnswers'], ['String']);
      if (data.hasOwnProperty('answers'))
        obj.answers = RespondentProfileSurveyApiClient.convertToType(data['answers'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} question
 */
Question.prototype.question = undefined;

/**
 * @member {String} questionType
 */
Question.prototype.questionType = undefined;

/**
 * @member {String} category
 */
Question.prototype.category = undefined;

/**
 * @member {Array.<String>} possibleAnswers
 */
Question.prototype.possibleAnswers = undefined;

/**
 * @member {Array.<String>} answers
 */
Question.prototype.answers = undefined;

