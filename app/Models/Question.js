import { generateId } from "../Utils/generateId.js"

export class Question {
  constructor(data){
    this.category = data.category
    this.correctAnswer = data.correct_answer
    this.difficulty = data.difficulty
    this.id = data.id || generateId()
    this.question = data.question
    this.type = data.type
    this.wrongAnswers = data.incorrect_answers
  }

  get booleanTemplate() {
    return `
    <div class="col-6 pt-3 q-card my-2" id="${this.id}">
      <div>
        <h4>${this.question}</h4>
      </div>
      <div class="d-flex justify-content-around m-3">
        <div>
          <button type="button" class="btn btn-success" onclick="app.questionController.guess('True', '${this.correctAnswer}', '${this.id}')">True</button>
        </div>
        <div>
          <button type="button" class="btn btn-danger" onclick="app.questionController.guess('False', '${this.correctAnswer}', '${this.id}')">False</button>
        </div>
      </div>
    </div>
    `
  }

  get multipleTemplate() {
    let allAnswers = [] 
    allAnswers.push(this.correctAnswer, this.wrongAnswers[0], this.wrongAnswers[1], this.wrongAnswers[2])
    allAnswers.sort()

    return `
    <div class="col-6 pt-3 q-card my-2" id="${this.id}">
      <div>
        <h4>${this.question}</h4>
      </div>
      <div class="m-3">
        <div class="m-3">
          <button type="button" class="btn btn-success" onclick="app.questionController.guess('${allAnswers[0]}', '${this.correctAnswer}', '${this.id}')">A</button>
          <label for="">${allAnswers[0]}</label>
        </div>
        <div class="m-3">
          <button type="button" class="btn btn-danger" onclick="app.questionController.guess('${allAnswers[1]}', '${this.correctAnswer}', '${this.id}')">B</button>
          <label for="">${allAnswers[1]}</label>
        </div>
        <div class="m-3">
          <button type="button" class="btn btn-primary" onclick="app.questionController.guess('${allAnswers[2]}', '${this.correctAnswer}', '${this.id}')">C</button>
          <label for="">${allAnswers[2]}</label>
        </div>
        <div class="m-3">
          <button type="button" class="btn btn-warning" onclick="app.questionController.guess('${allAnswers[3]}', '${this.correctAnswer}', '${this.id}')">D</button>
          <label for="">${allAnswers[3]}</label>
        </div>
      </div>
    </div>
    `
  }
}