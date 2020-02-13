import React, { Component } from 'react';
import { connect } from 'react-redux';
import PathList from '../Path/PathList';

class Dashboard extends Component {
    render() {
        const { paths } = this.props;

        return (
            <div className="dashboard container">
                <div className="row">
                    <PathList paths={paths} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        paths: state.paths.paths,
    };
};

export default connect(mapStateToProps)(Dashboard);
