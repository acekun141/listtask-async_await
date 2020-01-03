import { INIT_TASK, ADD_TASK, EDIT_TASK, DEL_TASK } from './actionTypes';
import uuid from 'react-uuid';
import axois from 'axios';

export const delTask__server = async (id, url, dispatch) => {
    await axois.delete(url + id).then(() => {
        dispatch(delTask(id))
    }).catch((err) => {
        alert(err);
    })
} 

export const editTask__server = async (id, url, task, dispatch) => {
    await axois.put(url+id, {
        title: task.title,
        contetn: task.content,
        status: task.status,
    }).then(() => {
        dispatch(editTask(id, {
            title: task.title,
            content: task.content,
            status: task.status,
            id : id
        }))
    }).catch((err) => {
        alert(err);
    })
}

export const addTask__server = async (url, task, dispatch) => {
    await axois.post(url, task).then(() => {
        dispatch(addTask(task))
    }).catch((err) => {
        alert(err);
    })
}

export const initTask = tasks => ({
    type: INIT_TASK,
    payload: {
        tasks
    }
})

export const addTask = task => ({
    type: ADD_TASK,
    payload: {
        title: task.title,
        content: task.content,
        id: task.id
    }
});

export const editTask = (id, task) => ({
    type: EDIT_TASK,
    payload: {
        id: id,
        title: task.title,
        content: task.content,
        status: task.status
    }
});

export const delTask = id => ({
    type: DEL_TASK,
    payload: {
        id
    }
});