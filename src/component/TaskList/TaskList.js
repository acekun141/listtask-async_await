import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { editTask } from '../../redux/reducer/list/action';
import { chooseTask } from '../../redux/reducer/task/action';
import { initTask } from '../../redux/reducer/list/action';
import { API_URL } from '../../utils/API';
import { isFetch } from '../../redux/reducer/fetch/action';
import axois from 'axios';

const TaskList = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);
    const search = useSelector(state => state.search);
    const url = API_URL + "tasks/";

    async function getTask() {
        let data = await axois.get(url);
        dispatch(initTask(data.data));
    }

    useEffect(() => {
        getTask();
    }, []);

    let get_list = list.filter(task => task.title.includes(search));

    let statusClick = async value => {
        let task = list.find(task => task.id == value);
        let new_task = {
            title: task.title,
            content: task.content,
            status: !task.status
        }
        await axois.put(url+ value, new_task)
        .then(() => {
            dispatch(editTask(value, new_task))
        }).catch((err) => {
            alert("err");
        })
    }

    let viewClick = value => {
        dispatch(chooseTask(value));
        document.getElementById('task').style.display = "block";
    }

    return (
        <div className="section-tasklist">
            <div className="module-content">
                {get_list.map(task => (
                    <div className="item" key={task.id}>
                        <button className={"status " + task.status}
                                onClick={() => statusClick(task.id)} 
                        >{'' + task.status}</button>
                        <p className="title">{task.title}</p>
                        <button className="view"
                                onClick={() => viewClick(task.id)}
                        >View</button>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default TaskList;