
import { configureStore } from '@reduxjs/toolkit';
import mailSlice from '../redux/mailSlice'; // Example slice
import userSlice from '../redux/userSlice';

const store = configureStore({
  reducer: {
    mail:mailSlice, // Add slices here
    user:userSlice,
  },
});

export default store;