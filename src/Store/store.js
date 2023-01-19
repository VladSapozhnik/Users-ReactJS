import { configureStore } from '@reduxjs/toolkit';
import users from './users';
import posts from './posts';
import albums from './albums';

export default configureStore({
  reducer: {
    users: users,
    posts: posts,
    albums: albums
  },
});
