import { EDIT_SEARCH } from "./actionTypes";

export const editSearch = search => ({
    type: EDIT_SEARCH,
    payload: {
        search
    }
})