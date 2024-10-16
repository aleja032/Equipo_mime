import { createSlice } from '@reduxjs/toolkit';
import { initialState } from "./commentState";
import { fetchComments } from "./commentThunk";
import { saveLocalStorage } from "../../../localStorage/localStorage";

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setComment: (state, action) => {
            state.commentsLocalStorage.unshift(action.payload);
            saveLocalStorage('comments', state.commentsLocalStorage);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.condition = 'loading';
        });
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.condition = 'success';
                
            if(state.commentsLocalStorage.every(item => item.postId !== action.payload[0].postId)){
                 state.commentsLocalStorage = [...action.payload, ...state.commentsLocalStorage];
                saveLocalStorage('comments', state.commentsLocalStorage);
            }
        });
        builder.addCase(fetchComments.rejected, (state) => {
            state.condition = 'error'
        });
    },
});
export const { setComment, setLastPostId } = commentSlice.actions;
export default commentSlice.reducer;

