import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const fetchUserPosts = createAsyncThunk(
  'posts/fetchUserPosts',
  async function(id) {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
          
          if (!response.ok) {
              throw new Error('Server Error!');
          }
          const data = await response.json();
          console.log(data)
          return data;
      } catch (error) {
          console.log('Error')
      }
  }
);

export const Posts = createSlice({
  name: 'posts',
  initialState: {
    postsArray: [],
    status: null
  },
  reducers: {
    // usersHandler: state => {
    //   axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(function (response) {
    //       console.log(response.data);
    //       state.usersArray.push(response.data);
    //     })
    // },
  },
  extraReducers: {
    [fetchUserPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.postsArray = action.payload;
    },
  }
});

// export const { usersHandler } = Posts.actions;

export const postsArray = state => state.posts.postsArray;

export default Posts.reducer;
