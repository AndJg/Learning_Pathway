import React from 'react';

const TaskDetails = props => {
    const id = props.match.params.id;

    return (
        <div>
            <p>task - {id}</p>
        </div>
    );
};

export default TaskDetails;
