import React, { Component } from 'react';
import './App.css';
import Login from './screens/login/login'
import Register from './screens/register/register'
import Dashborad from './screens/dashborad/dashboard'
import Quizinfo from './screens/quizinfo/quizinfo'
import logo from './logo.png'


class App extends Component {

  constructor(props) {
    super()

    this.state = {
      user: true,
      login:false,
      register:false,

      quizzes: [
        {name: 'AngularJs', questions: 50, time:30},
        {name: 'React', questions: 30 ,time:40},
        {name: 'PWA', questions: 20 ,time:10},
        {name: 'HTML', questions: 50, time:40}
      ],

      quiz:''
    }

    this.navabar = this.navabar.bind(this);
    this.registerPage = this.registerPage.bind(this);
    this.loginPage = this.loginPage.bind(this);
    this.dashboradPage=this.dashboradPage.bind(this)
    this.enterQuiz=this.enterQuiz.bind(this)



  }

/* Register Page */

registerPage(){
  this.setState({

    login:false,
    register:true

  })

}


loginPage(){
  this.setState({

    login:true,
    register:false

  })

}

dashboradPage(){
  this.setState({

    login:false,
    register:false,
    user:true

  })

}

enterQuiz(index) {

   const { quizzes  } = this.state;

   this.setState({quiz: quizzes[index]}); 

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
    const { user,login,register,quizzes,quiz } = this.state;

    return (
      <div className="App">

      {/* Navbar */}
      <this.navabar/>
      {/* Navbar End */}

        <br></br>

        {!user && login  && <Login registerPage={this.registerPage} dashboardPage={this.dashboradPage} />}
        {!user && register  && <Register  loginPage={this.loginPage}/>}
        {user && !register && !login &&!quiz && <Dashborad  onPress={this.enterQuiz} list={quizzes} />}
        {quiz && <Quizinfo quiz={quiz}/> }

      </div>
    );
  }
}

export default App;
