import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { delTask, delTask__server } from '../../redux/reducer/list/action';
import { editForm } from '../../redux/reducer/form/action';
import { isFetch } from '../../redux/reducer/fetch/action';
import { API_URL } from '../../utils/API';
import axois from 'axios';

const Task = (props) => {
    const state_task = useSelector(state => state.task);
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    let [chooseTask, setTask] = useState(useSelector(state => state.task));
    const url = API_URL + "tasks/";

    useEffect(() => {
        setTask(state_task);
    }, [state_task]);
    
    let editClick = item => {
        dispatch(editForm(item));
        document.getElementById('form').style.display = "block";
        closeTask();
    }

    let delClick = (id) => {
        delTask__server(id, url, dispatch);
        closeTask();
    }

    let closeTask = () => {
        document.getElementById('task').style.display = "none";
    }

    let item = list.find(task => task.id == chooseTask)

    return (
        <div className="section-task" id="task">
            <button type="button" className="close" onClick={() => closeTask()}>X</button>
            {!!item ? (
                <div className="module">
                    <div className="module-content">
                        <p className="title">{item.title}</p>
                        <p className="content">{item.content}</p>
                    </div>
                    <div className="module-button">
                        <button onClick={() => editClick(item)}>Edit</button>
                        <button onClick={() => delClick(item.id)}>Delete</button>
                    </div>
                </div>
            ):(
                <p>Show Task</p>
            )}
        </div>
    )
}

export default Task;