import React, { Component } from 'react';

class CreateTask extends Component {
    state = {
        name: '',
        description: '',
        timeToLearn: 0,
        intervals: 25,
        links: '',
        notes: '',
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
                    <div className="input-field">
                        <label htmlFor="timeToLearn">Estimated learning time</label>
                        <input type="text" id="timeToLearn" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="interval">Interval</label>
                        <select id="interval" onChange={this.handleChange}>
                            <option value="25">25</option>
                            <option value="35">35</option>
                            <option value="45">45</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <label htmlFor="links">Links</label>
                        <textarea id="links" cols="30" rows="10" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="notes">Notes</label>
                        <textarea id="notes" cols="30" rows="10" onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn">Create Task</button>
                </form>
            </div>
        );
    }
}

export default CreateTask;
