import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveLocalStorage, loadLocalStorage } from '../../../localStorage/localStorage';

export const fetchComments = createAsyncThunk('comment/fetchComments', async (postId) => {
    
    const response = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    return response.json();
});