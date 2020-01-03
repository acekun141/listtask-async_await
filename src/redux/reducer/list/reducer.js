import { ADD_TASK, EDIT_TASK, DEL_TASK, INIT_TASK } from './actionTypes';

let initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case INIT_TASK:
            return action.payload.tasks
        case ADD_TASK:
            return [...state, {
                title: action.payload.title,
                content: action.payload.content,
                status: false,
                id: action.payload.id
            }]
        case EDIT_TASK:
            return state.map(task => {
                if (task.id == action.payload.id) {
                    return Object.assign({}, task, {
                        title: action.payload.title,
                        content: action.payload.content,
                        status: action.payload.status
                    });
                } else {
                    return task;
                }
            })
        case DEL_TASK:
            return state.filter(task => task.id != action.payload.id);
        default:
            return state;
    }
}