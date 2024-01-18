// Tasks.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/taskSlice';
import TaskList from './TaskList';

function Tasks() {
    const [newTask, setNewTask] = useState('');
    const [dueDate, setDueDate] = useState('');

    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (newTask.length > 0) {
            const id = Date.now();
            dispatch(addTask({ id, title: newTask, dueDate }));
            setNewTask('');
            setDueDate('');
        }
    };

    return (
        <>
            <div className='vh-100'>
                <div className='h-25 bg-primary d-flex justify-content-center align-items-end'>
                    <div className='d-flex flex-column w-25 pb-3'>
                        <h2 className='text-white'>TODO</h2>
                        <div className='d-flex flex-column'>
                            <input
                                className='form-control rounded-0'
                                type="date"
                                value={dueDate}
                                onChange={e => setDueDate(e.target.value)}
                            />
                            <div className='d-flex mt-1'>
                                <input
                                    className='form-control rounded-0'
                                    type="text"
                                    value={newTask}
                                    onChange={e => setNewTask(e.target.value)}
                                    placeholder='Type Tasks here....'
                                />
                                <button className='btn btn-white rounded-0 bg-white' onClick={handleAddTask}>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <TaskList />
                </div>
            </div>
        </>
    );
}

export default Tasks;
