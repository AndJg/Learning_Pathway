import React from 'react';
import TaskDetails from './TaskDetails';

const Path = () => {
    return (
        <div className="path-container">
            <div className="path-section">
                <h1>Path Name</h1>
                <p>Path Description</p>
                <div className="path-task">Task name</div>
            </div>

            <div className="task-section">//to do task details</div>
        </div>
    );
};

export default Path;
