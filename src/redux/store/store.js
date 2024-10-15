import { configureStore } from '@reduxjs/toolkit';
import commentSlice from "../../redux/slice/commentSlice";
import postsReducer from '../slice/slice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comment: commentSlice,
  },
});

export default store;
