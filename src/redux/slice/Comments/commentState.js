import { loadLocalStorage } from "../../../localStorage/localStorage";

export const initialState = {
    lastPostId: null,
    condition: 'no init',
    commentsLocalStorage: loadLocalStorage('comments'),
    comments: [], 
};