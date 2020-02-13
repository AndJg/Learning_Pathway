import React from 'react';
import TaskDetails from './TaskDetails';

const Path = ({ path }) => {
    return (
        <div className="path-container">
            <div className="path-section">
                <h1>{path.name}</h1>
                <p>{path.description}</p>
                <div className="path-task">Task name</div>
            </div>

            <div className="task-section">//to do task details</div>
        </div>
    );
};

export default Path;
