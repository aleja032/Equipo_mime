import { loadLocalStorage } from "../../localStorage/localStorage";

export const initialState = {
    postId: '',
    condition: 'no init',
    commentsLocalStorage: loadLocalStorage('comments'),
    comments: [], 
};