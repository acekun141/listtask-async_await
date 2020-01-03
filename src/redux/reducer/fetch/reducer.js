import { ISFETCH } from './actionTypes';

const initialState = false;

export default function(state = initialState, action) {
    switch (action.type) {
        case ISFETCH:
            return !state;
        default:
            return state;
    }
}