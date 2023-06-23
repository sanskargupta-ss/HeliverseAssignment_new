import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import groupReducer from './groupSlice'

const store = configureStore({
  reducer: {
    users: userReducer,
    groups: groupReducer,
  },
});

export default store;
