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
      login:false,
      register:true
    }

    this.navabar = this.navabar.bind(this);

  }

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

        {!user && login  && <Login />}
        {!user && register  && <Register />}


      </div>
    );
  }
}

export default App;
