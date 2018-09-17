import React, { Component } from 'react'

export default class Quizinfo extends Component {


  constructor(props) {
    super()



  }

  render() {
    const { quiz } = this.props

    return (
      <div>
        <h1>Quiz Info</h1>

        <div>

          <div className="row">
            <div className="col-md-6 mx-auto">
            <div className="card">
              <div className=" card-header">
                <h1 className="text-center">{quiz.name}</h1>
              </div>
              <div className="card-body">
              <h3>Questions: {quiz.questions}</h3>
              <h3>Time: {quiz.time}Min</h3>
              </div>
              <div className="card-footer">
              <button className="btn btn-md  btn-primary">Start Quiz</button>
              </div>
            </div>
            </div>
          </div>


        </div>


      </div>
    )
  }
}
