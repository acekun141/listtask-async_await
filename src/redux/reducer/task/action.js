import { CHOOSE_TASK } from './actionTypes';

export const chooseTask = id => ({
    type: CHOOSE_TASK,
    payload: {
        id
    }
}) 