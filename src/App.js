import React, { Component } from 'react';
import './App.css';
import logo from './logo.png'


class App extends Component {

  constructor(props) {
    super()

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

    return (
      <div className="App">

      {/* Navbar */}
      <this.navabar/>
      {/* Navbar End */}

        <br></br>



      </div>
    );
  }
}

export default App;
