import React, { Component } from 'react';
import './App.css';
import Login from './screens/login/login'
import Register from './screens/register/register'
import Dashborad from './screens/dashborad/dashboard'
import Quizinfo from './screens/quizinfo/quizinfo'
import QuizMain from './screens/quizMain/quizmain'
import logo from './logo.png'


class App extends Component {

  constructor(props) {
    super()

    this.state = {
      user: true,
      login: false,
      register: false,

      quizzes: [
        /*  Js Quiz */
        {
          name: 'AngularJs',
          quizzes: [
            /* Js Quiz 1 */
            {
              name: "AngularJs Quiz 1 ", Totalquestions: 50, time: 30,

              questions: [{
                "question": "How to write an IF statement for executing some code if i is NOT equal to 5?",
                "option1": "if (i <> 5) ",
                "option2": "if i =! 5 then ",
                "option3": "none of these ",
                "option4": "if (i != 5) ",
                "answer": "2"
              }, {
                "question": "Where is the correct place to insert a JavaScript?",
                "option1": "Both the head section and the body section are correct ",
                "option2": " The head section",
                "option3": " The body section ",
                "option4": " none of these ",
                "answer": "1"
              }, {
                "question": "The external JavaScript file must contain the <script> tag.",
                "option1": "True ",
                "option2": "False",
                "option3": " Depends on the type of include ",
                "option4": " none of these ",
                "answer": "2"
              }, {
                "question": "How do you create a function in JavaScript?",
                "option1": " function = myFunction() ",
                "option2": " function:myFunction() ",
                "option3": "function myFunction() ",
                "option4": "function::myFunction() ",
                "answer": "3"
              }, {
                "question": "How to write an IF statement in JavaScript?",
                "option1": "if (i == 5) ",
                "option2": " if i = 5 then ",
                "option3": " if i == 5 then ",
                "option4": " if i = 5 ",
                "answer": "1"
              }]

            },

            /* Js Quiz 1 End */


            /* JS quiz 2 */

            { name: "AngularJs Quiz 2 ", questions: 40, time: 60 }
          ]

        },

        /*  Js Quiz End */
        { name: 'React', questions: 30, time: 40 },
        { name: 'PWA', questions: 20, time: 10 },
        { name: 'HTML', questions: 50, time: 40 }
      ],

      quiz: '',
      startedquiz: ''
    }

    this.navabar = this.navabar.bind(this);
    this.registerPage = this.registerPage.bind(this);
    this.loginPage = this.loginPage.bind(this);
    this.dashboradPage = this.dashboradPage.bind(this)
    this.enterQuiz = this.enterQuiz.bind(this)
    this.startQuiz = this.startQuiz.bind(this)



  }

  /* Register Page */

  registerPage() {
    this.setState({

      login: false,
      register: true

    })

  }


  loginPage() {
    this.setState({

      login: true,
      register: false

    })

  }

  dashboradPage() {
    this.setState({

      login: false,
      register: false,
      user: true

    })

  }

  enterQuiz(index) {

    const { quizzes } = this.state;

    this.setState({ quiz: quizzes[index] });

  }

  startQuiz(name) {


    this.setState({ startedquiz: name })

  }



  /* Navbar Function */
  navabar() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="">
          </img>
          Quiz App
            </a>
      </nav>

    )

  }


  render() {
    const { user, login, register, quizzes, quiz, startedquiz } = this.state;

    return (
      <div className="App">

        {/* Navbar */}
        <this.navabar />
        {/* Navbar End */}

        <br></br>

        {!user && login && <Login registerPage={this.registerPage} dashboardPage={this.dashboradPage} />}
        {!user && register && <Register loginPage={this.loginPage} />}
        {user && !register && !login && !quiz && <Dashborad onPress={this.enterQuiz} list={quizzes} />}
        {quiz && !startedquiz && <Quizinfo startquiz={this.startQuiz} quiz={quiz} />}
        {startedquiz && <QuizMain startedquiz={startedquiz} />}

      </div>
    );
  }
}

export default App;
