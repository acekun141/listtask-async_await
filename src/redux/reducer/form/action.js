import { EDIT_FORM } from './actionTypes';

export const editForm = form => ({
    type: EDIT_FORM,
    payload: {
        title: form.title,
        content: form.content,
        id: form.id
    }
})