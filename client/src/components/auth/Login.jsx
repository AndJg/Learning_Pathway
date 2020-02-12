import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <button className="btn">Sign In</button>
                </form>
            </div>
        );
    }
}

export default Login;
