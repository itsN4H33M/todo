// TaskList.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../Redux/taskSlice';

function TaskList() {
    const [showCompleted, setShowCompleted] = useState(false);

    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    const handleRemove = (id, completed) => {
        if (completed) {
            dispatch(removeTask(id));
        }
    };


    const filteredTasks = showCompleted ? tasks.filter(task => task.completed) : tasks;

    return (
        <>
            <div className='card shadow w-25 mt-3 rounded-0'>
                <div className="d-flex justify-content-end m-1">
                    <button
                        className={`btn ${showCompleted ? 'btn-secondary rounded-0' : 'btn-primary rounded-0'}`}
                        onClick={() => setShowCompleted(!showCompleted)}
                    >
                        {showCompleted ? 'Show All' : 'Show Completed'}
                    </button>
                </div>
                <ul className='list-group list-group-flush'>
                    {filteredTasks.map(task => (
                        <li className='list-group-item position-relative' key={task.id}>
                            <input
                                className='me-2'
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggle(task.id)}
                            />
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.title}
                            </span>
                            {task.dueDate && (    
                                <span className="ms-1 fst-italic bg-light border rounded-5 p-1" style={{fontSize:'12px'}}>{task.dueDate}</span>
                            )}
                            
                            <i
                                className="fa-solid fa-trash btn text-danger position-absolute top-25 end-0"
                                onClick={() => handleRemove(task.id, task.completed)}
                            ></i>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TaskList;
