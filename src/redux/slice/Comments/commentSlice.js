import { createSlice } from '@reduxjs/toolkit';
import { initialState } from "./commentState";
import { fetchComments } from "./commentThunk";
import { saveLocalStorage } from "../../../localStorage/localStorage";

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        setComment: (state, action) => {
            // state.comments.unshift(action.payload);
            state.commentsLocalStorage.unshift(action.payload);
            saveLocalStorage('comments', state.commentsLocalStorage);
            console.log(action.payload);
        },
        setLastPostId: (state, action) => {
            state.lastPostId = action.payload;
            // console.log(state.lastPostId);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.condition = 'loading';
        });
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.condition = 'success';
            state.comments = action.payload;
        });
        builder.addCase(fetchComments.rejected, (state) => {
            state.condition = 'error'
        });
    },
});
export const { setComment, setLastPostId } = commentSlice.actions;
export default commentSlice.reducer;

