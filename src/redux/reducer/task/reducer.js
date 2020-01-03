import { CHOOSE_TASK } from './actionTypes';

let initialSate = null;

export default function(state = initialSate, action) {
    switch (action.type) {
        case CHOOSE_TASK:
            return action.payload.id;
        default:
            return state;
    }
}