import { loadLocalStorage } from "../../../localStorage/localStorage";

export const initialState = {
    condition: 'no init',
    commentsLocalStorage: loadLocalStorage('comments'),
};
