import React, { Component } from 'react';
import swal from 'sweetalert';


class QuizMain extends Component {

    constructor(props) {
        super()

        this.state = {




        }

        this.startQuiz = this.startQuiz.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.proctoringKey=this.proctoringKey.bind(this)
        this.quizQuestions=this.quizQuestions.bind(this)
    }



    handleChange(evt) {

        this.setState({ key: evt.target.value });

    }

    startQuiz() {

        const { key } = this.state
        if (key == 123) {
            swal("Whooo!", "Quiz Started!", "success");
            this.setState({ start: true });

        }
        else {

            swal("Oops!", "Wrong Proctoring Key!", "error");

        }

    }

    proctoringKey() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className=" card-header">
                                <h3 className="text-center">Enter Proctoring Key</h3>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label for="key">Proctoring Key</label>
                                    <input type="text" name="key" className="form-control" required onChange={this.handleChange}>
                                    </input>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-md  btn-primary" onClick={this.startQuiz}>Start Quiz</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    quizQuestions(){

        return(
            <h1>Hello</h1>
        )

    }


    render() {
        const { startedquiz } = this.props
        const { start } = this.state
        return (
            <div>

                <h1>{startedquiz}</h1>
                <hr></hr>

                {!start && <this.proctoringKey/>}
                {start && <this.quizQuestions/>}

               
 


            </div>
        );
    }
}

export default QuizMain;
