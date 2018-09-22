import React, { Component } from 'react';
import swal from 'sweetalert';


class QuizMain extends Component {

    constructor(props) {
        super()

        this.state = {

            currentIndex: 0,
            lastquestion: false,
            score: 0,
            correctAnswerScore:20


        }

        this.startQuiz = this.startQuiz.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.proctoringKey = this.proctoringKey.bind(this)
        this.quizQuestions = this.quizQuestions.bind(this)
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

    quizQuestions() {
        const { startedquiz } = this.props
        const questions = startedquiz.questions
        const { currentIndex, lastquestion } = this.state

        return (

            <div>

                <h1>Time Left :{startedquiz.time}</h1>

                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="question">{questions[currentIndex].question}</h4>
                        </div>
                        <label class="option"><input type="radio" name="option" value="1" /> <span id="opt1">{questions[currentIndex].option1}</span></label>
                        <label class="option"><input type="radio" name="option" value="2" /> <span id="opt2">{questions[currentIndex].option2}</span></label>
                        <label class="option"><input type="radio" name="option" value="3" /> <span id="opt3">{questions[currentIndex].option3}</span></label>
                        <label class="option"><input type="radio" name="option" value="4" /> <span id="opt4">{questions[currentIndex].option4}</span></label>
                        <div className="card-footer">
                            {!lastquestion && <button class="btn btn-primary" onClick={this.nextQuestion.bind(this)} >Next Question</button>}
                            {lastquestion && <button class="btn btn-danger" onClick={this.finishQuiz.bind(this)}>Finish</button>}
                        </div>
                    </div>

                </div>
            </div>
        )

    }
    finishQuiz() {
        const { startedquiz } = this.props
        const questions = startedquiz.questions
        const { currentIndex, lastquestion, score } = this.state
        const newIndex = currentIndex + 1

        const selectedOption = document.querySelector('input[type=radio]:checked');
        if (!selectedOption) {
            alert('Please select your answer!');
            return;
        }

        var answer = selectedOption.value;
        if (questions[currentIndex].answer == answer) {
            this.setState({
                score: this.state.score + this.state.correctAnswerScore
            })

            alert(score)
        }
        else{
            alert(score)

        }

        if (score>=60) {
            swal("Congrats!", `You Have Passed The Test > ${score}%!`, "success");
            this.setState({ start: true });

        }
        else {

            swal("Soory!", `You Have Failed >  ${score}%!`, "error");

        }

    }

    nextQuestion() {
        const { startedquiz } = this.props
        const questions = startedquiz.questions
        const { currentIndex, lastquestion, score } = this.state
        const newIndex = currentIndex + 1


        const selectedOption = document.querySelector('input[type=radio]:checked');
        if (!selectedOption) {
            alert('Please select your answer!');
            return;
        }

        if (questions.length == currentIndex + 2) {

            this.setState({
                lastquestion: true
            })
        }

        this.setState({
            currentIndex: newIndex
        })




        var answer = selectedOption.value;
        if(questions[0].answer==answer){
            this.setState({
                score: this.state.score + this.state.correctAnswerScore
            })
        }
        if (questions[currentIndex].answer == answer) {
            this.setState({
                score: this.state.score + this.state.correctAnswerScore
            })

            console.log(score)
        }


    }






    render() {
        const { startedquiz } = this.props
        const { start } = this.state
        return (
            <div>

                <h1>{startedquiz.name}</h1>

                <hr></hr>

                {!start && <this.proctoringKey />}
                {start && <this.quizQuestions />}





            </div>
        );
    }
}

export default QuizMain;
