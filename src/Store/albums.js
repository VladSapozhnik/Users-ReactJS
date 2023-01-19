import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const fetchUserAlbums = createAsyncThunk(
  'albums/fetchUserAlbums',
  async function(id) {
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
          
          if (!response.ok) {
              throw new Error('Server Error!');
          }
          const data = await response.json();
          console.log(albumsArray)
          return data;
      } catch (error) {
          console.log('Error')
      }
  }
);


export const Posts = createSlice({
  name: 'albums',
  initialState: {
    albumsArray: [],
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
    [fetchUserAlbums.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUserAlbums.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.albumsArray = action.payload;
    },
  }
});

// export const { usersHandler } = Posts.actions;

export const albumsArray = state => state.albums.albumsArray;

export default Posts.reducer;