import React, { Component } from 'react';
import swal from 'sweetalert';


class QuizMain extends Component {

    constructor(props) {
        super()

        this.state = {

            

        }

        this.startQuiz = this.startQuiz.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }



    handleChange(evt) {

        this.setState({ key: evt.target.value });

    }

    startQuiz() {

        const { key } = this.state
        if (key == 123) {
            swal("Whooo!", "Quiz Started!", "success");
        }
        else {

            swal("Oops!", "Wrong Proctoring Key!", "error");

        }

    }


    render() {
        const { startedquiz } = this.props

        return (
            <div>

                <h1>{startedquiz}</h1>
                <hr></hr>

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
        );
    }
}

export default QuizMain;
