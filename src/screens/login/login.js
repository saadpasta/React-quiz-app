import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login">

                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card card-body">
                            <h3 className="text-center">Account Login</h3>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" className="form-control" required></input>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" className="form-control" required></input>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
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
