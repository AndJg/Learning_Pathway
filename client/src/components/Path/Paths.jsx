import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PathItem from './PathItem';
import Spinner from '../layout/Spinner';
import { getAllPaths } from '../../actions/pathAction';

const Paths = ({ getAllPaths, path: { paths, loading } }) => {
    useEffect(() => {
        getAllPaths();
    }, []);
    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <div className="paths">
                        {paths.length > 0 ? (
                            paths.data.map(path => <PathItem key={path._id} path={path} />)
                        ) : (
                            <h4> no paths found... </h4>
                        )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

Paths.propTypes = {
    getAllPaths: PropTypes.func.isRequired,
    path: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    path: state.path,
});

export default connect(mapStateToProps, { getAllPaths })(Paths);
