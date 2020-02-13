import React, { Fragment } from 'react';
import Path from './Path';

const PathList = ({ paths }) => {
    return (
        <Fragment>
            {paths &&
                paths.map(path => {
                    return <Path path={path} key={path.id} />;
                })}
        </Fragment>
    );
};

export default PathList;
