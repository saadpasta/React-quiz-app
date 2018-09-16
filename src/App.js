import React, { Component } from 'react';
import './App.css';
import Login from './screens/login/login'
import Register from './screens/register/register'

import logo from './logo.png'


class App extends Component {

  constructor(props) {
    super()

    this.state = {
      user: false,
      login:true,
      register:false
    }

    this.navabar = this.navabar.bind(this);
    this.registerPage = this.registerPage.bind(this);
    this.loginPage = this.loginPage.bind(this);



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
    const { user,login,register } = this.state;

    return (
      <div className="App">

      {/* Navbar */}
      <this.navabar/>
      {/* Navbar End */}

        <br></br>

        {!user && login  && <Login registerPage={this.registerPage} />}
        {!user && register  && <Register  loginPage={this.loginPage}/>}


      </div>
    );
  }
}

export default App;
