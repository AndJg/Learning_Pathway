import React, { Component } from 'react';
import PathList from '../Path/PathList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <PathList />
                </div>
            </div>
        );
    }
}
