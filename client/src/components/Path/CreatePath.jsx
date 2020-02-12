import React, { Component } from 'react';

class CreatePath extends Component {
    state = {
        name: '',
        description: '',
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
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" cols="30" rows="10" onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn">Create </button>
                </form>
            </div>
        );
    }
}

export default CreatePath;
