import React, { Component } from 'react';
import swal from 'sweetalert';

class Login extends Component {

    constructor(props) {
        super()

        this.state = {

            email: '',
            password: ''

        }
        this.handleChange = this.handleChange.bind(this);



        this.userlogin = this.userlogin.bind(this);

    }


    
    userlogin() {

        const { email, password } = this.state;

        // Retrieve the user from storage

        var user = localStorage.getItem('user');
        const userObj =  JSON.parse(user)
        console.log(userObj.email)
        
        if(userObj.email == email && userObj.password ==password){

            swal("Congats!", "Succesfully Logged In!", "success");

            {this.props.dashboardPage()}

        }

        else{

            swal("Oops!", "Wrong Email Or Password!", "error");

        }

    }



    handleChange(evt) {


        this.setState({ [evt.target.name]: evt.target.value });


    }









    render() {
        return (
            <div className="login">

                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body">
                            <h3 className="text-center">Account Login</h3>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" className="form-control" required onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" className="form-control" required onChange={this.handleChange}></input>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={this.userlogin}>Submit</button>
                            <hr></hr>
                            <button className="btn btn-info" onClick={this.props.registerPage}>Create An Account</button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Login;
