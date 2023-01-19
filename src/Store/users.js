import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function() {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          
          if (!response.ok) {
              throw new Error('Server Error!');
          }
          const data = await response.json();
          
          return data;
      } catch (error) {
          console.log('Error')
      }
  }
);

export const Users = createSlice({
  name: 'users',
  initialState: {
    usersArray: [],
    status: null
  },
  reducers: {
    // usersHandler: state => {
    //   axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then(function (response) {
    //       console.log(response.data);
    //       state.usersArray.push(response.data);
    //     })
    // },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUsers.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.usersArray = action.payload;
    },
  }
});

// export const { usersHandler } = Users.actions;

export const usersArray = state => state.users.usersArray;

export default Users.reducer;
