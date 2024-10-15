import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk('comment/fetchComments', async (postId) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    console.log(response);
    console.log(postId);
    return response.json();
});