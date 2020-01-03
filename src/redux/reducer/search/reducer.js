import { EDIT_SEARCH } from './actionTypes';

let initialState = '';

export default function(state = initialState, action) {
    switch (action.type) {
        case EDIT_SEARCH:
            return action.payload.search;
        default:
            return state;
    }
}