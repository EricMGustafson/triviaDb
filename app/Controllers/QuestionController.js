import { ProxyState } from "../AppState.js";
import { questionsServices } from "../Services/QuestionsServices.js";

function _drawQuestions() {
  let questionTemplate = ''
  let booleanQuestions = ProxyState.questions.filter(q => q.type == 'boolean')
  let multipleQuestions = ProxyState.questions.filter(q => q.type == 'multiple')
  booleanQuestions.forEach(q => questionTemplate += q.booleanTemplate)
  multipleQuestions.forEach(q => questionTemplate += q.multipleTemplate)
  document.getElementById('questions').innerHTML = questionTemplate
}

export class QuestionController{
  constructor() {
    ProxyState.on('questions', _drawQuestions)
    this.getQuestions()
  }

  getQuestions() {
    questionsServices.getQuestions()
  }

  guess(choice, correctAnswer, questionId){
    questionsServices.guess(choice, correctAnswer, questionId)
  }

}