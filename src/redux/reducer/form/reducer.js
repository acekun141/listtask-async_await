import { EDIT_FORM } from './actionTypes';

let initialState = {
    title: '',
    content: '',
    id: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case EDIT_FORM:
            return action.payload;
        default:
            return state;
    }
}