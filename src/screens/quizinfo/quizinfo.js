import React, { Component } from 'react'

export default class Quizinfo extends Component {


  constructor(props) {
    super()



  }

  render() {
    const { quiz , startquiz} = this.props

    const list = quiz.quizzes
    console.log(list)
    
    return (
      <div>
        <h1>Quiz Info</h1>

        <div>
          {list.map((quiz, index) => {
                            return <div className="row">
            <div className="col-md-6 mx-auto">
            <div className="card">
              <div className=" card-header">
                <h1 className="text-center">{quiz.name}</h1>
              </div>
              <div className="card-body">
              <h3>Questions: {quiz.Totalquestions}</h3>
              <h3>Time: {quiz.time}Min</h3>
              </div>
              <div className="card-footer">
              <button className="btn btn-md  btn-primary" onClick={() => startquiz(quiz)}>Start Quiz</button>
              </div>
            </div>
            </div>
          </div>

                        }
                        )}

        </div>


      </div>
    )
  }
}
