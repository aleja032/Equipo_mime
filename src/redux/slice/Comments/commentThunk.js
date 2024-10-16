import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk('comment/fetchComments', async (postId) => {
    
    const response = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return response.json();
});