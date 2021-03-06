import React, { Component } from 'react';
import swal from 'sweetalert';

class Register extends Component {

    constructor(props) {

        super()
        this.state = {

            email: '',
            password: '',
            password2: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this)

    }



    handleChange(evt) {


        this.setState({ [evt.target.name]: evt.target.value });


    }


    register() {

        const { email, password, password2 } = this.state;



        if (password != password2) {

            swal("Oops!", "Password Donot Match!", "error");

        }

        else {
            var user = { 'email': email, 'password': password};

            // Put the object into storage
            localStorage.setItem('user', JSON.stringify(user));

            swal("Congats!", "Your Account Has Been Created!", "success");

            {this.props.loginPage()}

          



        }

    }





    render() {


        return (
            <div className="login">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body">
                            <h3 className="text-center">Register</h3>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" className="form-control" required onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" className="form-control" required onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Confirm Password</label>
                                <input type="password" name="password2" className="form-control" required onChange={this.handleChange}></input>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.register}>Register</button>
                            <hr></hr>
                            <button className="btn btn-info" onClick={this.props.loginPage}>Login</button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Register;
