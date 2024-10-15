import { configureStore } from '@reduxjs/toolkit';
import commentSlice from "../slice/Comments/commentSlice";
import postsReducer from '../slice/Posts/postSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comment: commentSlice,
  },
});

export default store;
