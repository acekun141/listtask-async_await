import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, editTask__server, addTask__server } from '../../redux/reducer/list/action';
import { editForm } from '../../redux/reducer/form/action';
import { isFetch } from '../../redux/reducer/fetch/action';
import { API_URL } from '../../utils/API';
import axois from 'axios';
import uuid from 'react-uuid';

const Form = () => {
    const dispatch = useDispatch();
    const state_form = useSelector(state => state.form);
    const list = useSelector(state => state.list);
    let [form, setForm] = useState(useSelector(state => state.form));
    

    const url = API_URL + "tasks/";

    let default_form = {
        title: '',
        content: '',
        id: null
    }

    useEffect(() => {
        setForm(state_form);
    }, [state_form]);

    let showForm = () => {
        document.getElementById('form').style.display = "block";
    }

    let closeForm = () => {
        document.getElementById('form').style.display = "none";
        setForm(default_form);
    }

    let handleSumit = async (event) => {
        event.preventDefault();

        let title = event.target.title.value;
        let content = event.target.content.value;

        if (!!title && !!form.id) {
            let task = list.find(task => task.id == form.id);
            let new_task = Object.assign({}, task, {
                title: title,
                content: content
            })
            editTask__server(form.id, url, task, dispatch);
            dispatch(editForm(default_form));
            closeForm();
        } else if (!!title && !form.id) {
            let new_task = {
                title: title,
                content: content,
                status: false,
                id: uuid()
            }
            addTask__server(url, new_task, dispatch);
            closeForm();
        } else {
            alert("Thieu tieu de!");
        }
    }

    let onChange = event => {
        setForm(
            Object.assign({}, form, {
                [event.target.name]: event.target.value
            })
        )
    }

    return (
        <div className="section-form" >
            <button onClick={() => showForm()}>Add +</button>
            <form className="form" id='form' onSubmit={(e) => handleSumit(e)}>
                <button type="button" className="close" onClick={() => closeForm()}>X</button>
                <p className="label">Title</p>
                <input type="text"
                       name="title"
                       onChange={(e) => onChange(e)}
                       value={form.title}
                />
                <p className="label">Content</p>
                <textarea type="text"
                          name="content"
                          onChange={e => onChange(e)}
                          value={form.content}
                ></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;