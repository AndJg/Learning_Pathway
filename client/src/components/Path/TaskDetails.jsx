import React from 'react';

const TaskDetails = props => {
    return (
        <div className="task-container">
            <div className="task-container-left">
                <h1>Task Name</h1> <input type="checkbox" />
                <div className="time-box">
                    <p>Estimated Time</p>
                    <p>Choosen Interval</p>
                </div>
                <div className="goals-container">
                    <p>Main goals</p>
                </div>
            </div>
            <div className="task-container-right">
                <div className="materials">
                    {' '}
                    <h2>Materials</h2> <textarea name="materials" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="notes">
                    {' '}
                    <h2>Notes</h2> <textarea name="notes" id="" cols="30" rows="10"></textarea>{' '}
                </div>
            </div>

            <button className="save">Save</button>
        </div>
    );
};

export default TaskDetails;
