import React from 'react';
import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import Task from './Task/Task';
import Form from './Form/Form';

export default function() {
    return (
        <div className="app container">
            <Header />
            <TaskList />
            <Task />
            <Form />
        </div>
    )
}