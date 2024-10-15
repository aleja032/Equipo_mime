import { setPosts, setLoading } from './postSlice';

export const fetchPosts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    dispatch(setPosts(data.slice(0, 15)));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
  dispatch(setLoading(false));
};
