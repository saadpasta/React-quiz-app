import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="login">

                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body">
                            <h3 className="text-center">Register</h3>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Confirm Password</label>
                                <input type="password" name="password2" className="form-control" required></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                            <hr></hr>
                                <button className="btn btn-info">Login</button>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Register;
