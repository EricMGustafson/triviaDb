import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"

class QuestionsServices{
  constructor(){
    console.log('hello from q services')
  }
  
  async getQuestions() {
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy')
    ProxyState.questions = response.data.results.map(r => new Question(r))
    console.log(response);
  }
  guess(choice, correctAnswer, questionId) {
    if (choice == correctAnswer) {
      document.getElementById(questionId).innerHTML = `
      <div class="bg-success text-center q-card d-flex justify-content-center align-items-center">
        <h1>Correct!</h1>
      </div>`
    } else {
      document.getElementById(questionId).innerHTML = `
      <div class="bg-danger text-center text-light q-card d-flex justify-content-center align-items-center flex-column">
        <h1>Incorrect</h1>
        <span>The correct answer was ${correctAnswer}.</span>
      </div>`
    }
  }
}

export const questionsServices = new QuestionsServices()